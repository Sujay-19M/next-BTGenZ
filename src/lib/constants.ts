import type { LucideIcon } from 'lucide-react';
import { Briefcase, ClipboardList, FlaskConical, BellRing, LibraryBig, Users2, Newspaper, Building2, MapPin } from 'lucide-react';

export interface FeaturedJob {
  id: string;
  title: string;
  company: string;
  location: string;
  logoUrl: string;
  dataAiHint: string;
  companyIcon: LucideIcon;
  locationIcon: LucideIcon;
}

export const FEATURED_JOBS: FeaturedJob[] = [
  { id: '1', title: 'Research Scientist - Immunology', company: 'BioInnovate Labs', location: 'Bangalore', logoUrl: 'https://placehold.co/120x80.png', dataAiHint: 'laboratory science', companyIcon: Building2, locationIcon: MapPin },
  { id: '2', title: 'Bioprocess Engineer', company: 'PharmaGen India', location: 'Hyderabad', logoUrl: 'https://placehold.co/120x80.png', dataAiHint: 'factory industry', companyIcon: Building2, locationIcon: MapPin },
  { id: '3', title: 'Clinical Research Coordinator', company: 'MediTrials Solutions', location: 'Mumbai', logoUrl: 'https://placehold.co/120x80.png', dataAiHint: 'hospital healthcare', companyIcon: Building2, locationIcon: MapPin },
  { id: '4', title: 'Bioinformatics Specialist', company: 'DataLife Sciences', location: 'Pune', logoUrl: 'https://placehold.co/120x80.png', dataAiHint: 'computer analytics', companyIcon: Building2, locationIcon: MapPin },
  { id: '5', title: 'Quality Control Analyst', company: 'ChemBio Corp', location: 'Chennai', logoUrl: 'https://placehold.co/120x80.png', dataAiHint: 'inspection quality', companyIcon: Building2, locationIcon: MapPin },
];

export interface ExploreCategory {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon;
  link: string;
}

export const EXPLORE_CATEGORIES: ExploreCategory[] = [
  { id: '1', name: 'Biotech Internships', description: 'Gain hands-on experience with leading biotech companies.', icon: Briefcase, link: '#' },
  { id: '2', name: 'Government Exams', description: 'Explore opportunities in public sector biotech roles.', icon: ClipboardList, link: '#' },
  { id: '3', name: 'Research Roles', description: 'Contribute to cutting-edge research and innovation.', icon: FlaskConical, link: '#' },
];

export interface ValueProposition {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const VALUE_PROPOSITIONS: ValueProposition[] = [
  { id: '1', title: 'Daily Job Alerts', description: 'Stay updated with the latest biotech job openings across India.', icon: BellRing },
  { id: '2', title: 'Student Resources', description: 'Access curated materials and guides for Indian biotech students.', icon: LibraryBig },
  { id: '3', title: 'Community Support', description: 'Connect with peers, mentors, and industry professionals.', icon: Users2 },
  { id: '4', title: 'AI News Briefs', description: 'Get concise summaries of the latest biotech news and breakthroughs.', icon: Newspaper },
];

export interface CommunityComment {
  id: string;
  user: string;
  avatarUrl: string;
  dataAiHint: string;
  comment: string;
  timestamp: string;
}

export const COMMUNITY_COMMENTS: CommunityComment[] = [
  { id: '1', user: 'Priya S.', avatarUrl: 'https://placehold.co/40x40.png', dataAiHint: 'student portrait', comment: 'BTGenZ helped me find my dream internship! The resources are amazing for students.', timestamp: '2 days ago' },
  { id: '2', user: 'Rajesh K.', avatarUrl: 'https://placehold.co/40x40.png', dataAiHint: 'professional person', comment: 'The AI news summarizer is a game-changer. Saves me so much time keeping up with industry trends.', timestamp: '5 days ago' },
  { id: '3', user: 'Ananya M.', avatarUrl: 'https://placehold.co/40x40.png', dataAiHint: 'scientist woman', comment: 'Great platform for connecting with other biotech enthusiasts in India. Highly recommend!', timestamp: '1 week ago' },
];
