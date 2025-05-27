import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { COMMUNITY_COMMENTS } from '@/lib/constants';
import type { CommunityComment } from '@/lib/constants';
import { SectionWrapper } from '@/components/layout/section-wrapper';
import { SectionTitle } from '@/components/btgenz/section-title';
import { MessageCircle } from 'lucide-react';

export function CommunityComments() {
  return (
    <SectionWrapper id="community" className="bg-muted/30">
      <SectionTitle subtitle="Hear from biotech students and professionals who love BTGenZ.">
        Community Voices
      </SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {COMMUNITY_COMMENTS.map((comment: CommunityComment) => (
          <Card key={comment.id} className="flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl overflow-hidden">
            <CardHeader className="flex flex-row items-center gap-3 p-6">
              <Avatar>
                <AvatarImage src={comment.avatarUrl} alt={comment.user} data-ai-hint={comment.dataAiHint} />
                <AvatarFallback>{comment.user.substring(0, 2).toUpperCase()}</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold">{comment.user}</p>
                <p className="text-xs text-muted-foreground">{comment.timestamp}</p>
              </div>
            </CardHeader>
            <CardContent className="flex-grow p-6 pt-0">
              <p className="text-sm text-foreground leading-relaxed">"{comment.comment}"</p>
            </CardContent>
            <CardFooter className="p-6 pt-0">
                <MessageCircle className="w-4 h-4 text-primary mr-2" />
                <span className="text-xs text-primary font-medium">Verified User</span>
            </CardFooter>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
