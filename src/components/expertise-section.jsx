"use client";
import React from "react";

export default function ExpertiseSection({ videoSrc = "IB-REEL_2.mp4" }) {
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

      <div className="absolute inset-0 bg-grid-white/[0.03] z-10 pointer-events-none" />

      <div className="container relative z-20 mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center"></div>
      </div>
    </section>
  );
}
