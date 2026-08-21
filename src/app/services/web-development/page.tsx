
import { Button } from "@/components/ui/button";
import { Check, ShieldCheck, Zap, DatabaseBackup, Wrench, Monitor, Layers, Rocket, TrendingUp, Palette, Settings, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import TechStackMarquee from "@/components/tech-stack-marquee";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import IndustriesSection from "@/components/industries-section";
import DigitalGrowthPartner from "@/components/digital-growth-partner";

const maintenanceFeatures = [
    {
        icon: <ShieldCheck className="w-8 h-8 text-primary mt-1 flex-shrink-0" />,
        title: "Proactive Security Monitoring & Patching",
        description: "We constantly monitor for threats and apply security patches to keep your site secure."
    },
    {
        icon: <Zap className="w-8 h-8 text-primary mt-1 flex-shrink-0" />,
        title: "Performance & Speed Optimization",
        description: "We fine-tune your website to ensure it runs at peak performance for the best user experience."
    },
    {
        icon: <DatabaseBackup className="w-8 h-8 text-primary mt-1 flex-shrink-0" />,
        title: "Regular Backups & Disaster Recovery",
        description: "Your data is safe with regular backups and a recovery plan in case of emergencies."
    },
    {
        icon: <Wrench className="w-8 h-8 text-primary mt-1 flex-shrink-0" />,
        title: "Content Updates & Technical Support",
        description: "We're here to help with content changes and provide expert technical support when you need it."
    }
]

const whyChooseUsData = [
    {
        value: "item-1",
        trigger: "Tailored Solutions for Diverse Industries",
        content: "At Kalki Web, we understand that every industry has unique challenges. We deliver bespoke web development solutions that are tailored to your specific business needs, ensuring a perfect fit for your brand and your market."
    },
    {
        value: "item-2",
        trigger: "Advanced Technology for Peak Performance",
        content: "Your website needs to be fast, secure, and scalable. We utilize cutting-edge technologies and frameworks like React, Next.js, and Node.js to build modern web applications. This ensures your site is not only prepared for today's traffic but is also future-proofed for tomorrow's digital landscape."
    },
    {
        value: "item-3",
        trigger: "Bespoke Design Aligned with Your Brand",
        content: "We create visually stunning, user-centric designs that reflect your brand identity and engage your target audience. Our focus is on creating an intuitive user experience that drives conversions and builds brand loyalty."
    },
    {
        value: "item-4",
        trigger: "Global Expertise with Local Insight",
        content: "Our team combines global best practices with a deep understanding of local market dynamics. This allows us to create web solutions that are not only world-class in quality but also culturally relevant and effective."
    }
];

const webDevTabs = [
    {
        title: "Search engine foundations",
        heading: "Search engine foundations",
        description: "We build your website with SEO at its core, ensuring it's primed for visibility on search engines like Google. By embedding SEO best practices directly into the development process, we create a site that is not only fast and mobile-friendly but also structured to rank higher and attract organic traffic.",
        features: ["Strategic keyword targeting", "Semantic html & on-page seo", "Technical seo & schema markup", "Core web vitals & speed optimization"],
        image: "/illustrations/seo_search_results.jpg",
        imageHint: "seo search results"
    },
    {
        title: "Fortified security architecture",
        heading: "Fortified security architecture",
        description: "Security isn't an afterthought; it's built into the foundation of your website. We implement robust security measures, including data encryption, secure authentication, and protection against common vulnerabilities, to safeguard your business and your customers' data.",
        features: ["OWASP top 10 protection", "SSL/TLS encryption", "Regular security audits", "Secure coding practices"],
        image: "/illustrations/cyber_security.jpg",
        imageHint: "cyber security"
    },
    {
        title: "Scalability & performance",
        heading: "Scalability & performance engineering",
        description: "Your website should grow with your business. We engineer for scalability, using modern cloud infrastructure and efficient code to ensure your site can handle traffic spikes and future growth without a hitch. Performance is key to user experience, and we optimize for lightning-fast load times.",
        features: ["Cloud-native infrastructure (AWS, Vercel)", "Load balancing & auto-scaling", "Database optimization", "Content Delivery Network (CDN) integration"],
        image: "/illustrations/server_performance.jpg",
        imageHint: "server performance"
    },
    {
        title: "Conversion-driven design",
        heading: "Conversion-driven design",
        description: "A beautiful website is great, but a website that converts is better. Our design process is centered on creating intuitive user journeys and clear calls-to-action that guide visitors toward your business goals, whether it's making a purchase, filling out a form, or signing up.",
        features: ["User experience (UX) research", "A/B testing on key pages", "Clear call-to-action (CTA) design", "Mobile-first responsive design"],
        image: "/illustrations/user_conversion.jpg",
        imageHint: "user conversion chart"
    }
];

export default function WebDevelopmentPage() {
  return (
    <>
      <section className="pt-16 pb-4 md:pt-24 md:pb-6 bg-background">
        <div className="container text-center">
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
                Looking to Build a <span className="text-primary">Scalable, Secure,</span> and <span className="text-primary">High-Performance</span> Web Application?
            </h1>
            <p className="mt-6 text-lg max-w-4xl mx-auto text-muted-foreground">
                At Kalki Web, we specialize in custom web development tailored to your business goals—whether it's an enterprise portal, eCommerce platform, or cloud-based SaaS product. With our extensive experience and successful projects, our full-stack developers deliver solutions that drive engagement, performance, and growth.
            </p>
        </div>
      </section>

       <section className="pt-4 pb-16 md:pt-6 md:pb-24 bg-background">
          <div className="container">
            <div className="bg-card text-card-foreground rounded-xl shadow-2xl p-8 md:p-12">
               <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight mb-2">Why choose us for <span className="text-primary">Custom Website Development</span> services?</h2>
                        <p className="text-muted-foreground mb-8">
                            Our custom website development services at Kalki Web deliver exceptional results through innovation, quality, and a sharp focus on our clients' needs.
                        </p>
                        <Accordion type="single" defaultValue="item-2" collapsible className="w-full">
                            {whyChooseUsData.map((item) => (
                                <AccordionItem key={item.value} value={item.value} className="border-b-0 mb-2">
                                     <AccordionTrigger className="font-semibold p-4 bg-background/50 rounded-lg hover:no-underline hover:bg-accent/80 text-base">
                                        {item.trigger}
                                        <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
                                     </AccordionTrigger>
                                    <AccordionContent className="pt-4 pb-2 px-4 text-muted-foreground">
                                        {item.content}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                        <Button asChild size="lg" className="mt-8 bg-primary hover:bg-primary/90 text-primary-foreground">
                            <Link href="/contact">Let's discuss your project!</Link>
                        </Button>
                    </div>
                    <div>
                        <Image
                            src="/illustrations/team_collaboration.jpg"
                            data-ai-hint="team collaboration"
                            alt="Team discussing a project on a computer"
                            width={600}
                            height={500}
                            className="rounded-lg object-cover"
                        />
                    </div>
               </div>
            </div>
          </div>
       </section>

      <TechStackMarquee />

      <DigitalGrowthPartner tabs={webDevTabs} className="pb-8 md:pb-12" />

      <IndustriesSection />
      
        <section className="py-16 md:py-24 bg-card">
            <div className="container">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Web Development Process</h2>
                    <p className="mt-4 text-lg text-muted-foreground md:text-xl">A proven framework for delivering high-quality websites.</p>
                </div>
                <div className="relative">
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-border -translate-y-1/2"></div>
                </div>
            </div>
        </section>

        <section className="py-16 md:py-24 bg-background">
            <div className="container">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <Image
                            src="https://picsum.photos/600/700"
                            data-ai-hint="server maintenance"
                            alt="Web maintenance and support"
                            width={600}
                            height={700}
                            className="rounded-lg object-cover"
                        />
                    </div>
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary">Web Maintenance & Updates</h2>
                        <p className="text-lg text-muted-foreground">
                            Ensure your website remains secure, fast, and up-to-date with our comprehensive web maintenance and support services. We provide proactive monitoring and regular updates to protect your digital asset from security threats and prevent performance degradation. Our dedicated team handles everything from security patches and bug fixes to content updates and performance tuning, giving you complete peace of mind.
                        </p>
                        <div className="space-y-4">
                            {maintenanceFeatures.map((feature, index) => (
                                <div key={index} className="flex items-start gap-4">
                                    {feature.icon}
                                    <div>
                                        <h3 className="font-bold">{feature.title}</h3>
                                        <p className="text-muted-foreground text-sm">{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex flex-col items-center justify-center text-white font-bold px-4 pointer-events-none text-center">
                <h2 className="text-3xl sm:text-4xl md:text-5xl tracking-tighter">Ready to Build Your Online Presence?</h2>
                <p className="max-w-[600px] mt-4 mb-8 text-lg">
                    Let's talk about how we can create a stunning and effective website for your business.
                </p>
                <div className="pointer-events-auto">
                    <Button asChild size="lg" variant="glitch">
                        <Link href="/contact">Get a Free Consultation</Link>
                    </Button>
                </div>
            </div>
        </BackgroundGradientAnimation>
    </>
  );
}
