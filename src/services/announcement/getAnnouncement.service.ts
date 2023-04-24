import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import Announcement from "../../entities/announce.entity";
import { IAnnouncementResponse } from "../../interfaces/announcement";
import { allAnnouncementsSchema } from "../../schemas/announce.schema";

const getAllAnnouncementService = async (): Promise<
  IAnnouncementResponse[] | undefined
> => {
  const announcementRepository: Repository<Announcement> =
    AppDataSource.getRepository(Announcement);

  const allAnnouncements = await announcementRepository.find();

  const announcementsList = await allAnnouncementsSchema.validate(
    allAnnouncements,
    {
      stripUnknown: true,
    }
  );

  return allAnnouncements;
};

export default getAllAnnouncementService;
