import { Request, Response } from "express";
import createCommentService from "../../services/comment/createComment.service";

const createCommentController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userId: string = req.user.id;
  const announcementId: string = req.params.id;

  const comment = await createCommentService(userId, announcementId, req.body);

  return res.status(201).json(comment);
};

export default createCommentController;
