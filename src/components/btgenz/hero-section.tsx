import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { SectionWrapper } from '@/components/layout/section-wrapper';
import { ChevronRight } from 'lucide-react';

export function HeroSection() {
  return (
    <SectionWrapper id="hero" className="bg-gradient-to-br from-primary/10 via-background to-background pt-20 md:pt-28 lg:pt-32 pb-16 md:pb-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        {/* Optional: Add a subtle background pattern or image if desired */}
        {/* <Image src="/placeholder-hero-bg.svg" alt="Abstract background" layout="fill" objectFit="cover" /> */}
      </div>
      <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-primary mb-6">
          Is Biotech Your Future?
        </h1>
        <p className="text-lg md:text-xl text-foreground max-w-3xl mx-auto mb-10">
          Explore. Understand. Decide. From Class 10 to Career in Biotech – We’ve Got You.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg transform transition-transform hover:scale-105" asChild>
            <a href="#career-guide"> {/* Link to Career Guide Block */}
              Get Career Guidance
              <ChevronRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
          <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10 shadow-lg transform transition-transform hover:scale-105" asChild>
             <a href="#daily-updates"> {/* Link to Daily Updates Preview */}
              Follow Daily Job Updates
              <ChevronRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-32 h-32 md:w-48 md:h-48 bg-primary/20 rounded-full opacity-30 blur-2xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 md:w-48 md:h-48 bg-accent/20 rounded-full opacity-30 blur-2xl translate-x-1/2 translate-y-1/2"></div>
    </SectionWrapper>
  );
}
