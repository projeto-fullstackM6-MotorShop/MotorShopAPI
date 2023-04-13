import { AppDataSource } from "../../data-source";
import Announcement from "../../entities/announce.entity";
import { appError } from "../../errors";

export const getByIdAnnouncementService = async (id: string) => {
  const announcementRepository = AppDataSource.getRepository(Announcement);

  const findAnnoucement = await announcementRepository.findOneBy({
    id: id,
  });

  if (!findAnnoucement) {
    throw new appError("Announcement not found", 404);
  }

  return findAnnoucement;
};
