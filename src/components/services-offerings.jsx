"use client";

import { Button } from "@/components/ui/button";
import {
  Megaphone,
  MonitorSmartphone,
  GanttChartSquare,
  Handshake,
  Newspaper,
  ShoppingCart,
  UsersRound,
  Sparkles,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const AdsIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
    <path d="M8 12h8" />
    <path d="M12 8v8" />
    <path d="M17.5 17.5c-1.5-1.5-1.5-4 0-5.5s4 0 5.5 0" />
    <path d="M9.5 9.5c1.5 1.5 1.5 4 0 5.5s-4 0-5.5 0" />
  </svg>
);

const PerformanceIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
    <path d="M12 12l-4-4" />
    <path d="M16 12h-4v-4" />
  </svg>
);

const CMSIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 20h9" />
    <path d="M3 20h2" />
    <path d="M12 4h9" />
    <path d="M3 4h2" />
    <path d="M20 12h-2" />
    <path d="M5 12H3" />
    <path d="M16 6l-4 4-4-4" />
    <path d="M8 18l4-4 4 4" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const ShopifyIcon = (props) => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.14 7.61999C16.14 7.03999 15.68 6.57999 15.1 6.57999C14.52 6.57999 14.06 7.03999 14.06 7.61999C14.06 8.24999 14.53 8.78999 15.1 8.78999C15.67 8.78999 16.14 8.24999 16.14 7.61999ZM17.82 9.04999C17.31 8.94999 16.32 8.81999 16.32 7.61999C16.32 6.13999 17.5 4.98999 18.96 4.98999C20.42 4.98999 21.6 6.13999 21.6 7.61999C21.6 8.81999 20.61 8.94999 20.1 9.04999C20.61 9.15999 21.6 9.27999 21.6 10.48C21.6 11.96 20.42 13.11 18.96 13.11C17.5 13.11 16.32 11.96 16.32 10.48C16.32 9.27999 17.31 9.15999 17.82 9.04999ZM15.1 11.51C15.68 11.51 16.14 11.97 16.14 12.55C16.14 13.13 15.68 13.59 15.1 13.59C14.52 13.59 14.06 13.13 14.06 12.55C14.06 11.97 14.53 11.51 15.1 11.51ZM18.96 8.78999C18.39 8.78999 17.92 8.24999 17.92 7.61999C17.92 6.98999 18.39 6.44999 18.96 6.44999C19.53 6.44999 20.01 6.98999 20.01 7.61999C20.01 8.24999 19.53 8.78999 18.96 8.78999ZM18.96 11.51C19.53 11.51 20.01 10.97 20.01 10.34C20.01 9.71999 19.53 9.17999 18.96 9.17999C18.39 9.17999 17.92 9.71999 17.92 10.34C17.92 10.97 18.39 11.51 18.96 11.51ZM15.1 19.01H6C5.45 19.01 5 18.56 5 18.01V6.00999C5 5.45999 5.45 5.00999 6 5.00999H18C18.55 5.00999 19 5.45999 19 6.00999V4.00999C19 3.45999 18.55 3.00999 18 3.00999H6C4.34 3.00999 3 4.35999 3 6.00999V18.01C3 19.66 4.34 21.01 6 21.01H15.1C14.01 20.35 13.3 19.24 13.3 17.91C13.3 15.63 15.13 13.8 17.41 13.8C18.29 13.8 19.11 14.1 19.76 14.61C19.92 14.73 20.01 14.92 20.01 15.12V17.91C20.01 20.19 18.18 22.02 15.9 22.02C14.15 22.02 12.63 20.97 12 19.51H10V17.51H12C12.55 17.51 13 17.06 13 16.51V11.51H10V9.50999H13V7.50999H8V9.50999H6V11.51H8V13.51H6V15.51H8V17.51H6V15.51H5V17.51H6V15.51H5"
      fill="currentColor"
    />
  </svg>
);

const WordpressIcon = (props) => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4.383 12.016c0-4.187 3.22-7.59 7.211-7.59 4.025 0 7.245 3.403 7.245 7.59 0 4.187-3.22 7.59-7.245 7.59-3.991 0-7.211-3.403-7.211-7.59zm8.567-.042l-2.039 5.89h-1.636l3.321-9.585h1.75l3.288 9.585h-1.669l-2.015-5.89zm-6.221 4.103l-2.618-7.557h-1.636l3.321 9.585h1.75l3.288-9.585h-1.67l-2.426 7.557zM1 12.016c0 5.809 4.698 10.53 10.496 10.53s10.496-4.72 10.496-10.53c0-5.81-4.698-10.53-10.496-10.53C5.698 1.486 1 6.206 1 12.016z"
      fill="currentColor"
    />
  </svg>
);

const marketingServices = [
  {
    icon: <Megaphone />,
    name: "Organic Marketing",
    category: "SEO & Growth",
    description:
      "Drive sustainable, organic growth through non-paid search channels and brand authority.",
    details: [
      "Technical SEO Audits & Core Web Vitals",
      "Keyword Intent & Strategic Content Clusters",
      "High-Authority Link Building Campaigns",
      "Local & International Search Optimization",
    ],
    image: "/illustrations/seo_search_results.jpg",
    link: "/services/digital-marketing",
  },
  {
    icon: <AdsIcon />,
    name: "Advertisement & PPC",
    category: "Paid Media",
    description:
      "Hyper-targeted ad campaigns engineered to convert traffic into high-value paying customers.",
    details: [
      "Google Search, Performance Max & Display Ads",
      "Meta Ads (Instagram & Facebook) Funnels",
      "LinkedIn B2B Lead Generation Campaigns",
      "High-ROAS Retargeting & Omnichannel Strategy",
    ],
    image: "/Kalkimarketing/ChatGPT Image Jun 25, 2026, 01_06_58 PM 1.png",
    link: "/services/digital-marketing",
  },
  {
    icon: <UsersRound />,
    name: "Lead Generation",
    category: "Sales Pipeline",
    description:
      "Build an automated, predictable pipeline of pre-qualified leads for high closing rates.",
    details: [
      "High-Converting Landing Page Optimization",
      "Gated Lead Magnets & Interactive Calculators",
      "Automated Nurturing Email Sequences",
      "Seamless CRM & Sales Pipeline Integration",
    ],
    image: "/illustrations/team_collaboration.jpg",
    link: "/services/digital-marketing",
  },
  {
    icon: <Handshake />,
    name: "Social Media Marketing",
    category: "Community & Brand",
    description:
      "Engage your audience with viral storytelling and build an active, loyal community.",
    details: [
      "Scroll-Stopping Visual Content Creation",
      "Influencer Outreach & Strategic Collabs",
      "Community Engagement & Brand Reputation",
      "Social Commerce & Multi-Platform Growth",
    ],
    image: "/Kalkimarketing/ChatGPT Image Jun 25, 2026, 01_55_04 PM 1.png",
    link: "/services/digital-marketing",
  },
  {
    icon: <PerformanceIcon />,
    name: "Performance Marketing",
    category: "ROI & Analytics",
    description:
      "Data-driven experimentation designed to scale return on ad spend and conversion rates.",
    details: [
      "Conversion Rate Optimization (CRO) Audits",
      "Rigorous Multivariate & A/B Split Testing",
      "Full-Funnel Attribution Modeling & Tracking",
      "Dynamic Profit & ROAS Scalability Roadmaps",
    ],
    image: "/illustrations/user_conversion.jpg",
    link: "/services/digital-marketing",
  },
  {
    icon: <Newspaper />,
    name: "Content Marketing",
    category: "Storytelling",
    description:
      "Create compelling articles, guides, and media that establish deep industry thought leadership.",
    details: [
      "SEO-Driven Pillar Pages & Long-Form Articles",
      "High-Impact Brand Storytelling & Copywriting",
      "Interactive Case Studies & Whitepapers",
      "Multi-Channel Repurposing Frameworks",
    ],
    image: "/illustrations/design_audience_steps.jpg",
    link: "/services/digital-marketing",
  },
];

const webDevServices = [
  {
    icon: <CMSIcon />,
    name: "CMS & Web Architecture",
    category: "Content Platforms",
    description:
      "Manage, publish, and scale your content seamlessly with flexible headless CMS platforms.",
    details: [
      "Headless CMS (Sanity, Strapi, Contentful)",
      "Dynamic Schema & Custom Content Modeling",
      "Blazing Fast Server-Side Rendering (SSR)",
      "Role-Based Access & Editorial Workflow",
    ],
    image: "/illustrations/server_performance.jpg",
    link: "/services/web-development",
  },
  {
    icon: <ShoppingCart />,
    name: "E-Commerce Stores",
    category: "Online Sales",
    description:
      "Build robust, conversion-focused online stores engineered for frictionless shopping experiences.",
    details: [
      "Custom Storefront Architecture & Checkout Flow",
      "Seamless Multi-Currency Payment Gateways",
      "Real-Time Inventory & ERP Integrations",
      "Mobile-First Speed & Performance Optimization",
    ],
    image: "/illustrations/user_conversion.jpg",
    link: "/services/ecommerce",
  },
  {
    icon: <GanttChartSquare />,
    name: "High-CRO Landing Pages",
    category: "High Conversion",
    description:
      "Lightning-fast, visually captivating landing pages designed specifically for marketing ROI.",
    details: [
      "Psychology-Driven UX Layouts & Visual Hierarchy",
      "Ultra-Fast Next.js Static Site Generation",
      "A/B Testing & Micro-Interaction Animations",
      "Comprehensive Heatmap & Conversion Tracking",
    ],
    image: "/illustrations/team_collaboration.jpg",
    link: "/services/web-development",
  },
  {
    icon: <MonitorSmartphone />,
    name: "App Development",
    category: "Mobile & Web",
    description:
      "Custom native & cross-platform applications with fluid gestures and enterprise security.",
    details: [
      "Cross-Platform React Native & Flutter Apps",
      "Modern Progressive Web Apps (PWA)",
      "Scalable Cloud Backend & REST/GraphQL APIs",
      "App Store & Google Play Launch Deployment",
    ],
    image: "/illustrations/design_audience_steps.jpg",
    link: "/services/mobile-app-development",
  },
  {
    icon: <ShopifyIcon />,
    name: "Shopify Custom Stores",
    category: "Shopify Plus",
    description:
      "Customized Shopify Plus theme development, app integrations, and checkout enhancements.",
    details: [
      "Tailor-Made Liquid & Hydrogen Headless Themes",
      "Custom Shopify App & API Integrations",
      "Smooth Platform & Data Migration",
      "Speed Optimization & High-Traffic Stability",
    ],
    image: "/illustrations/seo_search_results.jpg",
    link: "/services/shopify-development",
  },
  {
    icon: <WordpressIcon />,
    name: "WordPress & WooCommerce",
    category: "Custom WordPress",
    description:
      "Enterprise-grade WordPress and WooCommerce websites designed for speed, security, and growth.",
    details: [
      "Bespoke Gutenberg Block Theme Development",
      "Advanced WooCommerce Customization",
      "Hardened Security & Malware Defense",
      "Database Tuning & Global CDN Integration",
    ],
    image: "/illustrations/cyber_security.jpg",
    link: "/services/web-development",
  },
];

function ServiceMarqueeSection({
  services,
  title,
  subtitle,
  direction = "left",
  speed = 35,
}) {
  return (
    <div className="space-y-6">
      {/* Category Header */}
      <div className="px-4 md:px-8  mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-border">
          <div className="space-y-2 text-left">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground">
              {title}
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground max-w-xl leading-relaxed">
              {subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* Infinite Horizontal Marquee */}
      <div className="w-full relative [mask-image:linear-gradient(90deg,transparent,white_3%,white_97%,transparent)] py-4">
        <Marquee
          speed={speed}
          direction={direction}
          gradient={false}
          pauseOnHover={true}
          className="py-2"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[300px]  sm:w-[420px] md:w-[460px] mx-3 sm:mx-4 group cursor-pointer select-none"
            >
              <Dialog>
                <DialogTrigger asChild>
                  <div className="relative w-full h-[400px] sm:h-[300px] md:h-[487px] rounded-3xl  overflow-hidden transition-all duration-500 ease-out border border-white/10 group-hover:border-primary/60 shadow-xl group-hover:shadow-2xl group-hover:shadow-primary/10">
                    {/* Background Image with Zoom on Hover */}
                    <Image
                      src={service.image}
                      alt={service.name}
                      fill
                      unoptimized
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />

                    {/* Multi-Stop Cinematic Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/25" />

                    {/* Bottom Content Area */}
                    <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 md:p-7 flex flex-col justify-end text-left space-y-2.5 z-10">
                      {/* Title */}
                      <h4 className="text-xl sm:text-2xl md:text-3xl font-black text-white group-hover:text-primary transition-colors tracking-tight leading-tight">
                        {service.name}
                      </h4>

                      {/* Action Bar */}
                      <div className="pt-1.5 flex items-center justify-between">
                        <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-primary flex items-center gap-1.5 group-hover:underline">
                          View Service Details
                          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                        </span>
                      </div>
                    </div>
                  </div>
                </DialogTrigger>

                {/* Modal Dialog for Full Service Info */}
                <DialogContent className="sm:max-w-[550px] bg-neutral-950 text-white border border-white/15 shadow-2xl">
                  <DialogHeader className="space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-semibold text-primary uppercase tracking-wider">
                        {service.category}
                      </span>
                    </div>
                    <DialogTitle className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
                      {service.name}
                    </DialogTitle>
                    <DialogDescription className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                      {service.description}
                    </DialogDescription>
                  </DialogHeader>

                  <div className="space-y-4 py-2">
                    <h5 className="text-xs font-bold tracking-wider uppercase text-neutral-400">
                      Key Deliverables & Highlights
                    </h5>
                    <ul className="grid grid-cols-1 gap-2.5">
                      {service.details.map((detail, dIdx) => (
                        <li
                          key={dIdx}
                          className="flex items-start gap-3 text-xs sm:text-sm text-gray-200 bg-white/5 p-2.5 rounded-xl border border-white/10"
                        >
                          <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <Button
                      asChild
                      variant="glitch"
                      className="w-full text-black font-semibold"
                    >
                      <Link href="/contact">
                        Get Started With {service.name}
                      </Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="w-full border-white/20 text-white hover:bg-white hover:text-black"
                    >
                      <Link href={service.link}>Explore Full Service</Link>
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}

export default function ServicesOfferings() {
  return (
    <section className="py-16 md:py-24 bg-background text-foreground overflow-hidden border-t border-b border-border">
      {/* Title block */}
      <div className="px-4 md:px-8 mb-12 md:mb-16 text-center space-y-4 max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter">
          Services <span className="text-primary">We Offer</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
          Explore our specialized agency capabilities designed to scale brands,
          build transformative digital products, and drive verifiable ROI.
        </p>
      </div>

      <div className="space-y-16 md:space-y-20">
        {/* Track 1: Marketing & Acquisition */}
        <ServiceMarqueeSection
          services={marketingServices}
          title="Marketing & Acquisition"
          subtitle="Boost your brand presence, acquire high-value customers, and maximize ROAS with data-backed campaigns."
          direction="left"
          speed={35}
        />
      </div>
    </section>
  );
}
