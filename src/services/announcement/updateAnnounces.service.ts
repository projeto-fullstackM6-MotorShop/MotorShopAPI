import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import Announcement from "../../entities/announce.entity";
import {
  IAnnouncement,
  IAnnouncementResponse,
} from "../../interfaces/announcement";
import { Image } from "../../entities/image.entity";

const updateAnnouncementService = async (
  data: IAnnouncement,
  id: string
): Promise<IAnnouncementResponse> => {
  const announcementRepository: Repository<Announcement> =
    AppDataSource.getRepository(Announcement);

  const announcementExists = await announcementRepository.findOne({
    where:{ id: id},
    relations: {image: true}
  });

  const imagesRepository = AppDataSource.getRepository(Image)

  const { price, images } = data;
  if (announcementExists) {
    const percentValue = announcementExists.fipe * 0.05;
    const is_good_price = price <= announcementExists.fipe - percentValue;

    if (price && is_good_price) {
      data.is_good_price = true;
    } else {
      data.is_good_price = false;
    }
  }

  if(images){
    const newImages = images.map(image => imagesRepository.create({imageUrl:image}))
    const imagensSave = await imagesRepository.save(newImages)
    announcementExists!.image = imagensSave
  }

  const updatedAnnouncement = announcementRepository.create({
    ...announcementExists,
    ...data,
  });
  await announcementRepository.save(updatedAnnouncement);

  return updatedAnnouncement;
};

export default updateAnnouncementService;
