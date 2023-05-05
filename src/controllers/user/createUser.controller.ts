import { Request, Response } from "express";
import { IUser } from "../../interfaces/user";
import createUserService from "../../services/user/createUser.service";

const createUserController = async (req: Request, res: Response) => {
  const user: IUser = req.body;
  const newUser = await createUserService(user);

  return res.status(201).json(newUser);
};

export default createUserController;
