import { Request, Response } from "express";
import getAllAnnouncementService from "../../services/announcement/getAnnouncement.service";

const getAllAnnouncementController = async (req: Request, resp: Response) => {
  const allAnnouncements = await getAllAnnouncementService();

  return resp.status(200).json(allAnnouncements);
};

export default getAllAnnouncementController;
