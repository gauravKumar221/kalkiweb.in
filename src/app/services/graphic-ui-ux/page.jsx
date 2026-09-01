import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import DraggableLetters from "@/components/draggable-letters";
import ServiceHero from "@/components/service-hero";
import ServiceFeatureShowcase from "@/components/service-feature-showcase";
import ShowcaseMarquee from "@/components/showcase-marquee";

// Showcase Slider Slides (Width 600, Height 500, with optional link or div support)
const showcaseSlides = [
  {
    image: "/illustrations/team_collaboration.jpg",
    title: "Brand Identity & Modern UI Design",
    category: "Design System",
    link: "/portfolio", // link provided -> clickable <a> / <Link>
  },
  {
    image: "/illustrations/design_audience_steps.jpg",
    title: "User Experience Journey Mapping",
    category: "UX Research",
    link: null, // no link -> rendered as <div>
  },
  {
    image: "https://picsum.photos/600/500?random=31",
    title: "Interactive Prototype & Micro-Interactions",
    category: "Figma Prototyping",
    link: "/contact", // link provided
  },
  {
    image: "https://picsum.photos/600/500?random=32",
    title: "Visual Design & Social Creative Suite",
    category: "Graphic Design",
    link: null, // no link -> rendered as <div>
  },
];

// Showcase Marquee Items (Desktop & Mobile mockups with optional links/divs)
const graphicMarqueeItems = [
  {
    image: "/illustrations/team_collaboration.jpg",
    title: "OuroLogy - Healthy Skin & Glow Care",
    category: "E-Commerce & Branding",
    link: "/portfolio", // has link -> clickable
    isMobile: false,
  },
  {
    image: "/illustrations/design_audience_steps.jpg",
    title: "Plin-Plan Travel Companion",
    category: "Mobile App UI",
    link: null, // no link -> rendered as <div>
    isMobile: true,
  },
  {
    image: "/illustrations/seo_search_results.jpg",
    title: "Dura Skills - Modern Learning Platform",
    category: "SaaS Web Design",
    link: "/contact", // has link -> clickable
    isMobile: false,
  },
  {
    image: "/illustrations/server_performance.jpg",
    title: "Portal Architecture & Real Estate",
    category: "Mobile App Wireframe",
    link: null, // no link -> rendered as <div>
    isMobile: true,
  },
  {
    image: "/illustrations/user_conversion.jpg",
    title: "Fintech Banking & Digital Wallet",
    category: "Dashboard UI System",
    link: "/portfolio",
    isMobile: false,
  },
  {
    image: "/illustrations/cyber_security.jpg",
    title: "Cyber Shield Enterprise Security",
    category: "Design System & Identity",
    link: null,
    isMobile: false,
  },
];

const features = [
  "User Interface (UI) Design",
  "User Experience (UX) Design",
  "Branding & Identity Design",
  "Wireframing & Prototyping",
  "Graphic Design for Marketing",
  "Design System Creation",
];

const processSteps = [
  {
    title: "Discovery & Research",
    description:
      "We start by understanding your brand, audience, and goals through workshops and research.",
  },
  {
    title: "Concept & Wireframing",
    description:
      "Our team creates wireframes and prototypes to map out the user flow and structure.",
  },
  {
    title: "Visual Design",
    description:
      "We craft a stunning visual design that aligns with your brand and engages your users.",
  },
  {
    title: "Testing & Refinement",
    description:
      "We test our designs with real users to gather feedback and make iterative improvements.",
  },
];

const whyChooseUs = [
  {
    title: "User-Centered Approach",
    description:
      "Our design process is driven by a deep understanding of your users' needs and behaviors.",
  },
  {
    title: "Creative Excellence",
    description:
      "Our talented designers are passionate about creating beautiful and effective visual solutions.",
  },
  {
    title: "Collaborative Process",
    description:
      "We work closely with you throughout the design process to ensure the final product meets your vision.",
  },
];

const faqs = [
  {
    question: "What is the difference between UI and UX design?",
    answer:
      "UX (User Experience) design is about the overall feel of the experience, while UI (User Interface) design is about the look and layout of the product's interface.",
  },
  {
    question: "Can you create a brand identity for my new business?",
    answer:
      "Yes, we offer complete branding packages, including logo design, color palettes, typography, and brand guidelines.",
  },
  {
    question: "What tools do you use for design?",
    answer:
      "We use industry-standard design tools like Figma, Sketch, and Adobe Creative Suite to create our designs.",
  },
];

const portfolioProjects = [
  {
    client: "Mobile App UI/UX Redesign",
    image: "https://picsum.photos/600/400",
    hint: "mobile app design",
    description:
      "A complete redesign of a mobile app, resulting in a 40% increase in user engagement.",
    link: "#",
  },
  {
    client: "Corporate Branding Package",
    image: "https://picsum.photos/600/400",
    hint: "branding guidelines",
    description:
      "Developed a comprehensive brand identity for a tech startup, including logo, and marketing materials.",
    link: "#",
  },
];

export default function GraphicUiUxPage() {
  return (
    <>
      {/* Full-Screen Video Background Hero with header clearance */}
      <ServiceHero
        badge="Design Studio & UI/UX"
        title="Stunning Graphic & UI/UX Design Experiences"
        description="We create beautiful, intuitive, and human-centered digital designs that elevate your brand identity, delight users, and drive high conversions."
        ctaText="Start Your Design Project"
        ctaLink="/contact"
        secondaryCtaText="View Design Portfolio"
        secondaryCtaLink="#portfolio"
        videoSrc="/videoservices/graphic-ui-ux.mp4"
        stats={[
          { label: "Engagement Boost", value: "+75%" },
          { label: "Design Systems Built", value: "60+" },
          { label: "Design Awards", value: "15+" },
        ]}
        highlights={[
          "Figma Prototypes & Scalable Design Systems",
          "Brand Identity & Visual Aesthetic Guidelines",
          "Conversion-Optimized UX & Micro-Animations",
        ]}
      />

      {/* Full-Bleed Infinite Horizontal Marquee Showcase (Like Reference) */}
      <ShowcaseMarquee
        items={graphicMarqueeItems}
        badge="Design Reel"
        title="Featured UI/UX & Digital Experience Reel"
        subtitle="Explore our live showcase of high-converting website architectures, mobile applications, and visual identity systems."
        speed={45}
      />

      {/* Reusable Feature Showcase with 600x500 Image Slider */}
      <ServiceFeatureShowcase
        title="Design That Delights Users"
        subtitle="Our design process is rooted in a deep understanding of your users, ensuring the final product is both beautiful and functional."
        slides={showcaseSlides}
        features={features}
        defaultDescription="We combine artistic talent with user research to create designs that not only look great but also drive results."
      />

      <DraggableLetters />

      <section className="py-16 md:py-24 bg-card">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Our Design Process
            </h2>
            <p className="mt-4 text-lg text-muted-foreground md:text-xl">
              A collaborative journey to creating exceptional designs.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="text-center p-6 border-t-4 border-primary rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="w-full py-16 md:py-24 bg-background">
        <div className="container">
          <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-5xl mb-12">
            Featured Design Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {portfolioProjects.map((project, index) => (
              <Card key={index} className="flex flex-col overflow-hidden group">
                <div className="overflow-hidden">
                  <Image
                    src={project.image}
                    data-ai-hint={project.hint}
                    alt={project.client}
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
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
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Frequently Asked Questions
            </h2>
          </div>
          <Accordion
            type="single"
            collapsible
            className="w-full max-w-3xl mx-auto"
          >
            {faqs.map((faq, index) => (
              <AccordionItem
                value={`item-${index}`}
                key={index}
                className="border-none mb-4 group"
              >
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl tracking-tighter">
            Ready to Elevate Your Brand's Visuals?
          </h2>
          <p className="max-w-[600px] mt-4 mb-8 text-lg">
            Let's create a stunning visual identity and user experience for your
            brand.
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
