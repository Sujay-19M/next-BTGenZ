
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { SectionWrapper } from '@/components/layout/section-wrapper';

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
