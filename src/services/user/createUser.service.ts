import { AppDataSource } from "../../data-source";
import { Repository } from "typeorm";
import User from "../../entities/user.entity";
import { IUser, IUserResponse } from "../../interfaces/user";
import { appError } from "../../errors";
import { hash } from "bcryptjs";
import { userResponseSchema } from "../../schemas/user.schema";
import Address from "../../entities/address.entity";

const createUserService = async (payload: IUser): Promise<IUserResponse> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);
  const addressRepository: Repository<Address> =
    AppDataSource.getRepository(Address);

  const isExistsEmail = await userRepository.findOneBy({
    email: payload.email,
  });

  if (isExistsEmail) {
    throw new appError("Email already registered", 409);
  }

  const isExistsCpf = await userRepository.findOneBy({
    cpf: payload.cpf,
  });

  if (isExistsCpf) {
    throw new appError("Cpf already registered", 409);
  }

  payload.password = await hash(payload.password, 10);
  const user = await userRepository.save(payload);

  await addressRepository.save({ ...payload.address, user });

  const findUser = await userRepository.findOne({
    where: {
      id: user.id,
    },
    relations: {
      address: true,
    },
  });

  const validateResponse = await userResponseSchema.validate(findUser, {
    stripUnknown: true,
  });

  return validateResponse;
};

export default createUserService;
