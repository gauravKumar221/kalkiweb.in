
"use client"

import { Button } from "@/components/ui/button";
import Link from "next/link";
import TestimonialMarquee from "@/components/testimonial-marquee";
import MarqueeShowcase from "@/components/marquee-showcase";
import { BackgroundGradientAnimationDemo } from "@/components/background-gradient-animation-demo";
import FeatureSectionWithImage from "@/components/feature-section-with-image";
import ProcessSection from "@/components/process-section";
import ExpertiseSection from "@/components/expertise-section";
import React from "react";
import ServicesOfferings from "@/components/services-offerings";
import HeroMarquee from "@/components/hero-marquee";
import ClientMarquee from "@/components/client-marquee";
import AiSeoSection from "@/components/ai-seo-section";
import ScrollingTestimonials from "@/components/scrolling-testimonials";
import B2BDisruptiveTech from "@/components/b2b-disruptive-tech";
import CustomTechStack from "@/components/custom-tech-stack";
import GlobalReach from "@/components/global-reach";
import TeamSection from "@/components/team-section";
import DesignTrainingSection from "@/components/design-training-section";
import DesignAudienceSection from "@/components/design-audience-section";

const testimonials = [
  {
    name: 'John D.',
    role: 'CEO, Tech Solutions',
    avatar: 'https://picsum.photos/100/100',
    hint: 'man portrait',
    quote:
      'Kalki Web transformed our online presence. Their expertise in digital marketing is unmatched. Our sales have skyrocketed!',
  },
  {
    name: 'Jane S.',
    role: 'Marketing Head, Innovate Co.',
    avatar: 'https://picsum.photos/100/100',
    hint: 'woman portrait',
    quote:
      'The creative team at Kalki Web is simply brilliant. They understood our vision and delivered a website that exceeded all expectations.',
  },
  {
    name: 'Mike R.',
    role: 'Founder, Startup Hub',
    avatar: 'https://picsum.photos/100/100',
    hint: 'man smiling',
    quote:
      'Working with Kalki Web was a game-changer. Their data-driven PPC campaigns brought us an incredible ROI. Highly recommended!',
  },
  {
    name: 'Emily K.',
    role: 'Owner, Fashion Boutique',
    avatar: 'https://picsum.photos/100/100',
    hint: 'woman professional',
    quote:
      "Their branding work gave my business a completely new life. The new identity perfectly captures our essence. I couldn't be happier.",
  },
  {
    name: 'David L.',
    role: 'CTO, Future Systems',
    avatar: 'https://picsum.photos/100/100',
    hint: 'man glasses',
    quote:
      'The website they developed is not only beautiful but also incredibly fast and user-friendly. Our conversion rates have improved dramatically.',
  },
  {
    name: 'Sarah P.',
    role: 'Social Media Manager, Foodies Unite',
    avatar: 'https://picsum.photos/100/100',
    hint: 'woman smiling',
    quote:
      'Our social media engagement has never been better. The content they create is always fresh, creative, and perfectly on-brand.',
  },
   {
    name: 'Chris G.',
    role: 'Director, Real Estate Group',
    avatar: 'https://picsum.photos/100/100',
    hint: 'man suit',
    quote:
      'Their SEO strategies put us on the first page of Google for our top keywords. The organic traffic we receive now is invaluable.',
  },
  {
    name: 'Jessica T.',
    role: 'CEO, Health & Wellness',
    avatar: 'https://picsum.photos/100/100',
    hint: 'woman fitness',
    quote:
      "A truly professional and dedicated team. They listen, they strategize, and they deliver results. A pleasure to work with.",
  },
   {
    name: 'Alex B.',
    role: 'Product Manager, SaaS Co',
    avatar: 'https://picsum.photos/100/100',
    hint: 'man tech',
    quote:
      'The AI-powered marketing solutions they implemented have saved us time and significantly boosted our lead generation.',
  },
   {
    name: 'Olivia M.',
    role: 'Founder, Eco Goods',
    avatar: 'https://picsum.photos/100/100',
    hint: 'woman nature',
    quote:
      "I was impressed by their commitment to our project. They treated our brand as if it were their own. The results speak for themselves.",
  }
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <section className="w-full h-screen bg-background relative overflow-hidden flex flex-col items-center justify-center">
        <video
          src="https://res.cloudinary.com/dkornxvni/video/upload/v1726058092/0_Connectivity_Data_3840x2160_zowacr.mp4"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[60%] md:w-[40%] md:-translate-y-1/2 -translate-y-[-41%] object-cover z-0 opacity-30 invert dark:invert-0"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="container z-10 relative flex-grow flex items-center justify-center">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tighter text-primary sm:text-5xl md:text-6xl lg:text-7xl">We grow brands with bold design & digital marketing.</h1>
            <p className="mt-6 text-lg text-foreground/80 md:text-xl">From high-performing websites to data-driven campaigns – we help your business scale.</p>
            <div className="mt-8 hidden gap-4 sm:flex-row sm:justify-center sm:flex">
              <Button asChild size="lg" variant="glitch">
                  <Link href="/contact">Get Free Strategy Call</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  <Link href="/portfolio">View Work</Link>
              </Button>
            </div>
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
            
            <ExpertiseSection />


          <div className="container py-16 md:py-24">
            <FeatureSectionWithImage />
          </div>

            <ProcessSection />

            <section id="testimonials" className="w-full py-16 md:py-24">
                <div className="container">
                    <ClientMarquee />
                    <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-5xl mb-16">What Our Clients Say</h2>
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
