import * as yup from "yup";
import { userResponseSchema, userToReturnResponseSchema } from "./user.schema";

export const announcementRequestSchema: any = yup.object().shape({
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
  images: yup.array(),
});

export const announcementResponseSchema: any = yup.object().shape({
  user: userResponseSchema.notRequired(),
  ...announcementRequestSchema.fields,
  is_good_price: yup.boolean(),
  createdAt: yup.string(),
  updatedAt: yup.string(),
  is_active: yup.boolean(),
  id: yup.string(),
});

export const announcementToReturnResponseSchema: any = yup.object().shape({
  user: userToReturnResponseSchema,
  ...announcementRequestSchema.fields,
  is_good_price: yup.boolean(),
  createdAt: yup.string(),
  updatedAt: yup.string(),
  is_active: yup.boolean(),
  id: yup.string(),
});

export const allAnnouncementsSchema = yup.array(
  announcementToReturnResponseSchema
);

export const updateAnnouncementSchema = yup.object().shape({
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
  userId: yup.string(),
});
