import * as yup from "yup";

export const commentRequestSchema = yup.object().shape({
  comment: yup.string().max(280).required(),
});

export const commentResponseSchema = yup.object().shape({
  createdAt: yup.string().required(),
  comment: yup.string().required(),
  id: yup.string().required(),
});
