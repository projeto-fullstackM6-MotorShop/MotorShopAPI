import User from "../../entities/user.entity";
import { AppDataSource } from "../../data-source";
import { Repository } from "typeorm";
import { IUserResponseWithAnnoucements } from "../../interfaces/user";
import { userResponseWithAnnoucementsSchema } from "../../schemas/user.schema";

const getUserAnnouncementsService = async (
  userId: string
): Promise<IUserResponseWithAnnoucements> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const userWithAnnoucements = await userRepository.findOne({
    where: {
      id: userId,
    },
    relations: {
      annoucements: true,
    },
  });

  const validateResponse = await userResponseWithAnnoucementsSchema.validate(
    userWithAnnoucements,
    {
      stripUnknown: true,
    }
  );

  return validateResponse;
};

export default getUserAnnouncementsService;
