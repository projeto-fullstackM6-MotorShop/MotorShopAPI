import { Request, Response } from "express";
import { IAnnouncement } from "../../interfaces/announcement";
import createAnnouncementService from "../../services/announcement/createAnnouncement.service";

const createAnnouncementController = async (req: Request, res: Response) => {
  const announcement: IAnnouncement = req.body;
  const user: string = req.user.id;
  const newAnnouncement = await createAnnouncementService(announcement, user);

  return res.status(201).json(newAnnouncement);
};

export default createAnnouncementController;
