import { AppDataSource } from "../../data-source"
import Announcement from "../../entities/announce.entity"
import { appError } from "../../errors"
import { updateAnnouncesSchema } from "../../schemas/announce.schema"

export const updateAnnouncesService =async (data: any , idAnnounce: string) => {
    const announcesRepository = AppDataSource.getRepository(Announcement)

    const announceExists = announcesRepository.findOneBy({id: idAnnounce})

    if(!announceExists){
        throw new appError("Announce don't exists" , 404)
    }

    await announcesRepository.update({id: idAnnounce} , {
        ...data
    })

    const updatedAnnounce = await announcesRepository.findOneBy({id: idAnnounce})

    const validateContact = await updateAnnouncesSchema.validate(
        updatedAnnounce,
        {
            abortEarly:false,
            stripUnknown: true
        }
    )

    return validateContact
}