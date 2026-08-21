
"use client";
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Hand } from 'lucide-react';

const letters = [
    { char: 'K', color: 'bg-orange-500' },
    { char: 'A', color: 'bg-blue-500' },
    { char: 'L', color: 'bg-pink-500' },
    { char: 'K', color: 'bg-green-500' },
    { char: 'I', color: 'bg-purple-500' },
];

const webLetters = [
    { char: 'W', color: 'bg-teal-500' },
    { char: 'E', color: 'bg-orange-500' },
    { char: 'B', color: 'bg-blue-500' },
];

const LetterCircle = ({ letter }: { letter: { char: string, color: string } }) => (
  <motion.div
    drag
    dragConstraints={{ top: -150, left: -400, right: 400, bottom: 150 }}
    dragElastic={0.1}
    className={`w-24 h-24 md:w-32 md:h-32 rounded-full flex items-center justify-center text-white font-bold text-5xl md:text-6xl cursor-grab active:cursor-grabbing ${letter.color}`}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
  >
    {letter.char}
  </motion.div>
);

export default function DraggableLetters() {
  const constraintsRef = useRef(null);

  return (
    <section className="bg-[#DBCDAF] text-[#333] py-20 md:py-32 overflow-hidden">
      <div ref={constraintsRef} className="container mx-auto text-center relative">
        <h2 className="text-6xl md:text-8xl font-bold text-white mb-8 select-none">
          drag around
        </h2>

        <div className="flex justify-center items-center gap-2 md:gap-4 mb-4">
            {letters.map((letter, index) => (
                <LetterCircle key={index} letter={letter} />
            ))}
        </div>
        <div className="flex justify-center items-center gap-2 md:gap-4">
            {webLetters.map((letter, index) => (
                <LetterCircle key={index} letter={letter} />
            ))}
        </div>

        <div className="flex justify-center items-center gap-4 mt-8 select-none">
             <h2 className="text-6xl md:text-8xl font-bold text-white">
                and 
            </h2>
            <Hand className="w-16 h-16 md:w-24 md:h-24 text-yellow-400 -rotate-45" />
            <h2 className="text-6xl md:text-8xl font-bold text-white">
                find out
            </h2>
        </div>
        
        <p className="mt-16 text-xl md:text-2xl text-white font-medium select-none">
            Design without boundaries
        </p>
      </div>
    </section>
  );
}
