import { Router } from "express";
import validateSchemaMiddleware from "../middlewares/validatedSchema.middleware";
import updateAnnouncementController from "../controllers/announcement/updateAnnouncement.controller";
import getAllAnnouncementController from "../controllers/announcement/getAnnouncement.controller";
import deleteAnnoucementController from "../controllers/announcement/deleteAnnoucement.controller";
import getAnnouncementByIdController from "../controllers/announcement/getAnnouncementById.controller";
import ensureAnnouncementExistsMiddleware from "../middlewares/ensureAnnouncementExists.middleware";
import createAnnouncementController from "../controllers/announcement/createAnnouncement.controller";
import { announcementRequestSchema } from "../schemas/announce.schema";
import validateTokenMiddleware from "../middlewares/validateToken.middleware";

const announcementRoutes = Router();

announcementRoutes.post(
  "",
  validateTokenMiddleware,
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
  validateTokenMiddleware,
  ensureAnnouncementExistsMiddleware,
  updateAnnouncementController
);

announcementRoutes.delete(
  "/:id",
  validateTokenMiddleware,
  ensureAnnouncementExistsMiddleware,
  deleteAnnoucementController
);

export default announcementRoutes;
