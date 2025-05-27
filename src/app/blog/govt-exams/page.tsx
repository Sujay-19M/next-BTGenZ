
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { SectionWrapper } from '@/components/layout/section-wrapper';

export default function GovtExamsPage() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <SectionWrapper>
          <div className="text-center py-16">
            <h1 className="text-4xl font-bold text-primary mb-4">Government Exam Tips</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Preparing for government exams in the biotech field? We provide tips, resources, and updates
              to help you succeed in exams for public sector roles.
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
              Valuable content and preparation guides are on their way!
            </p>
          </div>
        </SectionWrapper>
      </main>
      <Footer />
    </>
  );
}
