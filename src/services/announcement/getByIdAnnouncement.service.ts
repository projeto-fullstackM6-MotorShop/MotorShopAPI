import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import Announcement from "../../entities/announce.entity";
import { IAnnouncement } from "../../interfaces/announcement";

const getByIdAnnouncementService = async (
  id: string
): Promise<IAnnouncement | null> => {
  const announcementRepository: Repository<Announcement> =
    AppDataSource.getRepository(Announcement);

  const findAnnoucement = await announcementRepository.findOne({
    where: { id: id },
    relations: { image: true, user: true },
  });

  return findAnnoucement;
};

export default getByIdAnnouncementService;
