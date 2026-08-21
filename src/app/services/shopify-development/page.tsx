
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import DigitalGrowthPartner from "@/components/digital-growth-partner";

const features = [
  "Custom Theme Design & Development",
  "Shopify App Integration & Customization",
  "Mobile-First, Responsive Design",
  "Conversion Rate Optimization (CRO)",
  "SEO for Shopify Stores",
  "Ongoing Maintenance & Support",
];

const processSteps = [
    { title: "Discovery & Strategy", description: "We learn about your brand, products, and goals to create a winning Shopify strategy." },
    { title: "Theme Design & Customization", description: "Our team designs and develops a custom Shopify theme that is both beautiful and functional." },
    { title: "App Integration & Setup", description: "We integrate essential apps and configure your store settings for optimal performance." },
    { title: "Launch & Optimization", description: "We ensure a smooth launch and provide ongoing support to help you grow your sales." },
];

const whyChooseUs = [
    { title: "Shopify Experts", description: "Our team has extensive experience in designing and developing successful Shopify stores." },
    { title: "Conversion-Focused", description: "We build stores that are optimized to convert visitors into loyal customers." },
    { title: "Custom Solutions", description: "We tailor every store to the unique needs of your brand and business." },
];

const faqs = [
    { question: "Why should I choose Shopify for my e-commerce store?", answer: "Shopify is a powerful, user-friendly platform that provides everything you need to start, run, and grow your business. It's scalable, secure, and has a vast ecosystem of apps." },
    { question: "Can you migrate my existing store to Shopify?", answer: "Yes, we can help you migrate your products, customers, and data from another platform to Shopify with minimal downtime." },
    { question: "Do you offer support after the store is launched?", answer: "Yes, we offer various maintenance and support packages to ensure your Shopify store remains up-to-date, secure, and optimized for performance." },
];

const shopifyTabs = [
    {
        title: "Custom Shopify Themes",
        heading: "Bespoke Themes That Tell Your Story",
        description: "Stand out from the crowd with a custom Shopify theme designed and developed just for your brand. We create unique, visually stunning, and highly functional themes that provide an exceptional shopping experience and reflect your brand's identity.",
        features: ["Unique, brand-aligned design", "Mobile-first and fully responsive", "Optimized for speed and performance", "Clean, maintainable code"],
        image: "https://picsum.photos/600/500",
        imageHint: "shopify theme design"
    },
    {
        title: "App Integration",
        heading: "Powerful Apps to Extend Functionality",
        description: "Supercharge your Shopify store by integrating the right apps. Whether you need advanced marketing automation, subscription services, or improved customer support, we'll help you select, install, and configure the best apps to meet your business needs.",
        features: ["App recommendation & selection", "Seamless integration with your theme", "Custom app development", "Workflow automation"],
        image: "https://picsum.photos/600/500",
        imageHint: "app integration"
    },
    {
        title: "Sales Channel Setup",
        heading: "Sell Everywhere Your Customers Are",
        description: "Expand your reach beyond your online store. We'll help you set up and manage multiple sales channels, including Shopify POS for retail, and integrations with social media platforms like Instagram and Facebook, and marketplaces like Amazon.",
        features: ["Shopify POS setup & training", "Social commerce integration", "Marketplace syndication", "Omnichannel inventory management"],
        image: "https://picsum.photos/600/500",
        imageHint: "multi-channel selling"
    },
    {
        title: "Conversion Optimization",
        heading: "Turn More Visitors into Customers",
        description: "A beautiful store is just the beginning. We use data-driven strategies to optimize your store for conversions. From A/B testing product pages to streamlining your checkout process, we focus on maximizing your sales and ROI.",
        features: ["A/B testing & CRO", "Optimized product pages", "Streamlined checkout process", "Trust-building elements (reviews, badges)"],
        image: "https://picsum.photos/600/500",
        imageHint: "conversion rate optimization"
    }
];

export default function ShopifyDevelopmentPage() {
  return (
    <>
      <section className="py-16 md:py-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05]"></div>
        <div className="container relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold tracking-tighter text-primary sm:text-5xl md:text-6xl">
                Expert Shopify Development Services
              </h1>
              <p className="text-lg text-muted-foreground md:text-xl">
                We build beautiful, high-converting Shopify stores that are
                tailored to your brand. From custom theme development to app
                integrations, we provide everything you need to succeed.
              </p>
              <Button asChild size="lg" variant="glitch">
                <Link href="/contact">Start Your Shopify Project</Link>
              </Button>
            </div>
            <div>
              <Image
                src="https://picsum.photos/600/500"
                data-ai-hint="shopify website"
                alt="Shopify store example"
                width={600}
                height={500}
                className="rounded-lg object-cover shadow-2xl shadow-primary/20"
              />
            </div>
          </div>
        </div>
      </section>

      <DigitalGrowthPartner tabs={shopifyTabs} />

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Launch Your Store with Confidence
            </h2>
            <p className="mt-4 text-lg text-muted-foreground md:text-xl">
              Our Shopify experts handle every detail to ensure your e-commerce
              store is a success from day one.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
                <Image
                    src="https://picsum.photos/600/700"
                    data-ai-hint="online store analytics"
                    alt="Shopify analytics dashboard"
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
                      We go beyond the basics to deliver a store that not only
                      looks great but also performs exceptionally.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
        <section className="py-16 md:py-24 bg-card">
            <div className="container">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Shopify Development Process</h2>
                    <p className="mt-4 text-lg text-muted-foreground md:text-xl">A clear path to launching your successful Shopify store.</p>
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
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Why Choose Us for Shopify?</h2>
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl tracking-tighter">Ready to Build Your Shopify Empire?</h2>
            <p className="max-w-[600px] mt-4 mb-8 text-lg">
                Let's discuss how we can create a powerful, scalable, and beautiful online store for your brand.
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
