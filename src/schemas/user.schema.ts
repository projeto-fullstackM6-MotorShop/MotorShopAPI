import * as yup from "yup";

export const userRequestSchema: any = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email().required("Email is required"),
  cpf: yup.string().required("Cpf year is required").min(11).max(11),
  phone: yup.string().required("Phone is required").min(11).max(11),
  birth_date: yup.string().required("Birth date is required"),
  password: yup.string().required("Password is required"),
  is_seller: yup.boolean().notRequired(),
});

export const userResponseSchema: any = yup.object().shape({
  id: yup.string(),
  name: yup.string(),
  email: yup.string(),
  cpf: yup.string(),
  phone: yup.string(),
  birth_date: yup.string(),
  is_seller: yup.boolean(),
  createdAt: yup.string(),
  updatedAt: yup.string(),
});
