import { AppDataSource } from "../../data-source";
import Announcement from "../../entities/announce.entity";

const deleteAnnoucementService = async (id: string): Promise<void> => {
  const annoucementRepository = AppDataSource.getRepository(Announcement);

  await annoucementRepository.delete({ id: id });
};

export default deleteAnnoucementService;
