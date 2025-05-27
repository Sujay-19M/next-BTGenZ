import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { FeaturedJobs } from '@/components/btgenz/featured-jobs';
import { ExploreCategories } from '@/components/btgenz/explore-categories';
import { ValuePropositions } from '@/components/btgenz/value-propositions';
import { CommunityComments } from '@/components/btgenz/community-comments';
import { NewsSummarizer } from '@/components/btgenz/news-summarizer';

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <FeaturedJobs />
        <ExploreCategories />
        <ValuePropositions />
        <NewsSummarizer />
        <CommunityComments />
      </main>
      <Footer />
    </>
  );
}
