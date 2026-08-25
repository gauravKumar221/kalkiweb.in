

"use client"

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import PortfolioFilter from "@/components/portfolio-filter";
import React from "react";
import ServicesOfferings from "@/components/services-offerings";
import ExpertiseShowcase from "@/components/expertise-showcase";

export default function PortfolioPage() {
    return (
        <div>
            {/* Hero Section */}
            <section className="relative py-24 md:py-40 text-center bg-black">
                <div className="absolute inset-0 bg-grid-white/[0.05] z-0"></div>
                <div className="container relative z-10">
                    <div className="flex justify-center items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h1 className="text-8xl md:text-9xl font-bold text-primary">P</h1>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-left ml-4"
                        >
                            <p className="text-4xl md:text-6xl font-bold">ortfolio</p>
                            <p className="text-lg text-muted-foreground mt-2">Check out our latest work</p>
                        </motion.div>
                    </div>
                     <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="mt-8"
                    >
                        <Button asChild size="lg" variant="glitch">
                            <Link href="#portfolio-grid">Browse Projects</Link>
                        </Button>
                    </motion.div>
                </div>
            </section>

            

            <ServicesOfferings />

            <ExpertiseShowcase />

            {/* Portfolio Grid Section */}
            <section id="portfolio-grid" className="py-16 md:py-24">
                <div className="container">
                    <div className="text-center mb-16">
                        <p className="text-sm font-semibold text-primary tracking-wider uppercase">Our Work</p>
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Explore Our Portfolio</h2>
                        <p className="max-w-2xl mx-auto mt-4 text-muted-foreground">
                            Browse through our diverse range of projects that showcase our skills and creativity.
                        </p>
                    </div>
                    <PortfolioFilter />
                </div>
            </section>

        </div>
    );
}
