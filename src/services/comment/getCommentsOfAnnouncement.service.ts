import User from "../../entities/user.entity";
import Announcement from "../../entities/announce.entity";
import Comment from "../../entities/comment.entity";
import { AppDataSource } from "../../data-source";
import { Repository } from "typeorm";
import { IComment } from "../../interfaces/comment";
import { commentResponseSchemaArray } from "../../schemas/comment.schema";

const getCommentsOfAnnouncementService = async (
  announcementId: string
): Promise<IComment[]> => {
  const announcementRepository: Repository<Announcement> =
    AppDataSource.getRepository(Announcement);
  const commentRepository: Repository<Comment> =
    AppDataSource.getRepository(Comment);

  const announcement = await announcementRepository.findOneBy({
    id: announcementId,
  });

  const comments = await commentRepository.find({
    where: {
      announcement: announcement!,
    },
  });

  const validateResponse = await commentResponseSchemaArray.validate(comments, {
    stripUnknown: true,
  });

  return validateResponse!;
};

export default getCommentsOfAnnouncementService;
