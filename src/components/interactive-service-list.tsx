
"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const services = [
  {
    title: "Branding",
    description: "Crafting memorable brand identities that resonate with your audience.",
    link: "/services/graphic-ui-ux",
    videoUrl: "https://cdn.pixabay.com/video/2024/05/29/213009-951378378.mp4",
  },
  {
    title: "Websites",
    description: "Visually captivating websites optimized for engaged users.",
    link: "/services/web-development",
    videoUrl: "https://cdn.pixabay.com/video/2024/05/29/213009-951378378.mp4",
  },
  {
    title: "Web & Mobile Apps",
    description: "Powerful, intuitive web and mobile applications built to scale.",
    link: "/services/mobile-app-development",
    videoUrl: "https://cdn.pixabay.com/video/2024/05/29/213009-951378378.mp4",
  },
  {
    title: "Digital Marketing",
    description: "Say goodbye to design and development bottlenecks.",
    link: "/services/digital-marketing",
    videoUrl: "https://cdn.pixabay.com/video/2024/05/29/213009-951378378.mp4",
  },
];

const spring = {
  type: "spring",
  stiffness: 500,
  damping: 28,
};

const VideoCursor = ({ x, y, videoUrl, isActive }: { x: any, y: any, videoUrl: string, isActive: boolean }) => {
    return (
        <motion.div
            className={cn(
                "absolute rounded-full overflow-hidden pointer-events-none transition-opacity duration-300",
                "w-80 h-80 bg-primary shadow-2xl"
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
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const smoothedX = useSpring(x, spring);
  const smoothedY = useSpring(y, spring);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
        if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            x.set(e.clientX - rect.left - 160); // 160 is half of width 320
            y.set(e.clientY - rect.top - 160); // 160 is half of height 320
        }
    };
    
    containerRef.current?.addEventListener("mousemove", handleMouseMove);
    return () => containerRef.current?.removeEventListener("mousemove", handleMouseMove);
  }, [x, y]);

  return (
    <div ref={containerRef} className="relative border-t border-neutral-300">
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
          className="group relative border-b border-neutral-300"
        >
          <div className="container py-8 transition-colors duration-300 group-hover:bg-neutral-200/50">
             <div className="grid grid-cols-1 md:grid-cols-3 items-center">
                <div className="flex items-center gap-4">
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: hoveredIndex === index ? "2rem" : 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        <AnimatePresence>
                        {hoveredIndex === index && (
                             <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                             >
                                <ArrowRight className="w-8 h-8 text-primary" />
                             </motion.div>
                        )}
                        </AnimatePresence>
                    </motion.div>
                    <h2 className="text-4xl md:text-5xl font-bold text-neutral-800">{service.title}</h2>
                </div>

                <div className="justify-self-center hidden md:block">
                     <AnimatePresence>
                     {hoveredIndex === index && (
                        <motion.p 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                            className="text-neutral-600"
                        >
                            {service.description}
                        </motion.p>
                     )}
                     </AnimatePresence>
                </div>
                
                <div className="justify-self-end hidden md:block">
                     <AnimatePresence>
                     {hoveredIndex === index && (
                        <motion.div
                             initial={{ opacity: 0, y: 10 }}
                             animate={{ opacity: 1, y: 0 }}
                             exit={{ opacity: 0, y: -10 }}
                             transition={{ duration: 0.3 }}
                        >
                            <Link href={service.link} className="flex items-center gap-2 text-primary font-semibold">
                                Learn More About our {service.title} Process <ArrowRight className="w-4 h-4" />
                            </Link>
                        </motion.div>
                     )}
                     </AnimatePresence>
                </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
