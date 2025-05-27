
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { SectionWrapper } from '@/components/layout/section-wrapper';

export default function JobAlertsPage() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <SectionWrapper>
          <div className="text-center py-16">
            <h1 className="text-4xl font-bold text-primary mb-4">Biotech Job Alerts</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Stay updated with the latest job opportunities in the biotech sector across India.
              We curate and post verified job alerts relevant for students, freshers, and early-career professionals.
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
              Content for this section is coming soon. Check back regularly!
            </p>
          </div>
        </SectionWrapper>
      </main>
      <Footer />
    </>
  );
}
