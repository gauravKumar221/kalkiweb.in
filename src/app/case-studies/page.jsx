"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, TrendingUp, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const caseStudies = [
  {
    title: "Skincare E-Commerce Platform Scaling",
    client: "OuroLogy Glow",
    category: "E-Commerce & Branding",
    results: "+280% Sales Growth",
    statLabel: "Conversion Rate Increased to 6.8%",
    description:
      "Engineered a high-speed Shopify 2.0 headless storefront with personalized skincare quiz integrations and bespoke liquid UI.",
    image: "/illustrations/team_collaboration.jpg",
    tags: ["Shopify Plus", "Next.js", "UI/UX", "Conversion CRO"],
  },
  {
    title: "AI-Powered Customer Intelligence Bot",
    client: "FinFlow Analytics",
    category: "AI & Automation",
    results: "75% Support Automated",
    statLabel: "Response time reduced to <15s",
    description:
      "Designed and deployed custom LLM multi-agent support workflows that handle thousands of daily queries with zero human lag.",
    image: "/illustrations/seo_search_results.jpg",
    tags: ["LLM Integration", "Python", "WebSockets", "Cloud Architecture"],
  },
  {
    title: "Omnichannel PPC & Search Engine Growth",
    client: "Urban Lux Living",
    category: "Performance Marketing",
    results: "4.8x ROAS Achieved",
    statLabel: "1.2M+ Targeted Impressions",
    description:
      "Executed granular keyword intent clusters and multi-variant Meta & Google Search ad funnels to maximize qualified buyer acquisition.",
    image: "/Kalkimarketing/ChatGPT Image Jun 25, 2026, 01_06_58 PM 1.png",
    tags: ["Google Ads", "Meta Ads", "SEO", "Attribution Modeling"],
  },
  {
    title: "Cross-Platform Mobile Travel Application",
    client: "Plin-Plan Companion",
    category: "Mobile Engineering",
    results: "500K+ Active Users",
    statLabel: "4.9★ App Store Rating",
    description:
      "Built an intuitive iOS and Android travel booking experience with real-time offline map sync and ultra-fast micro-interactions.",
    image: "/illustrations/design_audience_steps.jpg",
    tags: ["React Native", "SwiftUI", "GraphQL", "Figma"],
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative pt-36 pb-16 md:pt-44 md:pb-24 overflow-hidden border-b border-border/40">
        <div className="absolute inset-0 bg-grid-white/[0.03] pointer-events-none" />
        <div className="container relative z-10 max-w-6xl mx-auto px-4 md:px-8 text-center">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-6">
            Our Case Studies
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover how Kalki Web helps ambitious enterprises and high-growth
            brands architect transformative digital experiences, scale revenue,
            and dominate search rankings.
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 md:py-28">
        <div className="container max-w-6xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="group rounded-3xl overflow-hidden border border-white/10 bg-neutral-900/70 hover:border-primary/50 shadow-2xl transition-all duration-500 flex flex-col justify-between"
              >
                {/* Image Aspect Box */}
                <div className="relative w-full aspect-[16/10] overflow-hidden bg-neutral-950">
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    unoptimized
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                  <div className="absolute top-5 left-5 z-10">
                    <span className="inline-flex items-center px-3.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-xs font-bold uppercase tracking-wider text-primary">
                      {study.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4 z-10 text-right">
                    <span className="text-xl sm:text-2xl font-black text-white drop-shadow-md">
                      {study.results}
                    </span>
                    <span className="block text-[11px] text-neutral-300">
                      {study.statLabel}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8 flex-grow flex flex-col justify-between space-y-4">
                  <div className="space-y-2 text-left">
                    <span className="text-xs font-semibold text-neutral-400 uppercase tracking-widest">
                      {study.client}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-primary transition-colors tracking-tight">
                      {study.title}
                    </h3>
                    <p className="text-sm text-neutral-300 leading-relaxed font-normal">
                      {study.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {study.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-xs px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-neutral-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-white transition-colors"
                    >
                      <span>Start Similar Project</span>
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Box */}
          <div className="mt-16 md:mt-24 p-8 sm:p-12 rounded-3xl bg-neutral-900 border border-primary/30 text-center space-y-6">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              Ready to create your success story?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-sm sm:text-base">
              Let's build, optimize, and market your next big digital product
              together.
            </p>
            <div>
              <Button asChild size="lg" variant="glitch">
                <Link href="/contact">Get Free Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
