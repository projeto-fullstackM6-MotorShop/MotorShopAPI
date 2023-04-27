import {
  IAnnouncement,
  IAnnouncementResponse,
} from "../../interfaces/announcement";
import { AppDataSource } from "../../data-source";
import { Repository } from "typeorm";
import Announcement from "../../entities/announce.entity";
import { Image } from "../../entities/image.entity";

const createAnnouncementService = async (
  payload: IAnnouncement,
  user: any
): Promise<IAnnouncementResponse> => {
  const announcementRepository: Repository<Announcement> =
    AppDataSource.getRepository(Announcement);

    const imagesRepository = AppDataSource.getRepository(Image)
    
    const { fipe, price ,images} = payload;
    
    const percentValue = fipe * 0.05;
    const is_good_price = price <= fipe - percentValue;

    if (is_good_price) {
      payload.is_good_price = true;
    }

    const newAnnouncement = announcementRepository.create({
      ...payload,
      user: user,
    });

    if(images){
      const newImages = images.map(image => imagesRepository.create({imageUrl:image}))
      const imagensSave = await imagesRepository.save(newImages)
      newAnnouncement.image = imagensSave
    }

    await announcementRepository.save(newAnnouncement);

    const returnAnnouncement = await announcementRepository.findOne({
      where: {
        id: newAnnouncement.id,
      },
      relations: {
        image: true,
      },
    });

  return returnAnnouncement!;
};

export default createAnnouncementService;
