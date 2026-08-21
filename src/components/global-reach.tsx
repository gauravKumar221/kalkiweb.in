
"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const flags = [
    { name: "India", src: "https://flagcdn.com/in.svg" },
    { name: "USA", src: "https://flagcdn.com/us.svg" },
    { name: "UK", src: "https://flagcdn.com/gb.svg" },
    { name: "Qatar", src: "https://flagcdn.com/qa.svg" },
    { name: "UAE", src: "https://flagcdn.com/ae.svg" },
    { name: "Lebanon", src: "https://flagcdn.com/lb.svg" },
    { name: "Kuwait", src: "https://flagcdn.com/kw.svg" },
    { name: "Saudi Arabia", src: "https://flagcdn.com/sa.svg" },
];

export default function GlobalReach() {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"]);
    const arrowX = useTransform(scrollYProgress, [0, 0.5, 1], [0, 10, 0]);
    const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

    return (
        <section ref={sectionRef} className="bg-white text-black py-12 overflow-hidden">
            <motion.div style={{ x }} className="flex items-center gap-8 whitespace-nowrap">
                <div className="bg-green-300 rounded-full flex items-center px-8 py-4 shrink-0">
                    <span className="text-xl font-medium">Global Reach – Marketing Magic Everywhere!</span>
                    <motion.div 
                        style={{ x: arrowX }}
                        className="ml-4 w-12 h-12 bg-black rounded-full flex items-center justify-center text-white"
                    >
                        <ArrowRight />
                    </motion.div>
                </div>
                
                <div className="flex items-center gap-8">
                    {[...flags, ...flags].map((flag, index) => (
                        <motion.div
                            key={index}
                            style={{ rotate }}
                            className="w-16 h-16 rounded-full overflow-hidden shadow-md shrink-0"
                        >
                            <Image 
                                src={flag.src} 
                                alt={flag.name} 
                                width={64} 
                                height={64} 
                                className="w-full h-full object-cover" 
                            />
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
