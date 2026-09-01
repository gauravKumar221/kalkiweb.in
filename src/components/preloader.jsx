"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
const slideUp = {
    initial: {
        top: 0,
    },
    exit: {
        top: "-100vh",
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
    },
};
const opacity = {
    initial: {
        opacity: 0,
    },
    enter: {
        opacity: 1,
        transition: { duration: 0.5 },
    },
    exit: {
        opacity: 0,
        transition: { duration: 0.5 },
    }
};
export default function Preloader() {
    const [text, setText] = useState("Kalki Web");
    useEffect(() => {
        const timer = setTimeout(() => {
            setText("एक नया बदलाव");
        }, 1200);
        return () => clearTimeout(timer);
    }, []);
    return (<motion.div variants={slideUp} initial="initial" exit="exit" className="h-screen w-screen fixed top-0 left-0 bg-background z-[9999] text-white flex items-center justify-center">
      <AnimatePresence mode="wait">
        <motion.p key={text} variants={opacity} initial="initial" animate="enter" exit="exit" className="flex items-center text-4xl font-bold z-10">
          {text === 'Kalki Web' ? (<>
                <span className="text-primary mr-2">Kalki</span>
                <span>Web</span>
            </>) : (<span className="text-white">{text}</span>)}
        </motion.p>
      </AnimatePresence>
    </motion.div>);
}
