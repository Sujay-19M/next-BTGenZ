
import type { Metadata } from 'next';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { SectionWrapper } from '@/components/layout/section-wrapper';

export const metadata: Metadata = {
  title: "Biotech Internships in India - Opportunities for Students",
  description: "Find biotech internship opportunities in India. Gain hands-on experience and kickstart your career with BTGenZ's curated list of internships.",
  openGraph: {
    title: "Biotech Internships in India - BTGenZ",
    description: "Explore biotech internships for students and freshers across India. Practical experience for your future career, curated by BTGenZ.",
    url: "/blog/internships",
    type: "website",
  },
  twitter: {
    title: "Find Biotech Internships in India | BTGenZ",
    description: "Looking for biotech internships? BTGenZ lists opportunities for students to gain real-world experience.",
  },
};

export default function InternshipsPage() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <SectionWrapper>
          <div className="text-center py-16">
            <h1 className="text-4xl font-bold text-primary mb-4">Biotech Internships</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Find exciting internship opportunities to kickstart your career in biotechnology.
              Gain hands-on experience and learn from industry experts.
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
              This section will feature curated internship listings. Coming soon!
            </p>
          </div>
        </SectionWrapper>
      </main>
      <Footer />
    </>
  );
}
