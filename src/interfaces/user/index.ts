export interface IUser {
  name: string;
  email: string;
  cpf: string;
  phone: string;
  birth_date: string;
  password: string;
  is_seller?: boolean;
}

export interface IUserResponse {
  id: string;
  name: string;
  email: string;
  cpf: string;
  phone: string;
  birth_date: string;
  is_seller: boolean;
  createdAt: string;
  updatedAt: string;
}
