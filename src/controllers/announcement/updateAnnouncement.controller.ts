import { Request, Response } from "express";
import updateAnnouncementService from "../../services/announcement/updateAnnounces.service";
import { IAnnouncement } from "../../interfaces/announcement";

export const updateAnnouncementController = async (
  req: Request,
  resp: Response
) => {
  const announcementId: string = req.params.id;
  const data: IAnnouncement = req.body;

  const updatedContact = await updateAnnouncementService(data, announcementId);

  return resp.status(201).json(updatedContact);
};

export default updateAnnouncementController;
