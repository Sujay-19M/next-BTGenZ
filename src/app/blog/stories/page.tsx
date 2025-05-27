
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { SectionWrapper } from '@/components/layout/section-wrapper';

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

    