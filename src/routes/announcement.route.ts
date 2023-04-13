import { Router } from "express";
import validateSchemaMiddleware from "../middlewares/validatedSchema.middleware";
import { announcementSchema } from "../schemas/announce.schema";
import createAnnouncementController from "../controllers/announcement/createAnnouncement.controller";
import { getAllAnnouncementController } from "../controllers/announcement/getAnnouncement.controller";
import { getAnnouncementByIdController } from "../controllers/announcement/getAnnouncementById.controller";
import { updateAnnounceController } from "../controllers/announcement/updateAnnouncement.controller";

const announcementRoutes = Router();

announcementRoutes.post(
  "",
  validateSchemaMiddleware(announcementSchema),
  createAnnouncementController
);

announcementRoutes.get("", getAllAnnouncementController)

announcementRoutes.get("/:id", getAnnouncementByIdController)

announcementRoutes.patch("/:id", updateAnnounceController)

export default announcementRoutes;
