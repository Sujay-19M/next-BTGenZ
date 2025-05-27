import Image from 'next/image';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { COMMUNITY_COMMENTS } from '@/lib/constants';
import type { CommunityComment } from '@/lib/constants';
import { SectionWrapper } from '@/components/layout/section-wrapper';
import { SectionTitle } from '@/components/btgenz/section-title';
import { Users2, MessageSquare } from 'lucide-react';

export function CommunityComments() {
  return (
    <SectionWrapper id="community" className="bg-muted/30">
      <SectionTitle subtitle="Hear from students who found clarity and confidence with BTGenZ.">
        What Our Students Say
      </SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-10">
        {COMMUNITY_COMMENTS.map((comment: CommunityComment) => (
          <Card key={comment.id} className="flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl overflow-hidden h-full">
            <CardHeader className="flex flex-row items-center gap-4 p-6">
              <Avatar className="h-12 w-12">
                <AvatarImage src={comment.avatarUrl} alt={comment.user} data-ai-hint={comment.dataAiHint} />
                <AvatarFallback>{comment.user.substring(0, 1)}</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="text-lg font-semibold">{comment.user}</CardTitle>
                {comment.location && <p className="text-sm text-muted-foreground">{comment.location}</p>}
              </div>
            </CardHeader>
            <CardContent className="flex-grow p-6 pt-0">
              <p className="text-md text-foreground leading-relaxed italic">"{comment.comment}"</p>
            </CardContent>
            {comment.timestamp && 
              <CardFooter className="p-6 pt-0 text-xs text-muted-foreground">
                {comment.timestamp}
              </CardFooter>
            }
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
