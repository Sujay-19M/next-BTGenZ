
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState, useTransition } from 'react';

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { SectionWrapper } from '@/components/layout/section-wrapper';
import { FOOTER_CONTACT_EMAIL } from '@/lib/constants';
import { Mail, Send, Loader2, Info, MessageCircleQuestion, Lightbulb, Handshake } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { submitContactForm } from "./actions";
import { contactFormSchema, type ContactFormValues } from "./contact-validation";

export default function ContactPage() {
  const { toast } = useToast();
  const [isPending, startTransition] = useTransition();
  const [formError, setFormError] = useState<string | null>(null);
  const [formSuccess, setFormSuccess] = useState<string | null>(null);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(data: ContactFormValues) {
    setFormError(null);
    setFormSuccess(null);
    startTransition(async () => {
      try {
        const result = await submitContactForm(data);
        if (result.success) {
          toast({
            title: "Message Sent!",
            description: result.message,
          });
          setFormSuccess(result.message);
          form.reset();
        } else {
          toast({
            title: "Error",
            description: result.message || "Failed to send message.",
            variant: "destructive",
          });
          setFormError(result.message || "Failed to send message.");
          if (result.errors) {
            // Optionally, you could iterate through result.errors and set specific form errors
            // For now, just showing the general message.
            console.error("Validation errors:", result.errors);
          }
        }
      } catch (error) {
        toast({
          title: "Error",
          description: "An unexpected error occurred. Please try again.",
          variant: "destructive",
        });
        setFormError("An unexpected error occurred. Please try again.");
      }
    });
  }

  return (
    <>
      <Header />
      <main className="flex-grow">
        <SectionWrapper>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-primary mb-4">Contact Us</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We're thrilled to hear from you! Whether you have questions, innovative ideas,
                or just want to connect, here's how you can reach us.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-10 items-start">
              <div className="space-y-8 bg-card p-6 sm:p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold text-primary">Connect with BTGenZ</h2>
                 <p className="text-muted-foreground">
                  We're here to help and listen. You can reach us for:
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <MessageCircleQuestion className="w-5 h-5 text-accent mr-3 mt-1 flex-shrink-0" />
                    <span>General inquiries and questions about biotechnology careers.</span>
                  </li>
                  <li className="flex items-start">
                    <Lightbulb className="w-5 h-5 text-accent mr-3 mt-1 flex-shrink-0" />
                    <span>Feedback, suggestions, or ideas to improve BTGenZ.</span>
                  </li>
                  <li className="flex items-start">
                    <Handshake className="w-5 h-5 text-accent mr-3 mt-1 flex-shrink-0" />
                    <span>Collaboration opportunities or partnership proposals.</span>
                  </li>
                </ul>
                <p className="text-muted-foreground">
                  Feel free to email us directly. We aim to respond within 24-48 hours.
                </p>
                <a href={`mailto:${FOOTER_CONTACT_EMAIL}`} className="inline-flex items-center">
                  <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10">
                    <Mail className="mr-2 h-5 w-5" /> Email Us: {FOOTER_CONTACT_EMAIL}
                  </Button>
                </a>
              </div>

              <div className="bg-card p-6 sm:p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold text-primary mb-6 text-center md:text-left">Send Us a Message</h2>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your Name" {...field} disabled={isPending} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="your.email@example.com" {...field} disabled={isPending} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Tell us how we can help, share your thoughts, or ask a question..."
                              className="resize-none"
                              rows={5}
                              {...field}
                              disabled={isPending}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    {formSuccess && (
                      <Alert variant="default" className="bg-green-50 dark:bg-green-900/30 border-green-300 dark:border-green-700">
                        <Send className="h-4 w-4 text-green-600 dark:text-green-400" />
                        <AlertTitle className="text-green-700 dark:text-green-300 font-semibold">Success!</AlertTitle>
                        <AlertDescription className="text-green-600 dark:text-green-400">
                          {formSuccess}
                        </AlertDescription>
                      </Alert>
                    )}
                     {formError && (
                      <Alert variant="destructive">
                        <Info className="h-4 w-4" />
                        <AlertTitle className="font-semibold">Submission Error</AlertTitle>
                        <AlertDescription>
                          {formError}
                        </AlertDescription>
                      </Alert>
                    )}
                    <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" disabled={isPending}>
                      {isPending ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" /> Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              </div>
            </div>
          </div>
        </SectionWrapper>
      </main>
      <Footer />
    </>
  );
}
