"use client";

import Image from "next/image";
import Link from "next/link";

export default function DesignAudienceSection() {
    return (
        <section className="py-20 md:py-28 bg-[#24421b] text-white overflow-hidden relative">
            <div className="container px-4 md:px-8 mx-auto">
                <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
                    {/* Left Column - Text Content */}
                    <div className="space-y-6 md:space-y-8">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05] max-w-xl">
                            For Working Designers, Teams, and Career Starters
                        </h2>
                        <p className="text-base md:text-lg text-white/80 max-w-lg leading-relaxed">
                            Whether you&apos;re leveling up your skills, building team capability, or launching a design career, our programs deliver the structured learning and practical skills you need.
                        </p>
                        <div>
                            <Link 
                                href="/contact" 
                                className="inline-flex items-center gap-2 text-white font-black text-sm uppercase tracking-wider group transition-transform duration-300 hover:translate-x-2"
                            >
                                <span className="text-lg">→</span> VIEW ALL COURSES
                            </Link>
                        </div>
                    </div>

                    {/* Right Column - Illustration */}
                    <div className="relative flex justify-center">
                        <div className="relative w-full max-w-[480px] aspect-square rounded-[2rem] overflow-hidden shadow-2xl border border-white/10">
                            <Image 
                                src="/illustrations/design_audience_steps.jpg"
                                alt="For Working Designers, Teams, and Career Starters illustration"
                                fill
                                sizes="(max-w-768px) 100vw, 480px"
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
