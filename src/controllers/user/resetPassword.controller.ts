import { Request, Response } from "express";
import { IEmail } from "../../interfaces/resetPassword"
import sendResetEmailPassword from "../../services/user/sendEmail.service";


const sendEmailResetPassword = async (req: Request, res: Response) => {
  const email = req.body
  // const resEmail = await sendResetEmailPassword({email})
  return res.status(200).json({message:'Email send success'})
}