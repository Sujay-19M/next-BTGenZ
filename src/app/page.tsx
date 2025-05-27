
import type { Metadata } from 'next';
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
import { FeedbackForm } from '@/components/btgenz/feedback-form';
import { CtaConnectFollow } from '@/components/btgenz/cta-connect-follow';

// Metadata for the homepage can be here or in layout.tsx (layout.tsx acts as default)
// If defined here, it overrides layout.tsx for this specific page.
export const metadata: Metadata = {
  title: 'BTGenZ - Your Gateway to Biotech Careers in India', // More specific for homepage
  description: 'BTGenZ helps students explore biotech careers, find jobs & internships in India, get AI news summaries, and join a supportive community. Start your biotech journey!',
  openGraph: {
    title: 'BTGenZ - Explore Biotechnology Careers & Opportunities in India',
    description: 'Your ultimate guide for biotech careers, jobs, internships, and resources in India. Perfect for students and early-career professionals. Powered by BTGenZ.',
    url: '/', // Assuming this is the homepage
    // Add an image for homepage OG
    // images: [
    //   {
    //     url: '/og-homepage.png', // Replace with your actual homepage OG image
    //     width: 1200,
    //     height: 630,
    //     alt: 'BTGenZ Homepage',
    //   },
    // ],
  },
  twitter: {
    title: 'BTGenZ - Biotech Career Guidance for Indian Students',
    description: 'Navigate your biotech career path in India with BTGenZ. We offer job alerts, resources, and community support.',
  },
};


export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <WhatIsBTGenZ />
        <WhyFollowBTGenZ />
        <FeaturedJobs /> {/* Added from PRD list, was missing */}
        <ExploreCategories /> {/* Added from PRD list, was missing */}
        <ValuePropositions /> {/* Added from PRD list, was missing */}
        <DailyUpdatesPreview />
        <NewsSummarizer /> {/* Added from PRD list, was missing */}
        <CareerGuideBlock />
        <CommunityComments />
        <FeedbackForm />
        <CtaConnectFollow />
      </main>
      <Footer />
    </>
  );
}
