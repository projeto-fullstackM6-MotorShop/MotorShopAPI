import * as yup from "yup";
import { Schema } from "yup";
import { IAnnouncement, IAnnouncementResponse } from "../interfaces/announcement";

export const announcementSchema: Schema<IAnnouncement> = yup.object().shape({
  id: yup.string().notRequired(),
  brand: yup.string().required("Brand is required"),
  model: yup.string().required("Model is required"),
  fabrication_year: yup.string().required("Fabrication year is required"),
  km: yup.string().required("Km is required"),
  color: yup.string().required("Color is required"),
  fuel_type: yup.string().required("Fuel type is required"),
  price: yup.number().required("Price is required"),
  description: yup.string().required("Description is required"),
  fipe: yup.number().required("Fipe price is required"),
  cover_img: yup.string().required("Cover image is required"),
});
export const respAnnouncement = yup.object().shape({
  id: yup.string(),
  brand: yup.string(),
  model: yup.string(),
  fabrication_year: yup.string(),
  km: yup.string(),
  color: yup.string(),
  fuel_type: yup.string(),
  price: yup.number(),
  description: yup.string(),
  fipe: yup.number(),
  cover_img: yup.string(),
  updatedAt: yup.date(),
  createdAt: yup.date(),
  is_active: yup.boolean(),
  is_good_price: yup.boolean()
});

export const announcesShape = yup.array(respAnnouncement)

export const allAnnouncesSchema = yup.array(yup.object().shape({
  brand: yup.string(),
  model: yup.string(),
  fabrication_year: yup.string(),
  km: yup.string(),
  color: yup.string(),
  fuel_type: yup.string(),
  price: yup.string(),
  fipe: yup.string(),
  description: yup.string(),
  cover_img: yup.string(),
  is_good_price: yup.boolean(),
}))
