import { AppDataSource } from "../../data-source";
import Announcement from "../../entities/announce.entity";

export const deleteAnnoucementService = async (id: string): Promise<object> => {
  const annouceRepo = AppDataSource.getRepository(Announcement);

  await annouceRepo.delete({ id: id });

  return {};
};
