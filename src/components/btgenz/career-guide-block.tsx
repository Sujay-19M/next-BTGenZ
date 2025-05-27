
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { SectionWrapper } from '@/components/layout/section-wrapper';
import { SectionTitle } from '@/components/btgenz/section-title';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { HelpCircle, ChevronRight } from 'lucide-react';

export function CareerGuideBlock() {
  return (
    <SectionWrapper id="career-guide" className="bg-background">
      <SectionTitle subtitle="Take a breather. We’re here to help you figure things out — no pressure, no boring lectures. Just solid advice.">
        Still Not Sure if Biotech is for You?
      </SectionTitle>
      <div className="max-w-2xl mx-auto">
        <Card className="shadow-xl rounded-xl overflow-hidden text-center">
          <CardHeader className="p-8 bg-gradient-to-br from-primary/10 via-transparent to-transparent">
            <div className="flex justify-center mb-4">
              <HelpCircle className="w-16 h-16 text-primary" />
            </div>
            <CardTitle className="text-2xl md:text-3xl font-semibold text-primary">
              Let's Explore Together
            </CardTitle>
            <CardDescription className="text-muted-foreground mt-2">
              Uncertainty is okay. We provide simple tools and insights.
            </CardDescription>
          </CardHeader>
          <CardContent className="p-8 space-y-6">
            <p className="text-lg text-foreground">
              Feeling overwhelmed by choices? Our <span className="font-semibold text-accent">60-second Biotech Career Fit Quiz</span> might offer some clarity. Or, dive into our guide: <Link href="/blog/is-biotech-for-me" className="text-primary hover:underline font-medium">"Is Biotech Really for Me?"</Link>
            </p>
          </CardContent>
          <CardFooter className="p-8 pt-0 flex justify-center">
            <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg transform transition-transform hover:scale-105">
              <Link href="/blog/career"> 
                Explore Biotech Careers
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </SectionWrapper>
  );
}
