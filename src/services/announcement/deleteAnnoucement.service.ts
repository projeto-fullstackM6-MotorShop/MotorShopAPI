import { AppDataSource } from "../../data-source";
import Announcement from "../../entities/announce.entity";
import { Image } from "../../entities/image.entity";

const deleteAnnoucementService = async (id: string): Promise<void> => {
  const annoucementRepository = AppDataSource.getRepository(Announcement);
  const imgRepo = AppDataSource.getRepository(Image)

  const findAnnoucement = await annoucementRepository.findOne({
    where: { id: id },
    relations: { image: true },
  });

  findAnnoucement?.image.map(img => {
    imgRepo.delete({id:img.id})
  })


  await annoucementRepository.delete({ id: id });
};

export default deleteAnnoucementService;
