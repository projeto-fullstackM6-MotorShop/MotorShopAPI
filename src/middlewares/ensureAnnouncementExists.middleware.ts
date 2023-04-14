import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import Announcement from "../entities/announce.entity";
import { appError } from "../errors";

const ensureAnnouncementExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const announcementRepository = AppDataSource.getRepository(Announcement);

  const announcementExists = await announcementRepository.findOneBy({
    id: req.params.id,
  });

  if (!announcementExists) {
    throw new appError("Announcement does not exists", 404);
  }

  return next();
};

export default ensureAnnouncementExistsMiddleware;
