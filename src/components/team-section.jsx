"use client";
import Image from "next/image";
import { Button } from "./ui/button";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import React from "react";
const teamMembers = [
  {
    name: "Gaurav Kumar",
    role: "Content Writer",
    image: "/images videos/gaurav.png",
    hint: "man flowers portrait",
  },
  {
    name: "Rajeev Kumar Jah",
    role: "Digital Marketing Executive",
    image: "/images videos/rajeev221.png",
    hint: "woman professional portrait",
  },
  {
    name: "Rishav Karn",
    role: "Digital Marketing Executive",
    image: "/images videos/rishav221.png",
    hint: "woman smiling portrait",
  },
  {
    name: "Md. Andaz Pathan",
    role: "Web Developer",
    image: "/images videos/andaz.png",
    hint: "woman professional",
  },
];
export default function TeamSection() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true }),
  );
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold">
              Our <span className="text-primary">Team</span>
            </h2>
          </div>
          <div className="md:text-right space-y-4">
            <p className="text-muted-foreground">
              Meet the people behind Kalki Web and see how our team drives
              meaningful results.
            </p>
            <div className="flex justify-start md:justify-end">
              <Button
                asChild
                variant="secondary"
                className="rounded-full h-12 px-2"
              >
                <Link href="/team" className="flex items-center">
                  <span className="px-4">Meet All Team</span>
                  <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <Carousel
          plugins={[plugin.current]}
          className="w-full"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent>
            {teamMembers.map((member, index) => (
              <CarouselItem
                key={index}
                className="basis-full sm:basis-[486px] pl-4 shrink-0"
              >
                <div className="p-1">
                  <Card className="overflow-hidden group border-none w-full max-w-[486px] aspect-square relative">
                    <div className="relative w-full h-full">
                      <Image
                        src={member.image}
                        data-ai-hint={member.hint}
                        alt={member.name}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                        <h3 className="font-bold text-lg">{member.name}</h3>
                        <p className="text-primary text-sm">{member.role}</p>
                      </div>
                    </div>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-[-20px] top-1/2 -translate-y-1/2" />
          <CarouselNext className="absolute right-[-20px] top-1/2 -translate-y-1/2" />
        </Carousel>
      </div>
    </section>
  );
}
