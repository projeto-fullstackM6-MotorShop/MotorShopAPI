import { Repository } from "typeorm";
import { IUserResponse } from "../../interfaces/user";
import Address from "../../entities/address.entity";
import { AppDataSource } from "../../data-source";
import User from "../../entities/user.entity";
import { IAddressUpdate } from "../../interfaces/address";
import { userResponseSchema } from "../../schemas/user.schema";

const updateAddressService = async (
  data: IAddressUpdate,
  userId: string
): Promise<IUserResponse> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const addressRepository: Repository<Address> =
    AppDataSource.getRepository(Address);

  const user = await userRepository.findOne({
    where: {
      id: userId,
    },
    relations: {
      address: true,
    },
  });

  const addressData = user!.address;

  await addressRepository.update(addressData!.id, {
    zip_code: data.zip_code ? data.zip_code : addressData!.zip_code,
    state: data.state ? data.state : addressData!.state,
    city: data.city ? data.city : addressData!.city,
    street: data.street ? data.street : addressData!.street,
    number: data.number ? data.number : addressData!.number,
    complement: data.complement ? data.complement! : addressData!.complement,
  });

  const updateAddress = await userRepository.findOne({
    where: {
      id: userId,
    },
    relations: {
      address: true,
    },
  });

  const validateResponse = await userResponseSchema.validate(updateAddress, {
    stripUnknown: true,
  });

  return validateResponse;
};

export default updateAddressService;
