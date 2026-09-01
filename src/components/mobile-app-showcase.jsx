"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default function MobileAppShowcase({
  title = "Plan Your",
  titleItalic = "Escape",
  description = "We have the largest selection of unique tours. Try our easy and quick tour selection for any request. 24-hour support is always happy to answer all your questions.",
  ctaText = "Get Started",
  ctaLink = "/contact",
  downloadTitle = "Download",
  downloadSubtitle = "The mobile app is available now",
  appStoreLink = "#",
  playStoreLink = "#",
  videoSrc = "https://assets.mixkit.co/videos/preview/mixkit-vertical-shot-of-a-tropical-island-beach-with-palm-trees-43187-large.mp4",
  poster = "/illustrations/team_collaboration.jpg",
  className = "",
}) {
  return (
    <section className={cn("py-20 lg:py-28 relative overflow-hidden bg-background", className)}>
      <div className="container max-w-6xl mx-auto px-4">
        {/* Header Title with Italic Accent */}
        <div className="flex flex-col select-none mb-12 text-left">
          <h2 className="text-4xl sm:text-6xl md:text-[76px] font-extrabold uppercase text-foreground tracking-tight leading-[0.95] font-heading">
            {title}
          </h2>
          <span className="text-4xl sm:text-6xl md:text-[76px] font-light italic uppercase text-primary tracking-wider leading-[0.95] mt-1 font-heading">
            {titleItalic}
          </span>
        </div>

        {/* Asymmetric Card Container */}
        <div className="relative bg-[#1A1829] rounded-[2rem] rounded-tl-[4.5rem] p-8 sm:p-12 md:p-16 shadow-[0_20px_50px_rgba(138,133,217,0.15)] border border-[#8A85D9]/25 overflow-visible min-h-[420px] flex items-center">
          {/* Decorative Vector Curve SVG in background */}
          <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden rounded-[2rem] rounded-tl-[4.5rem]">
            <svg
              className="absolute left-0 bottom-4 w-[110%] min-w-[800px] h-auto opacity-20 select-none"
              viewBox="0 0 600 120"
              fill="none"
            >
              <path
                d="M10 90 C 120 20, 220 140, 320 50 C 420 -40, 480 120, 540 60 C 565 35, 585 45, 600 55"
                stroke="#8A85D9"
                strokeWidth="3.5"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full z-10 relative">
            {/* Left Content Column */}
            <div className="lg:col-span-7 flex flex-col justify-between text-left h-full gap-8">
              <div className="flex flex-col gap-6">
                <p className="text-neutral-300 text-sm sm:text-base leading-relaxed max-w-md font-normal">
                  {description}
                </p>
                <div className="flex justify-start">
                  <Link
                    href={ctaLink}
                    className="bg-primary text-black hover:bg-white hover:text-black transition-all duration-300 px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2 shadow-lg shadow-primary/25 cursor-pointer"
                  >
                    <span>{ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* App Store & Play Store Download Links */}
              <div className="flex items-center justify-between gap-4 border-t border-[#8A85D9]/20 pt-6 mt-4">
                <div className="flex flex-col text-left">
                  <span className="text-[10px] uppercase tracking-widest text-primary/80 font-bold">
                    {downloadTitle}
                  </span>
                  <span className="text-xs font-bold text-neutral-200 mt-0.5">
                    {downloadSubtitle}
                  </span>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  {/* Apple App Store */}
                  <a
                    href={appStoreLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border border-white/20 hover:border-primary bg-white/5 hover:bg-primary hover:text-black flex items-center justify-center text-white transition-all duration-200"
                    aria-label="Download on the App Store"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-1 .04-2.2.67-2.92 1.49-.62.71-1.16 1.85-1.01 2.96 1.12.09 2.27-.58 2.94-1.39z" />
                    </svg>
                  </a>

                  {/* Google Play Store */}
                  <a
                    href={playStoreLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border border-white/20 hover:border-primary bg-white/5 hover:bg-primary hover:text-black flex items-center justify-center text-white transition-all duration-200"
                    aria-label="Download on Google Play"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M5.529 1.951c-.142.146-.229.387-.229.691v18.716c0 .304.087.545.229.691l.067.067L16.2 11.512V11.33L5.596 1.884l-.067.067zM19.7 7.973l-3.5 2.019v.33l3.5 2.019c.471.272.8-.02.8-.574V8.547c0-.554-.329-.846-.8-.574zM16.2 11.33L5.596 1.884c.321-.184.846-.118 1.288.136l12.816 7.391-3.5-3.5L16.2 11.33zM16.2 11.512l3.5 3.5-12.816 7.391c-.442.254-.967.321-1.288.136L16.2 11.512z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Phone Mockup with Floating Overlap */}
            <div className="lg:col-span-5 relative flex justify-center lg:justify-end select-none mt-12 lg:mt-0">
              <div className="lg:-mt-36 lg:-mb-28 transform hover:scale-[1.03] transition-transform duration-500 relative z-10">
                {/* Phone Body Frame */}
                <div className="w-[280px] sm:w-[300px] h-[570px] sm:h-[610px] rounded-[3rem] border-[9px] border-slate-900 bg-slate-950 shadow-[0_25px_60px_rgba(0,0,0,0.9)] relative overflow-hidden ring-1 ring-slate-800">
                  {/* Dynamic Notch / Speaker Pill */}
                  <div className="w-20 h-5 bg-black rounded-full absolute top-2.5 left-1/2 -translate-x-1/2 z-40 flex items-center justify-end pr-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-900/50" />
                  </div>

                  {/* Status Bar */}
                  <div className="absolute top-3 left-0 right-0 px-6 flex justify-between items-center text-[9px] font-bold text-slate-400 z-30 font-sans">
                    <span>9:41</span>
                    <div className="flex items-center gap-1">
                      <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 3c-1.2 0-2.4.2-3.6.7L12 7.4l3.6-3.7C14.4 3.2 13.2 3 12 3zm0 18c4.97 0 9-4.03 9-9 0-1.84-.55-3.55-1.5-4.97L12 18.57V21z" />
                      </svg>
                      <div className="w-4 h-2 rounded-sm border border-slate-400 flex items-center p-0.5">
                        <div className="w-full h-full bg-slate-400 rounded-2xs" />
                      </div>
                    </div>
                  </div>

                  {/* Screen Content: Live Vertical Video */}
                  <div className="w-full h-full bg-slate-950 relative overflow-hidden z-10">
                    <video
                      className="w-full h-full object-cover"
                      src={videoSrc}
                      poster={poster}
                      autoPlay
                      loop
                      muted
                      playsInline
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/25 pointer-events-none" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
