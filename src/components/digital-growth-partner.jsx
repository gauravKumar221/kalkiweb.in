"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Check } from "lucide-react";
export default function DigitalGrowthPartner({ tabs, className }) {
    return (<section className={cn("py-16 md:py-24 bg-background", className)}>
            <div className="container">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Your partner in digital growth</h2>
                </div>

                <Tabs defaultValue={tabs[0].title} className="w-full">
                    <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 max-w-4xl mx-auto h-auto bg-transparent p-0 mb-8">
                        {tabs.map((tab) => (<TabsTrigger key={tab.title} value={tab.title} className={cn("whitespace-normal border border-border text-sm md:text-base data-[state=active]:bg-foreground data-[state=active]:text-background data-[state=active]:shadow-md", "first:rounded-l-md last:rounded-r-md md:first:rounded-l-md md:last:rounded-r-md md:rounded-none", "md:[&:not(:first-child):not(:last-child)]:border-l-0 md:[&:not(:first-child):not(:last-child)]:border-r-0", "md:[&:nth-child(2)]:border-l-0", "md:first:border-r-0 md:last:border-l-0")}>
                                {tab.title}
                            </TabsTrigger>))}
                    </TabsList>
                    
                    {tabs.map((tab) => (<TabsContent key={tab.title} value={tab.title}>
                            <div className="bg-card/30 border border-border/50 rounded-lg p-8 md:p-12">
                                <div className="grid md:grid-cols-2 gap-12 items-center">
                                    <div className="space-y-6">
                                        <h3 className="text-3xl font-bold">{tab.heading}</h3>
                                        <p className="text-muted-foreground">{tab.description}</p>
                                        <ul className="space-y-3">
                                            {tab.features.map((feature, index) => (<li key={index} className="flex items-center gap-3">
                                                    <Check className="w-5 h-5 text-primary flex-shrink-0"/>
                                                    <span className="text-foreground">{feature}</span>
                                                </li>))}
                                        </ul>
                                    </div>
                                    <div>
                                         <Image src={tab.image} data-ai-hint={tab.imageHint} alt={tab.heading} width={600} height={500} className="rounded-lg object-cover shadow-lg"/>
                                    </div>
                                </div>
                            </div>
                        </TabsContent>))}
                </Tabs>
            </div>
        </section>);
}
