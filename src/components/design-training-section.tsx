"use client";

import { useRef, useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";

const courses = [
    {
        title: "DESIGNING AI PRODUCTS",
        cohort: "NEXT COHORT SEP 4, 2026",
        description: "Learn the patterns, content craft, and oversight behind great AI products in this 4-week course.",
        bg: "bg-[#7a2e37]",
    },
    {
        title: "AI PROTOTYPING CAMP",
        cohort: "NEXT COHORT SEP 14, 2026",
        description: "Learn to prototype faster with AI. Explore leading AI tools, streamline iteration, and bring your designs to life with unprecedented speed and creativity.",
        bg: "bg-[#d67b00]",
    },
    {
        title: "AI-DRIVEN DESIGN SYSTEMS",
        cohort: "NEXT COHORT OCT 2, 2026",
        description: "Master the integration of AI tools within design systems, automating workflows and generating component variations at scale.",
        bg: "bg-[#1f4e43]",
    },
    {
        title: "PRODUCT DESIGN LEADERSHIP",
        cohort: "NEXT COHORT OCT 15, 2026",
        description: "Lead design teams in the age of AI. Learn to align creative vision with product execution and scale AI-native experiences.",
        bg: "bg-[#183059]",
    },
];

export default function DesignTrainingSection() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const checkScroll = () => {
        if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
            setCanScrollLeft(scrollLeft > 10);
            setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);
        }
    };

    useEffect(() => {
        const el = scrollRef.current;
        if (el) {
            el.addEventListener("scroll", checkScroll);
            checkScroll();
            window.addEventListener("resize", checkScroll);
        }
        return () => {
            if (el) {
                el.removeEventListener("scroll", checkScroll);
            }
            window.removeEventListener("resize", checkScroll);
        };
    }, []);

    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            const { clientWidth } = scrollRef.current;
            const scrollAmount = direction === "left" ? -clientWidth * 0.8 : clientWidth * 0.8;
            scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
    };

    return (
        <section className="py-20 md:py-28 bg-white text-black overflow-hidden relative border-t border-b border-neutral-100">
            <div className="container px-4 md:px-8 mx-auto">
                {/* Header Grid */}
                <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start mb-16">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-neutral-900 leading-[1.05] max-w-xl">
                        Where Working Designers Stay Ahead
                    </h2>
                    <p className="text-base md:text-lg text-neutral-800 max-w-lg leading-relaxed pt-2 md:pt-4">
                        Advance your UX or product design practice with AI-powered workflows and specialized training that will help you drive impact and stay ready for what&apos;s next.
                    </p>
                </div>

                {/* Cards Slider Wrapper */}
                <div className="relative w-full">
                    <div
                        ref={scrollRef}
                        className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-4"
                        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                    >
                        {courses.map((course, index) => (
                            <div
                                key={index}
                                className="w-[85vw] sm:w-[500px] md:w-[550px] shrink-0 snap-start snap-always"
                            >
                                <div className={`${course.bg} rounded-[2rem] p-8 md:p-12 text-white h-[420px] md:h-[450px] flex flex-col justify-between shadow-xl`}>
                                    <div>
                                        <h3 className="text-2xl md:text-3xl font-black tracking-tight uppercase border-b border-white/20 pb-4 mb-4">
                                            {course.title}
                                        </h3>
                                        <div className="inline-block bg-white text-black border border-neutral-200 text-xs font-bold px-3 py-1.5 rounded-full mb-6">
                                            {course.cohort}
                                        </div>
                                        <p className="text-base md:text-lg text-white/90 leading-relaxed font-medium">
                                            {course.description}
                                        </p>
                                    </div>
                                    
                                    <div className="border-t border-white/20 pt-6">
                                        <Link href="/contact" className="inline-block">
                                            <button className="bg-black hover:bg-neutral-900 text-white font-bold text-sm px-6 py-3 rounded-full flex items-center gap-2 transition-transform duration-300 hover:scale-105">
                                                <span>→</span> LEARN MORE
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Navigation Arrows at the bottom */}
                <div className="flex justify-center gap-4 mt-12">
                    <button
                        onClick={() => scroll("left")}
                        disabled={!canScrollLeft}
                        className={`w-14 h-14 rounded-full flex items-center justify-center border border-black bg-black text-white hover:bg-neutral-900 transition-all duration-300 ${!canScrollLeft ? "opacity-30 cursor-not-allowed" : "hover:scale-110"}`}
                        aria-label="Previous Slide"
                    >
                        <ArrowLeft className="w-6 h-6" />
                    </button>
                    <button
                        onClick={() => scroll("right")}
                        disabled={!canScrollRight}
                        className={`w-14 h-14 rounded-full flex items-center justify-center border border-black bg-black text-white hover:bg-neutral-900 transition-all duration-300 ${!canScrollRight ? "opacity-30 cursor-not-allowed" : "hover:scale-110"}`}
                        aria-label="Next Slide"
                    >
                        <ArrowRight className="w-6 h-6" />
                    </button>
                </div>
            </div>
        </section>
    );
}
