import { Request, Response } from "express";
import { IEmail } from "../../interfaces/resetPassword";
import sendResetEmailPassword from "../../services/user/sendEmail.service";
import resetPassword from "../../services/user/resetPassword.service";

export const sendEmailResetPassword = async (req: Request, res: Response) => {
  const email = req.body.email;
  const resEmail = await sendResetEmailPassword(
    email,
    "http",
    "localhost:3000"
  );
  return res.status(200).json({ message: "Email send success" });
};

export const resetUserPassword = async (req: Request, res: Response) => {
  const password = req.body.password;
  const resetToken = req.params.token;
  await resetPassword(password, resetToken);
  return res.status(200).json({ message: "Password changes success" });
};
