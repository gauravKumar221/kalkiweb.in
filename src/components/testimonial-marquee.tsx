"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React from "react";

interface Testimonial {
  name: string;
  role: string;
  avatar: string;
  hint: string;
  quote: string;
}

interface TestimonialMarqueeProps {
  testimonials: Testimonial[];
  speed?: number; // Speed in pixels per second
}

const MarqueeRow = ({
  testimonials,
  direction = 'left',
  speed = 50
}: {
  testimonials: Testimonial[],
  direction?: 'left' | 'right',
  speed?: number,
}) => {
  // To make the loop seamless, we need to duplicate the testimonials.
  // The animation will move from the start of the first set to the start of the second set.
  const extendedTestimonials = [...testimonials, ...testimonials];

  const marqueeVariants = {
    animate: {
      x: direction === 'left' ? ['0%', '-100%'] : ['-100%', '0%'],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: extendedTestimonials.length * (200 / speed),
          ease: "linear",
        },
      },
    },
  };

  return (
    <motion.div
      className="flex gap-4"
      variants={marqueeVariants}
      animate="animate"
    >
      {extendedTestimonials.map((testimonial, index) => (
        <Card key={index} className="w-80 shrink-0 flex-none transition-all duration-300 hover:scale-105">
          <CardContent className="p-6 h-full flex flex-col justify-between">
            <blockquote className="text-muted-foreground mb-4 text-sm italic">"{testimonial.quote}"</blockquote>
            <div className="flex items-center gap-4">
              <Avatar>
                <AvatarImage src={testimonial.avatar} data-ai-hint={testimonial.hint} />
                <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold text-sm">{testimonial.name}</p>
                <p className="text-xs text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </motion.div>
  );
};


export default function TestimonialMarquee({ testimonials, speed = 50 }: TestimonialMarqueeProps) {
  if (!testimonials || testimonials.length === 0) {
    return null;
  }
  
  // Split testimonials for a single row
  const numRows = 1;
  const testimonialsPerRowCount = Math.ceil(testimonials.length / numRows);
  const rows = Array.from({ length: numRows }, (_, i) => {
    const start = i * testimonialsPerRowCount;
    const end = start + testimonialsPerRowCount;
    // Ensure we handle the last row correctly if testimonials don't divide evenly
    const rowTestimonials = testimonials.slice(start, Math.min(end, testimonials.length));
    
    // To prevent empty rows if the number of testimonials is small
    if(rowTestimonials.length > 0) return rowTestimonials;
    return null;
  }).filter(row => row !== null) as Testimonial[][];


  return (
    <div className="relative flex flex-col gap-4 w-full overflow-hidden py-4">
      {rows.map((row, index) => (
         <MarqueeRow 
            key={index}
            testimonials={row} 
            direction={index % 2 === 0 ? 'left' : 'right'}
            speed={speed}
          />
      ))}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background to-transparent"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background to-transparent"></div>
    </div>
  );
}
