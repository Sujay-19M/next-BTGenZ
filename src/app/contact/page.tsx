
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { SectionWrapper } from '@/components/layout/section-wrapper';
import { Button } from '@/components/ui/button';
import { FOOTER_CONTACT_EMAIL } from '@/lib/constants';
import { Mail } from 'lucide-react';

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <SectionWrapper>
          <div className="text-center py-16 max-w-xl mx-auto">
            <h1 className="text-4xl font-bold text-primary mb-6">Contact Us</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Have questions, suggestions, or just want to say hello? We'd love to hear from you!
              Reach out to us via email, and we'll get back to you as soon as possible.
            </p>
            <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <a href={`mailto:${FOOTER_CONTACT_EMAIL}`}>
                <Mail className="mr-2 h-5 w-5" /> Email Us: {FOOTER_CONTACT_EMAIL}
              </a>
            </Button>
            <p className="text-muted-foreground mt-8 text-sm">
              You can also connect with us on our social media channels linked in the footer.
            </p>
          </div>
        </SectionWrapper>
      </main>
      <Footer />
    </>
  );
}
