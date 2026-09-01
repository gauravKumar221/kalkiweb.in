"use client";

import React, { useState } from "react";
import Link from "next/link";
import { CheckCircle2, Sparkles, ArrowRight, Zap, Shield, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

const pricingPlans = [
  {
    name: "Starter Growth",
    badge: "For Startups",
    price: "$1,499",
    billing: "/project base",
    description:
      "Essential high-converting landing page, foundational SEO, and modern brand design to launch fast.",
    features: [
      "Custom 5-Page Responsive Web Design",
      "Next.js / React High-Performance Architecture",
      "On-Page Technical SEO & Speed Optimization",
      "Basic Analytics & Heatmap Setup",
      "Standard 14-Day Delivery",
      "Dedicated Project Manager",
    ],
    popular: false,
    cta: "Choose Starter",
  },
  {
    name: "Scale & Dominate",
    badge: "Most Popular",
    price: "$3,499",
    billing: "/project base",
    description:
      "Comprehensive custom full-stack web application or Shopify Plus build with integrated ad strategy.",
    features: [
      "Custom E-Commerce or Web Application",
      "Shopify 2.0 / Next.js Headless Build",
      "Full CRO & Funnel Optimization",
      "Meta & Google Ads Campaign Setup",
      "Automated CI/CD & Cloud Deployment",
      "Priority 24/7 Slack Support",
      "30 Days Post-Launch Support & Iteration",
    ],
    popular: true,
    cta: "Scale Your Business",
  },
  {
    name: "Enterprise Architecture",
    badge: "Custom Scale",
    price: "Custom",
    billing: "/tailored plan",
    description:
      "Dedicated multi-disciplinary team for large organizations requiring bespoke AI, cloud infrastructure, and 24/7 operations.",
    features: [
      "Custom LLM & Agentic AI Systems",
      "Kubernetes & Multi-Cloud Infrastructure",
      "Dedicated Full-Time Senior Engineers",
      "24/7 Enterprise Back-Office Support",
      "Custom SLA Guarantee (99.99% Uptime)",
      "Executive Growth Strategy Consulting",
    ],
    popular: false,
    cta: "Contact Enterprise",
  },
];

const faqs = [
  {
    q: "Are there any hidden fees?",
    a: "No, all our quotes are 100% transparent. Any additional third-party tool or cloud API costs are outlined upfront.",
  },
  {
    q: "Can I upgrade or customize a package?",
    a: "Absolutely. We tailor every engagement to your exact technology stack, feature milestones, and business goals.",
  },
  {
    q: "How does payment work?",
    a: "We typically work on milestone-based billing (e.g. 50% upfront, 50% upon completed launch), or monthly retainers for ongoing growth.",
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="relative pt-36 pb-16 md:pt-44 md:pb-24 overflow-hidden border-b border-border/40">
        <div className="absolute inset-0 bg-grid-white/[0.03] pointer-events-none" />
        <div className="container relative z-10 max-w-5xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/15 border border-primary/30 text-primary text-xs md:text-sm font-semibold uppercase tracking-wider mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Transparent Investment</span>
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-6">
            Simple, Scalable Pricing
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Choose the perfect engagement model to build, launch, and scale your digital products with guaranteed delivery speed.
          </p>
        </div>
      </section>

      {/* Pricing Cards Grid */}
      <section className="py-20 md:py-28">
        <div className="container max-w-6xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-3xl p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 ${
                  plan.popular
                    ? "bg-neutral-900 border-2 border-primary shadow-[0_20px_50px_rgba(234,179,8,0.15)] md:-translate-y-3"
                    : "bg-neutral-900/60 border border-white/10 hover:border-white/25"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-black text-xs font-extrabold uppercase tracking-wider shadow-md">
                    {plan.badge}
                  </div>
                )}

                <div>
                  <div className="mb-6 text-left">
                    <span className="text-xs font-mono font-bold uppercase tracking-widest text-primary">
                      {plan.name}
                    </span>
                    <div className="flex items-baseline gap-2 mt-3">
                      <span className="text-4xl sm:text-5xl font-black text-white">
                        {plan.price}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {plan.billing}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-neutral-400 mt-4 leading-relaxed">
                      {plan.description}
                    </p>
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-3 pt-6 border-t border-white/10 text-left">
                    <span className="text-xs font-bold uppercase tracking-wider text-neutral-300 block mb-2">
                      Included in Plan:
                    </span>
                    {plan.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-3 text-xs sm:text-sm text-neutral-200">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-8">
                  <Button
                    asChild
                    size="lg"
                    variant={plan.popular ? "glitch" : "outline"}
                    className={`w-full font-bold cursor-pointer ${
                      plan.popular ? "text-black" : "text-white hover:bg-white hover:text-black"
                    }`}
                  >
                    <Link href="/contact">{plan.cta}</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* FAQs */}
          <div className="mt-24 max-w-3xl mx-auto text-left space-y-8">
            <h2 className="text-3xl font-extrabold text-white text-center mb-8">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="p-6 rounded-2xl bg-neutral-900/80 border border-white/10 space-y-2"
                >
                  <h4 className="text-lg font-bold text-white">{faq.q}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
