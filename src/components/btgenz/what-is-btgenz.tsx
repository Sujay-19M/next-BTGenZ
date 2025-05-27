import { SectionWrapper } from '@/components/layout/section-wrapper';
import { SectionTitle } from '@/components/btgenz/section-title';
import { CheckCircle2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export function WhatIsBTGenZ() {
  const features = [
    "Verified job alerts",
    "Government exam prep tips",
    "Internship opportunities",
    "College admission insights",
    "Industry trends"
  ];

  return (
    <SectionWrapper id="what-is-btgenz" className="bg-muted/30">
      <SectionTitle subtitle="Your biotech buddy for navigating the path from school to career.">
        What is BTGenZ?
      </SectionTitle>
      <div className="max-w-3xl mx-auto space-y-6 text-center md:text-left">
        <p className="text-lg text-foreground leading-relaxed">
          BTGenZ is your biotech buddy. Whether you’re in Class 10 wondering what biotech is, or in Class 12 thinking about your next step, we’re here to guide you.
        </p>
        <p className="text-lg text-foreground leading-relaxed">
          We break down the biotech career path — from school to college to real-world jobs — so you know exactly what to expect.
        </p>
        
        <Card className="shadow-lg rounded-xl overflow-hidden">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold text-primary mb-4 text-center">We also post:</h3>
            <ul className="space-y-3">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <p className="text-lg text-foreground leading-relaxed font-medium pt-4">
          Think of us as your first step toward a future in biotechnology.
        </p>
      </div>
    </SectionWrapper>
  );
}
