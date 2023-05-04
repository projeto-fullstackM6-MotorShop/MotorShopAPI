import { Request, Response } from "express";
import getCommentsOfAnnouncementService from "../../services/comment/getCommentsOfAnnouncement.service";

const getCommentsOfAnnouncementController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const announcementId: string = req.params.id;

  const comments = await getCommentsOfAnnouncementService(announcementId);

  return res.status(200).json(comments);
};

export default getCommentsOfAnnouncementController;
