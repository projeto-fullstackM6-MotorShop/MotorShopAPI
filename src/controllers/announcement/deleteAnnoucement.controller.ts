import { Request, Response } from "express";
import deleteAnnoucementService from "../../services/announcement/deleteAnnoucement.service";

const deleteAnnoucementController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const announcementId: string = req.params.id;
  await deleteAnnoucementService(announcementId);

  return res.status(204).json({});
};

export default deleteAnnoucementController;
