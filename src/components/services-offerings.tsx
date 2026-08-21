import { Button } from "@/components/ui/button";
import { Box, Code, Fingerprint, Megaphone, MonitorSmartphone, GanttChartSquare, Users, TrendingUp, Handshake, Target, Newspaper, ShoppingCart, Settings, UsersRound, HandCoins } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const AdsIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
        <path d="M8 12h8"/>
        <path d="M12 8v8"/>
        <path d="M17.5 17.5c-1.5-1.5-1.5-4 0-5.5s4 0 5.5 0"/>
        <path d="M9.5 9.5c1.5 1.5 1.5 4 0 5.5s-4 0-5.5 0"/>
    </svg>
);
const PerformanceIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"/>
        <path d="M12 12l-4-4"/>
        <path d="M16 12h-4v-4"/>
    </svg>
);
const CMSIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9"/>
        <path d="M3 20h2"/>
        <path d="M12 4h9"/>
        <path d="M3 4h2"/>
        <path d="M20 12h-2"/>
        <path d="M5 12H3"/>
        <path d="M16 6l-4 4-4-4"/>
        <path d="M8 18l4-4 4 4"/>
        <path d="M12 12-4-4-4 4"/>
        <path d="M12 12 4 4 4-4"/>
        <circle cx="12" cy="12" r="3"/>
    </svg>
);
const ShopifyIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.14 7.61999C16.14 7.03999 15.68 6.57999 15.1 6.57999C14.52 6.57999 14.06 7.03999 14.06 7.61999C14.06 8.24999 14.53 8.78999 15.1 8.78999C15.67 8.78999 16.14 8.24999 16.14 7.61999ZM17.82 9.04999C17.31 8.94999 16.32 8.81999 16.32 7.61999C16.32 6.13999 17.5 4.98999 18.96 4.98999C20.42 4.98999 21.6 6.13999 21.6 7.61999C21.6 8.81999 20.61 8.94999 20.1 9.04999C20.61 9.15999 21.6 9.27999 21.6 10.48C21.6 11.96 20.42 13.11 18.96 13.11C17.5 13.11 16.32 11.96 16.32 10.48C16.32 9.27999 17.31 9.15999 17.82 9.04999ZM15.1 11.51C15.68 11.51 16.14 11.97 16.14 12.55C16.14 13.13 15.68 13.59 15.1 13.59C14.52 13.59 14.06 13.13 14.06 12.55C14.06 11.97 14.53 11.51 15.1 11.51ZM18.96 8.78999C18.39 8.78999 17.92 8.24999 17.92 7.61999C17.92 6.98999 18.39 6.44999 18.96 6.44999C19.53 6.44999 20.01 6.98999 20.01 7.61999C20.01 8.24999 19.53 8.78999 18.96 8.78999ZM18.96 11.51C19.53 11.51 20.01 10.97 20.01 10.34C20.01 9.71999 19.53 9.17999 18.96 9.17999C18.39 9.17999 17.92 9.71999 17.92 10.34C17.92 10.97 18.39 11.51 18.96 11.51ZM15.1 19.01H6C5.45 19.01 5 18.56 5 18.01V6.00999C5 5.45999 5.45 5.00999 6 5.00999H18C18.55 5.00999 19 5.45999 19 6.00999V4.00999C19 3.45999 18.55 3.00999 18 3.00999H6C4.34 3.00999 3 4.35999 3 6.00999V18.01C3 19.66 4.34 21.01 6 21.01H15.1C14.01 20.35 13.3 19.24 13.3 17.91C13.3 15.63 15.13 13.8 17.41 13.8C18.29 13.8 19.11 14.1 19.76 14.61C19.92 14.73 20.01 14.92 20.01 15.12V17.91C20.01 20.19 18.18 22.02 15.9 22.02C14.15 22.02 12.63 20.97 12 19.51H10V17.51H12C12.55 17.51 13 17.06 13 16.51V11.51H10V9.50999H13V7.50999H8V9.50999H6V11.51H8V13.51H6V15.51H8V17.51H6V15.51H5V17.51H6V15.51H5" fill="currentColor"/>
    </svg>
);
const WordpressIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.383 12.016c0-4.187 3.22-7.59 7.211-7.59 4.025 0 7.245 3.403 7.245 7.59 0 4.187-3.22 7.59-7.245 7.59-3.991 0-7.211-3.403-7.211-7.59zm8.567-.042l-2.039 5.89h-1.636l3.321-9.585h1.75l3.288 9.585h-1.669l-2.015-5.89zm-6.221 4.103l-2.618-7.557h-1.636l3.321 9.585h1.75l3.288-9.585h-1.67l-2.426 7.557zM1 12.016c0 5.809 4.698 10.53 10.496 10.53s10.496-4.72 10.496-10.53c0-5.81-4.698-10.53-10.496-10.53C5.698 1.486 1 6.206 1 12.016z" fill="currentColor"/>
    </svg>
);

type Service = {
    icon: React.ReactElement;
    name: string;
    description: string;
    details: string[];
    image: string;
};

const marketingServices: Service[] = [
  { icon: <Megaphone />, name: "Organic Marketing", description: "Drive sustainable growth through non-paid channels.", details: ["SEO Strategy & Implementation", "Content Marketing", "Link Building", "Technical SEO Audits"], image: "https://picsum.photos/seed/organic/486/486" },
  { icon: <AdsIcon />, name: "Advertisement", description: "Targeted ad campaigns to reach your ideal customers.", details: ["Google Ads (PPC)", "Social Media Advertising", "Display Ads", "Retargeting Campaigns"], image: "https://picsum.photos/seed/ads/486/486" },
  { icon: <UsersRound />, name: "Lead Generation", description: "Build a strong pipeline of qualified leads for your business.", details: ["Landing Page Optimization", "Lead Magnets & Gated Content", "Email Marketing Funnels", "CRM Integration"], image: "https://picsum.photos/seed/leads/486/486" },
  { icon: <Handshake />, name: "Social Media Marketing", description: "Engage your audience and build a loyal community.", details: ["Content Creation & Curation", "Community Management", "Influencer Marketing", "Social Media Analytics"], image: "https://picsum.photos/seed/social/486/486" },
  { icon: <PerformanceIcon />, name: "Performance Marketing", description: "Data-driven strategies focused on measurable results and ROI.", details: ["Conversion Rate Optimization (CRO)", "A/B Testing", "Marketing Analytics", "ROI Analysis"], image: "https://picsum.photos/seed/performance/486/486" },
  { icon: <Newspaper />, name: "Content Marketing", description: "Create valuable content that attracts and converts.", details: ["Blog Posts & Articles", "Video Content Production", "Ebooks & Whitepapers", "Infographics & Visual Content"], image: "https://picsum.photos/seed/content/486/486" },
];

const webDevServices: Service[] = [
  { icon: <CMSIcon />, name: "CMS Development", description: "Manage your website content with ease and flexibility.", details: ["Custom CMS Solutions", "Headless CMS Integration", "Content Modeling", "User Training & Support"], image: "https://picsum.photos/seed/cms/486/486" },
  { icon: <ShoppingCart />, name: "E-Commerce Stores", description: "Build powerful online stores that drive sales.", details: ["Custom Storefronts", "Payment Gateway Integration", "Inventory Management", "Checkout Optimization"], image: "https://picsum.photos/seed/ecommerce/486/486" },
  { icon: <GanttChartSquare />, name: "Landing Pages", description: "High-converting landing pages for your marketing campaigns.", details: ["A/B Tested Designs", "Lead Capture Forms", "Fast Load Times", "Analytics Integration"], image: "https://picsum.photos/seed/landing/486/486" },
  { icon: <MonitorSmartphone />, name: "App Development", description: "Custom mobile apps for iOS and Android.", details: ["Native & Cross-Platform", "UI/UX Design", "API Development", "App Store Submission"], image: "https://picsum.photos/seed/app/486/486" },
  { icon: <ShopifyIcon />, name: "Shopify", description: "Customized Shopify solutions for your e-commerce needs.", details: ["Theme Development", "App Integration", "Store Migration", "Performance Optimization"], image: "https://picsum.photos/seed/shopify/486/486" },
  { icon: <WordpressIcon />, name: "WordPress", description: "Flexible and scalable websites using the world's most popular CMS.", details: ["Custom Themes & Plugins", "WooCommerce Integration", "Security & Maintenance", "Performance Tuning"], image: "https://picsum.photos/seed/wordpress/486/486" },
];

const ServiceCard = ({ service }: { service: Service }) => (
    <Dialog>
        <DialogTrigger asChild>
            <div className="group relative cursor-pointer border border-gray-800/40 rounded-2xl overflow-hidden w-[280px] h-[280px] sm:w-[486px] sm:h-[486px] transition-all duration-500">
                {/* Background Image */}
                <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/10 transition-opacity duration-500" />
                
                {/* Bottom Overlay Content */}
                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-8 flex flex-col justify-end text-left space-y-3 sm:space-y-4">
                    {/* Icon & Category Indicator */}
                    <div className="flex items-center gap-3">
                        <div className="p-2 sm:p-2.5 bg-black/40 backdrop-blur-md rounded-full border border-white/10 text-primary">
                            {React.cloneElement(service.icon, { className: "w-4 h-4 sm:w-5 sm:h-5" })}
                        </div>
                    </div>
                    
                    {/* Title and Short Description */}
                    <div className="space-y-1 sm:space-y-2">
                        <h4 className="text-lg sm:text-2xl font-bold text-white tracking-tight group-hover:text-primary transition-colors duration-300">
                            {service.name}
                        </h4>
                        <p className="text-xs sm:text-sm text-gray-300 leading-relaxed line-clamp-2 max-w-[360px]">
                            {service.description}
                        </p>
                    </div>

                    {/* Explore CTA on hover */}
                    <div className="pt-1 text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-primary opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500 flex items-center gap-1.5">
                        Explore Details <span className="text-sm">&rarr;</span>
                    </div>
                </div>
            </div>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[486px] bg-card border-border">
            <DialogHeader>
                <DialogTitle className="flex items-center gap-4">
                    <div className="p-3 bg-muted rounded-full border border-border">
                        {React.cloneElement(service.icon, { className: "w-8 h-8 text-primary" })}
                    </div>
                    <span className="text-2xl font-bold">{service.name}</span>
                </DialogTitle>
                <DialogDescription className="pt-4 text-left text-muted-foreground text-base leading-relaxed">
                    {service.description}
                </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
               <ul className="space-y-3">
                    {service.details.map((detail, index) => (
                        <li key={index} className="flex items-start gap-3">
                           <span className="text-primary font-bold mt-0.5">✓</span>
                           <span className="text-muted-foreground text-sm leading-relaxed">{detail}</span>
                        </li>
                    ))}
               </ul>
            </div>
            <Button asChild variant="glitch" className="w-full">
                <Link href="/contact">Get Started</Link>
            </Button>
        </DialogContent>
    </Dialog>
);

export default function ServicesOfferings() {
  return (
    <section className="py-16 md:py-24 bg-background text-foreground overflow-hidden border-t border-b border-border">
      {/* Title block inside container */}
      <div className="container px-4 md:px-8 mb-16">
        <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-5xl">
          Services <span className="text-primary">We Offer</span>
        </h2>
      </div>

      {/* Marketing Section */}
      <div className="mb-24 space-y-8">
        {/* Header inside container */}
        <div className="container px-4 md:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4 border-b border-border">
            <div className="space-y-2">
              <h3 className="text-3xl font-bold tracking-tight text-foreground">Marketing</h3>
              <p className="text-sm text-muted-foreground max-w-xl leading-relaxed">
                Boost your brand presence and drive real customer acquisition with data-backed campaigns.
              </p>
            </div>
            <Button asChild size="lg" variant="glitch" className="shrink-0">
              <Link href="/services/digital-marketing">Get Your Service Now</Link>
            </Button>
          </div>
        </div>
        
        {/* Marquee edge-to-edge (outside container!) */}
        <div className="w-full overflow-hidden py-2">
          <Marquee speed={40} gradient={false} pauseOnHover={true} direction="left">
            {marketingServices.map((service, index) => (
              <div key={index} className="mx-4 py-2">
                <ServiceCard service={service} />
              </div>
            ))}
          </Marquee>
        </div>
      </div>

      {/* Web Development Section */}
      <div className="space-y-8">
        {/* Header inside container */}
        <div className="container px-4 md:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4 border-b border-border">
            <div className="space-y-2">
              <h3 className="text-3xl font-bold tracking-tight text-foreground">Web Development</h3>
              <p className="text-sm text-muted-foreground max-w-xl leading-relaxed">
                Build fast, secure, and highly scalable custom web applications using modern frameworks.
              </p>
            </div>
            <Button asChild size="lg" variant="glitch" className="shrink-0">
              <Link href="/services/web-development">Get Your Service Now</Link>
            </Button>
          </div>
        </div>

        {/* Marquee edge-to-edge (outside container!) */}
        <div className="w-full overflow-hidden py-2">
          <Marquee speed={40} gradient={false} pauseOnHover={true} direction="right">
            {webDevServices.map((service, index) => (
              <div key={index} className="mx-4 py-2">
                <ServiceCard service={service} />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
