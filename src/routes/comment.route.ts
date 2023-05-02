import { Router } from "express";
import createCommentController from "../controllers/comment/createComment.controller";
import validateTokenMiddleware from "../middlewares/validateToken.middleware";
import ensureAnnouncementExistsMiddleware from "../middlewares/ensureAnnouncementExists.middleware";
import ensureDataIsValidMiddleware from "../middlewares/validatedSchema.middleware";
import { commentRequestSchema } from "../schemas/comment.schema";
import getCommentsOfAnnouncementController from "../controllers/comment/getCommentsOfAnnouncement.controller";
import deleteCommentController from "../controllers/comment/deleteComment.controller";

const commentRoutes = Router();

commentRoutes.post(
  "/:id",
  validateTokenMiddleware,
  ensureAnnouncementExistsMiddleware,
  ensureDataIsValidMiddleware(commentRequestSchema),
  createCommentController
);

commentRoutes.get(
  "/:id",
  validateTokenMiddleware,
  ensureAnnouncementExistsMiddleware,
  getCommentsOfAnnouncementController
);

commentRoutes.delete("/:id", validateTokenMiddleware, deleteCommentController);

export default commentRoutes;
