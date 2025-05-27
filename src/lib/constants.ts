
import type { LucideIcon } from 'lucide-react';
import { Briefcase, ClipboardList, FlaskConical, BellRing, LibraryBig, Users2, Newspaper, Building2, MapPin, CalendarDays, UserCheck, Instagram, Linkedin, Send, Youtube, BookOpen, CheckCircle, FileText, HelpCircle, Lightbulb, Search, Menu, Milestone, Dna, Leaf, Factory, TestTube, BrainCircuit, Sparkles, Target, Microscope, Mail } from 'lucide-react';

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
  { id: '1', name: 'Biotech Internships', description: 'Gain hands-on experience with leading biotech companies.', icon: Briefcase, link: '/blog/internships' },
  { id: '2', name: 'Government Exams', description: 'Explore opportunities in public sector biotech roles.', icon: ClipboardList, link: '/blog/govt-exams' },
  { id: '3', name: 'Research Roles', description: 'Contribute to cutting-edge research and innovation.', icon: FlaskConical, link: '/blog/career' }, // Updated link to general career page as research is broad
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
  verified?: boolean;
}

export const COMMUNITY_COMMENTS: CommunityComment[] = [
  {
    id: '1',
    user: 'Ananya S.',
    location: 'Class 12, Kolkata',
    avatarUrl: 'https://placehold.co/48x48.png',
    dataAiHint: 'student girl',
    comment: 'BTGenZ helped me understand the reality of biotech jobs after school. Super grateful!',
    timestamp: '3 days ago',
    verified: true,
  },
  {
    id: '2',
    user: 'Rohan K.',
    location: 'Class 10, Pune',
    avatarUrl: 'https://placehold.co/48x48.png',
    dataAiHint: 'student boy',
    comment: 'I was clueless about biotech after 10th. BTGenZ gave me clarity and confidence.',
    timestamp: '1 week ago',
    verified: true,
  },
  {
    id: '3',
    user: 'Priya V.',
    location: 'B.Tech Biotech, Bangalore',
    avatarUrl: 'https://placehold.co/48x48.png',
    dataAiHint: 'female student',
    comment: 'The daily job updates are a lifesaver! Found my first internship through BTGenZ. The insights on government exams are also super helpful.',
    timestamp: '2 days ago',
    verified: true,
  },
  {
    id: '4',
    user: 'Rajesh M.',
    location: 'Aspiring Researcher, Delhi',
    avatarUrl: 'https://placehold.co/48x48.png',
    dataAiHint: 'male researcher',
    comment: "BTGenZ's career quiz really helped me narrow down my options in biotech. Highly recommend! The community is very supportive too.",
    timestamp: '5 days ago',
    verified: true,
  },
  {
    id: '5',
    user: 'Ananya M.',
    location: 'M.Sc. Student, Chennai',
    avatarUrl: 'https://placehold.co/48x48.png',
    dataAiHint: 'young woman',
    comment: 'Finally, a platform that understands the confusion students face. The articles on industry trends are so insightful and well-researched.',
    timestamp: '1 week ago',
    verified: true,
  },
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
  { id: 'du1', type: 'Internship', title: 'Research Intern (Genomics)', location: 'Bangalore', deadline: '2024-08-15', forWhom: 'B.Sc/M.Sc Biotech Students', link: '/blog/internships' }, // Updated link
  { id: 'du2', type: 'Job', title: 'Jr. Lab Technician', location: 'Remote/Hyderabad', deadline: '2024-08-20', forWhom: 'Diploma/B.Sc MLT/Biotech Freshers', link: '/blog/job-alerts' }, // Updated link
  { id: 'du3', type: 'Internship', title: 'Content Writing (Biotech)', location: 'Work From Home', forWhom: 'Students with good writing skills', link: '/blog/internships' }, // Updated link
];

export interface SocialLink {
  id: string;
  name: string;
  icon: LucideIcon;
  href: string;
  label?: string;
}

export const SOCIAL_LINKS: SocialLink[] = [
  { id: 'insta', name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/btgenz_official', label: 'Follow on Instagram' },
  { id: 'linkedin', name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/company/btgenz', label: 'Connect on LinkedIn' },
  { id: 'telegram', name: 'Telegram', icon: Send, href: 'https://t.me/btgenz', label: 'Join on Telegram' },
  { id: 'youtube', name: 'YouTube', icon: Youtube, href: '#', label: 'Subscribe on YouTube (Coming Soon)' },
];

// Navigation Constants
export interface NavLinkItem {
  href: string;
  label: string;
  description?: string; // For NavigationMenuContent
  icon?: LucideIcon; // Optional icon for menu items
}

export interface NavCategory {
  title: string;
  items: NavLinkItem[];
}

export const HEADER_NAV_CONFIG: NavCategory[] = [
  {
    title: 'About',
    items: [
      { href: '/about', label: 'About Us', description: 'Learn more about BTGenZ and our mission.', icon: Users2 },
      { href: '/contact', label: 'Contact Us', description: 'Get in touch with our team.', icon: Mail },
    ],
  },
  {
    title: 'Blog & Updates',
    items: [
      { href: '/blog/job-alerts', label: 'Job Alerts', description: 'Latest job opportunities in biotech.', icon: BellRing },
      { href: '/blog/internships', label: 'Internships', description: 'Find biotech internships for students.', icon: Briefcase },
      { href: '/blog/govt-exams', label: 'Govt. Exam Tips', description: 'Prepare for government biotech exams.', icon: LibraryBig },
      { href: '/blog/industry', label: 'Industrial Insights', description: 'Trends and news from the biotech industry.', icon: Building2 },
      { href: '/blog/career', label: 'Career Guidance', description: 'Advice for your biotech career path.', icon: BookOpen },
      { href: '/blog/stories', label: 'Success Stories', description: 'Inspiring stories from the community.', icon: CheckCircle },
      { href: '/blog/is-biotech-for-me', label: 'Is Biotech For Me?', description: 'Answer your career questions.', icon: HelpCircle },
    ],
  },
  {
    title: 'Legal',
    items: [
      { href: '/privacy-policy', label: 'Privacy Policy', description: 'Our commitment to your privacy.', icon: FileText },
      { href: '/terms', label: 'Terms & Conditions', description: 'Read our terms of service.', icon: FileText },
      { href: '/copyright', label: 'Copyright', description: 'Information about copyright.', icon: FileText },
      { href: '/disclaimer', label: 'Disclaimer', description: 'Important disclaimers.', icon: FileText },
    ],
  },
];

export const NEWSLETTER_CTA: NavLinkItem = {
  href: '/newsletter',
  label: 'Newsletter',
  description: 'Subscribe for exclusive updates and insights.',
  icon: Newspaper,
};

// Footer Constants
export const FOOTER_ABOUT_TEXT = "BTGenZ is your biotech buddy, guiding students from Class 10 to a career in biotechnology with resources, job alerts, and community support.";

export const FOOTER_QUICK_LINKS: NavLinkItem[] = [
  { href: '/blog/career', label: 'Career Guidance' },
  { href: '/blog/job-alerts', label: 'Job Alerts' },
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact Us' },
  { href: '/privacy-policy', label: 'Privacy Policy' },
];

export const FOOTER_CONTACT_EMAIL = "connect@btgenz.in";
export const SECONDARY_CONTACT_EMAIL = "msujay.work@gmail.com";
export const FOOTER_PHONE_NUMBER = "+91-XXXXXXXXXX"; // Replace with actual number if available


// Searchable Blog Articles
export interface SearchableBlogArticle {
  id: string;
  title: string;
  href: string;
  description: string;
  icon: LucideIcon; // Icon for display in search results
}

export const SEARCHABLE_BLOG_ARTICLES: SearchableBlogArticle[] = [
  {
    id: 'blog-job-alerts',
    title: 'Job Alerts',
    href: '/blog/job-alerts',
    description: 'Latest job opportunities in biotech for students and freshers.',
    icon: BellRing,
  },
  {
    id: 'blog-internships',
    title: 'Internships',
    href: '/blog/internships',
    description: 'Find biotech internships to kickstart your career.',
    icon: Briefcase,
  },
  {
    id: 'blog-govt-exams',
    title: 'Govt. Exam Tips',
    href: '/blog/govt-exams',
    description: 'Guidance and tips for government biotech entrance exams.',
    icon: LibraryBig,
  },
  {
    id: 'blog-industry',
    title: 'Industrial Insights',
    href: '/blog/industry',
    description: 'Stay updated on trends and news from the biotech industry.',
    icon: Building2,
  },
  {
    id: 'blog-career',
    title: 'Career Guidance',
    href: '/blog/career',
    description: 'Comprehensive advice and roadmaps for your biotech career path.',
    icon: BookOpen,
  },
  {
    id: 'blog-stories',
    title: 'Success Stories',
    href: '/blog/stories',
    description: 'Inspiring journeys and stories from the biotech community.',
    icon: CheckCircle,
  },
  {
    id: 'blog-is-biotech-for-me',
    title: 'Is Biotech Really for Me?',
    href: '/blog/is-biotech-for-me',
    description: 'A guide with FAQs to help you decide if biotech is your field.',
    icon: HelpCircle,
  },
  // You can add other important pages here if you want them to be searchable
  // For example, the About Us or Contact Us page:
  {
    id: 'page-about',
    title: 'About Us',
    href: '/about',
    description: 'Learn more about BTGenZ, our mission, and our team.',
    icon: Users2,
  },
  {
    id: 'page-contact',
    title: 'Contact Us',
    href: '/contact',
    description: 'Get in touch with the BTGenZ team for queries or collaborations.',
    icon: Mail,
  },
   {
    id: 'page-newsletter',
    title: 'Newsletter Subscription',
    href: '/newsletter',
    description: 'Subscribe to get the latest biotech news, job alerts, and career insights.',
    icon: Newspaper,
  },
];
