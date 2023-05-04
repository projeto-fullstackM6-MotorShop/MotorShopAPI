import Announcement from "../../entities/announce.entity";
import Comment from "../../entities/comment.entity";
import { AppDataSource } from "../../data-source";
import { Repository } from "typeorm";
import { IGetComment } from "../../interfaces/comment";
import { commentResponseSchemaArray } from "../../schemas/comment.schema";

const getCommentsOfAnnouncementService = async (
  announcementId: string
): Promise<IGetComment[]> => {
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
    relations: {
      user: true,
    },
  });

  const validateResponse = await commentResponseSchemaArray.validate(comments, {
    stripUnknown: true,
  });

  return validateResponse! as IGetComment[];
};

export default getCommentsOfAnnouncementService;
