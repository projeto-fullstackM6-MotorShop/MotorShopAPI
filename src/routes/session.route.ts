import { Router } from "express";
import ensureDataIsValidMiddleware from "../middlewares/validatedSchema.middleware";
import { sessionRequestSchema } from "../schemas/session.schema";
import createSessionController from "../controllers/session/createSession.controller";

const sessionRoutes = Router();

sessionRoutes.post(
  "",
  ensureDataIsValidMiddleware(sessionRequestSchema),
  createSessionController
);

export default sessionRoutes;
