import { Request, Response } from "express";
import deleteCommentService from "../../services/comment/deleteComment.service";

const deleteCommentController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userId: string = req.user.id;
  const commentId: string = req.params.id;

  await deleteCommentService(commentId, userId);

  return res.status(204).json({});
};

export default deleteCommentController;
