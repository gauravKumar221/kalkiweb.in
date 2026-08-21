"use client";

import { useRef, useState, useEffect } from "react";

const MarqueeContent = ({
  texts,
}: {
  texts: { text: string; font: string }[];
}) => (
  <div className="flex">
    {texts.map(({ text, font }, index) => (
      <span key={index} className={`mx-8 ${font}`}>
        {text}
      </span>
    ))}
  </div>
);

export default function MarqueeShowcase() {
  const backMarqueeTexts = [
    { text: "BRAND STRATEGY", font: "font-headline" },
    { text: "BOLD DESIGN", font: "font-headline" },
    { text: "CODE & CREATIVITY", font: "font-headline" },
    { text: "MARKETING MASTERY", font: "font-headline" },
  ];

  const frontMarqueeTexts = [
    { text: "KALKI WEB", font: "font-kalam" },
    { text: "कल्कि वेब", font: "font-noto-devanagari" }, // Hindi
    { text: "Kalki Web", font: "font-sans" }, // English
    { text: "ਕਲਕੀ ਵੈੱਬ", font: "font-noto-gurmukhi" }, // Punjabi
    { text: "カルキウェブ", font: "font-noto-jp" }, // Japanese
    { text: "কল্কি ওয়েব", font: "font-noto-bengali" }, // Bengali
    { text: "卡尔基网络", font: "font-noto-sc" }, // Chinese
    { text: "Kalki Web", font: "font-sans" }, // Spanish - No special characters
    { text: "Kalki Web", font: "font-sans" }, // French - No special characters
    { text: "Kalki Web", font: "font-sans" }, // German - No special characters
    { text: "Kalki Web", font: "font-sans" }, // Russian - Cyrillic font needed
  ];

  return (
    <div
      className="relative w-full overflow-hidden flex flex-col justify-between bg-background py-16 md:py-24 border-t border-b border-border"
      style={{
        background: `radial-gradient(circle at 50% 50%, rgba(250, 204, 21, 0.1), transparent 80%)`,
      }}
    >
      {/* Top Marquee */}
      <div className="marquee w-full overflow-hidden whitespace-nowrap text-8xl md:text-[10rem] text-foreground font-bold z-10 py-8">
        <div className="marquee-track inline-flex w-max animate-marquee-scroll">
          <div className="flex">
            {backMarqueeTexts.map((item, index) => (
              <span key={index} className={`mx-8 ${item.font}`}>
                {item.text}
              </span>
            ))}
          </div>
          <div className="flex">
            {backMarqueeTexts.map((item, index) => (
              <span key={index} className={`mx-8 ${item.font}`}>
                {item.text}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Marquee */}
      <div className="marquee w-full overflow-hidden whitespace-nowrap text-8xl md:text-[10rem] text-foreground font-bold z-30 py-8">
        <div className="marquee-track inline-flex w-max animate-marquee-scroll">
          <MarqueeContent texts={frontMarqueeTexts} />
          <MarqueeContent texts={frontMarqueeTexts} />
        </div>
      </div>
    </div>
  );
}
