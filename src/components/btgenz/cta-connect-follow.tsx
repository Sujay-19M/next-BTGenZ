import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { SectionWrapper } from '@/components/layout/section-wrapper';
import { SectionTitle } from '@/components/btgenz/section-title';
import { SOCIAL_LINKS } from '@/lib/constants';
import type { SocialLink } from '@/lib/constants';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ArrowRight } from 'lucide-react';

export function CtaConnectFollow() {
  return (
    <SectionWrapper id="connect" className="bg-primary/5">
      <SectionTitle subtitle="We post daily updates on Instagram, LinkedIn, and Telegram. Follow us to stay in the loop.">
        Stay One Step Ahead
      </SectionTitle>
      <div className="max-w-lg mx-auto text-center">
        <div className="flex justify-center items-center gap-4 md:gap-6 mb-10">
          <TooltipProvider>
            {SOCIAL_LINKS.map((social: SocialLink) => (
              <Tooltip key={social.id}>
                <TooltipTrigger asChild>
                  <Link href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label || social.name}>
                    <Button variant="outline" size="icon" className="rounded-full h-14 w-14 border-primary text-primary hover:bg-primary/10 transform transition-transform hover:scale-110">
                      <social.icon className="h-7 w-7" />
                    </Button>
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{social.label || social.name}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </TooltipProvider>
        </div>
        <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg transform transition-transform hover:scale-105">
          <Link href={SOCIAL_LINKS.find(s => s.id === 'instagram')?.href || '#'}> {/* Default to Instagram or a general follow page */}
            Follow BTGenZ Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
    </SectionWrapper>
  );
}
