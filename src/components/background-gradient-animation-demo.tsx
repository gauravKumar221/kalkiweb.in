import React from "react";
import { BackgroundGradientAnimation } from "./ui/background-gradient-animation";

export function BackgroundGradientAnimationDemo() {
  return (
    <BackgroundGradientAnimation>
      <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-4xl text-center md:text-5xl lg:text-8xl">
        <div className="absolute inset-0 bg-black/20 z-0"></div>
        <p className="relative z-10 font-headline bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
          <span className="font-kalam text-primary bg-black border-2 border-primary rounded-lg px-2 py-0">कल्कि</span> वेब एक रचनात्मक एजेंसी
        </p>
      </div>
    </BackgroundGradientAnimation>
  );
}
