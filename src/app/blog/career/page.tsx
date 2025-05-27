
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { SectionWrapper } from '@/components/layout/section-wrapper';

export default function CareerGuidancePage() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <SectionWrapper>
          <div className="text-center py-16">
            <h1 className="text-4xl font-bold text-primary mb-4">Career Guidance</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Navigating your career path in biotechnology can be challenging. We offer guidance,
              advice, and resources to help you make informed decisions and achieve your career goals.
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
              Comprehensive career guides and articles are coming soon!
            </p>
          </div>
        </SectionWrapper>
      </main>
      <Footer />
    </>
  );
}
