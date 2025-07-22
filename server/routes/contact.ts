import { Request, Response } from "express";
import { sendContactEmail } from "../services/email";

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
  formType: "contact" | "quote";
  // Quote form specific fields
  company?: string;
  service?: string;
  quantity?: string;
  timeline?: string;
  description?: string;
  budget?: string;
}

export async function handleContactForm(req: Request, res: Response) {
  try {
    const formData: ContactFormData = req.body;

    // Validate required fields
    if (!formData.name || !formData.email || !formData.message) {
      return res.status(400).json({
        success: false,
        message:
          "Missing required fields: name, email, and message are required",
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return res.status(400).json({
        success: false,
        message: "Invalid email format",
      });
    }

    // Log the form submission
    console.log("Form submission received:", {
      type: formData.formType,
      name: formData.name,
      email: formData.email,
      subject:
        formData.subject ||
        (formData.formType === "quote" ? "Quote Request" : "Contact Form"),
      timestamp: new Date().toISOString(),
    });

    // Generate email content
    const emailContent = generateEmailContent(formData);
    const emailSubject = formData.subject ||
      (formData.formType === "quote" ? "Quote Request" : "Contact Form");

    // Send actual email
    const emailResult = await sendContactEmail({
      name: formData.name,
      email: formData.email,
      subject: emailSubject,
      content: emailContent
    });

    if (!emailResult.success) {
      return res.status(500).json({
        success: false,
        message: "Failed to send email. Please try again later."
      });
    }

    console.log("Email sent successfully to info@aktomrady.com");
    if (emailResult.previewUrl) {
      console.log("Development preview URL:", emailResult.previewUrl);
    }

    return res.json({
      success: true,
      message:
        "Your message has been sent successfully! We'll get back to you within 24 hours.",
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return res.status(500).json({
      success: false,
      message:
        "An error occurred while sending your message. Please try again later.",
    });
  }
}

function generateEmailContent(formData: ContactFormData): string {
  if (formData.formType === "quote") {
    return `
New Quote Request from AKTOMRADY Website

Contact Information:
- Name: ${formData.name}
- Email: ${formData.email}
- Phone: ${formData.phone || "Not provided"}
- Company: ${formData.company || "Not provided"}

Project Details:
- Service: ${formData.service || "Not specified"}
- Quantity: ${formData.quantity || "Not specified"}
- Timeline: ${formData.timeline || "Not specified"}
- Budget: ${formData.budget || "Not specified"}

Project Description:
${formData.description || formData.message}

Submitted at: ${new Date().toLocaleString()}
    `;
  } else {
    return `
New Contact Form Submission from AKTOMRADY Website

Contact Information:
- Name: ${formData.name}
- Email: ${formData.email}
- Phone: ${formData.phone || "Not provided"}
- Subject: ${formData.subject || "No subject"}

Message:
${formData.message}

Submitted at: ${new Date().toLocaleString()}
    `;
  }
}
