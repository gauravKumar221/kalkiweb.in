"use client";

import dynamic from "next/dynamic";
import React from "react";
import HeroMarquee from "@/components/hero-marquee";
import ServicesOfferings from "@/components/services-offerings";
import { Globe } from "@/components/magicui/globe";

// Below-the-fold dynamically imported components to maximize initial load performance
const TestimonialMarquee = dynamic(
  () => import("@/components/testimonial-marquee"),
  { ssr: true },
);
const MarqueeShowcase = dynamic(() => import("@/components/marquee-showcase"), {
  ssr: false,
});
const BackgroundGradientAnimationDemo = dynamic(
  () =>
    import("@/components/background-gradient-animation-demo").then(
      (m) => m.BackgroundGradientAnimationDemo,
    ),
  { ssr: false },
);
const FeatureSectionWithImage = dynamic(
  () => import("@/components/feature-section-with-image"),
  { ssr: true },
);
const ProcessSection = dynamic(() => import("@/components/process-section"), {
  ssr: true,
});
const ExpertiseSection = dynamic(
  () => import("@/components/expertise-section"),
  { ssr: true },
);
const ClientMarquee = dynamic(() => import("@/components/client-marquee"), {
  ssr: true,
});
const AiSeoSection = dynamic(() => import("@/components/ai-seo-section"), {
  ssr: true,
});
const ScrollingTestimonials = dynamic(
  () => import("@/components/scrolling-testimonials"),
  { ssr: true },
);
const B2BDisruptiveTech = dynamic(
  () => import("@/components/b2b-disruptive-tech"),
  { ssr: true },
);
const CustomTechStack = dynamic(
  () => import("@/components/custom-tech-stack"),
  { ssr: true },
);
const GlobalReach = dynamic(() => import("@/components/global-reach"), {
  ssr: true,
});
const TeamSection = dynamic(() => import("@/components/team-section"), {
  ssr: true,
});
const DesignTrainingSection = dynamic(
  () => import("@/components/design-training-section"),
  { ssr: true },
);
const DesignAudienceSection = dynamic(
  () => import("@/components/design-audience-section"),
  { ssr: true },
);
const testimonials = [
  {
    name: "John D.",
    role: "CEO, Tech Solutions",
    avatar: "https://picsum.photos/100/100",
    hint: "man portrait",
    quote:
      "Kalki Web transformed our online presence. Their expertise in digital marketing is unmatched. Our sales have skyrocketed!",
  },
  {
    name: "Jane S.",
    role: "Marketing Head, Innovate Co.",
    avatar: "https://picsum.photos/100/100",
    hint: "woman portrait",
    quote:
      "The creative team at Kalki Web is simply brilliant. They understood our vision and delivered a website that exceeded all expectations.",
  },
  {
    name: "Mike R.",
    role: "Founder, Startup Hub",
    avatar: "https://picsum.photos/100/100",
    hint: "man smiling",
    quote:
      "Working with Kalki Web was a game-changer. Their data-driven PPC campaigns brought us an incredible ROI. Highly recommended!",
  },
  {
    name: "Emily K.",
    role: "Owner, Fashion Boutique",
    avatar: "https://picsum.photos/100/100",
    hint: "woman professional",
    quote:
      "Their branding work gave my business a completely new life. The new identity perfectly captures our essence. I couldn't be happier.",
  },
  {
    name: "David L.",
    role: "CTO, Future Systems",
    avatar: "https://picsum.photos/100/100",
    hint: "man glasses",
    quote:
      "The website they developed is not only beautiful but also incredibly fast and user-friendly. Our conversion rates have improved dramatically.",
  },
  {
    name: "Sarah P.",
    role: "Social Media Manager, Foodies Unite",
    avatar: "https://picsum.photos/100/100",
    hint: "woman smiling",
    quote:
      "Our social media engagement has never been better. The content they create is always fresh, creative, and perfectly on-brand.",
  },
  {
    name: "Chris G.",
    role: "Director, Real Estate Group",
    avatar: "https://picsum.photos/100/100",
    hint: "man suit",
    quote:
      "Their SEO strategies put us on the first page of Google for our top keywords. The organic traffic we receive now is invaluable.",
  },
  {
    name: "Jessica T.",
    role: "CEO, Health & Wellness",
    avatar: "https://picsum.photos/100/100",
    hint: "woman fitness",
    quote:
      "A truly professional and dedicated team. They listen, they strategize, and they deliver results. A pleasure to work with.",
  },
  {
    name: "Alex B.",
    role: "Product Manager, SaaS Co",
    avatar: "https://picsum.photos/100/100",
    hint: "man tech",
    quote:
      "The AI-powered marketing solutions they implemented have saved us time and significantly boosted our lead generation.",
  },
  {
    name: "Olivia M.",
    role: "Founder, Eco Goods",
    avatar: "https://picsum.photos/100/100",
    hint: "woman nature",
    quote:
      "I was impressed by their commitment to our project. They treated our brand as if it were their own. The results speak for themselves.",
  },
];
export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <section className="w-full h-screen bg-background relative overflow-hidden flex flex-col items-center justify-center">
        <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-70">
          <div className="relative w-full max-w-[500px] md:max-w-[700px] aspect-square">
            <Globe className="w-full h-full" />
          </div>
        </div>
        <div className="container z-10 relative flex-grow flex items-center justify-center">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tighter text-primary sm:text-5xl md:text-6xl lg:text-7xl">
              We grow brands with bold design & digital marketing.
            </h1>
          </div>
        </div>
        <div className="w-full z-10 relative pb-4">
          <HeroMarquee />
        </div>
      </section>
      <div className="relative z-10 bg-background">
        <main>
          <ServicesOfferings />

          <B2BDisruptiveTech />

          <DesignTrainingSection />

          <DesignAudienceSection />

          <GlobalReach />

          <CustomTechStack />

          <AiSeoSection />

          <ExpertiseSection videoSrc="/videoservices/IB-REEL_2.mp4" />

          <div className="container py-16 md:py-24">
            <FeatureSectionWithImage />
          </div>

          <ProcessSection />

          <section id="testimonials" className="w-full py-16 md:py-24">
            <div className="container">
              <ClientMarquee />
              <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-5xl mb-16">
                What Our Clients Say
              </h2>
              <TestimonialMarquee testimonials={testimonials} />
              <ScrollingTestimonials />
              <TeamSection />
            </div>
          </section>

          <MarqueeShowcase />
        </main>

        <BackgroundGradientAnimationDemo />
      </div>
    </div>
  );
}
