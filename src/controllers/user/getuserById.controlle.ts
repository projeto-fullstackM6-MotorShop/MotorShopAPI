import { Request, Response } from "express";
import getUserService from "../../services/user/getUserById.service ";

const getUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const id: string = req.params.id;

  const user = await getUserService(id);

  return res.status(200).json(user);
};

export default getUserController;
