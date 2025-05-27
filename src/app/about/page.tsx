
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { SectionWrapper } from '@/components/layout/section-wrapper';

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <SectionWrapper>
          <div className="text-center py-16">
            <h1 className="text-4xl font-bold text-primary mb-4">About BTGenZ</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Welcome to BTGenZ! We are dedicated to helping students explore and navigate the exciting world of biotechnology.
              Our mission is to provide clear guidance, up-to-date information, and a supportive community for aspiring biotech professionals in India.
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
              More content coming soon!
            </p>
          </div>
        </SectionWrapper>
      </main>
      <Footer />
    </>
  );
}
