import * as yup from "yup";

export const sessionRequestSchema: any = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});
