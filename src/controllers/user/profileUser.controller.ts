import { Request, Response } from "express";
import profileUserService from "../../services/user/profileUser.service";

const profileUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const id: string = req.user.id;

  const user = await profileUserService(id);

  return res.status(200).json(user);
};

export default profileUserController;
