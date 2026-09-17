import nodemailer from "nodemailer";

/**
 * Send an email notification when a new contact inquiry or lead is submitted
 */
export async function sendLeadEmail({
  fullName,
  name,
  email,
  phone,
  message,
  date,
}) {
  const emailUser =
    process.env.EMAIL_USER || process.env.ADMIN_EMAIL || "kalkiweb06@gmail.com";
  const emailPass = process.env.EMAIL_PASS || process.env.SMTP_PASSWORD;
  const toEmail = process.env.EMAIL_TO || "kalkiweb06@gmail.com";

  if (!emailPass) {
    console.warn(
      "Nodemailer: EMAIL_PASS is not set in environment variables. Please add Gmail App Password to send emails via Nodemailer."
    );
    return { success: false, error: "EMAIL_PASS not configured" };
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: emailUser.trim(),
        pass: emailPass.replace(/\s+/g, "").trim(), // Strip spaces if pasted from Google App Password
      },
    });

    const displayName =
      fullName || name || "Website Visitor";
    const displayPhone = phone || "Not provided";
    const displayDate =
      date ||
      new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
    const displayMessage =
      message || "New inquiry submitted via website contact form.";

    const mailOptions = {
      from: `"Kalki Web Leads" <${emailUser.trim()}>`,
      to: toEmail.trim(),
      replyTo: email.trim(),
      subject: `🚀 New Website Lead: ${displayName} (${displayPhone})`,
      text: `New Lead Details:\n\nName: ${displayName}\nEmail: ${email}\nPhone: ${displayPhone}\nDate: ${displayDate}\nMessage: ${displayMessage}`,
      html: `
        <div style="font-family: Arial, -apple-system, BlinkMacSystemFont, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);">
          <div style="background: #0c242c; padding: 24px; color: #ffffff; text-align: left;">
            <span style="background: #FACC15; color: #0c242c; font-size: 11px; font-weight: 800; padding: 4px 10px; border-radius: 20px; text-transform: uppercase; letter-spacing: 0.05em;">New Contact Lead</span>
            <h1 style="font-size: 22px; font-weight: 800; margin: 12px 0 4px 0; color: #ffffff;">🚀 Kalki Web Inquiry</h1>
            <p style="margin: 0; font-size: 13px; color: #94a3b8;">Received on ${displayDate}</p>
          </div>

          <div style="padding: 24px;">
            <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
              <tr>
                <td style="padding: 12px; font-weight: 600; color: #64748b; width: 120px; border-bottom: 1px solid #f1f5f9;">Full Name</td>
                <td style="padding: 12px; font-weight: 700; color: #0f172a; border-bottom: 1px solid #f1f5f9; font-size: 16px;">${displayName}</td>
              </tr>
              <tr>
                <td style="padding: 12px; font-weight: 600; color: #64748b; border-bottom: 1px solid #f1f5f9;">Email Address</td>
                <td style="padding: 12px; color: #0284c7; font-weight: 600; border-bottom: 1px solid #f1f5f9;">
                  <a href="mailto:${email}" style="color: #0284c7; text-decoration: none;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 12px; font-weight: 600; color: #64748b; border-bottom: 1px solid #f1f5f9;">Phone Number</td>
                <td style="padding: 12px; color: #0f172a; font-weight: 600; border-bottom: 1px solid #f1f5f9;">
                  <a href="tel:${displayPhone}" style="color: #0f172a; text-decoration: none;">${displayPhone}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 12px; font-weight: 600; color: #64748b; border-bottom: 1px solid #f1f5f9;">Message / Details</td>
                <td style="padding: 12px; color: #334155; line-height: 1.6; border-bottom: 1px solid #f1f5f9; white-space: pre-wrap;">${displayMessage}</td>
              </tr>
            </table>

            <div style="margin-top: 24px; text-align: center;">
              <a href="https://www.kalkiweb.in/dashboard/inquiries" style="display: inline-block; background: #FACC15; color: #0c242c; font-weight: 800; text-decoration: none; padding: 12px 28px; border-radius: 9999px; font-size: 14px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                View Lead in Dashboard &rarr;
              </a>
            </div>
          </div>

          <div style="background: #f8fafc; padding: 14px 24px; text-align: center; border-top: 1px solid #e2e8f0; font-size: 12px; color: #94a3b8;">
            Kalki Web Automated Lead Notification &bull; kalkiweb.in
          </div>
        </div>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Nodemailer: Email dispatched successfully. Message ID:", info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error("Nodemailer error:", error.message || error);
    return { success: false, error: error.message || error };
  }
}
