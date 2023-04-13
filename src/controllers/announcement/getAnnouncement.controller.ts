import { Request, Response } from "express";
import { getAllAnnouncementService } from "../../services/announcement/getAnnouncement.service";

export const getAllAnnouncementController = async (req: Request , resp : Response) => {

    const announcement = await getAllAnnouncementService()

    return resp.status(200).json(announcement)
}