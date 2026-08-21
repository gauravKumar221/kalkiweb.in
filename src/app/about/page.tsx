
'use client';
import { Button } from "@/components/ui/button";
import { WordPressIcon } from "@/components/ui/icons";
import { ArrowUpRight, Layers, Lightbulb } from "lucide-react";
import Link from "next/link";
import React from "react";

const ourValues = [
    {
        icon: <Lightbulb className="w-8 h-8 text-primary" />,
        title: "Our Purpose",
        description: "We exist to bridge the gap between creativity and performance. Every project we take on is focused on delivering tangible business impact, not just beautiful visuals."
    },
    {
        icon: <WordPressIcon className="w-8 h-8 text-primary" />,
        title: "Expertise That Delivers",
        description: "From WordPress websites and SEO optimization to branding and digital marketing, our team crafts end-to-end solutions tailored to your goals."
    },
    {
        icon: <Layers className="w-8 h-8 text-primary" />,
        title: "Human-Centered Design",
        description: "We create websites and campaigns that feel natural, intuitive, and engaging — blending design thinking with performance-driven functionality."
    }
];

export default function AboutPage() {
    return (
        <div className="bg-background text-foreground min-h-screen">
            <div className="container py-16 md:py-24">
                <div className="relative">
                    <div className="grid md:grid-cols-2 gap-16 md:items-start">
                        <div className="md:sticky top-24 h-max">
                            <p className="text-sm font-bold text-primary mb-4">* ABOUT KALKI WEB</p>
                            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
                                Crafting Impactful <span className="text-primary">Digital Experiences</span> that Transform your Business
                            </h1>
                            <div className="mt-8 flex items-center gap-4">
                                <Button asChild size="lg" variant="secondary" className="rounded-full h-14 px-3">
                                    <Link href="/contact" className="flex items-center">
                                    <span className="px-4">Contact Us</span>
                                    </Link>
                                </Button>
                                <Button asChild size="icon" variant="outline" className="rounded-full h-14 w-14 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                                    <Link href="/contact">
                                        <ArrowUpRight />
                                    </Link>
                                </Button>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute left-0 top-0 bottom-0 w-px bg-primary/20"></div>
                            <div className="space-y-24">
                                {ourValues.map((value, index) => (
                                    <div key={index} className="relative pl-12">
                                        <div className="absolute left-[-8px] top-1 w-4 h-4 bg-background border-2 border-primary rounded-full"></div>
                                        <div className="mb-4">{value.icon}</div>
                                        <h3 className="text-2xl font-bold mb-2">{value.title}</h3>
                                        <p className="text-muted-foreground">{value.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

