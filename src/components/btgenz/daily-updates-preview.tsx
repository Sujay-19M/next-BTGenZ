import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DAILY_UPDATES_PREVIEW } from '@/lib/constants';
import type { DailyUpdate } from '@/lib/constants';
import { SectionWrapper } from '@/components/layout/section-wrapper';
import { SectionTitle } from '@/components/btgenz/section-title';
import { MapPin, CalendarDays, Users, ArrowRight, Briefcase, Award } from 'lucide-react';

export function DailyUpdatesPreview() {
  return (
    <SectionWrapper id="daily-updates" className="bg-muted/30">
      <SectionTitle subtitle="Latest verified biotech job and internship alerts, curated for students and freshers.">
        Fresh from the Lab: Today’s Top Picks
      </SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-10">
        {DAILY_UPDATES_PREVIEW.map((update: DailyUpdate) => (
          <Link href={update.link} key={update.id} className="group">
            <Card className="h-full flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl overflow-hidden">
              <CardHeader className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-xl font-semibold text-primary group-hover:underline">{update.title}</CardTitle>
                  {update.type === 'Job' ? <Briefcase className="w-6 h-6 text-accent" /> : <Award className="w-6 h-6 text-accent" />}
                </div>
                <CardDescription className="text-sm text-muted-foreground flex items-center gap-2">
                  <MapPin className="w-4 h-4" /> {update.location}
                </CardDescription>
                {update.deadline && (
                  <CardDescription className="text-sm text-muted-foreground flex items-center gap-2 mt-1">
                    <CalendarDays className="w-4 h-4" /> Deadline: {update.deadline}
                  </CardDescription>
                )}
              </CardHeader>
              <CardContent className="flex-grow p-6 pt-0">
                <div className="flex items-center gap-2 text-sm text-foreground">
                  <Users className="w-4 h-4 text-primary" />
                  <span className="font-medium">Who it’s for:</span>
                </div>
                <p className="text-sm text-muted-foreground ml-6">{update.forWhom}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
      <div className="text-center">
        <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg transform transition-transform hover:scale-105">
          <Link href="/blog/job-alerts">
            Browse All Opportunities
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
    </SectionWrapper>
  );
}
