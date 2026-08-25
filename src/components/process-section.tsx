
"use client";

import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Search, LayoutTemplate, Code, Server, FileText, ShieldCheck, Rocket, Wrench, ArrowLeft, ArrowRight } from "lucide-react";
import React, { useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const processSteps = [
    {
      step: "01",
      title: "Discovery & Planning",
      icon: <Search />,
      description: "We kick things off by diving deep into your vision. We'll work with you to understand your goals, target audience, and business needs. This phase includes competitor analysis and defining a clear project scope to ensure we're all on the same page.",
      borderColor: "border-purple-500/30",
    },
    {
      step: "02",
      title: "Wireframing & UI/UX Design",
      icon: <LayoutTemplate />,
      description: "Next, our design team gets to work creating wireframes and interactive prototypes. We focus on crafting a visually appealing and user-friendly interface that not only looks great but also provides an intuitive experience for your users.",
      borderColor: "border-sky-500/30",
    },
    {
      step: "03",
      title: "Frontend Development",
      icon: <Code />,
      description: "Our developers take the approved designs and bring them to life, converting them into functional HTML, CSS, and JavaScript. We use modern frameworks like React, Vue, or Angular to build a responsive and interactive frontend.",
      borderColor: "border-green-500/30",
    },
    {
      step: "04",
      title: "Backend Development",
      icon: <Server />,
      description: "The backbone of your website is built in this phase. We develop secure and scalable server-side logic, create robust APIs, and integrate any necessary third-party services to ensure your website runs smoothly.",
      borderColor: "border-yellow-500/30",
    },
    {
      step: "05",
      title: "Content Integration & SEO",
      icon: <FileText />,
      description: "A great website needs great content. We'll help you add high-quality, SEO-friendly content, and optimize all your images, videos, and metadata to ensure you rank well on search engines.",
      borderColor: "border-orange-500/30",
    },
     {
      step: "06",
      title: "Testing & Quality Assurance",
      icon: <ShieldCheck />,
      description: "Before going live, we put your website through rigorous testing. We check for functionality, security, and performance issues, fixing any bugs and optimizing for speed to ensure a flawless launch.",
      borderColor: "border-red-500/30",
    },
    {
      step: "07",
      title: "Deployment & Launch",
      icon: <Rocket />,
      description: "It's time to go live! We handle the entire deployment process, including setting up hosting, domains, and SSL certificates. We perform one final round of pre-launch checks to ensure everything is perfect.",
      borderColor: "border-indigo-500/30",
    },
    {
      step: "08",
      title: "Post-Launch Support",
      icon: <Wrench />,
      description: "Our partnership doesn't end at launch. We provide ongoing support and maintenance, including regular updates, bug fixes, and technical assistance. We'll also monitor your site's security and analytics to help you grow.",
      borderColor: "border-pink-500/30",
    },
];

export default function ProcessSection() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const checkScroll = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
            setCanScrollLeft(scrollLeft > 10);
            setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);
        }
    };

    const scroll = (direction: "left" | "right") => {
        if (scrollContainerRef.current) {
            const { clientWidth } = scrollContainerRef.current;
            const scrollAmount = direction === "left" ? -clientWidth * 0.8 : clientWidth * 0.8;
            scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
    };

    useEffect(() => {
        const scrollContainer = scrollContainerRef.current;
        if (scrollContainer) {
            const handleWheel = (evt: WheelEvent) => {
                if (Math.abs(evt.deltaY) > Math.abs(evt.deltaX)) {
                    return;
                }
                evt.preventDefault();
                scrollContainer.scrollLeft += evt.deltaY;
            };

            scrollContainer.addEventListener('wheel', handleWheel);
            scrollContainer.addEventListener('scroll', checkScroll);
            checkScroll();
            window.addEventListener('resize', checkScroll);

            return () => {
                scrollContainer.removeEventListener('wheel', handleWheel);
                scrollContainer.removeEventListener('scroll', checkScroll);
                window.removeEventListener('resize', checkScroll);
            };
        }
    }, []);

    return (
        <section className="w-full py-16 md:py-24 bg-background">
            <div className="container mx-auto">
                <div className="md:grid md:grid-cols-12 md:gap-8 mb-12 items-end">
                    <div className="md:col-span-4">
                        <Badge variant="outline" className="mb-4 text-primary border-primary">Process</Badge>
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">From Idea to Impact</h2>
                    </div>
                    <div className="md:col-span-8 flex flex-col md:flex-row justify-between items-end gap-6">
                        <p className="text-lg text-muted-foreground md:text-xl max-w-xl">
                           Our web development process is designed to be transparent, collaborative, and efficient. We follow a structured approach to ensure we deliver a high-quality product that meets your expectations and drives results.
                        </p>
                        <div className="flex gap-2 shrink-0">
                            <button
                                onClick={() => scroll("left")}
                                disabled={!canScrollLeft}
                                className={`w-10 h-10 rounded-full flex items-center justify-center border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 ${!canScrollLeft ? "opacity-30 cursor-not-allowed" : "hover:scale-105"}`}
                                aria-label="Scroll left"
                            >
                                <ArrowLeft className="w-5 h-5" />
                            </button>
                            <button
                                onClick={() => scroll("right")}
                                disabled={!canScrollRight}
                                className={`w-10 h-10 rounded-full flex items-center justify-center border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 ${!canScrollRight ? "opacity-30 cursor-not-allowed" : "hover:scale-105"}`}
                                aria-label="Scroll right"
                            >
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>

                <div 
                    ref={scrollContainerRef}
                    className="flex md:flex-row overflow-x-auto overflow-y-hidden snap-x snap-mandatory scroll-smooth pb-8 md:space-x-8 space-y-8 md:space-y-0"
                >
                    {processSteps.map((step, index) => (
                        <div key={index} className="snap-start shrink-0 w-full md:w-1/3">
                            <Card className={cn(
                                "bg-card/50 border h-full flex flex-col group hover:bg-card/80 transition-colors duration-300",
                                step.borderColor
                            )}>
                                <CardHeader className="flex flex-row items-center gap-4 p-6">
                                    {step.icon && React.cloneElement(step.icon, { className: "w-8 h-8 text-primary" })}
                                     <h3 className="text-xl font-bold">{step.title}</h3>
                                </CardHeader>
                                <CardContent className="p-6 pt-0 flex-grow">
                                    <p className="text-muted-foreground">{step.description}</p>
                                </CardContent>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
