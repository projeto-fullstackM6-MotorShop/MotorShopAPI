import { AppDataSource } from "../../data-source";
import Announcement from "../../entities/announce.entity";
import { allAnnouncesSchema } from "../../schemas/announce.schema";

export const getAllAnnouncementService = async () => {
  const announcementRepository = AppDataSource.getRepository(Announcement);

  const announcement = announcementRepository.find();

  const allAnnounces = await allAnnouncesSchema.validate(announcement, {
    stripUnknown: true,
  });

  return allAnnounces;
};
