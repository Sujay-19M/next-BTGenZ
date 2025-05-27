
import type { Metadata } from 'next';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { SectionWrapper } from '@/components/layout/section-wrapper';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Target, Lightbulb } from 'lucide-react';

export const metadata: Metadata = {
  title: "About BTGenZ - Our Mission and Story",
  description: "Learn about BTGenZ, our mission to guide Indian students in biotechnology careers, and what we offer to help you succeed in the biotech field.",
  openGraph: {
    title: "About BTGenZ - Our Mission and Story",
    description: "Discover BTGenZ: a platform dedicated to helping Indian students navigate the world of biotechnology careers, jobs, and education.",
    url: "/about",
    type: "website",
  },
  twitter: {
    title: "About BTGenZ - Guiding India's Future Biotechnologists",
    description: "Meet BTGenZ! We're passionate about making biotech careers accessible and understandable for students across India.",
  },
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <SectionWrapper>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-primary mb-8">About BTGenZ</h1>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              BTGenZ is your biotech buddy, dedicated to guiding high school students (especially Class 10 & 12) and early-career enthusiasts through the exciting and sometimes complex world of biotechnology in India.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="items-center">
                <Users className="h-12 w-12 text-primary mb-3" />
                <CardTitle className="text-xl text-center">Who We Are</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-muted-foreground">
                <p>
                  We are a team of students-turned-explorers passionate about making biotech careers accessible and understandable. We've been where you are, and we're here to share what we've learned.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="items-center">
                <Target className="h-12 w-12 text-primary mb-3" />
                <CardTitle className="text-xl text-center">Our Mission</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-muted-foreground">
                <p>
                  To demystify biotechnology for Gen-Z. We provide clear guidance, verified information on jobs and internships, exam tips, and a supportive community to help you navigate your path.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="items-center">
                <Lightbulb className="h-12 w-12 text-primary mb-3" />
                <CardTitle className="text-xl text-center">What We Offer</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-muted-foreground">
                <p>
                  From understanding basic concepts to finding job alerts and connecting with peers, BTGenZ is your one-stop platform for all things biotech relevant to Indian students.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="max-w-3xl mx-auto prose dark:prose-invert text-lg">
            <h2 className="text-primary !mb-4 text-center">More Than Just a Blog</h2>
            <p>
              We believe that exploring a career in biotechnology shouldn't be confusing or overwhelming. Google can be a maze, and traditional career counselors often don't specialize in the nuances of biotech. That's where BTGenZ steps in. We offer:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Simplified explanations of complex biotech fields.</li>
              <li>Daily updates on job openings and internship opportunities tailored for students and freshers.</li>
              <li>Actionable tips for government entrance exams in the biotech sector.</li>
              <li>Insights into college admissions and current industry trends.</li>
              <li>A growing community where questions are encouraged and experiences are shared.</li>
            </ul>
            <p>
              Think of us as your first, most reliable step towards a fulfilling future in biotechnology. We're building a movement, and we're excited to have you join us!
            </p>
          </div>
        </SectionWrapper>
      </main>
      <Footer />
    </>
  );
}
