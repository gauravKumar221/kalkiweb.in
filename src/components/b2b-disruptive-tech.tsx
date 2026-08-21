
"use client";

import { ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Button } from "./ui/button";
import React, { useState } from "react";
import Image from "next/image";

const solutions = [
  {
    title: "Public Relations & Strategic Communication",
    description: "Public Relations is not just a tool—it is the backbone of your brand's identity.",
    image: "https://picsum.photos/800/450?random=1",
    hint: "team meeting discussion",
    href: "#",
  },
  {
    title: "Content Creation & Copywriting",
    description: "Compelling content that captivates your audience and tells your brand's story.",
    image: "https://picsum.photos/800/450?random=2",
    hint: "writing content creation",
    href: "#",
  },
  {
    title: "Marketing & Advertising",
    description: "Data-driven marketing strategies that deliver measurable results and ROI.",
    image: "https://picsum.photos/800/450?random=3",
    hint: "marketing charts",
    href: "#",
  },
  {
    title: "Design & Branding",
    description: "Creative design and branding that makes a lasting impression.",
    image: "https://picsum.photos/800/450?random=4",
    hint: "design branding",
    href: "#",
  },
  {
    title: "Event Management",
    description: "Seamless event planning and execution for unforgettable experiences.",
    image: "https://picsum.photos/800/450?random=5",
    hint: "corporate event",
    href: "#",
  },
  {
    title: "Strategic Growth & Venture Partnerships",
    description: "Forging strategic partnerships to accelerate growth and market penetration.",
    image: "https://picsum.photos/800/450?random=6",
    hint: "business handshake",
    href: "#",
  },
];

export default function B2BDisruptiveTech() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(0);

  return (
    <section className="bg-background text-foreground py-16 md:py-24">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
            <div>
                 <h2 className="text-4xl md:text-5xl font-bold">Solution.</h2>
            </div>
            <div className="md:text-right">
                <p className="text-muted-foreground max-w-sm md:ml-auto">
                    A well-defined strategy is crucial for outlining your business, its services.
                </p>
            </div>
        </div>

        <div className="flex flex-col gap-4">
          {solutions.map((solution, index) => (
            <div 
              key={index} 
              className="group border-b border-border hover:border-primary/50 transition-colors duration-300"
              onMouseEnter={() => setHoveredIndex(index)}
            >
              <div className="p-4">
                <div className="grid grid-cols-12 items-center">
                    <div className="col-span-1">
                        <span className="text-sm font-mono text-muted-foreground">0{index + 1}.</span>
                    </div>
                    <div className="col-span-11 md:col-span-7">
                        <h3 className="text-xl md:text-2xl font-medium">{solution.title}</h3>
                    </div>
                    <div className="col-span-12 md:col-span-4 flex justify-end items-center mt-4 md:mt-0">
                         <Button asChild variant="outline" className="rounded-full bg-transparent border-border hover:bg-primary hover:text-primary-foreground hover:border-primary">
                            <Link href={solution.href}>
                                Explore More
                                <ArrowUpRight className="w-4 h-4 ml-2" />
                            </Link>
                         </Button>
                    </div>
                </div>
                <AnimatePresence>
                  {hoveredIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0, marginTop: 0 }}
                      animate={{ opacity: 1, height: "auto", marginTop: '2rem' }}
                      exit={{ opacity: 0, height: 0, marginTop: 0 }}
                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="grid md:grid-cols-12 gap-8 items-center">
                        <div className="md:col-start-2 md:col-span-4">
                          <p className="text-muted-foreground">{solution.description}</p>
                        </div>
                        <div className="md:col-span-7">
                          <Image 
                            src={solution.image} 
                            data-ai-hint={solution.hint} 
                            alt={solution.title} 
                            width={800} 
                            height={450} 
                            className="rounded-lg object-cover" 
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
