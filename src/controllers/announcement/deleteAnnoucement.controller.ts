import { Request, Response } from "express";
import { deleteAnnoucementService } from "../../services/announcement/deleteAnnoucement.service";

export const deleteAnnoucementController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  await deleteAnnoucementService(req.params.id);

  return res.status(204).json({});
};
