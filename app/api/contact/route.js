import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { name, email, subject, message } = await req.json();

    if (
      !name ||
      typeof name !== "string" ||
      name.trim().length < 2 ||
      !email ||
      typeof email !== "string" ||
      !subject ||
      typeof subject !== "string" ||
      subject.trim().length < 2 ||
      !message ||
      typeof message !== "string" ||
      message.trim().length < 10
    ) {
      return NextResponse.json({ error: "Invalid input." }, { status: 400 });
    }

    const to = (process.env.CONTACT_TO || "")
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);

    const from = process.env.CONTACT_FROM;

    if (!to.length || !from) {
      return NextResponse.json(
        { error: "Contact email not configured." },
        { status: 500 }
      );
    }

    const { data, error } = await resend.emails.send({
      from,
      to,
      reply_to: email,
      subject: `Portfolio Contact — ${subject}`,
      text: `Name: ${name}
            Email: ${email}
            Subject: ${subject}

            Message:
            ${message}`,
    });

    if (error) {
      console.error("Resend send error:", error);
      return NextResponse.json({ error: String(error) }, { status: 500 });
    }

    console.log("Resend queued id:", data?.id);
    return NextResponse.json({ ok: true, id: data?.id });
  } catch (error) {
    console.error("Contact route error:", error);
    return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
  }
}