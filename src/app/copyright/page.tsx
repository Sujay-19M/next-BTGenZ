
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { SectionWrapper } from '@/components/layout/section-wrapper';

export default function CopyrightPage() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <SectionWrapper>
          <div className="py-16 max-w-3xl mx-auto prose dark:prose-invert">
            <h1 className="text-4xl font-bold text-primary mb-6 text-center">Copyright Information</h1>
             <p>Last updated: {new Date().toLocaleDateString()}</p>

            <p>All content included on this site, such as text, graphics, logos, images, as well as the compilation thereof, and any software used on the site, is the property of BTGenZ or its suppliers and protected by copyright and other laws that protect intellectual property and proprietary rights. You agree to observe and abide by all copyright and other proprietary notices, legends or other restrictions contained in any such content and will not make any changes thereto.</p>

            <p>You will not modify, publish, transmit, reverse engineer, participate in the transfer or sale, create derivative works, or in any way exploit any of the content, in whole or in part, found on the site. BTGenZ content is not for resale. Your use of the site does not entitle you to make any unauthorized use of any protected content, and in particular you will not delete or alter any proprietary rights or attribution notices in any content. You will use protected content solely for your personal use, and will make no other use of the content without the express written permission of BTGenZ and the copyright owner.</p>
            
            <p>We respect the intellectual property of others. If you believe that your work has been copied in a way that constitutes copyright infringement, please contact us with the details.</p>

            <h2>Contact Us</h2>
            <p>For any copyright-related inquiries, please contact us at: {process.env.NEXT_PUBLIC_CONTACT_EMAIL || "contact@btgenz.com"}</p>
          </div>
        </SectionWrapper>
      </main>
      <Footer />
    </>
  );
}
