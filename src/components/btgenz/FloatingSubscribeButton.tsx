
"use client";

import { useState, useTransition } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { MailPlus, Loader2, Send } from "lucide-react";

const WORKER_URL = 'https://btgenz-subscribers.sujay-m-1194.workers.dev';

const newsletterFormSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
});
type NewsletterFormValues = z.infer<typeof newsletterFormSchema>;

export function FloatingSubscribeButton() {
  const { toast } = useToast();
  const [isPending, startTransition] = useTransition();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

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
            description: responseText || "You've been successfully subscribed.",
          });
          form.reset();
          setIsDialogOpen(false); // Close dialog on success
        } else {
          toast({
            title: "Subscription Failed",
            description: responseText || "Could not subscribe. Please try again.",
            variant: "destructive",
          });
        }
      } catch (error) {
        console.error("Subscription error:", error);
        toast({
          title: "Subscription Error",
          description: "An unexpected error occurred. Please try again.",
          variant: "destructive",
        });
      }
    });
  }

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Button
          variant="default"
          size="icon"
          className="fixed bottom-8 right-8 md:bottom-[35px] md:right-[35px] h-14 w-14 md:h-16 md:w-16 rounded-full shadow-2xl animate-pulse-glow z-50 bg-primary hover:bg-primary/90 text-primary-foreground"
          aria-label="Subscribe to newsletter"
        >
          <MailPlus className="h-6 w-6 md:h-8 md:w-8" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-2xl text-primary flex items-center gap-2">
            <MailPlus className="h-6 w-6" /> Stay Updated!
          </DialogTitle>
          <DialogDescription>
            Subscribe to get the latest biotech news, job alerts, and career insights directly to your inbox.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 py-4">
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
            <DialogFooter>
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" disabled={isPending}>
                {isPending ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Subscribing...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" /> Subscribe Now
                  </>
                )}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
