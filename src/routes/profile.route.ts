import { Router } from "express";
import validateTokenMiddleware from "../middlewares/validateToken.middleware";
import profileUserController from "../controllers/user/profileUser.controller";
import getUserProfileAnnouncementsController from "../controllers/announcement/getUserProfileAnnouncements.controller";



const profiletRoutes = Router();


profiletRoutes.get("",
  validateTokenMiddleware,
  profileUserController
);

profiletRoutes.get("/:id",
  getUserProfileAnnouncementsController
);

export default profiletRoutes