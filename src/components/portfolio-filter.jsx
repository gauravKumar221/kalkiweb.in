"use client";
import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
const portfolioProjects = [
    { client: "VIP Number Shop", image: "https://picsum.photos/600/400", hint: "mobile app screen", category: "Web Design" },
    { client: "Aster Towers", image: "https://picsum.photos/600/400", hint: "luxury apartment", category: "Branding" },
    { client: "PRC Repair", image: "https://picsum.photos/600/400", hint: "phone repair", category: "Web Design" },
    { client: "Base2Brand", image: "https://picsum.photos/600/400", hint: "marketing agency", category: "Branding" },
    { client: "Project E-comm", image: "https://picsum.photos/600/400", hint: "online store", category: "Development" },
    { client: "SaaS Platform", image: "https://picsum.photos/600/400", hint: "dashboard analytics", category: "Development" },
    { client: "Health App", image: "https://picsum.photos/600/400", hint: "fitness app", category: "UI/UX" },
    { client: "Finance Tracker", image: "https://picsum.photos/600/400", hint: "finance chart", category: "Development" },
    { client: "Marketing Site", image: "https://picsum.photos/600/400", hint: "landing page", category: "Web Design" },
];
const categories = ["All", "Web Design", "Branding", "Development", "UI/UX"];
export default function PortfolioFilter() {
    const [filter, setFilter] = useState("All");
    const filteredProjects = filter === "All"
        ? portfolioProjects
        : portfolioProjects.filter((p) => p.category === filter);
    return (<div>
      <div className="flex justify-center gap-2 md:gap-4 mb-8">
        {categories.map((category) => (<Button key={category} variant={filter === category ? "glitch" : "outline"} onClick={() => setFilter(category)} className={cn("border-primary", filter !== category && "text-primary hover:bg-primary hover:text-primary-foreground")}>
            {category}
          </Button>))}
      </div>
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence>
          {filteredProjects.map((project, index) => (<motion.div key={`${project.client}-${filter}`} layout initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }} transition={{ duration: 0.3 }}>
              <Card className="overflow-hidden group h-full flex flex-col">
                <div className="overflow-hidden">
                  <Image src={project.image} data-ai-hint={project.hint} alt={project.client} width={600} height={400} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"/>
                </div>
                <CardContent className="p-4 flex-grow flex items-center justify-between">
                    <div>
                        <h3 className="text-xl font-bold">{project.client}</h3>
                        <p className="text-sm text-muted-foreground">{project.category}</p>
                    </div>
                    <div className="w-10 h-10 bg-background rounded-full flex items-center justify-center shrink-0 group-hover:bg-primary transition-all duration-300">
                        <ArrowRight className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-transform duration-300 group-hover:rotate-[-45deg]"/>
                    </div>
                </CardContent>
              </Card>
            </motion.div>))}
        </AnimatePresence>
      </motion.div>
    </div>);
}
