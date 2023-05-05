import { Request, Response } from "express";
import { updateUsersService } from "../../services/user/updateUser.service";

const updateUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const id = req.user.id;
  const userData = req.body;

  const userUpdate = await updateUsersService(userData, id);

  return res.status(200).json(userUpdate);
};

export default updateUserController;
