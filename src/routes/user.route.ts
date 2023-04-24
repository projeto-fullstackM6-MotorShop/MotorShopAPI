import { Router } from "express";
import createUserController from "../controllers/user/createUser.controller";
import ensureDataIsValidMiddleware from "../middlewares/validatedSchema.middleware";
import { userRequestSchema } from "../schemas/user.schema";
import validateTokenMiddleware from "../middlewares/validateToken.middleware";
import profileUserController from "../controllers/user/profileUser.controller";

const userRoutes = Router();

userRoutes.post(
  "",
  ensureDataIsValidMiddleware(userRequestSchema),
  createUserController
);

userRoutes.get("/profile", validateTokenMiddleware, profileUserController);

export default userRoutes;
