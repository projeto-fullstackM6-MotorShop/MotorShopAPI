import { randomUUID } from "crypto"
import { AppDataSource } from "../../data-source"
import User from "../../entities/user.entity"
import { appError } from "../../errors"
import { resetPasswordTemplate, sendEmail } from "../../utils/sendEmail.utils"

const sendResetEmailPassword = async (email: string, protocol: string, host: string) => {

  const userRepo = AppDataSource.getRepository(User)

  let user = await userRepo.findOne({
    where: {
      email: email
    }
  })

  if (!user) {
    throw new appError("user not found", 404)
  }

  const resetToken = randomUUID()

  user.reset_token = resetToken

  const updateUser = userRepo.create({
    ...user
  })

  await userRepo.save(updateUser)

  const emailTemplate = resetPasswordTemplate(email, user.name, protocol, host, resetToken)

  await sendEmail(emailTemplate)

}

export default sendResetEmailPassword