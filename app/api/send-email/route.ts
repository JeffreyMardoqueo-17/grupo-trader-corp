import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

type SendEmailPayload = {
  name: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
};

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function validatePayload(payload: Partial<SendEmailPayload>): string | null {
  if (!payload.name?.trim()) return "El nombre es requerido.";
  if (!payload.lastName?.trim()) return "El apellido es requerido.";
  if (!payload.email?.trim()) return "El email es requerido.";
  if (!payload.phone?.trim()) return "El telefono es requerido.";
  if (!payload.message?.trim()) return "El mensaje es requerido.";

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(payload.email)) {
    return "El email no es valido.";
  }

  return null;
}

export async function POST(request: Request) {
  try {
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = process.env.SMTP_PORT;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const companyEmail = process.env.COMPANY_EMAIL;

    if (!smtpHost || !smtpPort || !smtpUser || !smtpPass || !companyEmail) {
      return NextResponse.json(
        { message: "Faltan variables de entorno para el servicio de correo." },
        { status: 500 },
      );
    }

    const body = (await request.json()) as Partial<SendEmailPayload>;
    const validationError = validatePayload(body);

    if (validationError) {
      return NextResponse.json({ message: validationError }, { status: 400 });
    }

    const payload: SendEmailPayload = {
      name: body.name!.trim(),
      lastName: body.lastName!.trim(),
      email: body.email!.trim(),
      phone: body.phone!.trim(),
      message: body.message!.trim(),
    };

    const fullName = `${payload.name} ${payload.lastName}`;
    const escapedName = escapeHtml(payload.name);
    const escapedLastName = escapeHtml(payload.lastName);
    const escapedEmail = escapeHtml(payload.email);
    const escapedPhone = escapeHtml(payload.phone);
    const escapedMessage = escapeHtml(payload.message).replaceAll("\n", "<br />");

    const htmlContent = `
      <div style="margin:0;padding:0;background:#f3f5f8;font-family:Segoe UI,Roboto,Arial,sans-serif;">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="padding:24px 12px;">
          <tr>
            <td align="center">
              <table role="presentation" width="640" cellspacing="0" cellpadding="0" style="max-width:640px;width:100%;background:#ffffff;border-radius:18px;overflow:hidden;border:1px solid #e6eaf0;">
                <tr>
                  <td style="background:linear-gradient(135deg,#041935,#0c1526);padding:24px 28px;">
                    <p style="margin:0 0 8px 0;color:#D6A556;font-size:11px;font-weight:700;letter-spacing:0.18em;text-transform:uppercase;">Nuevo Lead</p>
                    <h1 style="margin:0;color:#ffffff;font-size:24px;line-height:1.25;font-weight:800;">Solicitud desde formulario web</h1>
                    <p style="margin:8px 0 0 0;color:#d6dbe4;font-size:14px;line-height:1.6;">Se recibio un nuevo mensaje desde el formulario de contacto.</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:24px 28px 10px 28px;">
                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:separate;border-spacing:0 10px;">
                      <tr>
                        <td style="width:170px;color:#516079;font-size:13px;font-weight:600;padding:10px 12px;background:#f7f9fc;border-radius:10px 0 0 10px;">Nombre</td>
                        <td style="color:#0f172a;font-size:14px;padding:10px 12px;background:#f7f9fc;border-radius:0 10px 10px 0;">${escapedName}</td>
                      </tr>
                      <tr>
                        <td style="width:170px;color:#516079;font-size:13px;font-weight:600;padding:10px 12px;background:#f7f9fc;border-radius:10px 0 0 10px;">Apellido</td>
                        <td style="color:#0f172a;font-size:14px;padding:10px 12px;background:#f7f9fc;border-radius:0 10px 10px 0;">${escapedLastName}</td>
                      </tr>
                      <tr>
                        <td style="width:170px;color:#516079;font-size:13px;font-weight:600;padding:10px 12px;background:#f7f9fc;border-radius:10px 0 0 10px;">Email</td>
                        <td style="color:#0f172a;font-size:14px;padding:10px 12px;background:#f7f9fc;border-radius:0 10px 10px 0;">${escapedEmail}</td>
                      </tr>
                      <tr>
                        <td style="width:170px;color:#516079;font-size:13px;font-weight:600;padding:10px 12px;background:#f7f9fc;border-radius:10px 0 0 10px;">Telefono</td>
                        <td style="color:#0f172a;font-size:14px;padding:10px 12px;background:#f7f9fc;border-radius:0 10px 10px 0;">${escapedPhone}</td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="padding:8px 28px 28px 28px;">
                    <div style="border:1px solid #e7ebf1;background:#fbfcfe;border-radius:14px;padding:16px 18px;">
                      <p style="margin:0 0 8px 0;color:#516079;font-size:13px;font-weight:700;">Mensaje</p>
                      <p style="margin:0;color:#0f172a;font-size:14px;line-height:1.7;">${escapedMessage}</p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td style="padding:0 28px 22px 28px;">
                    <p style="margin:0;color:#74829b;font-size:12px;line-height:1.6;">Responder directamente a este correo contactara a <strong style="color:#0f172a;">${fullName}</strong>.</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </div>
    `;

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: Number(smtpPort),
      secure: Number(smtpPort) === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    await transporter.sendMail({
      to: companyEmail,
      from: `${payload.name} ${payload.lastName} <${payload.email}>`,
      replyTo: payload.email,
      subject: `Nuevo contacto de ${payload.name} ${payload.lastName}`,
      text: [
        "Nuevo mensaje desde el formulario de contacto",
        `Nombre: ${payload.name}`,
        `Apellido: ${payload.lastName}`,
        `Email: ${payload.email}`,
        `Telefono: ${payload.phone}`,
        "",
        "Mensaje:",
        payload.message,
      ].join("\n"),
      html: htmlContent,
    });

    return NextResponse.json({ message: "Correo enviado con exito." });
  } catch (error) {
    console.error("Error al enviar correo:", error);

    return NextResponse.json(
      { message: "No se pudo enviar el correo. Intenta nuevamente." },
      { status: 500 },
    );
  }
}
