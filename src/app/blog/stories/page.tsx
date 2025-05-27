
import type { Metadata } from 'next';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { SectionWrapper } from '@/components/layout/section-wrapper';

export const metadata: Metadata = {
  title: "Biotech Success Stories in India - BTGenZ Community",
  description: "Be inspired by the journeys of individuals in the Indian biotech field. Read success stories from students, researchers, and professionals in the BTGenZ community.",
  openGraph: {
    title: "Biotech Success Stories from India | BTGenZ",
    description: "Inspiring stories from the BTGenZ community, showcasing achievements and experiences in the Indian biotechnology sector.",
    url: "/blog/stories",
    type: "website",
  },
  twitter: {
    title: "Inspiring Biotech Journeys in India | BTGenZ Success Stories",
    description: "Read success stories from the BTGenZ community and get inspired for your own biotech career path in India.",
  },
};

export default function SuccessStoriesPage() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <SectionWrapper>
          <div className="text-center py-16">
            <h1 className="text-4xl font-bold text-primary mb-4">Success Stories</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Be inspired by the journeys of individuals who have made their mark in the biotech field.
              Read success stories from students, researchers, and professionals in our community.
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
              We will be featuring inspiring stories soon!
            </p>
          </div>
        </SectionWrapper>
      </main>
      <Footer />
    </>
  );
}
