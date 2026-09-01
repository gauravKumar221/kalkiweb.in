"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ShowcaseImageSlider({
  slides = [],
  autoPlay = true,
  interval = 4500,
  className = "",
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Default slides if none provided
  const items = slides.length > 0 ? slides : [
    {
      image: "/illustrations/team_collaboration.jpg",
      title: "UI/UX Mobile App Design",
      category: "Design System & Prototyping",
      link: "/portfolio",
    },
    {
      image: "/illustrations/design_audience_steps.jpg",
      title: "Brand Identity & Visual Styleguide",
      category: "Branding",
      link: null, // No link -> renders as <div>
    },
    {
      image: "/illustrations/seo_search_results.jpg",
      title: "Web Platform Dashboard UI",
      category: "SaaS Application",
      link: "/contact",
    },
    {
      image: "/illustrations/server_performance.jpg",
      title: "Creative Marketing Campaign Graphics",
      category: "Marketing Visuals",
      link: null,
    },
  ];

  const total = items.length;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (!autoPlay || isPaused || total <= 1) return;
    const timer = setInterval(() => {
      nextSlide();
    }, interval);
    return () => clearInterval(timer);
  }, [autoPlay, isPaused, interval, nextSlide, total]);

  const currentSlide = items[currentIndex];
  const hasLink = Boolean(currentSlide?.link && currentSlide.link.trim() !== "");

  return (
    <div
      className={cn(
        "relative w-full max-w-[600px] h-[380px] sm:h-[450px] md:h-[500px] rounded-2xl overflow-hidden border border-white/15 bg-neutral-950 shadow-2xl shadow-primary/20 group/slider select-none",
        className
      )}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background glow behind container */}
      <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 via-transparent to-primary/30 rounded-2xl blur-xl opacity-30 group-hover/slider:opacity-60 transition-opacity duration-700 pointer-events-none" />

      {/* Main Slide Area */}
      <div className="relative w-full h-full overflow-hidden bg-neutral-900">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.04 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="w-full h-full absolute inset-0"
          >
            {hasLink ? (
              <Link
                href={currentSlide.link}
                target={currentSlide.link.startsWith("http") ? "_blank" : undefined}
                rel={currentSlide.link.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group relative block w-full h-full cursor-pointer overflow-hidden"
              >
                <Image
                  src={currentSlide.image}
                  alt={currentSlide.title || "Portfolio showcase work"}
                  fill
                  unoptimized
                  sizes="(max-width: 768px) 100vw, 600px"
                  priority
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Subtle vignette & bottom gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/35 to-black/20 pointer-events-none" />

                {/* Top-Right "View Project" Pill Link Badge */}
                <div className="absolute top-4 right-4 z-20">
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-xs font-semibold text-white group-hover:bg-primary group-hover:text-black group-hover:border-primary transition-all duration-300 shadow-lg">
                    <span>View Project</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </span>
                </div>

                {/* Bottom Caption Overlay */}
                {(currentSlide.title || currentSlide.category) && (
                  <div className="absolute inset-x-0 bottom-0 z-20 p-5 md:p-6 pb-12 text-left space-y-1">
                    {currentSlide.category && (
                      <span className="text-[11px] md:text-xs font-bold uppercase tracking-wider text-primary">
                        {currentSlide.category}
                      </span>
                    )}
                    {currentSlide.title && (
                      <h4 className="text-lg md:text-xl font-bold text-white tracking-tight drop-shadow-md group-hover:text-primary transition-colors line-clamp-1">
                        {currentSlide.title}
                      </h4>
                    )}
                  </div>
                )}
              </Link>
            ) : (
              <div className="group relative block w-full h-full overflow-hidden">
                <Image
                  src={currentSlide.image}
                  alt={currentSlide.title || "Portfolio showcase work"}
                  fill
                  unoptimized
                  sizes="(max-width: 768px) 100vw, 600px"
                  priority
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Subtle vignette & bottom gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/35 to-black/20 pointer-events-none" />

                {/* Bottom Caption Overlay */}
                {(currentSlide.title || currentSlide.category) && (
                  <div className="absolute inset-x-0 bottom-0 z-20 p-5 md:p-6 pb-12 text-left space-y-1">
                    {currentSlide.category && (
                      <span className="text-[11px] md:text-xs font-bold uppercase tracking-wider text-primary">
                        {currentSlide.category}
                      </span>
                    )}
                    {currentSlide.title && (
                      <h4 className="text-lg md:text-xl font-bold text-white tracking-tight drop-shadow-md line-clamp-1">
                        {currentSlide.title}
                      </h4>
                    )}
                  </div>
                )}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slide Counter Badge (Top Left) */}
      <div className="absolute top-4 left-4 z-30">
        <div className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-[11px] font-mono font-medium text-neutral-300">
          <span className="text-primary font-bold">{String(currentIndex + 1).padStart(2, "0")}</span>
          <span className="mx-1 text-neutral-500">/</span>
          <span>{String(total).padStart(2, "0")}</span>
        </div>
      </div>

      {/* Navigation Arrows */}
      {total > 1 && (
        <>
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              prevSlide();
            }}
            aria-label="Previous Slide"
            className="absolute left-3 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-black/70 hover:bg-primary text-white hover:text-black backdrop-blur-md border border-white/15 flex items-center justify-center transition-all duration-300 opacity-80 hover:opacity-100 hover:scale-110 shadow-lg cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              nextSlide();
            }}
            aria-label="Next Slide"
            className="absolute right-3 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-black/70 hover:bg-primary text-white hover:text-black backdrop-blur-md border border-white/15 flex items-center justify-center transition-all duration-300 opacity-80 hover:opacity-100 hover:scale-110 shadow-lg cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </>
      )}

      {/* Navigation Dots Indicator (Bottom Center) */}
      {total > 1 && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-30 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/15">
          {items.map((_, idx) => (
            <button
              key={idx}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                goToSlide(idx);
              }}
              aria-label={`Go to slide ${idx + 1}`}
              className={cn(
                "h-2 rounded-full transition-all duration-300 cursor-pointer",
                idx === currentIndex
                  ? "w-6 bg-primary shadow-sm shadow-primary/50"
                  : "w-2 bg-white/40 hover:bg-white/80"
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
}
