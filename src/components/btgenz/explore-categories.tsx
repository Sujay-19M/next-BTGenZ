import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { EXPLORE_CATEGORIES } from '@/lib/constants';
import type { ExploreCategory } from '@/lib/constants';
import { SectionWrapper } from '@/components/layout/section-wrapper';
import { SectionTitle } from '@/components/btgenz/section-title';
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';

export function ExploreCategories() {
  return (
    <SectionWrapper id="categories" className="bg-muted/30">
      <SectionTitle subtitle="Find internships, government exams, and research roles tailored for you.">
        Explore by Category
      </SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {EXPLORE_CATEGORIES.map((category: ExploreCategory) => (
          <Link href={category.link} key={category.id} className="group">
            <Card className="h-full flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl overflow-hidden">
              <CardHeader className="flex flex-row items-center gap-4 p-6">
                <category.icon className="w-10 h-10 text-primary" />
                <CardTitle className="text-xl font-semibold">{category.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow p-6 pt-0">
                <CardDescription>{category.description}</CardDescription>
              </CardContent>
              <div className="p-6 pt-0">
                 <Button variant="ghost" className="text-primary group-hover:underline p-0">
                    Learn More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </SectionWrapper>
  );
}
