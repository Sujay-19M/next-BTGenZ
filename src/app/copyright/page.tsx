
"use client";

import type { Metadata } from 'next'; // No need to export metadata from client component
import { useState, useEffect } from 'react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { SectionWrapper } from '@/components/layout/section-wrapper';
import { FOOTER_CONTACT_EMAIL } from '@/lib/constants';

// export const metadata: Metadata = {
//   title: "Copyright Information - BTGenZ",
//   description: "Details about copyright ownership and usage of content on the BTGenZ website. Contact us for any copyright-related inquiries.",
//   openGraph: {
//     title: "Copyright Information | BTGenZ",
//     description: "Understand the copyright policies of BTGenZ regarding website content and materials.",
//     url: "/copyright",
//     type: "article",
//   },
//   twitter: {
//     title: "BTGenZ Copyright Policy",
//     description: "Information on BTGenZ's content copyright and intellectual property.",
//   },
// };

export default function CopyrightPage() {
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
            <h1 className="text-primary text-center !mb-2">Copyright Information</h1>
            {lastUpdatedDate && <p className="text-center text-sm text-muted-foreground !mb-8">Last updated: {lastUpdatedDate}</p>}

            <p>All content included on this site, such as text, graphics, logos, images, as well as the compilation thereof, and any software used on the site, is the property of BTGenZ or its content suppliers and protected by copyright and other laws that protect intellectual property and proprietary rights. You agree to observe and abide by all copyright and other proprietary notices, legends or other restrictions contained in any such content and will not make any changes thereto.</p>

            <p>You will not modify, publish, transmit, reverse engineer, participate in the transfer or sale, create derivative works, or in any way exploit any of the content, in whole or in part, found on the site. BTGenZ content is not for resale. Your use of the site does not entitle you to make any unauthorized use of any protected content, and in particular you will not delete or alter any proprietary rights or attribution notices in any content. You will use protected content solely for your personal, non-commercial use, and will make no other use of the content without the express written permission of BTGenZ and the copyright owner.</p>
            
            <p>We respect the intellectual property of others. If you believe that your work has been copied in a way that constitutes copyright infringement, please provide our Copyright Agent with the following information:</p>
            <ul>
                <li>An electronic or physical signature of the person authorized to act on behalf of the owner of the copyright interest;</li>
                <li>A description of the copyrighted work that you claim has been infringed;</li>
                <li>A description of where the material that you claim is infringing is located on the site;</li>
                <li>Your address, telephone number, and email address;</li>
                <li>A statement by you that you have a good faith belief that the disputed use is not authorized by the copyright owner, its agent, or the law;</li>
                <li>A statement by you, made under penalty of perjury, that the above information in your notice is accurate and that you are the copyright owner or authorized to act on the copyright owner's behalf.</li>
            </ul>
            <p>Our Copyright Agent for notice of claims of copyright infringement on the Site can be reached as follows:</p>

            <h2>Contact Us</h2>
            <p>For any copyright-related inquiries or to submit a notice of infringement, please contact us at: <a href={`mailto:${contactEmail}`} className="text-primary hover:underline">{contactEmail}</a></p>
          </div>
        </SectionWrapper>
      </main>
      <Footer />
    </>
  );
}
