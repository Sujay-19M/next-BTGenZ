
"use client";

import type { Metadata } from 'next'; // No need to export metadata from client component
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useState, useTransition } from 'react';

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { SectionWrapper } from '@/components/layout/section-wrapper';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from '@/components/ui/input';
import { Mail, Send, Loader2, Info } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { handleUnsubscribeClick } from "./actions";

// export const metadata: Metadata = {
//   title: "Subscribe to BTGenZ Newsletter",
//   description: "Stay ahead with BTGenZ! Get the latest biotech job alerts, internship opportunities, career guidance, and industry insights delivered to your inbox.",
//   openGraph: {
//     title: "Subscribe to BTGenZ Newsletter for Biotech Updates",
//     description: "Join the BTGenZ community by subscribing to our newsletter. Get exclusive content on biotech careers and opportunities in India.",
//     url: "/newsletter",
//     type: "website",
//   },
//   twitter: {
//     title: "BTGenZ Newsletter Subscription",
//     description: "Don't miss out! Subscribe to the BTGenZ newsletter for biotech insights.",
//   },
// };

const newsletterFormSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
});

type NewsletterFormValues = z.infer<typeof newsletterFormSchema>;

const WORKER_URL = 'https://btgenz-subscribers.sujay-m-1194.workers.dev';

export default function NewsletterPage() {
  const { toast } = useToast();
  const [isPending, startTransition] = useTransition();

  const form = useForm<NewsletterFormValues>({
    resolver: zodResolver(newsletterFormSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(data: NewsletterFormValues) {
    startTransition(async () => {
      const formData = new FormData();
      formData.append('email', data.email);

      try {
        const res = await fetch(WORKER_URL, {
          method: 'POST',
          body: formData,
        });

        const responseText = await res.text();

        if (res.ok) {
          toast({
            title: "Subscribed!",
            description: responseText || "You've been successfully subscribed to BTGenZ updates.",
          });
          form.reset();
        } else {
          toast({
            title: "Subscription Failed",
            description: responseText || "Could not subscribe. Please try again or check your email address.",
            variant: "destructive",
          });
        }
      } catch (error) {
        console.error("Subscription error:", error);
        toast({
          title: "Subscription Error",
          description: "An unexpected error occurred while subscribing. Please try again later.",
          variant: "destructive",
        });
      }
    });
  }

  const onUnsubscribeClick = async () => {
    const result = await handleUnsubscribeClick();
    toast({
        title: "Unsubscribe Information",
        description: result.message,
    });
  };

  return (
    <>
      <Header />
      <main className="flex-grow">
        <SectionWrapper>
          <div className="text-center py-16 max-w-lg mx-auto">
            <Mail className="h-16 w-16 text-primary mx-auto mb-6" />
            <h1 className="text-4xl font-bold text-primary mb-4">Subscribe to Our Newsletter</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Stay ahead with BTGenZ! Get the latest biotech job alerts, internship opportunities,
              career guidance, and industry insights delivered straight to your inbox.
            </p>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="sr-only">Email Address</FormLabel>
                      <FormControl>
                        <Input 
                          type="email" 
                          placeholder="Enter your email address" 
                          {...field} 
                          className="text-base"
                          disabled={isPending}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" disabled={isPending}>
                  {isPending ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Subscribing...
                    </>
                  ) : (
                    "Subscribe Now"
                  )}
                </Button>
              </form>
            </Form>
            <p className="text-xs text-muted-foreground mt-6">
              We respect your privacy.{" "}
              <button
                onClick={onUnsubscribeClick}
                className="underline hover:text-primary focus:outline-none"
              >
                Unsubscribe
              </button>
              {" "}at any time (Unsubscribe functionality is currently under development).
            </p>
          </div>
        </SectionWrapper>
      </main>
      <Footer />
    </>
  );
}
