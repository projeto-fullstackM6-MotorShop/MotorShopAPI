import * as yup from "yup";

export const addressRequestSchema = yup.object().shape({
  zip_code: yup.string().required().min(8).max(8),
  state: yup.string().required().min(2).max(2),
  street: yup.string().required(),
  city: yup.string().required(),
  number: yup.string().required(),
  complement: yup.string().notRequired(),
});

export const addressResponseSchema = yup.object().shape({
  ...addressRequestSchema.fields,
  id: yup.string(),
});
