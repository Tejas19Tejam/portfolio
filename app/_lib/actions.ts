"use server";

import { EmailData } from "@/app/_types/types";

export async function sendMail(emailData: EmailData) {
  const res = await fetch(`${process.env.SERVER_URL}/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(emailData),
  });

  console.log(process.env.SERVER_URL);

  const data = await res.json();

  return data;
}
