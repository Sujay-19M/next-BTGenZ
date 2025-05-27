
"use server";

import { Resend } from 'resend';
import type { ContactFormValues } from "./contact-validation";
import { contactFormSchema } from "./contact-validation";

// Initialize Resend with the API key from environment variables
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

const PRIMARY_EMAIL = "connect@btgenz.in";
const SECONDARY_EMAIL = "msujay.work@gmail.com";

export async function submitContactForm(data: ContactFormValues): Promise<{ success: boolean; message: string; errors?: any }> {
  // Server-side validation
  const parsedData = contactFormSchema.safeParse(data);
  if (!parsedData.success) {
    return { success: false, message: "Invalid data received.", errors: parsedData.error.flatten().fieldErrors };
  }

  if (!resend) {
    console.error("Resend API key is not configured. Email not sent.");
    return { success: false, message: "Email service is not configured. Please contact support." };
  }

  const { name, email, message } = parsedData.data;

  try {
    const emailData = await resend.emails.send({
      from: 'BTGenZ Contact <onboarding@resend.dev>', // Using Resend's default sending address
      to: [PRIMARY_EMAIL, SECONDARY_EMAIL],
      subject: `New Contact Form Submission from ${name}`,
      reply_to: email, // Set the user's email as the reply-to address
      html: `
        <h1>New Contact Form Submission</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `
    });

    if (emailData.error) {
      console.error("Resend API Error:", emailData.error);
      return { success: false, message: `Failed to send message due to an API error: ${emailData.error.message}` };
    }

    console.log("Email sent successfully! ID:", emailData.data?.id);
    return { success: true, message: "Your message has been sent successfully! We'll get back to you soon." };

  } catch (error: any) {
    console.error("Error sending email:", error);
    // It's good practice to avoid exposing too much detail about internal errors to the client.
    let errorMessage = "An unexpected error occurred while sending your message. Please try again later.";
    if (error.message) {
      errorMessage = `Failed to send message: ${error.message}. Please try again.`;
    }
    return { success: false, message: errorMessage };
  }
}
