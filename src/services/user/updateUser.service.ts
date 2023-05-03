import { AppDataSource } from "../../data-source";
import User from "../../entities/user.entity";
import { appError } from "../../errors";
import { IUserUpdate } from "../../interfaces/user";
import { hashSync } from "bcryptjs";
import { userResponseSchema } from "../../schemas/user.schema";

export const updateUsersService = async (
  { name, cpf, email, phone, birth_date, is_seller, password, description }: IUserUpdate,
  id: string
) => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({ id });

  if (email && user?.email != email) {
    const isExistsEmail = await userRepository.findOneBy({
      email: email,
    });

    if (isExistsEmail) {
      throw new appError("Email already registered", 409);
    }
  }

  if (cpf && user?.cpf != cpf) {
    const isExistsCpf = await userRepository.findOneBy({
      cpf: cpf,
    });

    if (isExistsCpf) {
      throw new appError("Cpf already registered", 409);
    }
  }

  await userRepository.update(user!.id, {
    name: name ? name : user!.name,
    cpf: cpf ? cpf : user!.cpf,
    email: email ? email : user!.email,
    phone: phone ? phone : user!.phone,
    birth_date: birth_date ? birth_date : user!.birth_date,
    description: description ? description : user!.description,
    is_seller: is_seller ? is_seller : user!.is_seller,
    password: password ? hashSync(password, 10) : user!.password,
  });

  const userUpdate = await userRepository.findOne({
    where: {
      id: id,
    },
    relations: {
      address: true,
    },
  });

  const validateResponse = await userResponseSchema.validate(userUpdate, {
    stripUnknown: true,
  });

  return validateResponse;
};
