import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { VALUE_PROPOSITIONS } from '@/lib/constants';
import type { ValueProposition } from '@/lib/constants';
import { SectionWrapper } from '@/components/layout/section-wrapper';
import { SectionTitle } from '@/components/btgenz/section-title';

export function ValuePropositions() {
  return (
    <SectionWrapper id="value-propositions" className="bg-background">
      <SectionTitle subtitle="Discover how BTGenZ empowers your biotech career journey in India.">
        Why Choose BTGenZ?
      </SectionTitle>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {VALUE_PROPOSITIONS.map((prop: ValueProposition) => (
          <Card key={prop.id} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl overflow-hidden">
            <CardHeader className="flex flex-col items-center p-6">
              <div className="p-3 rounded-full bg-primary/10 mb-4">
                <prop.icon className="w-10 h-10 text-primary" />
              </div>
              <CardTitle className="text-lg font-semibold">{prop.title}</CardTitle>
            </CardHeader>
            <CardContent className="p-6 pt-0">
              <p className="text-sm text-muted-foreground">{prop.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
