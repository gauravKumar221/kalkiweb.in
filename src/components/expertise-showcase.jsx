"use client";

import React, { useEffect, useRef } from "react";

const ExpertiseShowcase = ({ videoSrc = "/videoservices/kalkiman.mp4" }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.defaultMuted = true;
      video.muted = true;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.warn("Autoplay was prevented by browser policy:", error);
        });
      }
    }
  }, []);

  return (
    <section className="relative w-full min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24 bg-black">
      {/* Full-Screen Background Video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover z-0 scale-105"
      >
        <source src={videoSrc} type="video/mp4" />
        <source src="/videos/kalkiman.mp4" type="video/mp4" />
        <source src="/videoservices/kalkiman.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-white/[0.03] z-10 pointer-events-none" />

      {/* Subtle Vignette for contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/60 z-10 pointer-events-none" />

      <div className="container relative z-20 mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Optional inner content container */}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseShowcase;
