// const addressData = await addressRepository.findOne({
//     relations: {
//       user: true,
//     },
//     where: {
//       user: user!,
//     },
//   });

//   await addressRepository.update(addressData!.id, {
//     zip_code: address ? address.zip_code : addressData!.zip_code,
//     state: address ? address.state : addressData!.state,
//     city: address ? address.city : addressData!.city,
//     street: address ? address.street : addressData!.street,
//     number: address ? address.number : addressData!.number,
//     complement: address ? address.complement! : addressData!.complement,
//   });

// const updateAddress = await addressRepository.findOne({
//     relations: {
//       user: true,
//     },
//     where: {
//       user: user!,
//     },
//   });
