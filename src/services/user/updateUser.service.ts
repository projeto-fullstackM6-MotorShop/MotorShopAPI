import { AppDataSource } from "../../data-source";

import Address  from "../../entities/address.entity";
import  User  from "../../entities/user.entity";
import { appError } from "../../errors";

import  {IUser}  from "../../interfaces/user";
import { hashSync } from "bcryptjs";
import { userResponseSchema } from "../../schemas/user.schema";

export const updateUsersService = async ({
    name,
    cpf,
    email,
    phone,
    address,
    birth_date,
    is_seller,
    password,
}: IUser, id: string) => {
    const userRepository = AppDataSource.getRepository(User)
    const addressRepository = AppDataSource.getRepository(Address)
    
    const user = await userRepository.findOneBy({id})
    
    if(!user) {
        throw new appError("User not found", 404)
    }

    const isExistsEmail = await userRepository.findOneBy({
        email: email,  
    });
    
    if (isExistsEmail) {
        throw new appError("Email already registered", 409);
    }
    
    const isExistsCpf = await userRepository.findOneBy({
        cpf: cpf,
    });
       
    if (isExistsCpf) {
        throw new appError("Cpf already registered", 409);
    }

    const addressData = await addressRepository.findOne({relations: {
        user: true
    },
    where:{
        user: user!   
    }      
})


await addressRepository.update(addressData!.id, {

    zip_code: address ? address.zip_code : addressData!.zip_code,
    state: address ? address.state : addressData!.state,
    city: address ? address.city : addressData!.city,
    street: address ? address.street : addressData!.street,
    number: address ? address.number : addressData!.number,
    complement: address ? address.complement! : addressData!.complement

})
        
const updateAddress = await addressRepository.findOne({relations: {
    user: true  
},
where:{
    user: user!
}
})

await userRepository.update(user.id, {
    name: name ? name : user.name,
    cpf: cpf ? cpf : user.cpf,
    email: email ? email : user.email,
    phone: phone ? phone : user.phone,
    birth_date: birth_date ? birth_date : user.birth_date,
    is_seller: is_seller ? is_seller : user.is_seller,
    password: password ? hashSync(password, 10) : user.password,
    
})

const userUpdate = await userRepository.findOne({
    where: {
    id: id,
    },
    relations:{
      address:true
    }})

    const validateResponse = await userResponseSchema.validate(userUpdate, {
        stripUnknown: true,
      });

return validateResponse
    
}
      
      