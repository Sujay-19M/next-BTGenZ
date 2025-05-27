
"use client";

// Removed: import type { Metadata } from 'next'; 
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { SectionWrapper } from '@/components/layout/section-wrapper';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "What exactly is Biotechnology?",
    answer: "Biotechnology uses living organisms or their components (like DNA, enzymes) to develop products or processes that improve our lives. Think new medicines, better crops, sustainable fuels, and diagnostic tools."
  },
  {
    question: "What kind of subjects should I be strong in for biotech?",
    answer: "Biology and Chemistry are core. Physics and Math (especially statistics) are also very helpful. Strong analytical and problem-solving skills are key."
  },
  {
    question: "Do I need to be a science topper to pursue biotech?",
    answer: "While good grades help, passion, curiosity, and a willingness to learn are more important. Consistent effort can make up for not being a 'topper.'"
  },
  {
    question: "What if I like biology but not hardcore lab work?",
    answer: "Biotech is vast! You could explore bioinformatics (data analysis), science writing, patent law, regulatory affairs, biotech sales, or even entrepreneurship."
  },
  {
    question: "What kind of jobs can I get with a biotech degree in India?",
    answer: "Roles include research scientist, lab technician, quality control/assurance, bioprocess engineer, clinical research associate, bioinformatics specialist, and more in pharma, agri-tech, food tech, and environmental sectors."
  },
  {
    question: "Is biotech only about research and development?",
    answer: "No, R&D is a big part, but there are also roles in production, quality control, sales & marketing, regulatory affairs, and business development within biotech companies."
  },
  {
    question: "What's the difference between Biotechnology and Biomedical Engineering?",
    answer: "Biotech focuses on using biological systems for solutions. Biomedical Engineering applies engineering principles to healthcare, often involving device design and medical technology. There's overlap, but biotech is broader."
  },
  {
    question: "How much can I earn in a biotech career in India?",
    answer: "Starting salaries vary by role, company, and location. Entry-level positions might range from ₹3-6 LPA. With experience and specialization, this can grow significantly."
  },
  {
    question: "Is a PhD necessary for a good career in biotech?",
    answer: "For core research and academic roles, a PhD is often preferred. However, for many industry roles (production, QC, sales, even some R&D), a Bachelor's or Master's degree is sufficient to start."
  },
  {
    question: "What are some challenges in the biotech field?",
    answer: "Research can be slow and experiments can fail. Funding can be competitive. Some roles require long hours or meticulous work. Staying updated with rapid advancements is crucial."
  },
  {
    question: "I'm creative but also like science. Is there a place for me in biotech?",
    answer: "Absolutely! Fields like bio-art, scientific illustration, biotech communication, or even designing user interfaces for biotech software require creativity."
  },
  {
    question: "Can I make a real impact on the world with biotech?",
    answer: "Yes! Biotech contributes to new medicines, disease diagnostics, sustainable agriculture, cleaner energy, and environmental solutions. The potential for positive impact is huge."
  },
  {
    question: "What if I'm more interested in the business side than the science side?",
    answer: "Many biotech companies need people in business development, marketing, finance, and management who understand the science but focus on the business. An MBA after a biotech degree can be a good path."
  },
  {
    question: "Are there many biotech companies in India?",
    answer: "Yes, India has a growing biotech sector with both large established companies and many innovative startups, particularly in cities like Bangalore, Hyderabad, and Pune."
  },
  {
    question: "How can BTGenZ help me figure out if biotech is for me?",
    answer: "We provide clear information, highlight different career paths, share insights from professionals, and offer resources like this FAQ to help you understand the field better and make an informed decision."
  },
  {
    question: "What are some emerging areas in biotech?",
    answer: "Gene editing (CRISPR), synthetic biology, personalized medicine, AI in drug discovery, and sustainable biomaterials are some exciting and rapidly advancing fields."
  },
  {
    question: "Do I need to be good at coding for biotech?",
    answer: "For bioinformatics and computational biology roles, yes. For many lab-based or other roles, it's becoming increasingly useful but might not be mandatory initially."
  },
  {
    question: "What's the study path after Class 12 for biotech?",
    answer: "Typically, a B.Sc. or B.Tech in Biotechnology, followed by an M.Sc. or M.Tech if desired. Entrance exams like NEET (for some courses) or specific university/institute exams are common."
  },
  {
    question: "Is biotech a very competitive field?",
    answer: "Like many specialized fields, it can be competitive, especially for top research positions or popular companies. However, the growing industry also means more opportunities."
  },
  {
    question: "How do I stay updated with what's happening in biotech?",
    answer: "Follow reputable science journals, news sites (like BTGenZ!), industry leaders on LinkedIn, and attend webinars or workshops when possible."
  }
];

// Removed metadata export:
// export const metadata: Metadata = { ... };

const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
};

export default function IsBiotechForMePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }}
      />
      <Header />
      <main className="flex-grow">
        <SectionWrapper>
          <div className="max-w-3xl mx-auto prose dark:prose-invert">
            <h1 className="text-primary text-center !mb-2">Is Biotech Really for Me?</h1>
            <p className="text-center text-muted-foreground !mb-8">A Guide for Students</p>
            
            <p className="text-lg leading-relaxed">
              Choosing a career path, especially after Class 10 or 12, can feel like a monumental task. If biotechnology has caught your interest, you're likely buzzing with questions. Is it the right fit? What does it really involve? Will I enjoy it? 
            </p>
            <p className="leading-relaxed">
              This guide is here to help you explore those questions. Biotechnology is a dynamic and impactful field, but like any career, it's not for everyone. Let's break down some common concerns and considerations to help you see if a future in biotech aligns with your interests, skills, and aspirations.
            </p>

            <h2 className="text-primary !mt-12 !mb-6 text-center">Frequently Asked Questions</h2>
            
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem value={`item-${index}`} key={index} className="border-border/70">
                  <AccordionTrigger className="text-left hover:no-underline text-base">
                    <span className="font-semibold text-foreground">{index + 1}. {faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <p className="mt-12 text-center">
              Still have questions? That's perfectly okay! The journey to finding your career path is one of exploration. 
              <a href="/contact" className="text-primary hover:underline font-medium"> Reach out to us at BTGenZ</a> – we're here to help.
            </p>
          </div>
        </SectionWrapper>
      </main>
      <Footer />
    </>
  );
}
