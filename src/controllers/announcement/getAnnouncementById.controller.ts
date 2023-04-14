import { Request, Response } from "express";
import getByIdAnnouncementService from "../../services/announcement/getByIdAnnouncement.service";

const getAnnouncementByIdController = async (req: Request, resp: Response) => {
  const announcementId: string = req.params.id;

  const announcement = await getByIdAnnouncementService(announcementId);

  return resp.status(200).json(announcement);
};

export default getAnnouncementByIdController;
