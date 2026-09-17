import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import ServiceHero from "@/components/service-hero";
import ServiceFeatureShowcase from "@/components/service-feature-showcase";

// Showcase Slider Slides for DevOps & Cloud
const devopsShowcaseSlides = [
  {
    image: "https://picsum.photos/600/500?random=81",
    title: "Kubernetes Cloud Cluster Automation",
    category: "Cloud Architecture",
    link: "/portfolio", // link provided
  },
  {
    image: "https://picsum.photos/600/500?random=82",
    title: "Zero-Downtime Automated CI/CD Pipelines",
    category: "DevOps & CI/CD",
    link: null, // no link -> div
  },
  {
    image: "https://picsum.photos/600/500?random=83",
    title: "Terraform Infrastructure as Code (IaC)",
    category: "Cloud Security",
    link: "/contact", // link provided
  },
  {
    image: "https://picsum.photos/600/500?random=84",
    title: "24/7 Monitoring & Prometheus Tracing",
    category: "Observability",
    link: null, // no link -> div
  },
];

const features = [
    "Continuous Integration & Deployment (CI/CD)",
    "Infrastructure as Code (IaC - Terraform, Ansible)",
    "Automated Testing & Quality Gates",
    "Multi-Cloud (AWS, GCP, Azure, Vercel)",
    "24/7 Monitoring, Tracing & Logging",
    "DevSecOps & Compliance Automation",
];
const processSteps = [
    { title: "Discovery & Assessment", description: "We analyze your current development pipeline and infrastructure to identify bottlenecks and areas for improvement." },
    { title: "Strategy & Planning", description: "We design a comprehensive DevOps strategy and roadmap tailored to your business goals." },
    { title: "Implementation & Automation", description: "Our experts implement CI/CD pipelines, automated testing, and infrastructure as code to streamline your workflow." },
    { title: "Monitoring & Support", description: "We provide ongoing monitoring and support to ensure your systems are running smoothly and efficiently." },
];
const whyChooseUs = [
    { title: "Faster Time-to-Market", description: "Automate your build, test, and deployment processes to release new features faster and more frequently." },
    { title: "Improved Reliability", description: "Implement infrastructure as code and automated testing to reduce errors and improve system stability." },
    { title: "Enhanced Security", description: "Integrate security best practices into your development lifecycle to protect your applications and data." },
];
const faqs = [
    { question: "What is DevOps?", answer: "DevOps is a set of practices that combines software development (Dev) and IT operations (Ops) to shorten the development life cycle and provide continuous delivery with high software quality." },
    { question: "Which cloud platforms do you support?", answer: "We are cloud-agnostic and have experience working with major cloud providers like AWS, Google Cloud, and Azure, as well as on-premise solutions." },
    { question: "How can DevOps benefit my business?", answer: "DevOps can help you release software faster, improve reliability, enhance security, and foster better collaboration between your development and operations teams." },
];
const portfolioProjects = [
    {
        client: "CI/CD Pipeline for SaaS",
        image: "https://picsum.photos/600/400",
        hint: "devops pipeline",
        description: "Implemented a fully automated CI/CD pipeline, reducing deployment time from hours to minutes.",
        link: "#",
    },
    {
        client: "Infrastructure as Code Setup",
        image: "https://picsum.photos/600/400",
        hint: "cloud infrastructure code",
        description: "Managed cloud infrastructure using Terraform, ensuring consistent and reproducible environments.",
        link: "#",
    },
];

export default function DevOpsPage() {
    return (<>
      {/* Full-Screen Video Background Hero with header clearance */}
      <ServiceHero
        badge="Cloud & DevOps Engineering"
        title="Seamless DevOps & Cloud Infrastructure"
        description="We build robust CI/CD pipelines, automate cloud infrastructure as code (IaC), and maximize uptime so your engineering team can ship with confidence."
        ctaText="Optimize Your Workflow"
        ctaLink="/contact"
        secondaryCtaText="View Deployments"
        secondaryCtaLink="#portfolio"
        videoSrc="/videoservices/preview_540p_crf22_higher_quality.mp4"
        stats={[
          { label: "Deployment Speed", value: "8x" },
          { label: "Uptime Reliability", value: "99.99%" },
          { label: "Incident Reduction", value: "-80%" },
        ]}
        highlights={[
          "Zero-Downtime Automated CI/CD Pipelines",
          "Terraform & Kubernetes Cloud Orchestration",
          "Real-Time Monitoring & Self-Healing Architecture",
        ]}
      />

      {/* Service Feature Showcase Tailored for New Business Owners */}
      <ServiceFeatureShowcase
        serviceType="devops"
        features={features}
      />
      
        <section id="process" className="py-16 md:py-24 bg-card">
            <div className="container">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our DevOps Process</h2>
                    <p className="mt-4 text-lg text-muted-foreground md:text-xl">A structured approach to modernizing your development pipeline.</p>
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
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Why Choose Our DevOps Services?</h2>
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
                <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-5xl mb-12">Featured DevOps Projects</h2>
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl tracking-tighter">Ready to Modernize Your Infrastructure?</h2>
            <p className="max-w-[600px] mt-4 mb-8 text-lg">
                Let's talk about how our DevOps services can transform your development process.
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
