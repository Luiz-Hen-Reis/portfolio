"use server";

type DataProps = {
  name: string;
  subject: string;
  message: string;
}

export default async function sendContactForm(data: DataProps) {

    console.log(data);
  }