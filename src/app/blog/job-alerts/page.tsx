
import type { Metadata } from 'next';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { SectionWrapper } from '@/components/layout/section-wrapper';

export const metadata: Metadata = {
  title: "Biotech Job Alerts in India - Latest Openings",
  description: "Stay updated with the latest biotech job opportunities for students, freshers, and professionals across India. Curated and verified by BTGenZ.",
  openGraph: {
    title: "Biotech Job Alerts in India - BTGenZ",
    description: "Find current job openings in the Indian biotech sector. BTGenZ provides daily alerts for aspiring biotechnologists.",
    url: "/blog/job-alerts",
    type: "website", // Or "article" if this page functions like one
  },
  twitter: {
    title: "Latest Biotech Jobs in India | BTGenZ",
    description: "Your source for daily biotech job alerts. Don't miss out on opportunities in India's growing biotech industry.",
  },
};

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
