"use client";

import React from "react";
import { CheckCircle } from "lucide-react";
import ShowcaseImageSlider from "@/components/showcase-image-slider";
import { cn } from "@/lib/utils";

/**
 * ServiceFeatureShowcase
 * Reusable 2-column component combining the 600x500 ShowcaseImageSlider (with link/div support)
 * and an interactive list of service capabilities/features.
 */
export default function ServiceFeatureShowcase({
  title,
  subtitle,
  slides = [],
  features = [],
  defaultDescription = "We leverage data, cutting-edge technology, and creativity to deliver measurable results and high ROI.",
  reverse = false,
  className = "",
}) {
  return (
    <section className={cn("py-16 md:py-24 relative", className)}>
      <div className="container mx-auto px-4 md:px-8">
        {/* Optional Section Header */}
        {(title || subtitle) && (
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            {title && (
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-4 text-base sm:text-lg text-muted-foreground md:text-xl">
                {subtitle}
              </p>
            )}
          </div>
        )}

        {/* 2-Column Showcase Grid */}
        <div
          className={cn(
            "grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center",
            reverse && "md:[&>*:first-child]:order-2 md:[&>*:last-child]:order-1"
          )}
        >
          {/* Left: 600x500 Showcase Image Slider with active zoom and link support */}
          <div className="flex justify-center w-full">
            <ShowcaseImageSlider slides={slides} />
          </div>

          {/* Right: Feature Highlights List */}
          <div className="space-y-6">
            {features.map((feature, index) => {
              // Support both string items and { title, description } object items
              const featureTitle =
                typeof feature === "string" ? feature : feature.title;
              const featureDesc =
                typeof feature === "object" && feature.description
                  ? feature.description
                  : defaultDescription;

              return (
                <div
                  key={index}
                  className="flex items-start gap-4 p-3.5 rounded-xl transition-colors hover:bg-white/[0.03]"
                >
                  <CheckCircle className="w-7 h-7 md:w-8 md:h-8 text-primary mt-0.5 flex-shrink-0" />
                  <div className="space-y-1 text-left">
                    <h3 className="text-lg md:text-xl font-bold text-white tracking-tight">
                      {featureTitle}
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      {featureDesc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
