import { AppDataSource } from "../../data-source";
import User from "../../entities/user.entity";
import { IUserResponse } from "../../interfaces/user";
import { userResponseSchema } from "../../schemas/user.schema";

const profileUserService = async (id: string): Promise<IUserResponse> => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({ id: id });

  const validateResponse = await userResponseSchema.validate(user, {
    stripUnknown: true,
  });

  return validateResponse;
};

export default profileUserService;
