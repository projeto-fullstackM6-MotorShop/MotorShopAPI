import { Request, Response } from "express";
import getUserAnnouncementsService from "../../services/announcement/getUserAnnouncements.service";

const getUserProfileAnnouncementsController = async (req: Request, res: Response) => {
  const userId: string = req.params.id;
  const userAnnouncements = await getUserAnnouncementsService(userId);

  return res.json(userAnnouncements);
};

export default getUserProfileAnnouncementsController;
