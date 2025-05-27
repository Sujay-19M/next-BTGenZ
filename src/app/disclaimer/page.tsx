
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { SectionWrapper } from '@/components/layout/section-wrapper';

export default function DisclaimerPage() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <SectionWrapper>
          <div className="py-16 max-w-3xl mx-auto prose dark:prose-invert">
            <h1 className="text-4xl font-bold text-primary mb-6 text-center">Disclaimer</h1>
            <p>Last updated: {new Date().toLocaleDateString()}</p>

            <p>The information provided by BTGenZ ("we," "us," or "our") on this website is for general informational purposes only. All information on the site is provided in good faith, however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the site.</p>

            <p>Under no circumstance shall we have any liability to you for any loss or damage of any kind incurred as a result of the use of the site or reliance on any information provided on the site. Your use of the site and your reliance on any information on the site is solely at your own risk.</p>

            <h2>External Links Disclaimer</h2>
            <p>The site may contain (or you may be sent through the site) links to other websites or content belonging to or originating from third parties or links to websites and features in banners or other advertising. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability, or completeness by us.</p>
            <p>We do not warrant, endorse, guarantee, or assume responsibility for the accuracy or reliability of any information offered by third-party websites linked through the site or any website or feature linked in any banner or other advertising. We will not be a party to or in any way be responsible for monitoring any transaction between you and third-party providers of products or services.</p>

            <h2>Professional Disclaimer</h2>
            <p>The site cannot and does not contain career or professional advice. The career and educational information is provided for general informational and educational purposes only and is not a substitute for professional advice. Accordingly, before taking any actions based upon such information, we encourage you to consult with the appropriate professionals. We do not provide any kind of career or professional advice. The use or reliance of any information contained on this site is solely at your own risk.</p>

            <h2>Testimonials Disclaimer</h2>
            <p>The site may contain testimonials by users of our products and/or services. These testimonials reflect the real-life experiences and opinions of such users. However, the experiences are personal to those particular users, and may not necessarily be representative of all users of our products and/or services. We do not claim, and you should not assume, that all users will have the same experiences.</p>

            <h2>Contact Us</h2>
            <p>If you have any questions about this Disclaimer, please contact us at: {process.env.NEXT_PUBLIC_CONTACT_EMAIL || "contact@btgenz.com"}</p>
          </div>
        </SectionWrapper>
      </main>
      <Footer />
    </>
  );
}
