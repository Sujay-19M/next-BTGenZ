import type { LucideIcon } from 'lucide-react';
import { Briefcase, ClipboardList, FlaskConical, BellRing, LibraryBig, Users2, Newspaper, Building2, MapPin, CalendarDays, UserCheck, Instagram, Linkedin, Send, Youtube } from 'lucide-react';

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
  location?: string;
}

export const COMMUNITY_COMMENTS: CommunityComment[] = [
  { id: '1', user: 'Ananya', location: 'Class 12, Kolkata', avatarUrl: 'https://placehold.co/40x40.png', dataAiHint: 'student girl', comment: 'BTGenZ helped me understand the reality of biotech jobs after school. Super grateful!', timestamp: '' },
  { id: '2', user: 'Rohan', location: 'Class 10, Pune', avatarUrl: 'https://placehold.co/40x40.png', dataAiHint: 'student boy', comment: 'I was clueless about biotech after 10th. BTGenZ gave me clarity and confidence.', timestamp: '' },
];

export interface DailyUpdate {
  id: string;
  type: 'Job' | 'Internship';
  title: string;
  location: string;
  deadline?: string;
  forWhom: string;
  link: string;
}

export const DAILY_UPDATES_PREVIEW: DailyUpdate[] = [
  { id: 'du1', type: 'Internship', title: 'Research Intern (Genomics)', location: 'Bangalore', deadline: '2024-08-15', forWhom: 'B.Sc/M.Sc Biotech Students', link: '#' },
  { id: 'du2', type: 'Job', title: 'Jr. Lab Technician', location: 'Remote/Hyderabad', deadline: '2024-08-20', forWhom: 'Diploma/B.Sc MLT/Biotech Freshers', link: '#' },
  { id: 'du3', type: 'Internship', title: 'Content Writing (Biotech)', location: 'Work From Home', forWhom: 'Students with good writing skills', link: '#' },
];

export interface SocialLink {
  id: string;
  name: string;
  icon: LucideIcon;
  href: string;
  label?: string;
}

export const SOCIAL_LINKS: SocialLink[] = [
  { id: 'insta', name: 'Instagram', icon: Instagram, href: '#', label: 'Follow on Instagram' },
  { id: 'linkedin', name: 'LinkedIn', icon: Linkedin, href: '#', label: 'Connect on LinkedIn' },
  { id: 'telegram', name: 'Telegram', icon: Send, href: '#', label: 'Join on Telegram' },
  { id: 'youtube', name: 'YouTube', icon: Youtube, href: '#', label: 'Subscribe on YouTube (Coming Soon)' },
];
