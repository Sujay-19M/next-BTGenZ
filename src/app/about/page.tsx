
import type { Metadata } from 'next';
import Image from 'next/image';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { SectionWrapper } from '@/components/layout/section-wrapper';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, Target, Lightbulb, UserPlus, Linkedin, UserCircle2 } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "About BTGenZ - Our Mission, Story, and Team",
  description: "Learn about BTGenZ, our mission to guide Indian students in biotechnology careers, meet our founder, and see how you can contribute.",
  openGraph: {
    title: "About BTGenZ - Our Mission, Story, and Team",
    description: "Discover BTGenZ: a platform dedicated to helping Indian students navigate the world of biotechnology careers, jobs, and education. Meet the team and learn how to get involved.",
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
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-primary mb-6">About BTGenZ</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                BTGenZ is your biotech buddy, dedicated to guiding high school students (especially Class 10 & 12) and early-career enthusiasts through the exciting and sometimes complex world of biotechnology in India.
              </p>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-semibold text-primary mb-8 text-center">Our Vision</h2>
              <div className="grid md:grid-cols-3 gap-8">
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
            </div>
            
            <div className="mb-16">
              <h2 className="text-3xl font-semibold text-primary mb-8 text-center">Meet the Founder</h2>
              <div className="flex justify-center">
                <Card className="max-w-sm w-full shadow-xl hover:shadow-2xl transition-shadow">
                  <CardHeader className="items-center p-6">
                    <div className="relative h-32 w-32 mb-4">
                      <Image
                        src="https://media.licdn.com/dms/image/v2/D5603AQHIAwUnw8-RDg/profile-displayphoto-shrink_200_200/B56ZXyTgo7HEAc-/0/1743526956477?e=1753920000&v=beta&t=TSChIwK4hCk9jopBmhgJBWss557pGOWOq2eWZLgb-j8"
                        alt="Sujay Mukherjee - Founder of BTGenZ"
                        width={128}
                        height={128}
                        className="rounded-full object-cover border-4 border-primary/50"
                        data-ai-hint="male professional"
                      />
                    </div>
                    <CardTitle className="text-2xl text-center">Sujay Mukherjee</CardTitle>
                    <CardDescription className="text-center text-accent font-medium">Founder & Biotech Enthusiast</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center text-muted-foreground p-6 pt-0">
                    <p className="mb-4">
                      Sujay is passionate about simplifying biotechnology for the next generation. With a background in [Your Background/Field - e.g., student research, biotech industry], he created BTGenZ to bridge the information gap for aspiring biotechnologists in India.
                    </p>
                    <Button variant="outline" asChild className="border-primary text-primary hover:bg-primary/10">
                      <a href="https://www.linkedin.com/in/your-linkedin-profile/" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="mr-2 h-4 w-4" /> Connect on LinkedIn
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-semibold text-primary mb-8 text-center">Join Our Mission</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="shadow-lg hover:shadow-xl transition-shadow text-center">
                  <CardHeader className="items-center">
                    <UserPlus className="h-12 w-12 text-primary mb-3" />
                    <CardTitle className="text-xl">Become a Contributor</CardTitle>
                  </CardHeader>
                  <CardContent className="text-muted-foreground">
                    <p className="mb-4">
                      Passionate about biotech? Want to share your knowledge, write articles, or help guide students? We're looking for enthusiastic individuals to join our team.
                    </p>
                    <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
                      <Link href="/contact">
                        Get Involved
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
                <Card className="shadow-lg hover:shadow-xl transition-shadow text-center">
                  <CardHeader className="items-center">
                     <UserCircle2 className="h-12 w-12 text-primary mb-3" />
                    <CardTitle className="text-xl">You Could Be Next!</CardTitle>
                  </CardHeader>
                  <CardContent className="text-muted-foreground">
                    <p>
                      Imagine your insights featured here, helping thousands of students navigate their biotech journey. If you have expertise or a story to share, reach out!
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <div className="prose dark:prose-invert text-lg max-w-3xl mx-auto">
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
          </div>
        </SectionWrapper>
      </main>
      <Footer />
    </>
  );
}
