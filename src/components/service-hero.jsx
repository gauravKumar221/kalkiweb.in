"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";

export default function ServiceHero({
  badge = "Kalki Web Services",
  title = "Data-Driven Digital Marketing",
  description = "We create and execute results-driven digital marketing strategies to grow your online presence, attract your target audience, and convert leads into customers.",
  ctaText = "Grow Your Business",
  ctaLink = "/contact",
  secondaryCtaText,
  secondaryCtaLink,
  videoSrc = "/videoservices/preview_540p_crf22_higher_quality.mp4",
  stats = [
    { label: "Client ROI Increase", value: "+280%" },
    { label: "Campaign Success", value: "99%" },
    { label: "Active Brands Scaled", value: "150+" },
  ],
  highlights = [
    "Targeted Audience Acquisition",
    "High-Conversion Funnel Architecture",
    "Real-Time Performance Tracking",
  ],
  rightElement,
}) {
  return (
    <section className="relative w-full min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24">
      {/* Full-Screen Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 scale-105"
      >
        <source src={videoSrc} type="video/mp4" />
      </video>

      {/* Cinematic Contrast Overlays */}
      {/* <div className="absolute inset-0 bg-black/65 md:bg-black/30 backdrop-blur-[1.5px] z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-black/20 to-black/80 z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/30 to-black/90 z-10 pointer-events-none" /> */}

      {/* Grid Pattern overlay for tech aesthetic */}
      <div className="absolute inset-0 bg-grid-white/[0.03] z-10 pointer-events-none" />

      {/* Main Content */}
      <div className="container relative z-20 mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Hero Column */}
          {/* <div className="lg:col-span-12 space-y-6 text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08] drop-shadow-md">
              {title}
            </h1>

            <p className="text-lg md:text-xl text-neutral-300 max-w-2xl font-normal leading-relaxed drop-shadow-sm">
              {description}
            </p>

            <div className="pt-3 flex flex-wrap items-center gap-4">
              <Button
                asChild
                size="lg"
                variant="glitch"
                className="rounded-full px-8 h-12 text-base font-semibold shadow-xl shadow-primary/25 cursor-pointer"
              >
                <Link href={ctaLink}>{ctaText}</Link>
              </Button>

              {secondaryCtaText && (
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-full px-7 h-12 text-base text-white border-white/20 hover:bg-white/10 backdrop-blur-md cursor-pointer"
                >
                  <Link href={secondaryCtaLink || "/contact"}>
                    {secondaryCtaText}
                  </Link>
                </Button>
              )}
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
