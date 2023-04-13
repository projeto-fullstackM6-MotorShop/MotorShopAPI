import { Request, Response } from "express"
import { updateAnnouncesService } from "../../services/announcement/updateAnnounces.service"

export const updateAnnounceController = async (req: Request , resp : Response) => {
    const id = req.params.id
    const data = req.body

    const updatedContact = await updateAnnouncesService(data , id)

    return resp.status(201).json(updatedContact)
}