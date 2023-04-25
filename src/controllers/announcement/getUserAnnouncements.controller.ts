import { Request, Response } from "express";
import getUserAnnouncementsService from "../../services/announcement/getUserAnnouncements.service";

const getUserAnnouncementsController = async (req: Request, res: Response) => {
  const userId: string = req.user.id;
  const userAnnouncements = await getUserAnnouncementsService(userId);

  return res.json(userAnnouncements);
};

export default getUserAnnouncementsController;
