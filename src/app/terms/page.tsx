
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { SectionWrapper } from '@/components/layout/section-wrapper';

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <SectionWrapper>
          <div className="py-16 max-w-3xl mx-auto prose dark:prose-invert">
            <h1 className="text-4xl font-bold text-primary mb-6 text-center">Terms and Conditions</h1>
            <p>Last updated: {new Date().toLocaleDateString()}</p>

            <p>Please read these Terms and Conditions ("Terms", "Terms and Conditions") carefully before using the BTGenZ website (the "Service") operated by BTGenZ ("us", "we", or "our").</p>

            <p>Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users, and others who access or use the Service.</p>

            <p>By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service.</p>

            <h2>Content</h2>
            <p>Our Service allows you to post, link, store, share and otherwise make available certain information, text, graphics, videos, or other material ("Content"). You are responsible for the Content that you post to the Service, including its legality, reliability, and appropriateness.</p>
            <p>The Content found on or through this Service is the property of BTGenZ or used with permission. You may not distribute, modify, transmit, reuse, download, repost, copy, or use said Content, whether in whole or in part, for commercial purposes or for personal gain, without express advance written permission from us.</p>

            <h2>Intellectual Property</h2>
            <p>The Service and its original content (excluding Content provided by users), features and functionality are and will remain the exclusive property of BTGenZ and its licensors. The Service is protected by copyright, trademark, and other laws of both India and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without την prior written consent of BTGenZ.</p>
            
            <h2>Links To Other Web Sites</h2>
            <p>Our Service may contain links to third-party web sites or services that are not owned or controlled by BTGenZ. BTGenZ has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that BTGenZ shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such web sites or services.</p>

            <h2>Changes</h2>
            <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.</p>

            <h2>Contact Us</h2>
            <p>If you have any questions about these Terms, please contact us at: {process.env.NEXT_PUBLIC_CONTACT_EMAIL || "contact@btgenz.com"}</p>
          </div>
        </SectionWrapper>
      </main>
      <Footer />
    </>
  );
}
