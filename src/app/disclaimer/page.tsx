
"use client";

import type { Metadata } from 'next'; // No need to export metadata from client component
import { useState, useEffect } from 'react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { SectionWrapper } from '@/components/layout/section-wrapper';
import { FOOTER_CONTACT_EMAIL } from '@/lib/constants';

// export const metadata: Metadata = {
//   title: "Disclaimer - BTGenZ",
//   description: "Read the disclaimer for BTGenZ. Information on our site is for general informational purposes only and not professional advice.",
//   openGraph: {
//     title: "Disclaimer | BTGenZ",
//     description: "Important disclaimer regarding the use of information provided on the BTGenZ website.",
//     url: "/disclaimer",
//     type: "article",
//   },
//   twitter: {
//     title: "BTGenZ Disclaimer",
//     description: "Understand the limitations and scope of information provided by BTGenZ.",
//   },
// };

export default function DisclaimerPage() {
  const [lastUpdatedDate, setLastUpdatedDate] = useState('');

  useEffect(() => {
    setLastUpdatedDate(new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' }));
  }, []);

  const contactEmail = FOOTER_CONTACT_EMAIL;

  return (
    <>
      <Header />
      <main className="flex-grow">
        <SectionWrapper>
          <div className="max-w-3xl mx-auto prose dark:prose-invert">
            <h1 className="text-primary text-center !mb-2">Disclaimer</h1>
            {lastUpdatedDate && <p className="text-center text-sm text-muted-foreground !mb-8">Last updated: {lastUpdatedDate}</p>}

            <p>The information provided by BTGenZ ("we," "us," or "our") on this website (the "Service") is for general informational purposes only. All information on the Service is provided in good faith, however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the Service.</p>

            <p>Under no circumstance shall we have any liability to you for any loss or damage of any kind incurred as a result of the use of the Service or reliance on any information provided on the Service. Your use of the Service and your reliance on any information on the Service is solely at your own risk.</p>

            <h2>External Links Disclaimer</h2>
            <p>The Service may contain (or you may be sent through the Service) links to other websites or content belonging to or originating from third parties or links to websites and features in banners or other advertising. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability, or completeness by us.</p>
            <p>We do not warrant, endorse, guarantee, or assume responsibility for the accuracy or reliability of any information offered by third-party websites linked through the Service or any website or feature linked in any banner or other advertising. We will not be a party to or in any way be responsible for monitoring any transaction between you and third-party providers of products or services.</p>

            <h2>Professional Disclaimer</h2>
            <p>The Service cannot and does not contain career or professional advice. The career, educational, and biotech-related information is provided for general informational and educational purposes only and is not a substitute for professional advice. Accordingly, before taking any actions based upon such information, we encourage you to consult with the appropriate professionals. We do not provide any kind of specific career or professional advice beyond general guidance.</p>
            <p>The use or reliance of any information contained on this Service is solely at your own risk.</p>

            <h2>Testimonials and Community Comments Disclaimer</h2>
            <p>The Service may contain testimonials or comments by users of our services. These testimonials and comments reflect the real-life experiences and opinions of such users. However, the experiences are personal to those particular users, and may not necessarily be representative of all users of our services. We do not claim, and you should not assume, that all users will have the same experiences. Individual results may vary.</p>
            <p>The views and opinions expressed in testimonials and comments belong solely to the individual user and do not reflect our views and opinions. We are not affiliated with users who provide testimonials or comments, and users are not paid or otherwise compensated for them unless explicitly stated.</p>
            
            <h2>AI-Generated Content Disclaimer</h2>
            <p>Our Service may feature content summarized or assisted by artificial intelligence (AI) tools. While we strive for accuracy, AI-generated content may occasionally contain errors or inaccuracies. Such content is provided for informational purposes and should not be solely relied upon for decision-making. We recommend cross-referencing critical information with other sources.</p>

            <h2>Affiliate Disclaimer</h2>
            <p>This disclaimer will inform users if we use affiliate links and earn a commission from them, which is not currently the case but may be in the future. Should we engage in affiliate marketing, this section will be updated accordingly.</p>


            <h2>Contact Us</h2>
            <p>If you have any questions about this Disclaimer, please contact us at: <a href={`mailto:${contactEmail}`} className="text-primary hover:underline">{contactEmail}</a></p>
          </div>
        </SectionWrapper>
      </main>
      <Footer />
    </>
  );
}
