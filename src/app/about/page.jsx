"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  ArrowRight,
  Layers,
  Lightbulb,
  Target,
  Zap,
  ShieldCheck,
  HeartHandshake,
  Sparkles,
  Users,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Marquee from "react-fast-marquee";
import { WordPressIcon } from "@/components/ui/icons";

const ourValues = [
  {
    icon: <Lightbulb className="w-7 h-7 text-primary" />,
    title: "Our Purpose",
    description:
      "We exist to bridge the gap between creativity and performance. Every project we take on is focused on delivering tangible business impact, not just beautiful visuals.",
  },
  {
    icon: <WordPressIcon className="w-7 h-7 text-primary" />,
    title: "Expertise That Delivers",
    description:
      "From high-speed Next.js platforms and SEO optimization to branding and digital marketing, our team crafts end-to-end solutions tailored to your goals.",
  },
  {
    icon: <Layers className="w-7 h-7 text-primary" />,
    title: "Human-Centered Design",
    description:
      "We create websites and campaigns that feel natural, intuitive, and engaging — blending design thinking with performance-driven functionality.",
  },
  {
    icon: <Target className="w-7 h-7 text-primary" />,
    title: "Relentless Focus on ROI",
    description:
      "We track organic search rankings, conversion funnels, and customer acquisition metrics to guarantee every dollar spent yields verifiable results.",
  },
];

const ourPriorities = [
  {
    number: "01",
    title: "Measurable Client ROI",
    icon: Target,
    tagline: "Outcome Over Output",
    description:
      "We measure success strictly by the commercial outcomes, qualified leads, and scalable revenue generated for your brand.",
    bullets: [
      "Conversion Rate Optimization (CRO)",
      "Granular attribution tracking",
      "Revenue-driven growth KPIs",
    ],
  },
  {
    number: "02",
    title: "Sub-Second Performance",
    icon: Zap,
    tagline: "Speed is a Feature",
    description:
      "From zero-bloat modern frameworks to serverless cloud edge delivery, we engineer ultra-fast experiences that rank higher on Google.",
    bullets: [
      "100/100 Core Web Vitals targets",
      "Next.js server-side rendering",
      "Automated image & asset pipeline",
    ],
  },
  {
    number: "03",
    title: "Human-Centered Design",
    icon: HeartHandshake,
    tagline: "Craft & Empathy",
    description:
      "We design frictionless user journeys that resonate emotionally while converting casual visitors into lifelong brand advocates.",
    bullets: [
      "Psychology-driven visual hierarchy",
      "Micro-interaction fluid animations",
      "Full WCAG accessibility compliance",
    ],
  },
  {
    number: "04",
    title: "Enterprise Reliability",
    icon: ShieldCheck,
    tagline: "Security & 99.99% Uptime",
    description:
      "Hardened cloud infrastructure, automated CI/CD testing pipelines, and proactive maintenance to ensure 24/7 uninterrupted uptime.",
    bullets: [
      "Automated regression testing",
      "Docker & multi-cloud deployment",
      "Real-time monitoring & backups",
    ],
  },
];

const teamMembers = [
  {
    name: "Kiran Deepak",
    role: "Lead Content & Brand Strategist",
    image: "/illustrations/team_collaboration.jpg",
    bio: "Specializing in high-converting brand narratives, copy psychology, and editorial pillars.",
  },
  {
    name: "D. Nandhini",
    role: "Senior Digital Marketing Executive",
    image: "/illustrations/seo_search_results.jpg",
    bio: "Directing omnichannel SEO, PPC advertising, and multi-variant funnel experiments.",
  },
  {
    name: "Krithiga M",
    role: "Performance Growth Specialist",
    image: "/illustrations/user_conversion.jpg",
    bio: "Optimizing Meta & Google Search ad campaigns with real-time attribution analytics.",
  },
  {
    name: "Neelu Kumari",
    role: "Senior Full-Stack Web Developer",
    image: "/illustrations/server_performance.jpg",
    bio: "Architecting modern Next.js apps, headless Shopify storefronts, and cloud REST APIs.",
  },
  {
    name: "Aarav Sharma",
    role: "Principal UI/UX Product Designer",
    image: "/illustrations/design_audience_steps.jpg",
    bio: "Creating design systems, interactive prototypes, and luxury digital brand identities.",
  },
  {
    name: "Pooja Verma",
    role: "Cloud DevOps & Security Engineer",
    image: "/illustrations/cyber_security.jpg",
    bio: "Orchestrating Kubernetes clusters, zero-downtime CI/CD pipelines, and cloud infra.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      {/* 1. Hero Section with fixed header clearance */}
      <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 border-b border-border/40 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.03] pointer-events-none" />
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
            {/* Sticky Left Column */}
            <div className="md:sticky top-32 h-max space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/25 text-primary text-xs font-bold uppercase tracking-widest w-max backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5" />
                <span>About Kalki Web</span>
              </div>
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-tight">
                Crafting Impactful{" "}
                <span className="text-primary">Digital Experiences</span> that
                Transform your Business.
              </h1>
              <p className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed font-normal">
                We are a modern creative technology agency blending bold
                visual design, full-stack engineering, and data-driven marketing
                to build brands that dominate their industries.
              </p>
              <div className="pt-2 flex items-center gap-3">
                <Button
                  asChild
                  size="lg"
                  variant="glitch"
                  className="rounded-full px-6 text-black font-bold cursor-pointer"
                >
                  <Link href="/contact">Get in Touch</Link>
                </Button>
                <Button
                  asChild
                  size="icon"
                  variant="outline"
                  className="rounded-full h-12 w-12 border-primary/40 text-primary hover:bg-primary hover:text-black transition-colors cursor-pointer"
                >
                  <Link href="/portfolio">
                    <ArrowUpRight className="w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Timeline Right Column */}
            <div className="relative pl-6 sm:pl-8 md:pl-10">
              <div className="absolute left-2 sm:left-3 top-2 bottom-2 w-[2px] bg-gradient-to-b from-primary via-primary/50 to-primary/10 rounded-full" />
              <div className="space-y-12 sm:space-y-16">
                {ourValues.map((value, index) => (
                  <div key={index} className="relative pl-6 sm:pl-8 text-left">
                    <div className="absolute -left-[19px] sm:-left-[23px] top-1.5 w-5 h-5 bg-black border-2 border-primary rounded-full flex items-center justify-center shadow-[0_0_12px_rgba(234,179,8,0.5)]">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    </div>
                    <div className="mb-3 p-3 rounded-2xl bg-white/5 border border-white/10 w-max">
                      {value.icon}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 tracking-tight">
                      {value.title}
                    </h3>
                    <p className="text-neutral-300 text-sm sm:text-base leading-relaxed font-normal">
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Our Core Priorities Section ("Our Priorities") */}
      <section className="py-20 md:py-28 bg-neutral-950/80 border-b border-border/40 relative">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/25 text-primary text-xs font-bold uppercase tracking-widest backdrop-blur-md">
              <Target className="w-3.5 h-3.5" />
              <span>Our Core Priorities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              The Guiding Priorities Behind Every Project
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              We uphold rigorous engineering and strategic standards to ensure
              unrivaled performance, measurable ROI, and seamless client collaboration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ourPriorities.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={idx}
                  className="group relative rounded-3xl p-8 sm:p-10 bg-neutral-900/70 border border-white/10 hover:border-primary/50 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between text-left"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-primary/15 border border-primary/30 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-black transition-colors duration-300">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <span className="text-3xl font-black font-mono text-white/20 group-hover:text-primary transition-colors">
                        {item.number}
                      </span>
                    </div>

                    <span className="text-xs font-bold uppercase tracking-widest text-primary block">
                      {item.tagline}
                    </span>

                    <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-neutral-300 text-sm sm:text-base leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-white/10 space-y-2">
                    {item.bullets.map((b, bIdx) => (
                      <div
                        key={bIdx}
                        className="flex items-center gap-2.5 text-xs sm:text-sm text-neutral-300"
                      >
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Our Team Carousel / Marquee Section ("Our Teams") */}
      <section className="py-20 md:py-28 overflow-hidden bg-background border-b border-border/40">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-border/40 text-left">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/25 text-primary text-xs font-bold uppercase tracking-widest">
                <Users className="w-3.5 h-3.5" />
                <span>Meet Our Team</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                The Minds Shaping Your Digital Future
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base max-w-2xl leading-relaxed">
                A multidisciplinary collective of architects, designers, growth
                marketers, and engineers dedicated to your brand's acceleration.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Button asChild variant="glitch" size="lg" className="rounded-full">
                <Link href="/team">Meet All Team</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full border-white/20 text-white hover:bg-white hover:text-black">
                <Link href="/careers">Careers</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Infinite Continuous Team Carousel Marquee */}
        <div className="w-full relative [mask-image:linear-gradient(90deg,transparent,white_4%,white_96%,transparent)] py-4">
          <Marquee
            speed={35}
            gradient={false}
            pauseOnHover={true}
            className="py-4"
          >
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[290px] sm:w-[350px] mx-3 sm:mx-4.5 group cursor-pointer select-none"
              >
                <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 group-hover:border-primary/50 shadow-xl group-hover:shadow-2xl transition-all duration-500 bg-neutral-900">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    unoptimized
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

                  {/* Member Overlay Info */}
                  <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end text-left space-y-2 z-10">
                    <span className="text-xs font-bold uppercase tracking-wider text-primary font-mono">
                      {member.role}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      {member.name}
                    </h3>
                    <p className="text-xs text-neutral-300 line-clamp-2 leading-relaxed font-normal">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </section>

      {/* 4. Bottom CTA Section */}
      <section className="py-20 md:py-28 bg-neutral-950 text-center relative overflow-hidden">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 relative z-10 space-y-8">
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Ready to Build Something Extraordinary?
          </h2>
          <p className="text-neutral-300 text-sm sm:text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            Let's discuss how Kalki Web can scale your revenue, design your next
            breakthrough product, and drive real commercial results.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              variant="glitch"
              className="rounded-full px-8 text-black font-bold"
            >
              <Link href="/contact">Schedule Free Consultation</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full px-8 border-white/20 text-white hover:bg-white hover:text-black"
            >
              <Link href="/services">Explore Our Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
