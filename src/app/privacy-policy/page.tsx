
"use client";

import type { Metadata } from 'next'; // No need to export metadata from client component
import { useState, useEffect } from 'react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { SectionWrapper } from '@/components/layout/section-wrapper';
import { FOOTER_CONTACT_EMAIL } from '@/lib/constants'; // Use constant for email

// Metadata should be defined in a parent server component or layout.tsx for client components.
// For demonstration, if this were a server component, it would look like this:
// export const metadata: Metadata = {
//   title: "Privacy Policy - BTGenZ",
//   description: "Read the BTGenZ Privacy Policy to understand how we collect, use, and protect your personal data when you use our services.",
// openGraph: {
//   title: "Privacy Policy | BTGenZ",
//   description: "Our commitment to your privacy. Learn about data collection, usage, and security at BTGenZ.",
//   url: "/privacy-policy",
//   type: "article",
// },
// twitter: {
//   title: "BTGenZ Privacy Policy",
//   description: "Understand how BTGenZ handles your personal information.",
// },
// };


export default function PrivacyPolicyPage() {
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
            <h1 className="text-primary text-center !mb-2">Privacy Policy</h1>
            {lastUpdatedDate && <p className="text-center text-sm text-muted-foreground !mb-8">Last updated: {lastUpdatedDate}</p>}
            
            <p>BTGenZ ("us", "we", or "our") operates the BTGenZ website (the "Service"). This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.</p>

            <h2>Information Collection and Use</h2>
            <p>We collect several different types of information for various purposes to provide and improve our Service to you.</p>
            
            <h3>Types of Data Collected</h3>
            
            <h4>Personal Data</h4>
            <p>While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). Personally identifiable information may include, but is not limited to:</p>
            <ul>
              <li>Email address (e.g., for newsletter subscriptions, contact forms)</li>
              <li>First name and last name (e.g., for contact forms, community feedback)</li>
              <li>Cookies and Usage Data</li>
            </ul>

            <h4>Usage Data</h4>
            <p>We may also collect information on how the Service is accessed and used ("Usage Data"). This Usage Data may include information such as your computer's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data.</p>

            <h2>Use of Data</h2>
            <p>BTGenZ uses the collected data for various purposes:</p>
            <ul>
              <li>To provide and maintain our Service</li>
              <li>To notify you about changes to our Service</li>
              <li>To allow you to participate in interactive features of our Service when you choose to do so (e.g., submitting feedback, AI tools)</li>
              <li>To provide customer support and respond to inquiries</li>
              <li>To gather analysis or valuable information so that we can improve our Service</li>
              <li>To monitor the usage of our Service</li>
              <li>To detect, prevent and address technical issues</li>
              <li>To send newsletters and updates if you have subscribed</li>
            </ul>
            
            <h2>Data Storage and Security</h2>
            <p>Your information, including Personal Data, may be transferred to — and maintained on — computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ from those from your jurisdiction.</p>
            <p>We will take all steps reasonably necessary to ensure that your data is treated securely and in accordance with this Privacy Policy and no transfer of your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of your data and other personal information.</p>
            <p>The security of your data is important to us, but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.</p>

            <h2>Your Data Protection Rights</h2>
            <p>Depending on your location, you may have certain data protection rights. BTGenZ aims to take reasonable steps to allow you to correct, amend, delete, or limit the use of your Personal Data.</p>
            <p>If you wish to be informed about what Personal Data we hold about you and if you want it to be removed from our systems, please contact us.</p>

            <h2>Service Providers</h2>
            <p>We may employ third-party companies and individuals to facilitate our Service ("Service Providers"), provide the Service on our behalf, perform Service-related services, or assist us in analyzing how our Service is used.</p>
            <p>These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose. (e.g., Resend for emails, Cloudflare Workers for newsletter subscriptions).</p>

            <h2>Links to Other Sites</h2>
            <p>Our Service may contain links to other sites that are not operated by us. If you click a third-party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.</p>

            <h2>Children's Privacy</h2>
            <p>Our Service does not knowingly collect personally identifiable information from anyone under the age of 13. If you are a parent or guardian and you are aware that your child has provided us with Personal Data, please contact us. If we become aware that we have collected Personal Data from children without verification of parental consent, we take steps to remove that information from our servers.</p>

            <h2>Changes to This Privacy Policy</h2>
            <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date at the top of this Privacy Policy. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>

            <h2>Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at: <a href={`mailto:${contactEmail}`} className="text-primary hover:underline">{contactEmail}</a></p>
          </div>
        </SectionWrapper>
      </main>
      <Footer />
    </>
  );
}
