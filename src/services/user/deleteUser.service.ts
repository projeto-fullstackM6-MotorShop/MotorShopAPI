import { AppDataSource } from "../../data-source";
import Address from "../../entities/address.entity";
import User from "../../entities/user.entity";

const deleteUserService = async (id: string): Promise<object> => {
  const addressRepository = AppDataSource.getRepository(Address);

  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({ id });

  const address = await addressRepository.findOne({
    relations: {
      user: true,
    },
    where: {
      user: user!,
    },
  });

  await addressRepository.delete(address!.id);
  await userRepository.delete(id);

  return {};
};

export default deleteUserService;
