"use client";
import { Sparkles } from "lucide-react";
import React, { useRef } from "react";
import Image from "next/image";
const solutions = [
  {
    title: "Public Relations & Strategic Communication",
    description:
      "Public Relations is not just a tool—it is the backbone of your brand's identity and communication strategy.",
    image: "https://picsum.photos/800/450?random=1",
    hint: "team meeting discussion",
    href: "#",
    colorClass: "",
    accentColor: "",
  },
  {
    title: "Content Creation & Copywriting",
    description:
      "Compelling content and messaging structures that captivate your target audience and tell your brand's core story.",
    image: "https://picsum.photos/800/450?random=2",
    hint: "writing content creation",
    href: "#",
    colorClass: "",
    accentColor: "",
  },
  {
    title: "Marketing & Advertising",
    description:
      "Data-driven performance marketing strategies and PPC frameworks that deliver measurable growth and high ROI.",
    image: "https://picsum.photos/800/450?random=3",
    hint: "marketing charts",
    href: "#",
    colorClass: "",
    accentColor: "indigo",
  },
  {
    title: "Design & Branding",
    description:
      "Creative design systems, modern visual guidelines, and digital branding assets that leave a powerful impression.",
    image: "https://picsum.photos/800/450?random=4",
    hint: "design branding",
    href: "#",
    colorClass: "",
    accentColor: "",
  },
  {
    title: "Event Management",
    description:
      "Seamless event planning, logistics orchestration, and creative execution for unforgettable live and virtual experiences.",
    image: "https://picsum.photos/800/450?random=5",
    hint: "corporate event",
    href: "#",
    colorClass: "",
    accentColor: "rose",
  },
  {
    title: "Strategic Growth & Partnerships",
    description:
      "Forging valuable joint ventures, startup incubations, and corporate partnerships to accelerate regional market growth.",
    image: "https://picsum.photos/800/450?random=6",
    hint: "business handshake",
    href: "#",
    colorClass: "",
    accentColor: "",
  },
];
export default function B2BDisruptiveTech() {
  const containerRef = useRef(null);
  return (
    <section
      ref={containerRef}
      className="bg-black text-white relative w-full overflow-visible selection:bg-primary selection:text-black"
    >
      {/* Floating Heading Overlay */}
      <div className="sticky top-0 left-0 w-full h-0 z-30 pointer-events-none">
        <div className="absolute top-8 left-8 md:top-12 md:left-12">
          <div className="flex items-center space-x-2"></div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-white mt-1">
            Solution.
          </h2>
        </div>
      </div>

      {/* Panels track (Vertical stack container) */}
      <div className="w-full flex flex-col relative">
        {solutions.map((solution, index) => (
          <article
            key={index}
            id={`solution-panel-${index}`}
            className={`sticky top-0 h-[80vh] w-full flex items-center justify-center bg-neutral-950 bg-gradient-to-br ${solution.colorClass}   overflow-hidden`}
            style={{ zIndex: index + 10, isolation: "isolate" }}
          >
            <div className="flex flex-col lg:flex-row items-center md:justify-center justify-start gap-8 md:gap-16 w-full h-full p-6 md:p-20 max-w-7xl mx-auto pt-24 lg:pt-0">
              {/* Image Frame */}
              <div className="w-full lg:w-1/2 h-[35vh] lg:h-[55vh] relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">
                <Image
                  src={solution.image}
                  alt={solution.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                <div className="absolute bottom-6 left-6 flex items-center space-x-2"></div>
              </div>

              {/* Text content details */}
              <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-6">
                <div className="text-primary font-mono text-lg font-semibold tracking-wider">
                  0{index + 1}. {solution.title.split(" & ")[0].toUpperCase()}
                </div>
                <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
                  {solution.title}
                </h3>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                  {solution.description}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
