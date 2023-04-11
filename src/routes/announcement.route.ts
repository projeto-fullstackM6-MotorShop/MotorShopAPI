import { Router } from "express";
import validateSchemaMiddleware from "../middlewares/validatedSchema.middleware";
import announcementSchema from "../schemas/announce.schema";
import createAnnouncementController from "../controllers/announcement/createAnnouncement.controller";

const announcementRoutes = Router();

announcementRoutes.post(
  "",
  validateSchemaMiddleware(announcementSchema),
  createAnnouncementController
);

export default announcementRoutes;
