import { Request, Response } from "express";

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
  formType: 'contact' | 'quote';
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
        message: "Missing required fields: name, email, and message are required"
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return res.status(400).json({
        success: false,
        message: "Invalid email format"
      });
    }

    // In a real application, you would:
    // 1. Send email using a service like Nodemailer, SendGrid, or AWS SES
    // 2. Store the form submission in a database
    // 3. Send confirmation emails
    
    // For now, we'll log the form data and return success
    console.log('Form submission received:', {
      type: formData.formType,
      name: formData.name,
      email: formData.email,
      subject: formData.subject || (formData.formType === 'quote' ? 'Quote Request' : 'Contact Form'),
      timestamp: new Date().toISOString()
    });

    // Simulate email sending
    const adminEmails = ['info@aktomrady.com', 'admin@aktomrady.com'];
    console.log('Simulating email send to:', adminEmails);
    
    // Generate email content
    const emailContent = generateEmailContent(formData);
    console.log('Email content:', emailContent);

    return res.json({
      success: true,
      message: "Your message has been sent successfully! We'll get back to you within 24 hours."
    });

  } catch (error) {
    console.error('Contact form error:', error);
    return res.status(500).json({
      success: false,
      message: "An error occurred while sending your message. Please try again later."
    });
  }
}

function generateEmailContent(formData: ContactFormData): string {
  if (formData.formType === 'quote') {
    return `
New Quote Request from AKTOMRADY Website

Contact Information:
- Name: ${formData.name}
- Email: ${formData.email}
- Phone: ${formData.phone || 'Not provided'}
- Company: ${formData.company || 'Not provided'}

Project Details:
- Service: ${formData.service || 'Not specified'}
- Quantity: ${formData.quantity || 'Not specified'}
- Timeline: ${formData.timeline || 'Not specified'}
- Budget: ${formData.budget || 'Not specified'}

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
- Phone: ${formData.phone || 'Not provided'}
- Subject: ${formData.subject || 'No subject'}

Message:
${formData.message}

Submitted at: ${new Date().toLocaleString()}
    `;
  }
}
