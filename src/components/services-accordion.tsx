"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import LottiePlayer from "./lottie-player"

const customizedServices = [
  {
    category: "Branding.",
    items: [
      "Memorable Brand Design Strategy",
      "Logo",
      "Brand Guide",
      "Social Identity",
    ],
    link: "/services",
    lottieUrl: "https://assets9.lottiefiles.com/packages/lf20_g33gmgrc.json",
  },
  {
    category: "Design & Creative.",
    items: [
      "Unforgettable Design Experiences",
      "UI/UX",
      "Digital Ads",
      "Marketing Assets",
    ],
    link: "/services",
    lottieUrl: "https://assets2.lottiefiles.com/packages/lf20_bwmj62m7.json",

  },
  {
    category: "3D & Animation.",
    items: [
      "Dazzling Visual Experiences",
      "Product Modelling",
      "Animation Video",
      "AR/VR",
    ],
    link: "/services",
    lottieUrl: "https://assets7.lottiefiles.com/packages/lf20_k2dmtmfg.json",

  },
  {
    category: "Web Development.",
    items: [
      "Purposeful Personal Websites",
      "E-Commerce Stores",
      "Custom Product Development",
      "Scalable Web Applications"
    ],
    link: "/services",
    lottieUrl: "https://assets8.lottiefiles.com/packages/lf20_y24x6mgl.json",
  },
];


export function ServicesAccordion() {
  return (
    <Accordion type="single" collapsible defaultValue="item-2" className="w-full">
      {customizedServices.map((service, index) => (
        <AccordionItem value={`item-${index}`} key={index} className="border-b border-border/40">
          <AccordionTrigger className="text-3xl font-bold hover:no-underline py-8 data-[state=open]:text-primary">
              <div className="flex justify-between items-center w-full">
                <span>{service.category}</span>
              </div>
          </AccordionTrigger>
          <AccordionContent className="pb-8">
            <div className="grid md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-8">
                    <div className="grid md:grid-cols-2 gap-x-8 gap-y-2">
                        {service.items.map((item, itemIndex) => (
                            <p key={itemIndex} className="text-muted-foreground text-lg">
                                <span className="text-primary mr-2">|</span>{item}
                            </p>
                        ))}
                    </div>
                </div>
                <div className="md:col-span-4 flex justify-start md:justify-end">
                    <LottiePlayer src={service.lottieUrl} className="w-48 h-48" />
                </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
