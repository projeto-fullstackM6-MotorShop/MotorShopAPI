import * as yup from "yup";
import { addressRequestSchema, addressResponseSchema } from "./address.schema";

export const userRequestSchema: any = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email().required("Email is required"),
  cpf: yup.string().required("Cpf year is required").min(11).max(11),
  phone: yup.string().required("Phone is required").min(11).max(11),
  birth_date: yup.string().required("Birth date is required"),
  password: yup.string().required("Password is required"),
  is_seller: yup.boolean().notRequired(),
  address: addressRequestSchema,
});

export const userResponseSchema: any = yup.object().shape({
  address: addressResponseSchema,
  updatedAt: yup.string(),
  createdAt: yup.string(),
  is_seller: yup.boolean(),
  birth_date: yup.string(),
  phone: yup.string(),
  cpf: yup.string(),
  email: yup.string(),
  name: yup.string(),
  id: yup.string(),
});
