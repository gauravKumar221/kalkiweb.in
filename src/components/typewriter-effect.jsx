"use client";
import { motion } from "framer-motion";
const text = "Kalki Web";
export default function TypewriterEffect() {
    const textVariants = {
        hidden: { opacity: 0 },
        visible: (i) => ({
            opacity: 1,
            transition: {
                delay: i * 0.1,
                duration: 0.1,
            },
        }),
    };
    return (<div className="text-2xl font-bold tracking-widest uppercase">
      {text.split("").map((char, index) => (<motion.span key={index} custom={index} variants={textVariants} initial="hidden" animate="visible" className={char === "K" ? "text-primary" : ""}>
          {char}
        </motion.span>))}
    </div>);
}
