export interface IAddressRequest {
  zip_code: string;
  state: string;
  street: string;
  city: string;
  number: string;
  complement?: string;
}

export interface IAddressResponse extends IAddressRequest {
  id: string;
}

export interface IAddressUpdate {
  zip_code?: string;
  state?: string;
  street?: string;
  city?: string;
  number?: string;
  complement?: string;
}
