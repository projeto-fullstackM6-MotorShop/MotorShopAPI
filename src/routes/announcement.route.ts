import { Router } from "express";
import validateSchemaMiddleware from "../middlewares/validatedSchema.middleware";
import updateAnnouncementController from "../controllers/announcement/updateAnnouncement.controller";
import getAllAnnouncementController from "../controllers/announcement/getAnnouncement.controller";
import deleteAnnoucementController from "../controllers/announcement/deleteAnnoucement.controller";
import getAnnouncementByIdController from "../controllers/announcement/getAnnouncementById.controller";
import ensureAnnouncementExistsMiddleware from "../middlewares/ensureAnnouncementExists.middleware";
import createAnnouncementController from "../controllers/announcement/createAnnouncement.controller";
import { announcementRequestSchema } from "../schemas/announce.schema";

const announcementRoutes = Router();

announcementRoutes.post(
  "",
  validateSchemaMiddleware(announcementRequestSchema),
  createAnnouncementController
);

announcementRoutes.get("", getAllAnnouncementController);

announcementRoutes.get(
  "/:id",
  ensureAnnouncementExistsMiddleware,
  getAnnouncementByIdController
);

announcementRoutes.patch(
  "/:id",
  ensureAnnouncementExistsMiddleware,
  updateAnnouncementController
);

announcementRoutes.delete(
  "/:id",
  ensureAnnouncementExistsMiddleware,
  deleteAnnoucementController
);

export default announcementRoutes;
