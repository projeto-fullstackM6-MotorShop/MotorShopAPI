import { Request, Response } from "express";
import deleteUserService from "../../services/user/deleteUser.service";

const deleteUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const id: string = req.user.id;

  await deleteUserService(id);

  return res.status(204).json({});
};

export default deleteUserController;
