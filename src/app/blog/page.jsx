"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const articles = [
  {
    title: "10 Principles of High-Converting SaaS & E-Commerce Web Design in 2026",
    category: "Design & UX",
    date: "August 28, 2026",
    readTime: "5 min read",
    snippet:
      "Explore how micro-animations, semantic visual hierarchy, and sub-second page loads turn casual visitors into loyal high-value customers.",
    image: "/illustrations/team_collaboration.jpg",
    link: "/services/graphic-ui-ux",
  },
  {
    title: "How to Scale Organic Traffic with Semantic Topic Clusters & AI Optimization",
    category: "SEO Strategy",
    date: "August 20, 2026",
    readTime: "7 min read",
    snippet:
      "A comprehensive guide on moving beyond keyword stuffing into entity-based technical SEO and high-authority backlink architecture.",
    image: "/illustrations/seo_search_results.jpg",
    link: "/services/digital-marketing",
  },
  {
    title: "Why Headless Shopify 2.0 Outperforms Traditional Monolithic Stores",
    category: "E-Commerce",
    date: "August 14, 2026",
    readTime: "6 min read",
    snippet:
      "Analyzing the quantifiable conversion gains, frictionless checkout experiences, and API scalability of modern headless e-commerce builds.",
    image: "/illustrations/user_conversion.jpg",
    link: "/services/shopify-development",
  },
  {
    title: "Zero-Downtime Multi-Cloud Deployments with Docker, Kubernetes & Terraform",
    category: "DevOps",
    date: "August 05, 2026",
    readTime: "8 min read",
    snippet:
      "Best practices for automating your CI/CD pipelines to ensure continuous delivery with 99.99% uptime guarantees.",
    image: "/illustrations/server_performance.jpg",
    link: "/services/devops",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="relative pt-36 pb-16 md:pt-44 md:pb-24 overflow-hidden border-b border-border/40">
        <div className="absolute inset-0 bg-grid-white/[0.03] pointer-events-none" />
        <div className="container relative z-10 max-w-5xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/15 border border-primary/30 text-primary text-xs md:text-sm font-semibold uppercase tracking-wider mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Insights & Industry Intelligence</span>
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-6">
            The Kalki Web Journal
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Latest trends, technical breakdowns, and strategic insights on digital marketing, web engineering, and product design.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 md:py-28">
        <div className="container max-w-6xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
            {articles.map((article, index) => (
              <article
                key={index}
                className="group rounded-3xl overflow-hidden border border-white/10 bg-neutral-900/60 hover:border-primary/50 shadow-xl transition-all duration-500 flex flex-col justify-between"
              >
                <div className="relative w-full aspect-[16/10] overflow-hidden bg-neutral-950">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    unoptimized
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute top-5 left-5 z-10">
                    <span className="px-3.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-xs font-bold uppercase tracking-wider text-primary">
                      {article.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 sm:p-8 flex-grow flex flex-col justify-between space-y-4 text-left">
                  <div className="space-y-3">
                    <div className="flex items-center gap-4 text-xs text-neutral-400 font-medium">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        {article.date}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        {article.readTime}
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-primary transition-colors tracking-tight leading-snug">
                      {article.title}
                    </h3>
                    <p className="text-sm text-neutral-300 leading-relaxed font-normal">
                      {article.snippet}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <Link
                      href={article.link}
                      className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-white transition-colors cursor-pointer"
                    >
                      <span>Explore Related Service</span>
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
