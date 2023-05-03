import { IAddressRequest, IAddressResponse } from "../address";

export interface IUser {
  name: string;
  email: string;
  cpf: string;
  phone: string;
  birth_date: string;
  description: string;
  password: string;
  is_seller?: boolean;
  address: IAddressRequest;
}

export interface IUserResponse {
  id: string;
  name: string;
  email: string;
  cpf: string;
  phone: string;
  birth_date: string;
  description: string;
  is_seller: boolean;
  createdAt: string;
  updatedAt: string;
  address?: IAddressResponse;
}

export interface IUserUpdate {
  name?: string;
  email?: string;
  cpf?: string;
  phone?: string;
  birth_date?: string;
  description?: string;
  password?: string;
  is_seller?: boolean;
}
