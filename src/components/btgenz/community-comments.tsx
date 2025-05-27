

import Image from 'next/image';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { COMMUNITY_COMMENTS } from '@/lib/constants';
import type { CommunityComment } from '@/lib/constants';
import { SectionWrapper } from '@/components/layout/section-wrapper';
import { SectionTitle } from '@/components/btgenz/section-title';
import { Users2, UserCheck, CalendarDays } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

export function CommunityComments() {
  const duplicatedComments = [...COMMUNITY_COMMENTS, ...COMMUNITY_COMMENTS];

  // Constants for animation calculation
  const cardWidthPx = 350; // Corresponds to approx w-[350px] or min-w-[350px]
  const gapPx = 24; // Corresponds to gap-x-6
  const effectiveCardWidth = cardWidthPx + gapPx;
  const scrollWidth = COMMUNITY_COMMENTS.length * effectiveCardWidth;
  const animationSpeedPxPerSecond = 60; // Adjust for desired speed
  const animationDurationSeconds = scrollWidth / animationSpeedPxPerSecond;

  return (
    <SectionWrapper id="community" className="bg-background"> {/* Changed background for better contrast if form is on muted */}
      <SectionTitle subtitle="Hear from students who found clarity and confidence with BTGenZ.">
        What Our Students Say
      </SectionTitle>
      <div className="w-full overflow-x-hidden pb-4">
        <div
          className="flex animate-marquee-slow pause-on-hover gap-x-6"
          style={{ '--marquee-duration': `${animationDurationSeconds}s`, '--gap-width': `${gapPx}px` } as React.CSSProperties}
        >
          {duplicatedComments.map((comment: CommunityComment, index: number) => (
            <Card
              key={`${comment.id}-${index < COMMUNITY_COMMENTS.length ? 'original' : 'duplicate'}`}
              className={cn(
                "flex flex-col shadow-lg rounded-xl overflow-hidden h-full bg-card",
                "flex-shrink-0 w-[350px]" // Fixed width for cards
              )}
            >
              <CardHeader className="p-6">
                <div className="flex items-start gap-4">
                  <Avatar className="h-12 w-12 border-2 border-primary/50">
                    <AvatarImage src={comment.avatarUrl} alt={comment.user} data-ai-hint={comment.dataAiHint} />
                    <AvatarFallback>{comment.user.substring(0, 1)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-grow overflow-hidden"> {/* Added overflow-hidden for long names */}
                    <div className="flex items-center justify-between">
                       <CardTitle className="text-lg font-semibold text-primary truncate"> {/* Added truncate for long names */}
                         {comment.user}
                       </CardTitle>
                       {comment.verified && (
                          <Badge variant="secondary" className="flex-shrink-0 bg-green-100 text-green-700 border-green-300 dark:bg-green-700/30 dark:text-green-300 dark:border-green-500 text-xs">
                            <UserCheck className="w-3.5 h-3.5 mr-1" />
                            Verified
                          </Badge>
                        )}
                    </div>
                    {comment.location && <p className="text-sm text-muted-foreground truncate">{comment.location}</p>} {/* Added truncate */}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-grow p-6 pt-0">
                <p className="text-md text-foreground leading-relaxed italic">"{comment.comment}"</p>
              </CardContent>
              <CardFooter className="p-6 pt-2 text-xs text-muted-foreground flex items-center justify-start">
                <CalendarDays className="w-3.5 h-3.5 mr-1.5" />
                <span>Posted: {comment.timestamp}</span>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
      <div className="text-center mt-10">
        <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg transform transition-transform hover:scale-105">
          <Link href="#feedback-form">
            Share Your Experience
            <Users2 className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
    </SectionWrapper>
  );
}
