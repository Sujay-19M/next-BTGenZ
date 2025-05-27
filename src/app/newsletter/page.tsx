"use client";

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { SectionWrapper } from '@/components/layout/section-wrapper';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail } from 'lucide-react';
import React from 'react';

export default function NewsletterPage() {
  // Basic form handling simulation
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert("Thank you for subscribing to the BTGenZ newsletter!");
    // Here you would typically send the email to your backend
    (event.target as HTMLFormElement).reset();
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
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="email"
                name="email"
                placeholder="Enter your email address"
                required
                className="text-base"
              />
              <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                Subscribe Now
              </Button>
            </form>
            <p className="text-xs text-muted-foreground mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </SectionWrapper>
      </main>
      <Footer />
    </>
  );
}
