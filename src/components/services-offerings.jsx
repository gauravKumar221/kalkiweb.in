"use client";
import { Button } from "@/components/ui/button";
import {
  ChevronLeft,
  ChevronRight,
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
import React, { useState, useEffect, useCallback } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
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
    image: "https://picsum.photos/seed/organic700/900/600",
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
    image: "https://picsum.photos/seed/ads700/900/600",
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
    image: "https://picsum.photos/seed/leads700/900/600",
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
    image: "https://picsum.photos/seed/social700/900/600",
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
    image: "https://picsum.photos/seed/perf700/900/600",
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
    image: "https://picsum.photos/seed/content700/900/600",
    link: "/services/digital-marketing",
  },
];
const webDevServices = [
  {
    icon: <CMSIcon />,
    name: "CMS Development",
    category: "Content Platforms",
    description:
      "Manage, publish, and scale your content seamlessly with flexible headless CMS platforms.",
    details: [
      "Headless CMS (Sanity, Strapi, Contentful)",
      "Dynamic Schema & Custom Content Modeling",
      "Blazing Fast Server-Side Rendering (SSR)",
      "Role-Based Access & Editorial Workflow",
    ],
    image: "https://picsum.photos/seed/cms700/900/600",
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
    image: "https://picsum.photos/seed/ecom700/900/600",
    link: "/services/ecommerce",
  },
  {
    icon: <GanttChartSquare />,
    name: "Landing Pages",
    category: "High Conversion",
    description:
      "Lightning-fast, visually captivating landing pages designed specifically for marketing ROI.",
    details: [
      "Psychology-Driven UX Layouts & Visual Hierarchy",
      "Ultra-Fast Next.js Static Site Generation",
      "A/B Testing & Micro-Interaction Animations",
      "Comprehensive Heatmap & Conversion Tracking",
    ],
    image: "https://picsum.photos/seed/landing700/900/600",
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
    image: "https://picsum.photos/seed/app700/900/600",
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
    image: "https://picsum.photos/seed/shopify700/900/600",
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
    image: "https://picsum.photos/seed/wp700/900/600",
    link: "/services/web-development",
  },
];
function ServiceCenterCarousel({
  services,
  title,
  subtitle,
  ctaText,
  ctaLink,
}) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      skipSnaps: false,
    },
    [
      Autoplay({
        delay: 4500,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ],
  );
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);
  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);
  const scrollTo = useCallback(
    (index) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi],
  );
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);
  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);
  return (
    <div className="space-y-6">
      {/* Category Header */}
      <div className=" px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4 border-b border-border">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-mono tracking-widest text-primary uppercase">
                Featured Capabilities
              </span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
              {title}
            </h3>
            <p className="text-sm text-muted-foreground max-w-xl leading-relaxed">
              {subtitle}
            </p>
          </div>

          <div className="flex items-center gap-4">
            {/* Custom Carousel Arrows */}
            <div className="flex items-center gap-2">
              <button
                onClick={scrollPrev}
                aria-label="Previous Slide"
                className="w-10 h-10 rounded-full border border-border bg-card/80 hover:bg-primary hover:text-black hover:border-primary transition-all duration-300 flex items-center justify-center text-foreground backdrop-blur-md shadow-sm active:scale-95"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={scrollNext}
                aria-label="Next Slide"
                className="w-10 h-10 rounded-full border border-border bg-card/80 hover:bg-primary hover:text-black hover:border-primary transition-all duration-300 flex items-center justify-center text-foreground backdrop-blur-md shadow-sm active:scale-95"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 700px Center Active Scale Carousel Track */}
      <div className="w-full overflow-hidden py-8 select-none" ref={emblaRef}>
        <div className="flex items-center">
          {services.map((service, index) => {
            const isActive = index === selectedIndex;
            return (
              <div
                key={index}
                className="flex-[0_0_auto] px-3 sm:px-4 cursor-pointer"
                onClick={() => {
                  if (!isActive) scrollTo(index);
                }}
              >
                <Dialog>
                  <DialogTrigger asChild>
                    <div
                      className={`relative w-[85vw] sm:w-[580px] md:w-[680px] lg:w-[700px] h-[380px] sm:h-[430px] md:h-[460px] rounded-3xl overflow-hidden transition-all duration-500 ease-out border ${
                        isActive
                          ? "scale-100 md:scale-105 opacity-100 z-20 border-primary/60 shadow-[0_20px_50px_rgba(0,0,0,0.85),0_0_35px_rgba(250,204,21,0.2)] ring-1 ring-primary/40"
                          : "scale-90 md:scale-[0.88] opacity-40 hover:opacity-75 z-10 border-white/10 grayscale-[20%]"
                      }`}
                    >
                      {/* Background Image with Zoom on Hover */}
                      <Image
                        src={service.image}
                        alt={service.name}
                        fill
                        priority={index === 0}
                        className={`object-cover transition-transform duration-700 ${isActive ? "scale-100 group-hover:scale-105" : "scale-105"}`}
                      />

                      {/* Multi-Stop Cinematic Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/65 to-black/20" />

                      {/* Top Badges & Category Header */}
                      <div className="absolute top-5 left-6 right-6 flex items-center justify-between z-10">
                        {/* Interactive Active Icon */}
                      </div>

                      {/* Bottom Content Area */}
                      <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 md:p-10 flex flex-col justify-end text-left space-y-3 sm:space-y-4 z-10">
                        {/* Title */}
                        <h4 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight leading-tight">
                          {service.name}
                        </h4>

                        {/* Action Bar */}
                        <div className="pt-2 flex items-center justify-between">
                          <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-primary flex items-center gap-2 group-hover:underline">
                            View Service Details
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </DialogTrigger>

                  {/* Modal Dialog for Full Service Info */}
                  <DialogContent className="sm:max-w-[550px] bg-neutral-950 text-white border border-white/15 shadow-2xl">
                    <DialogHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-3 bg-primary/20 text-primary rounded-xl border border-primary/30">
                          {React.cloneElement(service.icon, {
                            className: "w-6 h-6",
                          })}
                        </div>
                        <div>
                          <span className="text-xs font-mono text-primary uppercase tracking-widest">
                            {service.category}
                          </span>
                          <DialogTitle className="text-2xl sm:text-3xl font-bold text-white">
                            {service.name}
                          </DialogTitle>
                        </div>
                      </div>
                      <DialogDescription className="text-gray-300 text-sm sm:text-base leading-relaxed pt-2">
                        {service.description}
                      </DialogDescription>
                    </DialogHeader>

                    <div className="py-4 space-y-4">
                      <h5 className="text-xs font-mono uppercase tracking-wider text-gray-400">
                        What's Included
                      </h5>
                      <ul className="space-y-2.5">
                        {service.details.map((detail, dIdx) => (
                          <li
                            key={dIdx}
                            className="flex items-start gap-3 text-sm text-gray-200 bg-white/5 p-2.5 rounded-xl border border-white/10"
                          >
                            <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-2 flex gap-3">
                      <Button
                        asChild
                        variant="glitch"
                        className="w-full text-black font-semibold"
                      >
                        <Link href="/contact">
                          Get Started With {service.name}
                        </Link>
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            );
          })}
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center items-center gap-2 pt-2">
        {services.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`transition-all duration-300 rounded-full ${
              index === selectedIndex
                ? "w-8 h-2.5 bg-primary"
                : "w-2.5 h-2.5 bg-white/20 hover:bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
export default function ServicesOfferings() {
  return (
    <section className="py-16 md:py-24 bg-background text-foreground overflow-hidden border-t border-b border-border">
      {/* Title block */}
      <div className=" px-4 md:px-8 mb-16 text-center space-y-4">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter">
          Services <span className="text-primary">We Offer</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
          Explore our specialized agency capabilities designed to scale brands,
          build transformative digital products, and drive verifiable ROI.
        </p>
      </div>

      <div className="space-y-24">
        {/* Marketing Section 700px Scaling Carousel */}
        <ServiceCenterCarousel
          services={marketingServices}
          title="Marketing & Acquisition"
          subtitle="Boost your brand presence, acquire high-value customers, and maximize ROAS with data-backed campaigns."
          ctaText="Explore Marketing"
          ctaLink="/services/digital-marketing"
        />

        {/* Web Development Section 700px Scaling Carousel */}
        <ServiceCenterCarousel
          services={webDevServices}
          title="Engineering & Web Development"
          subtitle="Build ultra-fast, secure, and highly scalable custom web applications and e-commerce platforms."
          ctaText="Explore Development"
          ctaLink="/services/web-development"
        />
      </div>
    </section>
  );
}
