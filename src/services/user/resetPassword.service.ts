import { hashSync } from "bcryptjs"
import { AppDataSource } from "../../data-source"
import User from "../../entities/user.entity"
import { appError } from "../../errors"

const resetPassword = async (password: string, resetToken: any) => {
  
  const userRepo = AppDataSource.getRepository(User)

  let user = await userRepo.findOne({
    where: {
      reset_token: resetToken
    }
  })

  if (!user) {
    throw new appError("User not found", 404)
  }

  user = {
    ...user,
    reset_token: 'null',
    password: hashSync(password, 10)
  }

  await userRepo.save({ ...user })

}

export default resetPassword