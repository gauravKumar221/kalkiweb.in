
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, Plus, Minus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import B2BDisruptiveTech from "@/components/b2b-disruptive-tech";

const features = [
  "Search Engine Optimization (SEO)",
  "Pay-Per-Click (PPC) Advertising",
  "Social Media Marketing",
  "Content Marketing Strategy",
  "Email Marketing Campaigns",
  "Analytics & Reporting",
];

const processSteps = [
    { title: "Market Research & Analysis", description: "We start with in-depth research of your industry, competitors, and target audience to build a solid foundation." },
    { title: "Strategy & Campaign Planning", description: "We create a data-driven digital marketing strategy and a detailed campaign plan tailored to your goals." },
    { title: "Execution & Optimization", description: "Our team executes the campaigns, continuously monitoring performance and optimizing for the best results." },
    { title: "Reporting & Insights", description: "We provide regular, transparent reports with actionable insights to track progress and refine our strategy." },
];

const whyChooseUs = [
    { title: "Data-Driven Approach", description: "We use data and analytics to make informed decisions and optimize your campaigns for maximum ROI." },
    { title: "Holistic Strategy", description: "Our integrated approach ensures all your digital marketing channels work together cohesively." },
    { title: "Experienced Team", description: "Our team of digital marketing experts stays ahead of the latest trends to keep you ahead of the competition." },
];

const faqs = [
    { question: "How long does it take to see results from SEO?", answer: "SEO is a long-term strategy. While some results can be seen in the first few months, it typically takes 6-12 months to see significant, lasting impact." },
    { question: "What is a good budget for PPC advertising?", answer: "The ideal budget depends on your industry, goals, and competition. We can work with you to determine a budget that aligns with your objectives and maximizes ROI." },
    { question: "Which social media platforms should my business be on?", answer: "We'll help you identify the platforms where your target audience is most active and develop a content strategy that resonates with them." },
    { question: "What does each plan include?", answer: "Each plan includes a dedicated project manager, a set number of design and development hours, and regular progress reports." },
    { question: "What is the typical turnaround time for a project?", answer: "A typical project takes between 2-4 weeks, but this can vary depending on the complexity of the project." },
    { question: "Can I change the plan after I've signed up?", answer: "Yes, you can upgrade or downgrade your plan at any time." },
];

const portfolioProjects = [
  {
    client: "Local Business SEO Campaign",
    image: "https://picsum.photos/600/400",
    hint: "local map search",
    description: "Improved local search rankings and drove a 150% increase in organic traffic for a local service business.",
    link: "#",
  },
  {
    client: "E-commerce PPC Campaign",
    image: "https://picsum.photos/600/400",
    hint: "online shopping ad",
    description: "Managed a multi-platform PPC campaign that resulted in a 4x return on ad spend (ROAS) for an online store.",
    link: "#",
  },
];

export default function DigitalMarketingPage() {
  return (
    <>
      <section className="py-16 md:py-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05]"></div>
        <div className="container relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold tracking-tighter text-primary sm:text-5xl md:text-6xl">
                Data-Driven Digital Marketing
              </h1>
              <p className="text-lg text-muted-foreground md:text-xl">
                We create and execute results-driven digital marketing strategies to grow your online presence, attract your target audience, and convert leads into customers.
              </p>
              <Button asChild size="lg" variant="glitch">
                <Link href="/contact">Grow Your Business</Link>
              </Button>
            </div>
            <div>
              <Image
                src="https://picsum.photos/600/500"
                data-ai-hint="digital marketing dashboard"
                alt="Digital marketing analytics"
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
              A Comprehensive Approach to Growth
            </h2>
            <p className="mt-4 text-lg text-muted-foreground md:text-xl">
              Our holistic approach to digital marketing ensures every channel works together to achieve your business objectives.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
                <Image
                    src="https://picsum.photos/600/700"
                    data-ai-hint="marketing strategy"
                    alt="Team planning marketing strategy"
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
                      We leverage data and creativity to craft campaigns that deliver measurable results and a high return on investment.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <B2BDisruptiveTech />
      
        <section className="py-16 md:py-24 bg-card">
            <div className="container">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Digital Marketing Process</h2>
                    <p className="mt-4 text-lg text-muted-foreground md:text-xl">A proven framework for achieving digital success.</p>
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

        <section className="py-16 md:py-24">
            <div className="container">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Why Choose Us for Digital Marketing?</h2>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {whyChooseUs.map((item, index) => (
                        <div key={index} className="p-6">
                            <h3 className="text-xl font-bold mb-2 text-primary">{item.title}</h3>
                            <p className="text-muted-foreground">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        <section id="portfolio" className="w-full py-16 md:py-24 bg-background">
            <div className="container">
                <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-5xl mb-12">Our Marketing Impact</h2>
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

        <section className="py-16 md:py-24 bg-background">
            <div className="container">
                <div className="grid md:grid-cols-3 gap-16">
                    <div className="md:col-span-1 md:sticky top-24 h-max">
                        <h2 className="text-3xl font-bold tracking-tighter">👋 Hey there!</h2>
                        <p className="mt-4 text-lg text-muted-foreground">
                            Looks like you still have some questions. Go ahead, quench your curiosity.
                        </p>
                    </div>
                    <div className="md:col-span-2">
                        <Accordion type="single" collapsible className="w-full">
                            {faqs.map((faq, index) => (
                                <AccordionItem value={`item-${index}`} key={index} className="border-b border-border/20">
                                    <AccordionTrigger className="hover:no-underline text-lg py-6 group">
                                        <span className="flex-1 text-left">{faq.question}</span>
                                        <Plus className="h-5 w-5 shrink-0 transition-transform duration-200 group-data-[state=open]:hidden" />
                                        <Minus className="h-5 w-5 shrink-0 transition-transform duration-200 hidden group-data-[state=open]:block" />
                                    </AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground text-base pt-2 pb-6">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </div>
        </section>

      <BackgroundGradientAnimation>
        <div className="absolute z-50 inset-0 flex flex-col items-center justify-center text-white font-bold px-4 pointer-events-none text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl tracking-tighter">Ready to Dominate the Digital Landscape?</h2>
            <p className="max-w-[600px] mt-4 mb-8 text-lg">
                Let's create a winning digital marketing strategy for your brand.
            </p>
            <div className="pointer-events-auto">
                <Button asChild size="lg" variant="glitch">
                  <Link href="/contact">Get a Free Strategy Call</Link>
                </Button>
            </div>
        </div>
      </BackgroundGradientAnimation>
    </>
  );
}
