"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import { ExternalLink, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

// Default showcase mockups with varying desktop & mobile formats like reference
const defaultItems = [
  {
    image: "/illustrations/team_collaboration.jpg",
    title: "OuroLogy - Healthy Skin & Glow Care",
    category: "E-Commerce & Branding",
    link: "/portfolio",
    isMobile: false,
  },
  {
    image: "/illustrations/design_audience_steps.jpg",
    title: "Plin-Plan Travel Companion",
    category: "Mobile App UI",
    link: null, // no link -> renders as div
    isMobile: true,
  },
  {
    image: "/illustrations/seo_search_results.jpg",
    title: "Dura Skills - Modern Learning Platform",
    category: "SaaS Web Platform",
    link: "/contact",
    isMobile: false,
  },
  {
    image: "/illustrations/server_performance.jpg",
    title: "Portal Architecture & Real Estate",
    category: "Web Application",
    link: null,
    isMobile: true,
  },
  {
    image: "/illustrations/user_conversion.jpg",
    title: "Fintech Banking & Digital Wallet",
    category: "Fintech Dashboard",
    link: "/portfolio",
    isMobile: false,
  },
  {
    image: "/illustrations/cyber_security.jpg",
    title: "Cyber Shield Enterprise Security",
    category: "Cloud Security",
    link: null,
    isMobile: false,
  },
];

export default function ShowcaseMarquee({
  items = defaultItems,
  speed = 45,
  direction = "left",
  title,
  subtitle,
  badge,
  className = "",
}) {
  const showcaseList = items && items.length > 0 ? items : defaultItems;

  return (
    <section
      className={cn(
        "w-full py-16 md:py-24 relative overflow-hidden bg-black selection:bg-primary selection:text-black",
        className
      )}
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-purple-900/15 rounded-full blur-[140px] pointer-events-none" />

      {/* Header text if title/subtitle provided */}
      {(title || subtitle || badge) && (
        <div className="container mx-auto px-4 text-center mb-12 relative z-10">
          {badge && (
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-xs md:text-sm font-semibold uppercase tracking-wider mb-4 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{badge}</span>
            </div>
          )}
          {title && (
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-base md:text-lg text-neutral-400 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
      )}

      {/* Infinite Horizontal Marquee with gradient edge fade */}
      <div className="w-full relative [mask-image:linear-gradient(90deg,transparent,white_8%,white_92%,transparent)]">
        <Marquee
          speed={speed}
          direction={direction}
          gradient={false}
          pauseOnHover={true}
          className="py-4"
        >
          {showcaseList.map((item, index) => {
            const hasLink = Boolean(item.link && item.link.trim() !== "");
            const isExternal = hasLink && item.link.startsWith("http");
            const isMobileCard = Boolean(item.isMobile);

            const cardWidthClass = isMobileCard
              ? "w-[240px] sm:w-[280px] md:w-[310px]"
              : "w-[440px] sm:w-[540px] md:w-[620px]";

            const CardContent = (
              <>
                {/* Image */}
                <Image
                  src={item.image}
                  alt={item.title || "Portfolio showcase screen"}
                  fill
                  unoptimized
                  sizes="(max-width: 768px) 100vw, 620px"
                  className="object-cover transition-transform duration-700 ease-out group-hover/card:scale-105"
                />

                {/* Subtle dark vignette overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-black/10 transition-opacity duration-300 group-hover/card:from-black/95 group-hover/card:via-black/35" />

                {/* Top-Right "View Project" Pill Link Badge (Only if link is present) */}
                {hasLink && (
                  <div className="absolute top-4 right-4 z-20">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-[11px] font-semibold text-white group-hover/card:bg-primary group-hover/card:text-black group-hover/card:border-primary transition-all duration-300 shadow-md">
                      <span>View</span>
                      <ExternalLink className="w-3 h-3" />
                    </span>
                  </div>
                )}

                {/* Bottom Caption Overlay */}
                {(item.title || item.category) && (
                  <div className="absolute inset-x-0 bottom-0 z-20 p-5 md:p-6 text-left space-y-1">
                    {item.category && (
                      <span className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-primary">
                        {item.category}
                      </span>
                    )}
                    {item.title && (
                      <h4 className="text-base md:text-lg font-bold text-white tracking-tight drop-shadow-md group-hover/card:text-primary transition-colors line-clamp-1">
                        {item.title}
                      </h4>
                    )}
                  </div>
                )}
              </>
            );

            return (
              <div
                key={index}
                className={cn(
                  "relative mx-3.5 sm:mx-5 shrink-0 h-[320px] sm:h-[380px] md:h-[420px] rounded-3xl overflow-hidden border border-white/15 bg-neutral-900 shadow-[0_15px_40px_rgba(0,0,0,0.85)] transition-all duration-500 hover:border-primary/60 hover:shadow-[0_20px_50px_rgba(234,179,8,0.25)] group/card select-none",
                  cardWidthClass
                )}
              >
                {hasLink ? (
                  <Link
                    href={item.link}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    className="block w-full h-full relative cursor-pointer"
                  >
                    {CardContent}
                  </Link>
                ) : (
                  <div className="block w-full h-full relative">
                    {CardContent}
                  </div>
                )}
              </div>
            );
          })}
        </Marquee>
      </div>
    </section>
  );
}
