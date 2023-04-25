import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import Announcement from "../../entities/announce.entity";
import { IAnnouncementResponse } from "../../interfaces/announcement";

const getUserAnnouncementsService = async (userId: any) => {
  const announcementRepository: Repository<Announcement> =
    AppDataSource.getRepository(Announcement);

  console.log(userId);

  const userAnnouncements = await announcementRepository.findOneBy({
    id: userId,
  });
  console.log(userAnnouncements);
  return userAnnouncements;
};

export default getUserAnnouncementsService;
