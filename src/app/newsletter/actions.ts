
"use server";

import * as z from "zod";

// Schema for email validation
const emailSchema = z.string().email({ message: "Invalid email address." });

interface SubscribeResult {
  success: boolean;
  message: string;
  errors?: { email?: string[] };
}

export async function subscribeToNewsletter(formData: FormData): Promise<SubscribeResult> {
  const email = formData.get("email") as string;

  const validationResult = emailSchema.safeParse(email);

  if (!validationResult.success) {
    return {
      success: false,
      message: "Invalid email provided.",
      errors: { email: validationResult.error.flatten().formErrors }
    };
  }

  const validatedEmail = validationResult.data;

  // --- Backend Integration Point ---
  // In a real application, you would save the validatedEmail to your database here.
  // For example, using Supabase, Firebase, or your own backend API.
  console.log(`Newsletter Subscription (Simulated): ${validatedEmail}`);
  // --- End Backend Integration Point ---

  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Check for a specific email to simulate an error (for testing purposes)
  if (validatedEmail === "error@example.com") {
    return {
      success: false,
      message: "This email address is blocked (simulated error).",
    };
  }

  return {
    success: true,
    message: `Thank you for subscribing, ${validatedEmail}! You'll now receive updates from BTGenZ.`,
  };
}

export async function handleUnsubscribeClick() {
  // This is a placeholder.
  // In a real app, this would likely navigate to a page where the user confirms unsubscription,
  // or it would trigger a process involving an email with an unsubscribe link.
  // For now, it just returns a message for an alert.
  return {
    message: "Unsubscribe functionality requires backend integration. In a full system, you would be guided through an unsubscription process here."
  };
}
