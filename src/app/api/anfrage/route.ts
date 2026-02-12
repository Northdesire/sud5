import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

interface AnfrageData {
  name: string;
  email: string;
  telefon: string;
  checkin: string;
  checkout: string;
  personen: string;
  unterkunft: string;
  hund: string;
  nachricht: string;
}

function formatDate(dateStr: string): string {
  if (!dateStr) return "–";
  const d = new Date(dateStr);
  return d.toLocaleDateString("de-DE", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

function unterkunftLabel(key: string): string {
  switch (key) {
    case "einzelzimmer": return "Einzelzimmer";
    case "doppelzimmer": return "Doppelzimmer";
    case "ferienwohnung": return "Ferienwohnung";
    default: return key;
  }
}

function buildEmailHtml(data: AnfrageData): string {
  return `
    <div style="font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 560px; margin: 0 auto; color: #3a3632;">
      <div style="border-bottom: 2px solid #7ba7b3; padding-bottom: 16px; margin-bottom: 24px;">
        <h1 style="font-size: 22px; margin: 0; color: #3a3632;">Neue Anfrage — Süd5</h1>
      </div>

      <table style="width: 100%; border-collapse: collapse; font-size: 15px;">
        <tr>
          <td style="padding: 8px 12px; color: #888; width: 140px;">Name</td>
          <td style="padding: 8px 12px; font-weight: 500;">${data.name}</td>
        </tr>
        <tr style="background: #f8f6f3;">
          <td style="padding: 8px 12px; color: #888;">E-Mail</td>
          <td style="padding: 8px 12px;"><a href="mailto:${data.email}" style="color: #5e8f9e;">${data.email}</a></td>
        </tr>
        <tr>
          <td style="padding: 8px 12px; color: #888;">Telefon</td>
          <td style="padding: 8px 12px;">${data.telefon || "–"}</td>
        </tr>
        <tr style="background: #f8f6f3;">
          <td style="padding: 8px 12px; color: #888;">Anreise</td>
          <td style="padding: 8px 12px;">${formatDate(data.checkin)}</td>
        </tr>
        <tr>
          <td style="padding: 8px 12px; color: #888;">Abreise</td>
          <td style="padding: 8px 12px;">${formatDate(data.checkout)}</td>
        </tr>
        <tr style="background: #f8f6f3;">
          <td style="padding: 8px 12px; color: #888;">Unterkunft</td>
          <td style="padding: 8px 12px; font-weight: 500;">${unterkunftLabel(data.unterkunft)}</td>
        </tr>
        <tr>
          <td style="padding: 8px 12px; color: #888;">Personen</td>
          <td style="padding: 8px 12px;">${data.personen}</td>
        </tr>
        <tr style="background: #f8f6f3;">
          <td style="padding: 8px 12px; color: #888;">Hund</td>
          <td style="padding: 8px 12px;">${data.hund === "ja" ? "Ja 🐕" : "Nein"}</td>
        </tr>
        ${data.nachricht ? `
        <tr>
          <td style="padding: 8px 12px; color: #888; vertical-align: top;">Nachricht</td>
          <td style="padding: 8px 12px;">${data.nachricht.replace(/\n/g, "<br>")}</td>
        </tr>
        ` : ""}
      </table>

      <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #e8e4de; font-size: 12px; color: #aaa;">
        Diese Anfrage wurde über süd5.de gesendet.
      </div>
    </div>
  `;
}

export async function POST(request: Request) {
  try {
    const data: AnfrageData = await request.json();

    if (!data.name || !data.email || !data.checkin || !data.checkout || !data.unterkunft) {
      return NextResponse.json(
        { error: "Bitte alle Pflichtfelder ausfüllen." },
        { status: 400 }
      );
    }

    const notifyEmail = process.env.NOTIFY_EMAIL;

    await transporter.sendMail({
      from: `"Süd5 Borkum" <${process.env.SMTP_USER}>`,
      to: notifyEmail,
      replyTo: data.email,
      subject: `Neue Anfrage: ${data.name} – ${unterkunftLabel(data.unterkunft)} (${formatDate(data.checkin)} – ${formatDate(data.checkout)})`,
      html: buildEmailHtml(data),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email senden fehlgeschlagen:", error);
    return NextResponse.json(
      { error: "Anfrage konnte nicht gesendet werden." },
      { status: 500 }
    );
  }
}
