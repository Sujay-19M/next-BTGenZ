
import type { Metadata } from 'next';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { SectionWrapper } from '@/components/layout/section-wrapper';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Lightbulb, Milestone, Dna, Leaf, Factory, TestTube, BrainCircuit, Sparkles, Target, CheckCircle, Microscope, BookOpen, Users, LucideIcon } from 'lucide-react';
import Image from 'next/image';

export const metadata: Metadata = {
  title: "Biotechnology Career Guide for Beginners in India",
  description: "Your future in Biotechnology starts here. Explore diverse career paths, major fields, and tips for aspiring biotechnologists in India with BTGenZ.",
  openGraph: {
    title: "Biotechnology Career Guide for Beginners in India | BTGenZ",
    description: "A comprehensive guide to biotech careers in India. Understand different fields like healthcare, agriculture, AI in biotech, and more. Perfect for students.",
    url: "/blog/career",
    type: "article",
  },
  twitter: {
    title: "Explore Biotech Careers in India - A Beginner's Guide | BTGenZ",
    description: "Discover where a passion for science can lead in the biotech industry. Career map, major fields, and tips from BTGenZ.",
  },
};

interface CareerField {
  title: string;
  icon: LucideIcon;
  description: string;
  subFields?: { title: string; description: string }[];
}

const biotechFields: CareerField[] = [
  {
    title: "Healthcare & Pharmaceuticals",
    icon: Dna,
    description: "Revolutionizing medicine with new drugs, therapies, and diagnostic tools.",
    subFields: [
      { title: "Drug Discovery & Development", description: "Creating and testing new medications to treat diseases." },
      { title: "Genetic Engineering & Gene Therapy", description: "Modifying genes to prevent or cure genetic disorders." },
      { title: "Personalized Medicine", description: "Tailoring medical treatments to individual patient characteristics." },
      { title: "Vaccinology", description: "Developing vaccines to protect against infectious diseases."}
    ]
  },
  {
    title: "Agriculture & Food Science",
    icon: Leaf,
    description: "Enhancing crop yields, nutritional value, and sustainability in food production.",
    subFields: [
      { title: "Crop Improvement (GMOs)", description: "Developing genetically modified crops for better traits." },
      { title: "Sustainable Farming Practices", description: "Using biotech for eco-friendly agriculture." },
      { title: "Food Processing & Safety", description: "Improving food quality, shelf life, and safety using biotech methods." }
    ]
  },
  {
    title: "Industrial Biotechnology",
    icon: Factory,
    description: "Utilizing biological systems to produce chemicals, materials, and energy.",
    subFields: [
      { title: "Biofuels & Bioenergy", description: "Producing renewable energy sources from biological matter." },
      { title: "Biomaterials & Bioplastics", description: "Creating biodegradable materials from renewable resources." },
      { title: "Enzyme Technology", description: "Using enzymes as catalysts in industrial processes."}
    ]
  },
  {
    title: "Environmental Biotechnology",
    icon: TestTube,
    description: "Applying biotech solutions to monitor, manage, and remediate environmental issues.",
    subFields: [
      { title: "Bioremediation", description: "Using microorganisms to clean up pollutants." },
      { title: "Waste Management & Recycling", description: "Developing biotech methods for waste treatment." },
      { title: "Conservation Biology", description: "Using genetic tools for wildlife conservation."}
    ]
  },
  {
    title: "Computational Biology & AI",
    icon: BrainCircuit,
    description: "Integrating computer science and AI to analyze biological data and accelerate discovery.",
    subFields: [
      { title: "Bioinformatics", description: "Managing and analyzing large biological datasets (genomics, proteomics)." },
      { title: "AI in Drug Discovery", description: "Using artificial intelligence to identify and design new drugs." },
      { title: "Systems Biology", description: "Modeling complex biological systems."}
    ]
  },
  {
    title: "Emerging & Interdisciplinary Areas",
    icon: Sparkles,
    description: "Exploring novel applications at the intersection of biotech and other fields.",
    subFields: [
      { title: "Nanobiotechnology", description: "Applying nanotechnology to biological systems for diagnostics and therapy." },
      { title: "Synthetic Biology", description: "Designing and constructing new biological parts, devices, and systems." },
      { title: "Biotech Forensics", description: "Using DNA and other biological markers in legal investigations." },
      { title: "Regulatory Affairs & Patent Law", description: "Ensuring biotech products meet legal and ethical standards."}
    ]
  }
];

const beginnerTips = [
  { icon: BookOpen, title: "Build a Strong Foundation", text: "Focus on core subjects like Biology, Chemistry, and Math in school. Understand the fundamental principles well." },
  { icon: Microscope, title: "Seek Practical Experience", text: "Look for lab internships, workshops, or even online courses with virtual labs. Hands-on experience is invaluable." },
  { icon: Users, title: "Network and Connect", text: "Talk to people in the field – teachers, researchers, industry professionals. Attend seminars and webinars." },
  { icon: Lightbulb, title: "Stay Curious & Updated", text: "Biotechnology is rapidly evolving. Follow reputable science news, journals, and platforms like BTGenZ!" },
  { icon: Target, title: "Develop Soft Skills", text: "Communication, problem-solving, critical thinking, and teamwork are just as important as technical skills." },
  { icon: CheckCircle, title: "Don't Be Afraid to Explore", text: "Biotech is vast. Explore different specializations before settling on one. It's okay if your interests change." }
];

export default function CareerGuidancePage() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <SectionWrapper>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-primary mb-4">Your Future in Biotechnology: A Beginner's Guide</h1>
              <p className="text-lg text-muted-foreground">
                Biotechnology is a dynamic field that touches almost every aspect of our lives. If you're curious about where a passion for science can lead, you're in the right place. Let's explore the exciting career paths biotech opens up!
              </p>
            </div>

            <Card className="mb-12 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-primary flex items-center gap-2"><Lightbulb />What is Biotechnology?</CardTitle>
              </CardHeader>
              <CardContent className="prose dark:prose-invert max-w-none">
                <p>
                  At its core, biotechnology uses living organisms (like bacteria, yeast, plants) or their parts (like DNA, enzymes) to create products or processes that improve human life and the health of our planet. It's a blend of biology, chemistry, genetics, engineering, and computer science.
                </p>
                <p>
                  Think of it as "biology-based technology." From life-saving medicines and disease-resistant crops to sustainable fuels and environmental cleanup, biotech is at the forefront of innovation.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-12 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-primary flex items-center gap-2"><Milestone />The Diverse World of Biotech: A Career Map</CardTitle>
                <CardDescription>Biotechnology isn't just one path; it's a vast network of interconnected fields. Imagine it like a tree with many branches, each leading to unique opportunities.</CardDescription>
              </CardHeader>
              <CardContent className="prose dark:prose-invert max-w-none">
                <p>
                  Below is a conceptual representation of how different areas in biotech connect. This "family tree" can help you visualize the breadth of the field and see how various specializations emerge from core biological sciences.
                </p>
                {/* Placeholder for Infographic/Schematic */}
                <div className="my-6 p-6 border border-dashed border-primary/50 rounded-lg text-center bg-muted/50">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Biotech Career Pathways Infographic</h3>
                  <Image 
                    src="https://placehold.co/600x400.png" 
                    alt="Placeholder for a Biotech Career Pathways Infographic showing branching fields." 
                    width={600} 
                    height={400} 
                    className="mx-auto rounded-md shadow-md"
                    data-ai-hint="biotech tree"
                  />
                  <p className="mt-4 text-muted-foreground">
                    (Imagine a visual diagram here showing how foundational sciences branch into applied biotech fields like medical, agricultural, industrial, and computational biotechnology, further branching into specific roles like geneticist, bioprocess engineer, bioinformatician, etc.)
                  </p>
                </div>
                <p>
                  The key takeaway is that a strong foundation in biological sciences can open doors to an incredible variety of career options, from lab research and data analysis to product development and even policy making.
                </p>
              </CardContent>
            </Card>

            <div className="mb-12">
              <h2 className="text-3xl font-semibold text-primary mb-6 text-center">Major Fields in Biotechnology</h2>
              <Accordion type="single" collapsible className="w-full space-y-4">
                {biotechFields.map((field, index) => (
                  <AccordionItem value={`item-${index}`} key={field.title} className="bg-card shadow-md rounded-lg border">
                    <AccordionTrigger className="p-6 text-left hover:no-underline">
                      <div className="flex items-center gap-3">
                        <field.icon className="w-7 h-7 text-primary" />
                        <span className="text-xl font-medium text-foreground">{field.title}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="p-6 pt-0">
                      <p className="text-muted-foreground mb-4">{field.description}</p>
                      {field.subFields && field.subFields.length > 0 && (
                        <ul className="list-disc list-inside space-y-2 pl-2 text-muted-foreground">
                          {field.subFields.map(sub => (
                            <li key={sub.title}>
                              <span className="font-semibold text-foreground/90">{sub.title}:</span> {sub.description}
                            </li>
                          ))}
                        </ul>
                      )}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            <Card className="mb-12 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-primary flex items-center gap-2"><CheckCircle />Tips for Aspiring Biotechnologists</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {beginnerTips.map((tip, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-muted/50 rounded-md">
                    <tip.icon className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground">{tip.title}</h4>
                      <p className="text-sm text-muted-foreground">{tip.text}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <div className="text-center prose dark:prose-invert max-w-none">
              <h2 className="text-primary">Your Journey Starts Now</h2>
              <p>
                Biotechnology is more than just a subject; it's a field of endless possibilities where you can make a real impact. Whether you dream of curing diseases, feeding the world sustainably, or protecting our environment, biotech offers a path.
              </p>
              <p>
                Remember, every expert was once a beginner. Stay curious, keep learning, and don't hesitate to reach out for guidance. BTGenZ is here to support you on your journey!
              </p>
            </div>

          </div>
        </SectionWrapper>
      </main>
      <Footer />
    </>
  );
}
