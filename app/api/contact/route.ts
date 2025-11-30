import { NextRequest } from "next/server";

import Nodemailer from "nodemailer";
import { EmailData } from "@/app/_types/types";

export async function POST(req: NextRequest) {
  const body: EmailData = await req.json();

  const { email, subject, message, name } = body;

  const transporter = Nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GOOGLE_EMAIL,
      pass: process.env.GOOGLE_APP_PASSWORD,
    },
  });

  const adminMail = {
    from: `"Portfolio Contact" <${process.env.GOOGLE_EMAIL}>`,
    to: process.env.GOOGLE_EMAIL,
    subject: `New Message from ${name}: ${subject}`,
    text: `
New message from your website:

Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}
    `,
    html: `
      <div style="font-family: Arial; padding: 20px;">
        <h2>📩 New Contact Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-line;">${message}</p>
      </div>
    `,
  };

  const adminResult = await transporter.sendMail(adminMail);

  return Response.json(
    { message: "Message send", data: { messageId: adminResult.messageId } },
    { status: 200 }
  );
}
