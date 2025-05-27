import { SectionWrapper } from '@/components/layout/section-wrapper';
import { SectionTitle } from '@/components/btgenz/section-title';
import { Lightbulb, Users, TrendingUp, Smile } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface TrustPoint {
  icon: React.ElementType;
  text: string;
}

export function WhyFollowBTGenZ() {
  const trustPoints: TrustPoint[] = [
    { icon: Lightbulb, text: "We simplify career paths (No jargon, no pressure)" },
    { icon: TrendingUp, text: "We update you daily (Jobs, Internships, Exam Dates)" },
    { icon: Users, text: "We focus on YOU (Not just the toppers — all students)" },
    { icon: Smile, text: "We’re building a community (Where questions are always welcome)" },
  ];

  return (
    <SectionWrapper id="why-follow" className="bg-background">
      <SectionTitle subtitle="Real answers from real people who've been there.">
        Why BTGenZ Should Be Your First Click
      </SectionTitle>
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <p className="text-lg md:text-xl text-foreground leading-relaxed">
            Because Google is confusing.
            <br />
            Because career counselors don’t talk biotech.
            <br />
            Because you need <span className="font-semibold text-primary">real answers</span> from real people who’ve been there.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {trustPoints.map((point, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl overflow-hidden">
              <CardHeader className="flex flex-row items-center gap-4 p-6">
                <div className="p-3 rounded-full bg-primary/10">
                  <point.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-lg font-medium text-primary">{point.text}</CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>
        
        <p className="text-lg md:text-xl text-center text-foreground leading-relaxed pt-6">
          We’re not just a blog. We’re a biotech movement — <br className="hidden sm:inline" />
          <span className="font-semibold text-accent">made for students, by students-turned-explorers.</span>
        </p>
      </div>
    </SectionWrapper>
  );
}
