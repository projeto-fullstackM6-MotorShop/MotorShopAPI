import { AppDataSource } from "../../data-source";
import { Repository } from "typeorm";
import User from "../../entities/user.entity";
import { IUser, IUserResponse } from "../../interfaces/user";
import { appError } from "../../errors";
import { hash } from "bcryptjs";
import { userResponseSchema } from "../../schemas/user.schema";

const createUserService = async (payload: IUser): Promise<IUserResponse> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

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

  const validateResponse = await userResponseSchema.validate(user, {
    stripUnknown: true,
  });

  return validateResponse;
};

export default createUserService;
