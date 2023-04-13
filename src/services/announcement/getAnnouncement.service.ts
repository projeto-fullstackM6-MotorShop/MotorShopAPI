import { AppDataSource } from "../../data-source";
import Announcement from "../../entities/announce.entity";
import { announcesShape } from "../../schemas/announce.schema";


export const getAllAnnouncementService = async () => {
  const announcementRepository = AppDataSource.getRepository(Announcement);

  const announcement = await announcementRepository.find();

  const allAnnounces = await announcesShape.validate(announcement, {
    stripUnknown: true,
  });

  return allAnnounces;
};
