import { Router } from "express";
import createUserController from "../controllers/user/createUser.controller";
import ensureDataIsValidMiddleware from "../middlewares/validatedSchema.middleware";
import { userRequestSchema } from "../schemas/user.schema";
import validateTokenMiddleware from "../middlewares/validateToken.middleware";
import profileUserController from "../controllers/user/profileUser.controller";
import {
  resetUserPassword,
  sendEmailResetPassword,
} from "../controllers/user/resetPassword.controller";
import deleteUserController from "../controllers/user/deleteUser.controller";
import updateUserController from "../controllers/user/updateUser.controller";
import updateAddressController from "../controllers/address/updateAddress.controller";

const userRoutes = Router();

userRoutes.post(
  "",
  ensureDataIsValidMiddleware(userRequestSchema),
  createUserController
);

userRoutes.get("/profile", validateTokenMiddleware, profileUserController);

userRoutes.delete("", validateTokenMiddleware, deleteUserController);

userRoutes.patch("", validateTokenMiddleware, updateUserController);

userRoutes.patch("/address", validateTokenMiddleware, updateAddressController);

userRoutes.post("/resetPassword", sendEmailResetPassword);

userRoutes.patch("/resetPassword/:token", resetUserPassword);

export default userRoutes;
