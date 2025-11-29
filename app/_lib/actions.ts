"use server";

export async function sendMail(emailData: any) {
  const res = await fetch("http://localhost:3000/api/contact", {
    method: "POST",
    body: emailData,
  });

  return { data: "Response return from server action" };
}
