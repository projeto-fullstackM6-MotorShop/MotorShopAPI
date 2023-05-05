import { AppDataSource } from "../../data-source";
import Announcement from "../../entities/announce.entity";
import Comment from "../../entities/comment.entity";
import { Image } from "../../entities/image.entity";

const deleteAnnoucementService = async (id: string): Promise<void> => {
  const annoucementRepository = AppDataSource.getRepository(Announcement);
  const imageRepository = AppDataSource.getRepository(Image);
  const commentRepository = AppDataSource.getRepository(Comment);

  const findAnnoucement = await annoucementRepository.findOne({
    where: { id: id },
    relations: { image: true, comments: true },
  });

  findAnnoucement?.image.forEach((img) => {
    imageRepository.delete({ id: img.id });
  });

  findAnnoucement?.comments.forEach((comment) => {
    commentRepository.delete({ id: comment.id });
  });

  await annoucementRepository.delete({ id: id });
};

export default deleteAnnoucementService;
