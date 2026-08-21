
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

const testimonials = [
  {
    name: 'Michael Ortega',
    role: 'Marketing Lead',
    company: 'Predibase',
    companyLink: '#',
    quote: 'Kalki Web delivered a stunning website that perfectly captured our brand\'s essence. Their attention to detail is unmatched.',
  },
  {
    name: 'Jeannie Christensen',
    role: 'Head of Marketing',
    company: 'BlinkOps',
    companyLink: '#',
    quote: '“BRIGHTSCOUT has been very flexible, and the team at Kalki Web is a pleasure to work with. They are true partners.”',
  },
  {
    name: 'Osman Javed',
    role: 'VP Marketing',
    company: 'Galileo',
    companyLink: '#',
    quote: 'The results speak for themselves. Our organic traffic has increased by 300% since we started working with them.',
  },
  {
    name: 'Sarah Lee',
    role: 'Founder',
    company: 'EcoGoods',
    companyLink: '#',
    quote: 'They transformed our e-commerce presence, leading to a significant boost in sales and customer engagement.',
  },
];

const TestimonialItem = ({ testimonial, index }: { testimonial: any, index: number }) => {
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, delay: index * 0.2 }
    },
  };

  return (
    <motion.div
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
      <div className="border-t border-border/50 py-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-3">
            <p className="text-muted-foreground">
              {testimonial.name} / {testimonial.role}, <Link href={testimonial.companyLink} className="underline hover:text-primary">{testimonial.company}</Link>
            </p>
          </div>
          <div className="md:col-span-8">
            <blockquote className="text-3xl md:text-4xl font-medium">
              {testimonial.quote}
            </blockquote>
          </div>
          <div className="md:col-span-1 text-right">
            <p className="text-muted-foreground font-mono">0{index + 1}</p>
          </div>
        </div>
      </div>
      {index === testimonials.length - 1 && <div className="border-b border-border/50"></div>}
    </motion.div>
  );
};

export default function ScrollingTestimonials() {
  return (
    <section className="py-16 md:py-24">
      {testimonials.map((testimonial, index) => (
        <TestimonialItem key={index} testimonial={testimonial} index={index} />
      ))}
    </section>
  );
}
