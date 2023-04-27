import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import Announcement from "../../entities/announce.entity";
import { IAnnouncementResponse } from "../../interfaces/announcement";
import User from "../../entities/user.entity";

const getUserAnnouncementsService = async (userId: any) => {
  const announcementRepo: any = AppDataSource.getRepository(User);

  const userAnnouncements = await announcementRepo.find({
    where: {
      id: userId,
    },
    relations: {
      annoucements: true
    }
  }); 

  return userAnnouncements[0].annoucements
};

export default getUserAnnouncementsService;
