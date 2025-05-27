
import type { Metadata } from 'next';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { SectionWrapper } from '@/components/layout/section-wrapper';

export const metadata: Metadata = {
  title: "Biotech Industry Insights & Trends in India",
  description: "Explore the latest trends, innovations, and developments in the Indian biotech industry. BTGenZ provides insights to keep you informed.",
  openGraph: {
    title: "Biotech Industry Insights & Trends in India | BTGenZ",
    description: "Stay updated on the evolving landscape of the Indian biotech industry. Analysis and articles from BTGenZ.",
    url: "/blog/industry",
    type: "website",
  },
  twitter: {
    title: "Indian Biotech Industry News & Trends | BTGenZ",
    description: "Keep pace with the biotech industry in India. Insights and updates from BTGenZ.",
  },
};

export default function IndustryInsightsPage() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <SectionWrapper>
          <div className="text-center py-16">
            <h1 className="text-4xl font-bold text-primary mb-4">Industrial Insights</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore the latest trends, innovations, and developments in the biotech industry.
              We provide insights to keep you informed about the evolving landscape.
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
              Stay tuned for articles and analysis on the biotech industry.
            </p>
          </div>
        </SectionWrapper>
      </main>
      <Footer />
    </>
  );
}
