import { IAddressRequest, IAddressResponse } from "../address";
import { IAnnouncementResponse } from "../announcement";

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

export interface IUserResponseWithAnnoucements {
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
  annoucements: IAnnouncementResponse[];
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
