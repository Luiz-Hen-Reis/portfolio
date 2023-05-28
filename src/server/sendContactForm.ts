"use server";

import { createTransport } from "nodemailer";

type DataProps = {
  name: string;
  subject: string;
  message: string;
};

const email = process.env.NEXT_PUBLIC_EMAIL as string;
const pass = process.env.NEXT_PUBLIC_EMAIL_PASS as string;

const transporter = createTransport({
  service: "hotmail",
  auth: {
    user: email,
    pass,
  },
});

const mailOptions = {
  from: email,
  to: email,
};

export default async function sendContactForm(data: DataProps) {
  try {
    await transporter.sendMail({
      ...mailOptions,
      subject: data.subject,
      text: data.message,
      html: `<h1>${data.subject}</h1> <p>${data.message}</p> <h2>From: ${data.name}</h2>`,
    });
  } catch {
    throw Error("Bad request");
  }
}
