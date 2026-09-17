import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import DigitalGrowthPartner from "@/components/digital-growth-partner";
import ServiceHero from "@/components/service-hero";
import ServiceFeatureShowcase from "@/components/service-feature-showcase";

// Showcase Slider Slides for E-Commerce
const ecommerceShowcaseSlides = [
  {
    image: "https://picsum.photos/600/500?random=71",
    title: "Enterprise Multi-Vendor Commerce Platform",
    category: "Full-Stack E-Commerce",
    link: "/portfolio", // link provided
  },
  {
    image: "https://picsum.photos/600/500?random=72",
    title: "Automated Global Logistics & ERP Suite",
    category: "Operations Sync",
    link: null, // no link -> div
  },
  {
    image: "https://picsum.photos/600/500?random=73",
    title: "One-Click Checkout & Subscription Engine",
    category: "Frictionless CRO",
    link: "/contact", // link provided
  },
  {
    image: "https://picsum.photos/600/500?random=74",
    title: "Next.js Headless Storefront Architecture",
    category: "Headless Commerce",
    link: null, // no link -> div
  },
];

const features = [
    "Custom Platform Development",
    "Shopping Cart & Checkout Optimization",
    "Payment Gateway Integration",
    "Inventory Management Systems",
    "Mobile Commerce Ready",
    "Security & Compliance",
];
const processSteps = [
    { title: "Discovery & Planning", description: "We start by understanding your products, target audience, and business goals to plan the perfect e-commerce strategy." },
    { title: "Design & User Experience", description: "Our team designs a beautiful, intuitive, and conversion-focused online store that reflects your brand." },
    { title: "Development & Integration", description: "We build a robust and scalable e-commerce platform, integrating all the necessary tools and payment gateways." },
    { title: "Launch & Growth", description: "After rigorous testing, we launch your store and provide ongoing support to help you grow your online sales." },
];
const whyChooseUs = [
    { title: "Conversion-Focused Design", description: "We design online stores that not only look great but are also optimized to turn visitors into customers." },
    { title: "Scalable Platforms", description: "Our e-commerce solutions are built to grow with your business, handling increased traffic and sales." },
    { title: "Secure & Reliable", description: "We prioritize security and compliance to protect your business and your customers' data." },
];
const faqs = [
    { question: "Which e-commerce platform is right for me?", answer: "The best platform (e.g., Shopify, WooCommerce, Magento) depends on your specific needs, budget, and scalability requirements. We can help you choose the right one." },
    { question: "Can you integrate with my existing systems?", answer: "Yes, we can integrate your e-commerce store with your existing ERP, CRM, and other business systems for seamless operations." },
    { question: "Do you provide ongoing support?", answer: "Yes, we offer ongoing maintenance and support plans to ensure your online store remains secure, up-to-date, and optimized for performance." },
];
const ecommerceTabs = [
    {
        title: "Platform Selection",
        heading: "The Right Foundation for Your Store",
        description: "Choosing the right ecommerce platform is crucial for success. We'll help you navigate the options (Shopify, WooCommerce, Magento, etc.) to find the perfect fit for your business goals, budget, and scalability needs.",
        features: ["In-depth needs analysis", "Platform comparison & recommendation", "Future-proof architecture planning", "Headless commerce options"],
        image: "https://picsum.photos/600/500",
        imageHint: "ecommerce platforms"
    },
    {
        title: "Payment Gateways",
        heading: "Secure & Seamless Transactions",
        description: "Provide your customers with a frictionless checkout experience by integrating trusted and secure payment gateways. We ensure PCI compliance and support for various payment methods to maximize your conversions.",
        features: ["Stripe, PayPal, and other major gateways", "PCI compliance assurance", "Multi-currency support", "Subscription & recurring billing"],
        image: "https://picsum.photos/600/500",
        imageHint: "payment processing"
    },
    {
        title: "Inventory Management",
        heading: "Streamlined Inventory Control",
        description: "Efficiently manage your stock levels, track products, and automate inventory updates with our integrated solutions. We help you prevent stockouts, reduce carrying costs, and streamline your fulfillment process.",
        features: ["Real-time stock tracking", "Multi-location inventory sync", "Automated reorder points", "ERP & third-party logistics (3PL) integration"],
        image: "https://picsum.photos/600/500",
        imageHint: "warehouse inventory"
    },
    {
        title: "Analytics & Reporting",
        heading: "Data-Driven Decision Making",
        description: "Unlock actionable insights from your sales data. We set up comprehensive analytics and reporting dashboards to help you understand customer behavior, track key performance indicators (KPIs), and make informed decisions to grow your business.",
        features: ["Google Analytics 4 setup", "Custom sales & conversion dashboards", "Customer lifetime value (CLV) analysis", "A/B testing for optimization"],
        image: "https://picsum.photos/600/500",
        imageHint: "analytics dashboard"
    }
];

export default function EcommercePage() {
    return (<>
      {/* Full-Screen Video Background Hero with header clearance */}
      <ServiceHero
        badge="E-Commerce Solutions"
        title="Comprehensive E-Commerce Architecture & Scaling"
        description="We build robust, high-conversion online commerce platforms engineered to streamline operations, maximize average order value (AOV), and deliver frictionless customer buying experiences."
        ctaText="Start Your Ecommerce Project"
        ctaLink="/contact"
        secondaryCtaText="Explore Capabilities"
        secondaryCtaLink="#process"
        videoSrc="/videoservices/preview_540p_crf22_higher_quality.mp4"
        stats={[
          { label: "Revenue Processed", value: "$50M+" },
          { label: "Checkout Drop-off", value: "<12%" },
          { label: "Payment Gateways", value: "20+" },
        ]}
        highlights={[
          "Headless Commerce & Multi-Currency Gateways",
          "Automated Inventory & ERP Synchronization",
          "Ultra-Fast Micro-Checkout & One-Click Buying",
        ]}
      />
      
      <DigitalGrowthPartner tabs={ecommerceTabs}/>

      {/* Service Feature Showcase Tailored for New Business Owners */}
      <ServiceFeatureShowcase
        serviceType="ecommerce"
        features={features}
      />
      
        <section id="process" className="py-16 md:py-24 bg-card">
            <div className="container">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Ecommerce Development Process</h2>
                    <p className="mt-4 text-lg text-muted-foreground md:text-xl">A proven path to launching a successful online store.</p>
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
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Why Choose Us for Ecommerce?</h2>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {whyChooseUs.map((item, index) => (<div key={index} className="p-6">
                            <h3 className="text-xl font-bold mb-2 text-primary">{item.title}</h3>
                            <p className="text-muted-foreground">{item.description}</p>
                        </div>))}
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl tracking-tighter">Ready to Boost Your Online Sales?</h2>
            <p className="max-w-[600px] mt-4 mb-8 text-lg">
                Let's discuss how we can build a powerful ecommerce platform for your business.
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
