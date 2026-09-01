"use client";
import { cn } from "@/lib/utils";
import React, { useState, useEffect } from "react";
const TorchEffect = ({ text }) => {
    const [mousePosition, setMousePosition] = useState({ x: -1, y: -1 });
    useEffect(() => {
        const handleMouseMove = (event) => {
            setMousePosition({ x: event.clientX, y: event.clientY });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);
    return (<div className="relative w-full overflow-hidden bg-black py-20 md:py-32">
      <div className="pointer-events-none absolute inset-0 transition duration-300" style={{
            background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(250, 204, 21, 0.15), transparent 80%)`,
        }}></div>
      <h2 className={cn("text-center text-6xl md:text-9xl font-black uppercase text-transparent bg-clip-text", "bg-gradient-to-t from-zinc-700 to-zinc-500", "relative z-10")} style={{
            WebkitMaskImage: `radial-gradient(400px at ${mousePosition.x}px ${mousePosition.y}px, black 40%, transparent 70%)`
        }}>
        {text}
      </h2>
    </div>);
};
export default TorchEffect;
