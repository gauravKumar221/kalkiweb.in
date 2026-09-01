"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const services = [
  {
    title: "Branding & UI/UX",
    num: "01",
    description:
      "Crafting memorable brand identities, design systems, packaging, and high-converting UI/UX.",
    link: "/services/graphic-ui-ux",
    videoUrl: "https://cdn.pixabay.com/video/2024/05/29/213009-951378378.mp4",
  },
  {
    title: "Websites & E-Commerce",
    num: "02",
    description:
      "Visually captivating, lightning-fast Next.js and Shopify stores optimized for user engagement.",
    link: "/services/web-development",
    videoUrl: "https://cdn.pixabay.com/video/2024/05/29/213009-951378378.mp4",
  },
  {
    title: "Web & Mobile Apps",
    num: "03",
    description:
      "Powerful, intuitive iOS, Android, and cross-platform enterprise cloud applications built to scale.",
    link: "/services/mobile-app-development",
    videoUrl: "https://cdn.pixabay.com/video/2024/05/29/213009-951378378.mp4",
  },
  {
    title: "Digital Marketing & SEO",
    num: "04",
    description:
      "Data-driven SEO, high-ROI Google Ads, Meta performance marketing, and buyer conversion funnels.",
    link: "/services/digital-marketing",
    videoUrl: "https://cdn.pixabay.com/video/2024/05/29/213009-951378378.mp4",
  },
];

const spring = {
  type: "spring",
  stiffness: 500,
  damping: 28,
};

const VideoCursor = ({ x, y, videoUrl, isActive }) => {
  return (
    <motion.div
      className={cn(
        "absolute rounded-full overflow-hidden pointer-events-none transition-opacity duration-300 z-30 hidden lg:block",
        "w-80 h-80 bg-primary/20 border-2 border-primary/50 shadow-[0_0_50px_rgba(234,179,8,0.3)]",
      )}
      style={{ x, y }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: isActive ? 1 : 0, opacity: isActive ? 1 : 0 }}
      transition={spring}
    >
      <AnimatePresence>
        {isActive && (
          <motion.video
            key={videoUrl}
            src={videoUrl}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default function InteractiveServiceList() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const containerRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const smoothedX = useSpring(x, spring);
  const smoothedY = useSpring(y, spring);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        x.set(e.clientX - rect.left - 160); // 160 is half of width 320
        y.set(e.clientY - rect.top - 160); // 160 is half of height 320
      }
    };
    const current = containerRef.current;
    current?.addEventListener("mousemove", handleMouseMove);
    return () => current?.removeEventListener("mousemove", handleMouseMove);
  }, [x, y]);

  return (
    <div ref={containerRef} className="relative border-t border-white/15 my-8">
      <AnimatePresence>
        {hoveredIndex !== null && (
          <VideoCursor
            x={smoothedX}
            y={smoothedY}
            videoUrl={services[hoveredIndex].videoUrl}
            isActive={hoveredIndex !== null}
          />
        )}
      </AnimatePresence>

      {services.map((service, index) => (
        <div
          key={index}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          className="group relative border-b border-white/15 transition-all duration-300"
        >
          <Link
            href={service.link}
            className="block py-6 sm:py-10 px-2 sm:px-6 transition-all duration-300 group-hover:bg-white/[0.04]"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-4 md:gap-6">
              {/* Service Number & Title */}
              <div className="md:col-span-5 flex items-center gap-3 sm:gap-5">
                <span className="text-xs sm:text-sm font-mono text-primary font-bold">
                  ({service.num})
                </span>
                <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white group-hover:text-primary transition-colors duration-300 tracking-tight">
                  {service.title}
                </h2>
              </div>

              {/* Description */}
              <div className="md:col-span-4 text-left">
                <p className="text-xs sm:text-sm md:text-base text-neutral-300 group-hover:text-white transition-colors duration-300 leading-relaxed font-normal">
                  {service.description}
                </p>
              </div>

              {/* Action Link & Arrow */}
              <div className="md:col-span-3 flex items-center justify-start md:justify-end gap-2 text-primary font-bold text-xs sm:text-sm">
                <span className="group-hover:text-white transition-colors">
                  Explore Service
                </span>
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-primary/30 group-hover:border-primary group-hover:bg-primary group-hover:text-black flex items-center justify-center transition-all duration-300">
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
