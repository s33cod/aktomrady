import nodemailer from "nodemailer";

interface EmailData {
  name: string;
  email: string;
  subject: string;
  content: string;
}

// Create transporter (using Gmail as an example, but can be configured for other providers)
const createTransporter = () => {
  // For production, you would use environment variables for credentials
  // For now, using a generic SMTP configuration that can work with various providers
  return nodemailer.createTransport({
    // Using a generic SMTP configuration
    // In production, replace with actual SMTP settings
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port: parseInt(process.env.SMTP_PORT || "587"),
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER || "your-email@gmail.com",
      pass: process.env.SMTP_PASS || "your-app-password",
    },
    // For development/testing, we'll create a test account
    ...(process.env.NODE_ENV !== "production" && {
      host: "smtp.ethereal.email",
      port: 587,
      secure: false,
      auth: {
        user: "ethereal.user@ethereal.email",
        pass: "ethereal.pass",
      },
    }),
  });
};

export async function sendContactEmail(
  emailData: EmailData,
): Promise<{ success: boolean; messageId?: string; previewUrl?: string }> {
  try {
    let transporter;

    // For development, create a test account
    if (process.env.NODE_ENV !== "production") {
      const testAccount = await nodemailer.createTestAccount();
      transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false,
        auth: {
          user: testAccount.user,
          pass: testAccount.pass,
        },
      });
    } else {
      transporter = createTransporter();
    }

    const mailOptions = {
      from: `"AKTOMRADY Website" <${process.env.SMTP_USER || "noreply@aktomrady.com"}>`,
      to: "info@aktomrady.com",
      cc: "admin@aktomrady.com", // CC to admin email
      subject: `[AKTOMRADY Website] ${emailData.subject}`,
      text: emailData.content,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #0891b2, #ec4899, #eab308); padding: 20px; text-align: center;">
            <h1 style="color: white; margin: 0;">AKTOMRADY Agencies</h1>
            <p style="color: white; margin: 5px 0;">New Form Submission</p>
          </div>
          
          <div style="background: white; padding: 30px; border: 1px solid #e5e7eb;">
            <h2 style="color: #1f2937; margin-top: 0;">${emailData.subject}</h2>
            
            <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #374151; margin-top: 0;">Contact Information:</h3>
              <p><strong>Name:</strong> ${emailData.name}</p>
              <p><strong>Email:</strong> <a href="mailto:${emailData.email}">${emailData.email}</a></p>
            </div>
            
            <div style="margin: 20px 0;">
              <h3 style="color: #374151;">Message Content:</h3>
              <div style="white-space: pre-wrap; background: #f9fafb; padding: 15px; border-radius: 8px; border-left: 4px solid #0891b2;">
                ${emailData.content.replace(/\n/g, "<br>")}
              </div>
            </div>
            
            <div style="border-top: 1px solid #e5e7eb; padding-top: 20px; margin-top: 30px; color: #6b7280; font-size: 14px;">
              <p>This email was sent from the AKTOMRADY website contact form.</p>
              <p>Submitted at: ${new Date().toLocaleString()}</p>
            </div>
          </div>
        </div>
      `,
      replyTo: emailData.email,
    };

    const info = await transporter.sendMail(mailOptions);

    console.log("Email sent successfully:", info.messageId);

    // For development, show preview URL
    if (process.env.NODE_ENV !== "production") {
      const previewUrl = nodemailer.getTestMessageUrl(info);
      console.log("Preview URL:", previewUrl);
      return {
        success: true,
        messageId: info.messageId,
        previewUrl: previewUrl || undefined,
      };
    }

    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error("Email sending failed:", error);
    return { success: false };
  }
}
