"use client";
import React from "react";
import Marquee from "react-fast-marquee";
const concepts = [
    "Identity",
    "Experience",
    "Brand Strategy",
    "Brand Governance",
    "Brand Performance",
];
export default function ConceptMarquee() {
    return (<section className="w-full bg-white py-8 md:py-12 overflow-hidden border-y border-neutral-100 flex items-center select-none">
      <Marquee speed={40} gradient={false} pauseOnHover={true}>
        {concepts.map((concept, index) => (<div key={index} className="flex items-center mx-8 sm:mx-16">
            <span className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tight text-black leading-none">
              {concept}
            </span>
            <span className="mx-8 sm:mx-16 text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-neutral-300 italic leading-none">
              —
            </span>
          </div>))}
      </Marquee>
    </section>);
}
