import * as yup from "yup";
import { userWithoutAddressSchema } from "./user.schema";

export const commentRequestSchema = yup.object().shape({
  comment: yup.string().max(280).required(),
});

export const commentResponseSchema = yup.object().shape({
  createdAt: yup.string().required(),
  comment: yup.string().required(),
  id: yup.string().required(),
});

export const commentGetSchema = yup.object().shape({
  user: userWithoutAddressSchema,
  ...commentResponseSchema.fields,
});

export const commentResponseSchemaArray = yup.array(commentGetSchema);
