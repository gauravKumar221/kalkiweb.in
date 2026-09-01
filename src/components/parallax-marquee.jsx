"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";
export default function ParallaxMarquee() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end start"],
    });
    return (<main className="overflow-hidden bg-black py-20 relative selection:bg-primary selection:text-black">
      <div className="absolute inset-0 bg-grid-white/[0.01] pointer-events-none"/>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,223,0,0.03)_0%,transparent_60%)] pointer-events-none"/>
      
      {/* Scroll indicator header */}
      <div className="h-[25vh] flex flex-col justify-center items-center text-center px-6">
        <span className="text-primary font-mono text-xs md:text-sm tracking-widest uppercase mb-2">
          Dynamic Agency Capabilities
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-none">
          What We Do.
        </h2>
        <p className="text-muted-foreground text-xs md:text-sm mt-3 max-w-sm">
          Scroll vertically to watch the interactive parallax headlines translate smoothly.
        </p>
      </div>

      {/* Marquee Tracks container */}
      <div ref={container} className="relative z-10 space-y-10 py-12">
        <Slide src="/illustrations/team_collaboration.jpg" direction="left" left="-40%" text="Brand Strategy & Design" progress={scrollYProgress}/>
        <Slide src="/illustrations/design_audience_steps.jpg" direction="right" left="-20%" text="Immersive UI/UX Creation" progress={scrollYProgress}/>
        <Slide src="/illustrations/server_performance.jpg" direction="left" left="-55%" text="Next-gen Web Engineering" progress={scrollYProgress}/>
      </div>

      <div className="h-[20vh] flex items-center justify-center">
        <span className="text-neutral-600 font-mono text-[10px] tracking-widest uppercase">
          Kalki Web • Scroll To Explore
        </span>
      </div>
    </main>);
}
const Slide = ({ src, direction, left, text, progress }) => {
    const dirMultiplier = direction === "left" ? -1 : 1;
    // Map progress to translateX translation
    const translateX = useTransform(progress, [0, 1], [300 * dirMultiplier, -300 * dirMultiplier]);
    return (<motion.div style={{ x: translateX, left }} className="relative flex whitespace-nowrap gap-4">
      <Phrase src={src} text={text}/>
      <Phrase src={src} text={text}/>
      <Phrase src={src} text={text}/>
      <Phrase src={src} text={text}/>
    </motion.div>);
};
const Phrase = ({ src, text }) => {
    return (<div className="px-6 flex gap-6 items-center shrink-0">
      <p className="text-[6.5vw] md:text-[6vw] font-extrabold tracking-tighter text-white uppercase font-sans">
        {text}
      </p>
      <span className="relative h-[6.5vw] md:h-[6vw] aspect-[2.2/1] rounded-full overflow-hidden border border-white/10 shadow-2xl shrink-0">
        <Image style={{ objectFit: "cover" }} src={src} alt={text} fill sizes="40vw"/>
      </span>
    </div>);
};
