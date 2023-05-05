import { Request, Response } from "express";
import updateAddressService from "../../services/address/updateAddress.service";
import { IAddressUpdate } from "../../interfaces/address";

const updateAddressController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const data: IAddressUpdate = req.body;
  const id: string = req.user.id;

  const user = await updateAddressService(data, id);

  return res.status(200).json(user);
};

export default updateAddressController;
