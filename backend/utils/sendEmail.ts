import nodemailer from "nodemailer";
import dotenv from "dotenv"
dotenv.config()
interface Options {
  email: string;
  subject: string;
  message: string;
}

export default async (options: Options) => {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: 2525,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });


  const message = {
    from:`${process.env.FROM_NAME} <${process.env.FROM_EMAIL}>`,
    to:options.email,
    subject:options.subject,
    html:options.message
  }

  await transporter.sendMail(message);
};
