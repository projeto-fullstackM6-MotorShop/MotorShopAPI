import { Request, Response } from "express";
import { IAnnouncement } from "../../interfaces/announcement";
import createAnnouncementService from "../../services/announcement/createAnnouncement.service";

const createAnnouncementController = async (req: Request, res: Response) => {
  const announcement: IAnnouncement = req.body;
  const response = createAnnouncementService(announcement);

  return res.status(201).json(response);
};

export default createAnnouncementController;
