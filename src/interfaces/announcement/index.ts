export interface IAnnouncement {
  brand: string;
  model: string;
  fabrication_year: string;
  km: string;
  color: string;
  fuel_type: string;
  price: number;
  fipe: number;
  description: string;
  cover_img: string;
  is_good_price?: boolean;
  images?: string[];
}

export interface IAnnouncementResponse extends IAnnouncement {
  id: string;
  brand: string;
  model: string;
  fabrication_year: string;
  km: string;
  color: string;
  fuel_type: string;
  price: number;
  fipe: number;
  description: string;
  cover_img: string;
  updatedAt: Date;
  createdAt: Date;
  is_active: boolean;
  is_good_price: boolean;
  userId?: string;
  images?: string[];
}
