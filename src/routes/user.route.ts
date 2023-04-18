import { Router } from "express";
import createUserController from "../controllers/user/createUser.controller";
import ensureDataIsValidMiddleware from "../middlewares/validatedSchema.middleware";
import { userRequestSchema } from "../schemas/user.schema";

const userRoutes = Router();

userRoutes.post(
  "",
  ensureDataIsValidMiddleware(userRequestSchema),
  createUserController
);

export default userRoutes;
