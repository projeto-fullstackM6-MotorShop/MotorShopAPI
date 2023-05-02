import User from "../../entities/user.entity";
import Announcement from "../../entities/announce.entity";
import Comment from "../../entities/comment.entity";
import { AppDataSource } from "../../data-source";
import { Repository } from "typeorm";
import { IComment, ICommentRequest } from "../../interfaces/comment";
import { commentResponseSchema } from "../../schemas/comment.schema";

const createCommentService = async (
  userId: string,
  announcementId: string,
  data: ICommentRequest
): Promise<IComment> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);
  const announcementRepository: Repository<Announcement> =
    AppDataSource.getRepository(Announcement);
  const commentRepository: Repository<Comment> =
    AppDataSource.getRepository(Comment);

  const user = await userRepository.findOneBy({ id: userId });
  const announcement = await announcementRepository.findOneBy({
    id: announcementId,
  });

  const comment = await commentRepository.save({
    ...data,
    user: user!,
    announcement: announcement!,
  });

  const validateResponse = await commentResponseSchema.validate(comment, {
    stripUnknown: true,
  });

  return validateResponse;
};

export default createCommentService;
