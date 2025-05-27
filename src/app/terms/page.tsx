
"use client";

import type { Metadata } from 'next'; // No need to export metadata from client component
import { useState, useEffect } from 'react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { SectionWrapper } from '@/components/layout/section-wrapper';
import { FOOTER_CONTACT_EMAIL } from '@/lib/constants';

// export const metadata: Metadata = {
//   title: "Terms and Conditions - BTGenZ",
//   description: "Read the Terms and Conditions for using the BTGenZ website and services. Understand your rights and responsibilities.",
//   openGraph: {
//     title: "Terms and Conditions | BTGenZ",
//     description: "Review BTGenZ's terms of service. By using our website, you agree to these terms.",
//     url: "/terms",
//     type: "article",
//   },
//   twitter: {
//     title: "BTGenZ Terms and Conditions",
//     description: "Familiarize yourself with the terms of use for BTGenZ's platform.",
//   },
// };

export default function TermsPage() {
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
            <h1 className="text-primary text-center !mb-2">Terms and Conditions</h1>
            {lastUpdatedDate && <p className="text-center text-sm text-muted-foreground !mb-8">Last updated: {lastUpdatedDate}</p>}

            <p>Please read these Terms and Conditions ("Terms", "Terms and Conditions") carefully before using the BTGenZ website (the "Service") operated by BTGenZ ("us", "we", or "our").</p>

            <p>Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users, and others who access or use the Service.</p>

            <p>By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service.</p>

            <h2>Intellectual Property</h2>
            <p>The Service and its original content (excluding Content provided by users), features and functionality are and will remain the exclusive property of BTGenZ and its licensors. The Service is protected by copyright, trademark, and other laws of both India and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of BTGenZ.</p>
            
            <h2>User Content</h2>
            <p>Our Service may allow you to post, link, store, share and otherwise make available certain information, text, graphics, videos, or other material ("User Content"). You are responsible for the User Content that you post to the Service, including its legality, reliability, and appropriateness.</p>
            <p>By posting User Content to the Service, you grant us the right and license to use, modify, publicly perform, publicly display, reproduce, and distribute such User Content on and through the Service. You retain any and all of your rights to any User Content you submit, post or display on or through the Service and you are responsible for protecting those rights.</p>
            <p>You represent and warrant that: (i) the User Content is yours (you own it) or you have the right to use it and grant us the rights and license as provided in these Terms, and (ii) the posting of your User Content on or through the Service does not violate the privacy rights, publicity rights, copyrights, contract rights or any other rights of any person.</p>

            <h2>Links To Other Web Sites</h2>
            <p>Our Service may contain links to third-party web sites or services that are not owned or controlled by BTGenZ. BTGenZ has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that BTGenZ shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such web sites or services.</p>
            <p>We strongly advise you to read the terms and conditions and privacy policies of any third-party web sites or services that you visit.</p>

            <h2>Termination</h2>
            <p>We may terminate or suspend your access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.</p>
            <p>All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity and limitations of liability.</p>

            <h2>Governing Law</h2>
            <p>These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions.</p>
            <p>Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect. These Terms constitute the entire agreement between us regarding our Service, and supersede and replace any prior agreements we might have between us regarding the Service.</p>
            
            <h2>Changes</h2>
            <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.</p>
            <p>By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.</p>

            <h2>Contact Us</h2>
            <p>If you have any questions about these Terms, please contact us at: <a href={`mailto:${contactEmail}`} className="text-primary hover:underline">{contactEmail}</a></p>
          </div>
        </SectionWrapper>
      </main>
      <Footer />
    </>
  );
}
