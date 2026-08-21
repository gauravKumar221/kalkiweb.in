import { Sparkles, Youtube, Facebook, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import React from "react";
import Image from "next/image";

const AtSignIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="4" />
    <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8" />
  </svg>
);

const socialLinks = [
  {
    name: "YouTube",
    icon: <Youtube className="w-6 h-6 sm:w-8 sm:h-8 text-black" />,
    href: "#",
  },
  {
    name: "Facebook",
    icon: <Facebook className="w-6 h-6 sm:w-8 sm:h-8 text-black" />,
    href: "#",
  },
  {
    name: "Threads",
    icon: <AtSignIcon className="w-6 h-6 sm:w-8 sm:h-8 text-black" />,
    href: "#",
  },
  {
    name: "Twitter",
    icon: <Twitter className="w-6 h-6 sm:w-8 sm:h-8 text-black" />,
    href: "#",
  },
  {
    name: "LinkedIn",
    icon: <Linkedin className="w-6 h-6 sm:w-8 sm:h-8 text-black" />,
    href: "#",
  },
];

export default function SocialFollow() {
  return (
    <section className="bg-black text-white py-10 md:py-16 relative overflow-hidden">
      <Image
        src="https://res.cloudinary.com/dkornxvni/image/upload/v1764761624/testimonial-bg-shape_ko6lbb.webp"
        alt="Rotating decorative shape"
        width={500}
        height={500}
        className="absolute -left-48 -top-24 opacity-20 animate-slow-spin"
      />
      <div className="container relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold">
              Join Our <span className="text-primary">Creative Community</span>
            </h2>
          </div>
          <div>
            <p className="text-neutral-400">
              Be part of our growing creative network — where design, strategy,
              and technology come together. Follow Kalki Web for insights,
              project highlights, and digital growth inspiration.
            </p>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 justify-center">
          {socialLinks.map((item, index) => (
            <Link
              href={item.href}
              key={index}
              className="group relative w-40 h-24 sm:w-48 sm:h-28 block mx-auto"
            >
              <div className="absolute top-0 left-0 z-10 w-16 h-16 sm:w-20 sm:h-20 bg-primary rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110">
                {item.icon}
              </div>
              <div className="absolute bottom-0 right-0 w-[150px] h-20 sm:w-[180px] sm:h-24 pl-10 sm:pl-12 pr-4 py-4 border border-white/20 rounded-full flex items-end justify-start group-hover:border-primary/50 transition-colors duration-300">
                <p className="font-semibold text-white leading-tight text-left w-full pl-5">
                  <span className="block text-xs">Follow Us On</span>
                  <span className="block text-base">{item.name}</span>
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
