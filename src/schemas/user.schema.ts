import * as yup from "yup";
import {
  addressRequestSchema,
  addressResponseSchema,
  addressToReturnRequestSchema,
} from "./address.schema";
import { announcementResponseSchema } from "./announce.schema";

export const userRequestSchema: any = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email().required("Email is required"),
  cpf: yup.string().required("Cpf year is required").min(11).max(11),
  phone: yup.string().required("Phone is required").min(11).max(11),
  birth_date: yup.string().required("Birth date is required"),
  description: yup.string().notRequired(),
  password: yup.string().required("Password is required"),
  is_seller: yup.boolean().notRequired(),
  address: addressRequestSchema,
});

export const userResponseSchema: any = yup.object().shape({
  address: addressResponseSchema,
  updatedAt: yup.string(),
  createdAt: yup.string(),
  is_seller: yup.boolean(),
  description: yup.string(),
  birth_date: yup.string(),
  phone: yup.string(),
  cpf: yup.string(),
  email: yup.string(),
  name: yup.string(),
  id: yup.string(),
});

export const userResponseWithAnnoucementsSchema: any = yup.object().shape({
  annoucements: yup.array(announcementResponseSchema),
  updatedAt: yup.string(),
  createdAt: yup.string(),
  is_seller: yup.boolean(),
  description: yup.string(),
  birth_date: yup.string(),
  phone: yup.string(),
  cpf: yup.string(),
  email: yup.string(),
  name: yup.string(),
  id: yup.string(),
});

export const userWithoutAddressSchema: any = yup.object().shape({
  updatedAt: yup.string(),
  createdAt: yup.string(),
  is_seller: yup.boolean(),
  description: yup.string(),
  birth_date: yup.string(),
  phone: yup.string(),
  cpf: yup.string(),
  email: yup.string(),
  name: yup.string(),
  id: yup.string(),
});

export const userToReturnResponseSchema: any = yup.object().shape({
  address: addressToReturnRequestSchema,
  updatedAt: yup.string(),
  createdAt: yup.string(),
  is_seller: yup.boolean(),
  description: yup.string(),
  birth_date: yup.string(),
  phone: yup.string(),
  cpf: yup.string(),
  email: yup.string(),
  name: yup.string(),
  id: yup.string(),
});
