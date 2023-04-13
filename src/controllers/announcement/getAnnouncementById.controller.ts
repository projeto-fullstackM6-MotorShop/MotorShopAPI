import { Request, Response } from "express";
import { getByIdAnnouncementService } from "../../services/announcement/getByIdAnnouncement.service";

export const getAnnouncementByIdController = async (req: Request, resp : Response) => {
    const {id} = req.params

    const idAnnouncement = await getByIdAnnouncementService(id)

    return resp.status(200).json(idAnnouncement)
}