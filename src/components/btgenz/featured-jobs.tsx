
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FEATURED_JOBS } from '@/lib/constants';
import type { FeaturedJob } from '@/lib/constants';
import { SectionWrapper } from '@/components/layout/section-wrapper';
import { SectionTitle } from '@/components/btgenz/section-title';

export function FeaturedJobs() {
  return (
    <SectionWrapper id="featured-jobs" className="bg-background">
      <SectionTitle subtitle="Explore top opportunities from leading biotech companies in India.">
        Featured Biotech Jobs
      </SectionTitle>
      <div className="relative">
        <div className="flex overflow-x-auto space-x-4 pb-4 scrollbar-thin scrollbar-thumb-primary/50 scrollbar-track-primary/10">
          {FEATURED_JOBS.map((job: FeaturedJob) => (
            <Card key={job.id} className="min-w-[300px] md:min-w-[350px] flex-shrink-0 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl overflow-hidden">
              <CardHeader className="p-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl font-semibold text-primary">{job.title}</CardTitle>
                    <CardDescription className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                      <job.companyIcon className="w-4 h-4" /> {job.company}
                    </CardDescription>
                    <CardDescription className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                       <job.locationIcon className="w-4 h-4" /> {job.location}
                    </CardDescription>
                  </div>
                   <Image
                      src={job.logoUrl}
                      alt={`${job.company} logo - ${job.title}`}
                      width={60}
                      height={40}
                      className="rounded object-contain"
                      data-ai-hint={job.dataAiHint}
                    />
                </div>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/10">
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        {/* Optional: Add left/right scroll buttons for better UX if many items */}
      </div>
    </SectionWrapper>
  );
}
