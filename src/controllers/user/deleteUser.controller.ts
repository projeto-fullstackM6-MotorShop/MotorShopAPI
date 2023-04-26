import { Request, Response } from "express";
import deleteUserService from "../../services/user/deleteUser.service";

const deleteUserController = async (req: Request, res: Response) => {
  const id: string = req.user.id;

  await deleteUserService(id);

  return res.status(204).json({ message: "User deleted!" });
};

export default deleteUserController;
