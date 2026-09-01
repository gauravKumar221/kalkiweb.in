import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import ServiceHero from "@/components/service-hero";
import ServiceFeatureShowcase from "@/components/service-feature-showcase";

// Showcase Slider Slides for Back-Office Services
const backOfficeShowcaseSlides = [
  {
    image: "https://picsum.photos/600/500?random=91",
    title: "24/7 Multi-Tier Customer Support Helpdesk",
    category: "Support Operations",
    link: "/portfolio", // link provided
  },
  {
    image: "https://picsum.photos/600/500?random=92",
    title: "High-Volume Data Entry & Catalog Management",
    category: "Data Processing",
    link: null, // no link -> div
  },
  {
    image: "https://picsum.photos/600/500?random=93",
    title: "Automated Virtual Assistant & Task Delegation",
    category: "Virtual Assistance",
    link: "/contact", // link provided
  },
  {
    image: "https://picsum.photos/600/500?random=94",
    title: "Document Verification & Compliance Auditing",
    category: "Quality Assurance",
    link: null, // no link -> div
  },
];

const features = [
    "Data Entry & Data Management",
    "Customer Support & Help Desk Services",
    "Virtual Assistant Support",
    "Document Processing & Verification",
    "Accounting & Bookkeeping Support",
    "Content Moderation & Review",
];
const processSteps = [
    { title: "Needs Assessment", description: "We start by analyzing your current back-office workflows and identifying tasks that can be outsourced." },
    { title: "Team Assembly & Training", description: "We assemble a dedicated team with the right skills and train them on your specific processes and tools." },
    { title: "Integration & Execution", description: "We seamlessly integrate our team with yours and begin executing tasks with high accuracy and efficiency." },
    { title: "Continuous Monitoring & Improvement", description: "We track performance metrics and continuously optimize our processes to deliver the best results." },
];
const whyChooseUs = [
    { title: "Cost-Effective", description: "Reduce your operational costs by outsourcing time-consuming tasks to our skilled and efficient team." },
    { title: "High Accuracy", description: "Our team is committed to delivering high-quality work with a high degree of accuracy and attention to detail." },
    { title: "Scalable Solutions", description: "Our services can easily scale up or down to meet your changing business needs." },
];
const faqs = [
    { question: "What is back-office outsourcing?", answer: "Back-office outsourcing is the practice of contracting out non-core business activities, such as data entry, customer support, and accounting, to an external service provider." },
    { question: "How do you ensure data security?", answer: "We take data security very seriously and have robust measures in place to protect your sensitive information, including non-disclosure agreements (NDAs) and secure data handling protocols." },
    { question: "Can I customize the services to my specific needs?", answer: "Yes, our back-office solutions are highly customizable. We will work with you to create a package that meets your unique requirements." },
];
const portfolioProjects = [
    {
        client: "Data Entry for E-commerce Catalog",
        image: "https://picsum.photos/600/400",
        hint: "product catalog data",
        description: "Accurately entered and updated thousands of product listings for a large e-commerce retailer.",
        link: "#",
    },
    {
        client: "24/7 Customer Support Team",
        image: "https://picsum.photos/600/400",
        hint: "customer support headset",
        description: "Provided round-the-clock customer support for a SaaS company, improving customer satisfaction ratings.",
        link: "#",
    },
];

export default function BackOfficePage() {
    return (<>
      {/* Full-Screen Video Background Hero with header clearance */}
      <ServiceHero
        badge="Enterprise Operations"
        title="Reliable & Scalable Back-Office Support"
        description="Streamline non-core business operations, reduce overhead costs, and scale your organizational capacity with our 24/7 dedicated back-office management teams."
        ctaText="Delegate Your Work"
        ctaLink="/contact"
        secondaryCtaText="Explore Solutions"
        secondaryCtaLink="#process"
        videoSrc="/videoservices/preview_540p_crf22_higher_quality.mp4"
        stats={[
          { label: "Cost Reduction", value: "60%" },
          { label: "SLA Adherence", value: "99.9%" },
          { label: "Hours Managed", value: "250K+" },
        ]}
        highlights={[
          "Dedicated 24/7 Multi-Lingual Support Teams",
          "Stringent GDPR & Data Privacy Protocols",
          "Transparent KPI & Real-Time Performance Dashboards",
        ]}
      />

      {/* Reusable Feature Showcase with 600x500 Image Slider */}
      <ServiceFeatureShowcase
        title="Focus on What Matters Most"
        subtitle="Let our expert team handle your essential but time-consuming back-office tasks with precision and care."
        slides={backOfficeShowcaseSlides}
        features={features}
        defaultDescription="Our reliable back-office solutions help you save time and money while improving operational efficiency."
      />
      
        <section id="process" className="py-16 md:py-24 bg-card">
            <div className="container">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Back Office Process</h2>
                    <p className="mt-4 text-lg text-muted-foreground md:text-xl">A seamless approach to integrating with your team.</p>
                </div>
                <div className="grid md:grid-cols-4 gap-8">
                    {processSteps.map((step, index) => (<div key={index} className="text-center p-6 border-t-4 border-primary rounded-lg shadow-lg">
                            <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                            <p className="text-muted-foreground">{step.description}</p>
                        </div>))}
                </div>
            </div>
        </section>

        <section className="py-16 md:py-24">
            <div className="container">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Why Outsource to Us?</h2>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {whyChooseUs.map((item, index) => (<div key={index} className="p-6">
                            <h3 className="text-xl font-bold mb-2 text-primary">{item.title}</h3>
                            <p className="text-muted-foreground">{item.description}</p>
                        </div>))}
                </div>
            </div>
        </section>

        <section id="portfolio" className="w-full py-16 md:py-24 bg-background">
            <div className="container">
                <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-5xl mb-12">Success Stories</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {portfolioProjects.map((project, index) => (<Card key={index} className="flex flex-col overflow-hidden group">
                            <div className="overflow-hidden">
                                <Image src={project.image} data-ai-hint={project.hint} alt={project.client} width={600} height={400} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"/>
                            </div>
                            <CardHeader>
                                <CardTitle>{project.client}</CardTitle>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <p>{project.description}</p>
                            </CardContent>
                        </Card>))}
                </div>
            </div>
        </section>

        <section className="py-16 md:py-24">
            <div className="container">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Frequently Asked Questions</h2>
                </div>
                <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
                    {faqs.map((faq, index) => (<AccordionItem value={`item-${index}`} key={index} className="border-none mb-4 group">
                             <div className="p-px bg-gradient-to-r from-yellow-500 via-transparent to-yellow-500 rounded-lg group-data-[state=open]:bg-primary transition-all duration-300">
                                <AccordionTrigger className="bg-card text-card-foreground p-6 rounded-lg hover:no-underline flex items-center justify-between text-left group-data-[state=open]:bg-primary group-data-[state=open]:text-primary-foreground transition-all duration-300">
                                    <span className="text-xl font-bold">{faq.question}</span>
                                    <div className="h-10 w-10 bg-background rounded-full flex items-center justify-center shrink-0 group-data-[state=open]:bg-white transition-all duration-300">
                                        <ArrowRight className="h-6 w-6 text-primary transition-transform duration-300 group-data-[state=open]:rotate-90"/>
                                    </div>
                                </AccordionTrigger>
                            </div>
                            <AccordionContent className="text-muted-foreground text-base p-6 bg-card rounded-b-lg">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>))}
                </Accordion>
            </div>
        </section>

      <BackgroundGradientAnimation>
        <div className="absolute z-50 inset-0 flex flex-col items-center justify-center text-white font-bold px-4 pointer-events-none text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl tracking-tighter">Ready to Streamline Your Operations?</h2>
            <p className="max-w-[600px] mt-4 mb-8 text-lg">
                Contact us today to discuss how our back-office services can help your business thrive.
            </p>
            <div className="pointer-events-auto">
                 <Button asChild size="lg" variant="glitch">
                  <Link href="/contact">Get a Free Consultation</Link>
                </Button>
            </div>
        </div>
      </BackgroundGradientAnimation>
    </>);
}
