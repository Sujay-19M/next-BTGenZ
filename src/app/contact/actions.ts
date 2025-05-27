
"use server";

import * as z from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }).max(500, {
    message: "Message must not be longer than 500 characters.",
  }),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export async function submitContactForm(data: ContactFormValues) {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  // In a real application, you would integrate an email service here.
  // For example, using Resend, SendGrid, or Nodemailer with an SMTP provider.
  console.log("Contact Form Submitted (Server Action):");
  console.log("Name:", data.name);
  console.log("Email:", data.email);
  console.log("Message:", data.message);
  console.log(`Simulated: Would send email to connect@btgenz.in and msujay.work@gmail.com`);

  // Simulate success
  return { success: true, message: "Your message has been sent successfully! We'll get back to you soon." };
  
  // Example of error simulation:
  // return { success: false, message: "Failed to send message. Please try again later." };
}
