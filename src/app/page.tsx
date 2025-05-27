import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { HeroSection } from '@/components/btgenz/hero-section';
import { WhatIsBTGenZ } from '@/components/btgenz/what-is-btgenz';
import { WhyFollowBTGenZ } from '@/components/btgenz/why-follow-btgenz';
import { DailyUpdatesPreview } from '@/components/btgenz/daily-updates-preview';
import { CareerGuideBlock } from '@/components/btgenz/career-guide-block';
import { FeaturedJobs } from '@/components/btgenz/featured-jobs';
import { ExploreCategories } from '@/components/btgenz/explore-categories';
import { ValuePropositions } from '@/components/btgenz/value-propositions';
import { NewsSummarizer } from '@/components/btgenz/news-summarizer';
import { CommunityComments } from '@/components/btgenz/community-comments';
import { CtaConnectFollow } from '@/components/btgenz/cta-connect-follow';


export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <WhatIsBTGenZ />
        <WhyFollowBTGenZ />
        <DailyUpdatesPreview />
        <CareerGuideBlock />
        <FeaturedJobs />
        <ExploreCategories />
        <ValuePropositions />
        <NewsSummarizer />
        <CommunityComments />
        <CtaConnectFollow />
      </main>
      <Footer />
    </>
  );
}
