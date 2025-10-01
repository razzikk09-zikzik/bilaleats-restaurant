import nodemailer from "nodemailer";

interface EmailOptions {
  to: string;
  subject: string;
  html: string;
}

export async function sendEmail({ to, subject, html }: EmailOptions): Promise<void> {
  // Configure your email service here
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port: parseInt(process.env.SMTP_PORT || "587"),
    secure: false,
    auth: {
      user: process.env.SMTP_USER || process.env.EMAIL_USER || "your-email@gmail.com",
      pass: process.env.SMTP_PASSWORD || process.env.EMAIL_PASSWORD || "your-app-password",
    },
  });

  const mailOptions = {
    from: process.env.SMTP_FROM || process.env.EMAIL_FROM || "noreply@mountroadbilal.com",
    to,
    subject,
    html,
  };

  await transporter.sendMail(mailOptions);
}

export function generateContactEmailHTML(data: {
  name: string;
  email: string;
  phone?: string | null;
  message: string;
}): string {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background-color: #6B4226; color: white; padding: 20px; text-align: center; }
        .content { background-color: #f9f9f9; padding: 20px; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #6B4226; }
        .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>New Contact Form Submission</h1>
          <p>Mount Road Bilal - Kebabs & Biriyani</p>
        </div>
        <div class="content">
          <div class="field">
            <span class="label">Name:</span> ${data.name}
          </div>
          <div class="field">
            <span class="label">Email:</span> ${data.email}
          </div>
          ${data.phone ? `<div class="field"><span class="label">Phone:</span> ${data.phone}</div>` : ''}
          <div class="field">
            <span class="label">Message:</span><br>
            ${data.message.replace(/\n/g, '<br>')}
          </div>
        </div>
        <div class="footer">
          <p>This email was sent from the Mount Road Bilal contact form.</p>
        </div>
      </div>
    </body>
    </html>
  `;
}
