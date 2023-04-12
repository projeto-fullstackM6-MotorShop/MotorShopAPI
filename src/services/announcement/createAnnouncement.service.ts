import {
  IAnnouncement,
  IAnnouncementResponse,
} from "../../interfaces/announcement";
import { AppDataSource } from "../../data-source";
import { Repository } from "typeorm";
import Announcement from "../../entities/announce.entity";

const createAnnouncementService = async (
  payload: IAnnouncement
): Promise<IAnnouncementResponse> => {
  const announcementRepository: Repository<Announcement> =
    AppDataSource.getRepository(Announcement);

  const { fipe, price } = payload;

  const percentValue = fipe * 0.05;
  const is_good_price = price <= fipe - percentValue;

  if (is_good_price) {
    payload.is_good_price = true;
  }

  const newAnnouncement = announcementRepository.create(payload);
  await announcementRepository.save(newAnnouncement);

  return newAnnouncement;
};

export default createAnnouncementService;
