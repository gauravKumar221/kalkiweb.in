
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import DraggableLetters from "@/components/draggable-letters";

const features = [
  "User Interface (UI) Design",
  "User Experience (UX) Design",
  "Branding & Identity Design",
  "Wireframing & Prototyping",
  "Graphic Design for Marketing",
  "Design System Creation",
];

const processSteps = [
    { title: "Discovery & Research", description: "We start by understanding your brand, audience, and goals through workshops and research." },
    { title: "Concept & Wireframing", description: "Our team creates wireframes and prototypes to map out the user flow and structure." },
    { title: "Visual Design", description: "We craft a stunning visual design that aligns with your brand and engages your users." },
    { title: "Testing & Refinement", description: "We test our designs with real users to gather feedback and make iterative improvements." },
];

const whyChooseUs = [
    { title: "User-Centered Approach", description: "Our design process is driven by a deep understanding of your users' needs and behaviors." },
    { title: "Creative Excellence", description: "Our talented designers are passionate about creating beautiful and effective visual solutions." },
    { title: "Collaborative Process", description: "We work closely with you throughout the design process to ensure the final product meets your vision." },
];

const faqs = [
    { question: "What is the difference between UI and UX design?", answer: "UX (User Experience) design is about the overall feel of the experience, while UI (User Interface) design is about the look and layout of the product's interface." },
    { question: "Can you create a brand identity for my new business?", answer: "Yes, we offer complete branding packages, including logo design, color palettes, typography, and brand guidelines." },
    { question: "What tools do you use for design?", answer: "We use industry-standard design tools like Figma, Sketch, and Adobe Creative Suite to create our designs." },
];

const portfolioProjects = [
  {
    client: "Mobile App UI/UX Redesign",
    image: "https://picsum.photos/600/400",
    hint: "mobile app design",
    description: "A complete redesign of a mobile app, resulting in a 40% increase in user engagement.",
    link: "#",
  },
  {
    client: "Corporate Branding Package",
    image: "https://picsum.photos/600/400",
    hint: "branding guidelines",
    description: "Developed a comprehensive brand identity for a tech startup, including logo, and marketing materials.",
    link: "#",
  },
];

export default function GraphicUiUxPage() {
  return (
    <>
      <section className="py-16 md:py-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05]"></div>
        <div className="container relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold tracking-tighter text-primary sm:text-5xl md:text-6xl">
                Stunning Graphic & UI/UX Design
              </h1>
              <p className="text-lg text-muted-foreground md:text-xl">
                We create beautiful, intuitive, and user-centered designs that enhance your brand identity and provide an exceptional user experience.
              </p>
              <Button asChild size="lg" variant="glitch">
                <Link href="/contact">Start Your Design Project</Link>
              </Button>
            </div>
            <div>
              <Image
                src="https://picsum.photos/600/500"
                data-ai-hint="ui design"
                alt="UI/UX design mockups"
                width={600}
                height={500}
                className="rounded-lg object-cover shadow-2xl shadow-primary/20"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Design That Delights Users
            </h2>
            <p className="mt-4 text-lg text-muted-foreground md:text-xl">
              Our design process is rooted in a deep understanding of your users, ensuring the final product is both beautiful and functional.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
                <Image
                    src="https://picsum.photos/600/700"
                    data-ai-hint="design process"
                    alt="Designers collaborating"
                    width={600}
                    height={700}
                    className="rounded-lg object-cover"
                />
            </div>
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <CheckCircle className="w-8 h-8 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold">{feature}</h3>
                    <p className="text-muted-foreground">
                      We combine artistic talent with user research to create designs that not only look great but also drive results.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <DraggableLetters />
      
        <section className="py-16 md:py-24 bg-card">
            <div className="container">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Design Process</h2>
                    <p className="mt-4 text-lg text-muted-foreground md:text-xl">A collaborative journey to creating exceptional designs.</p>
                </div>
                <div className="grid md:grid-cols-4 gap-8">
                    {processSteps.map((step, index) => (
                        <div key={index} className="text-center p-6 border-t-4 border-primary rounded-lg shadow-lg">
                            <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                            <p className="text-muted-foreground">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        <section id="portfolio" className="w-full py-16 md:py-24 bg-background">
            <div className="container">
                <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-5xl mb-12">Featured Design Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {portfolioProjects.map((project, index) => (
                        <Card key={index} className="flex flex-col overflow-hidden group">
                            <div className="overflow-hidden">
                                <Image src={project.image} data-ai-hint={project.hint} alt={project.client} width={600} height={400} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" />
                            </div>
                            <CardHeader>
                                <CardTitle>{project.client}</CardTitle>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <p>{project.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>

        <section className="py-16 md:py-24">
            <div className="container">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Frequently Asked Questions</h2>
                </div>
                <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
                    {faqs.map((faq, index) => (
                        <AccordionItem value={`item-${index}`} key={index} className="border-none mb-4 group">
                             <div className="p-px bg-gradient-to-r from-yellow-500 via-transparent to-yellow-500 rounded-lg group-data-[state=open]:bg-primary transition-all duration-300">
                                <AccordionTrigger className="bg-card text-card-foreground p-6 rounded-lg hover:no-underline flex items-center justify-between text-left group-data-[state=open]:bg-primary group-data-[state=open]:text-primary-foreground transition-all duration-300">
                                    <span className="text-xl font-bold">{faq.question}</span>
                                    <div className="h-10 w-10 bg-background rounded-full flex items-center justify-center shrink-0 group-data-[state=open]:bg-white transition-all duration-300">
                                        <ArrowRight className="h-6 w-6 text-primary transition-transform duration-300 group-data-[state=open]:rotate-90" />
                                    </div>
                                </AccordionTrigger>
                            </div>
                            <AccordionContent className="text-muted-foreground text-base p-6 bg-card rounded-b-lg">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>

      <BackgroundGradientAnimation>
        <div className="absolute z-50 inset-0 flex flex-col items-center justify-center text-white font-bold px-4 pointer-events-none text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl tracking-tighter">Ready to Elevate Your Brand's Visuals?</h2>
            <p className="max-w-[600px] mt-4 mb-8 text-lg">
                Let's create a stunning visual identity and user experience for your brand.
            </p>
            <div className="pointer-events-auto">
                <Button asChild size="lg" variant="glitch">
                  <Link href="/contact">Get a Free Design Consultation</Link>
                </Button>
            </div>
        </div>
      </BackgroundGradientAnimation>
    </>
  );
}
