
"use client";

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
import { subscribeToNewsletter, handleUnsubscribeClick } from "./actions";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const newsletterFormSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
});

type NewsletterFormValues = z.infer<typeof newsletterFormSchema>;

export default function NewsletterPage() {
  const { toast } = useToast();
  const [isPending, startTransition] = useTransition();
  const [formError, setFormError] = useState<string | null>(null);
  const [formSuccess, setFormSuccess] = useState<string | null>(null);

  const form = useForm<NewsletterFormValues>({
    resolver: zodResolver(newsletterFormSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(data: NewsletterFormValues) {
    setFormError(null);
    setFormSuccess(null);
    startTransition(async () => {
      const formData = new FormData();
      formData.append("email", data.email);

      const result = await subscribeToNewsletter(formData);

      if (result.success) {
        toast({
          title: "Subscribed!",
          description: result.message,
        });
        setFormSuccess(result.message);
        form.reset();
      } else {
        toast({
          title: "Subscription Failed",
          description: result.message || "Could not subscribe. Please try again.",
          variant: "destructive",
        });
        setFormError(result.message || "Could not subscribe. Please try again.");
        if (result.errors?.email) {
          form.setError("email", { type: "manual", message: result.errors.email.join(", ") });
        }
      }
    });
  }

  const onUnsubscribeClick = async () => {
    const result = await handleUnsubscribeClick();
    alert(result.message); // Simple alert for now
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

                {formSuccess && (
                  <Alert variant="default" className="bg-green-50 dark:bg-green-900/30 border-green-300 dark:border-green-700 text-left">
                    <Send className="h-4 w-4 text-green-600 dark:text-green-400" />
                    <AlertTitle className="text-green-700 dark:text-green-300 font-semibold">Success!</AlertTitle>
                    <AlertDescription className="text-green-600 dark:text-green-400">
                      {formSuccess}
                    </AlertDescription>
                  </Alert>
                )}
                {formError && (
                  <Alert variant="destructive" className="text-left">
                    <Info className="h-4 w-4" />
                    <AlertTitle className="font-semibold">Subscription Error</AlertTitle>
                    <AlertDescription>
                      {formError}
                    </AlertDescription>
                  </Alert>
                )}

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
              {" "}at any time.
            </p>
             <Alert variant="default" className="mt-8 text-left text-sm">
              <Info className="h-4 w-4" />
              <AlertTitle>About Email Storage & Updates</AlertTitle>
              <AlertDescription>
                Currently, email subscriptions are simulated for demonstration. For full functionality,
                integration with a backend database (like Supabase or Firebase) is required to store emails
                and manage newsletter campaigns. The "Unsubscribe" link is also a placeholder.
              </AlertDescription>
            </Alert>
          </div>
        </SectionWrapper>
      </main>
      <Footer />
    </>
  );
}
