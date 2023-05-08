import { Request, Response } from "express";
import updateCommentService from "../../services/comment/updateComment.service";

const updateCommentController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userId: string = req.user.id;
  const commentId: string = req.params.id;

  const comment = await updateCommentService(req.body, commentId, userId);

  return res.status(200).json(comment);
};

export default updateCommentController;
