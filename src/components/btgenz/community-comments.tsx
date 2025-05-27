
import Image from 'next/image';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { COMMUNITY_COMMENTS } from '@/lib/constants';
import type { CommunityComment } from '@/lib/constants';
import { SectionWrapper } from '@/components/layout/section-wrapper';
import { SectionTitle } from '@/components/btgenz/section-title';
import { Users2, MessageSquare, UserCheck, CalendarDays } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export function CommunityComments() {
  return (
    <SectionWrapper id="community" className="bg-muted/30">
      <SectionTitle subtitle="Hear from students who found clarity and confidence with BTGenZ.">
        What Our Students Say
      </SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-10">
        {COMMUNITY_COMMENTS.map((comment: CommunityComment) => (
          <Card key={comment.id} className="flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl overflow-hidden h-full bg-card">
            <CardHeader className="p-6">
              <div className="flex items-start gap-4">
                <Avatar className="h-12 w-12 border-2 border-primary/50">
                  <AvatarImage src={comment.avatarUrl} alt={comment.user} data-ai-hint={comment.dataAiHint} />
                  <AvatarFallback>{comment.user.substring(0, 1)}</AvatarFallback>
                </Avatar>
                <div className="flex-grow">
                  <div className="flex items-center justify-between">
                     <CardTitle className="text-lg font-semibold text-primary">{comment.user}</CardTitle>
                     {comment.verified && (
                        <Badge variant="secondary" className="bg-green-100 text-green-700 border-green-300 dark:bg-green-700/30 dark:text-green-300 dark:border-green-500 text-xs">
                          <UserCheck className="w-3.5 h-3.5 mr-1" />
                          Verified
                        </Badge>
                      )}
                  </div>
                  {comment.location && <p className="text-sm text-muted-foreground">{comment.location}</p>}
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
      <div className="text-center">
        <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg transform transition-transform hover:scale-105">
          <Link href="#"> {/* Placeholder for community link */}
            Join the BTGenZ Community
            <Users2 className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
    </SectionWrapper>
  );
}
