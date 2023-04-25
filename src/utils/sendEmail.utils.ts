import { createTransport } from "nodemailer"
import { IEmailRequest } from "../interfaces/resetPassword";
import { appError } from "../errors"; 
import Mailgen from "mailgen";
import "dotenv/config"

export const sendEmail = async ({ subject, text, to }: IEmailRequest) => {

    const transporter = createTransport({
        host: "smtp.gmail.com",
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        }
    })

    await transporter.sendMail({
        from: process.env.SMTP_USER,
        to,
        subject,
        html: text
    }).then(() => {
        console.log('Email send with success')
    }).catch((err) => {
        console.log(err)
        throw new appError('Error sending email, try again later', 500)
    })
}

export const  resetPasswordTemplate = (userEmail: string, userName: string, protocol: string, host: string, resetToken: string) => {

        const mailGenerator = new Mailgen({
            theme: 'default',
            product: {
                name: 'MotorShop',
                link: `${protocol}://${host}`
            }
        });

        const email = {
            body: {
                name: userName,
                intro: 'You have received this email because a password reset request for your account was received.',
                action: {
                    instructions: 'Click the button below to reset your password:',
                    button: {
                        color: '#CD2B31',
                        text: 'Reset your password',
                        link: `${protocol}://${host}/user/resetPassword/${resetToken}`
                    }
                },
                outro: 'If you did not request a password reset, no further action is required on your part.'
            }
    };
    
        const emailBody = mailGenerator.generate(email)

        const emailTemplate = {
            to: userEmail,
            subject: "Reset password",
            text: emailBody
        }

        return emailTemplate
    }