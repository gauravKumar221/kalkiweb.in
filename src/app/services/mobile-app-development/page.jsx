import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import ServiceHero from "@/components/service-hero";
import ServiceFeatureShowcase from "@/components/service-feature-showcase";
import MobileAppShowcase from "@/components/mobile-app-showcase";

// Showcase Slider Slides for Mobile App Development
const mobileShowcaseSlides = [
  {
    image: "https://picsum.photos/600/500?random=61",
    title: "iOS Native Fintech & Crypto Wallet App",
    category: "Swift & SwiftUI",
    link: "/portfolio", // link provided
  },
  {
    image: "https://picsum.photos/600/500?random=62",
    title: "Cross-Platform On-Demand Delivery System",
    category: "React Native & Node.js",
    link: null, // no link -> div
  },
  {
    image: "https://picsum.photos/600/500?random=63",
    title: "Healthcare Telemedicine Patient Portal",
    category: "Flutter & Cloud API",
    link: "/contact", // link provided
  },
  {
    image: "https://picsum.photos/600/500?random=64",
    title: "Fitness Tracker & Real-Time Bio-Metrics",
    category: "Mobile UX/UI",
    link: null, // no link -> div
  },
];

const features = [
    "iOS & Android App Development",
    "Cross-Platform Development (React Native & Flutter)",
    "Native iOS (Swift) & Android (Kotlin)",
    "App UI/UX & Micro-Interactions",
    "Scalable Backend & Cloud API Architecture",
    "App Store Deployment & Support",
];
const processSteps = [
    { title: "Strategy & Prototyping", description: "We start by defining your app's core features, target audience, and creating interactive prototypes." },
    { title: "Design & Development", description: "Our team designs a beautiful UI and develops a high-performance app using the latest technologies." },
    { title: "Testing & Quality Assurance", description: "We conduct rigorous testing to ensure your app is bug-free, secure, and ready for launch." },
    { title: "Launch & Maintenance", description: "We handle the app store submission process and provide ongoing support to keep your app up-to-date." },
];
const whyChooseUs = [
    { title: "Experienced Developers", description: "Our team of skilled developers has extensive experience building successful mobile apps for various platforms." },
    { title: "User-Centric Design", description: "We focus on creating intuitive and engaging user experiences that keep your users coming back." },
    { title: "End-to-End Service", description: "From idea to launch and beyond, we provide comprehensive services to bring your app vision to life." },
];
const faqs = [
    { question: "How much does it cost to build a mobile app?", answer: "The cost depends on the complexity of the app, the features required, and the platforms you want to target. We can provide a detailed quote after discussing your project." },
    { question: "Should I build a native or cross-platform app?", answer: "The choice depends on your budget, timeline, and performance requirements. We can help you decide which approach is best for your project." },
    { question: "Can you help me with app marketing?", answer: "While our primary focus is on development, we can provide guidance on app store optimization (ASO) and connect you with our marketing partners." },
];
const portfolioProjects = [
    {
        client: "Social Networking App",
        image: "https://picsum.photos/600/400",
        hint: "social media app",
        description: "A feature-rich social media app with real-time chat and photo sharing capabilities.",
        link: "#",
    },
    {
        client: "On-Demand Delivery App",
        image: "https://picsum.photos/600/400",
        hint: "delivery app interface",
        description: "A user-friendly app for an on-demand delivery service, with real-time tracking and payment integration.",
        link: "#",
    },
];

export default function MobileAppDevelopmentPage() {
    return (<>
      {/* Full-Screen Video Background Hero with header clearance */}
      <ServiceHero
        badge="iOS & Android Engineering"
        title="High-Performance Mobile App Development"
        description="We engineer innovative, intuitive, and lightning-fast mobile apps for iOS and Android that drive viral user adoption and scale with your business."
        ctaText="Start Your App Project"
        ctaLink="/contact"
        secondaryCtaText="View Featured Apps"
        secondaryCtaLink="#portfolio"
        videoSrc="/videoservices/preview_540p_crf22_higher_quality.mp4"
        stats={[
          { label: "App Store Rating", value: "4.9★" },
          { label: "Total Downloads", value: "1M+" },
          { label: "Crash-Free Rate", value: "99.8%" },
        ]}
        highlights={[
          "Native iOS & Android and React Native / Flutter",
          "Real-Time WebSockets & Backend Cloud Sync",
          "Seamless App Store & Google Play Submission",
        ]}
      />

      {/* Service Feature Showcase Tailored for New Business Owners */}
      <ServiceFeatureShowcase
        serviceType="mobile-app-development"
        features={features}
      />

      {/* Floating Smartphone Mockup & App Showcase Section */}
      <MobileAppShowcase
        title="Plan Your"
        titleItalic="Mobile Experience"
        description="We have the largest selection of unique mobile app architectures. Try our fast, native and cross-platform app engineering for any request. 24-hour support is always happy to answer all your questions."
        ctaText="Get Started"
        ctaLink="/contact"
        downloadTitle="Download"
        downloadSubtitle="The mobile app is available now"
        appStoreLink="#"
        playStoreLink="#"
        videoSrc="/videoservices/preview_540p_crf22_higher_quality.mp4"
      />
      
        <section id="process" className="py-16 md:py-24 bg-card">
            <div className="container">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our App Development Process</h2>
                    <p className="mt-4 text-lg text-muted-foreground md:text-xl">A transparent roadmap for building successful mobile apps.</p>
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
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Why Choose Us for App Development?</h2>
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
                <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-5xl mb-12">Featured Mobile Apps</h2>
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl tracking-tighter">Ready to Build Your Mobile App?</h2>
            <p className="max-w-[600px] mt-4 mb-8 text-lg">
              Let's talk about your app idea and how we can bring it to life.
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
