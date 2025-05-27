
import type {Metadata, Viewport} from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { FloatingSubscribeButton } from '@/components/btgenz/FloatingSubscribeButton';

const APP_NAME = "BTGenZ";
const APP_DEFAULT_TITLE = "BTGenZ - Your Gateway to Biotech Careers in India";
const APP_TITLE_TEMPLATE = "%s | BTGenZ";
const APP_DESCRIPTION = "Explore biotech careers, find jobs & internships in India, get AI-powered news summaries, and join a supportive community for aspiring biotech professionals and students.";
const APP_URL = "https://btgenz.in"; // Replace with your actual deployed URL

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  manifest: "/manifest.json", // Assuming you might add a manifest later
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_DEFAULT_TITLE,
    // startUpImage: [], // Add startup images if needed
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
    url: APP_URL,
    // images: [ // Add a default OG image URL
    //   {
    //     url: `${APP_URL}/og-image.png`, // Replace with your actual OG image
    //     width: 1200,
    //     height: 630,
    //     alt: 'BTGenZ - Biotech Careers India',
    //   },
    // ],
  },
  twitter: {
    card: "summary_large_image",
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
    // images: [`${APP_URL}/twitter-image.png`], // Replace with your actual Twitter image
    // creator: "@yourtwitterhandle", // Add your Twitter handle
  },
  robots: { // Basic robots meta tag
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  // themeColor: "#20c997", // Primary color
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#e8f8f5" }, // Light theme background
    { media: "(prefers-color-scheme: dark)", color: "#1a202c" }, // Example dark theme background, adjust as needed
  ],
  // width: 'device-width', // Already default
  // initialScale: 1, // Already default
};


const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "BTGenZ",
  "url": APP_URL,
  "logo": `${APP_URL}/images/logo.png`, // Replace with your actual logo URL
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-XXX-XXX-XXXX", // Add your phone if applicable
    "contactType": "Customer Service", // Or "Sales", "Technical Support"
    "email": "connect@btgenz.in",
    "areaServed": "IN",
    "availableLanguage": ["en"]
  },
  "sameAs": [ // Add your social media links if available
    "https://www.instagram.com/btgenz_official",
    "https://www.linkedin.com/company/btgenz"
    // Add other social links
  ]
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "BTGenZ",
  "url": APP_URL,
  "potentialAction": {
    "@type": "SearchAction",
    "target": `${APP_URL}/search?q={search_term_string}`, // Basic search action
    "query-input": "required name=search_term_string"
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable} h-full`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className={`antialiased flex flex-col min-h-screen bg-background text-foreground`}>
        {children}
        <Toaster />
        <FloatingSubscribeButton />
      </body>
    </html>
  );
}
