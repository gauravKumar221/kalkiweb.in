
"use client";

import React from 'react';
import { Badge } from './ui/badge';
import { Card, CardContent } from './ui/card';
import Image from 'next/image';
import { Award, Briefcase, CalendarCheck, Clock, Group, Headset, Play, Star, TrendingUp } from 'lucide-react';
import { cn } from '@/lib/utils';

const expertiseItems = [
    { icon: <Briefcase className="w-6 h-6" />, title: 'Projects', value: '2500+', variant: 'dark' },
    { icon: <Headset className="w-6 h-6" />, title: '24/7 Technical support', value: '', variant: 'light' },
    { icon: <Clock className="w-6 h-6" />, title: 'On-time delivery', value: '', variant: 'light' },
    { icon: <Briefcase className="w-6 h-6" />, title: '3 Development centers', value: '', variant: 'light' },
    { icon: <CalendarCheck className="w-6 h-6" />, title: 'Pre-vetted resources', value: '', variant: 'light' },
    { icon: <Group className="w-6 h-6" />, title: 'Onshore/Offshore teams', value: '', variant: 'light' },
    { icon: <TrendingUp className="w-6 h-6" />, title: '85% NPS', value: '', variant: 'light' },
    { icon: <Star className="w-6 h-6" />, title: 'Happy Clients', value: '850+', variant: 'dark' },
];

export default function ExpertiseShowcase() {
    return (
        <section className="py-16 md:py-32 bg-background">
            <div className="container">
                <div className="max-w-3xl mb-12">
                    <Badge variant="outline" className="mb-4 border-primary text-primary flex items-center gap-2 w-max">
                        <Award className="w-4 h-4" />
                        Why Us
                    </Badge>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Access our strategic, technological, and sectorial expertise</h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Backed by years of experience and a vast pool of resources, Kalki Web offers bespoke solutions that ensure sustainable business growth and drive innovation.
                    </p>
                </div>
                <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                        {expertiseItems.map((item, index) => (
                           <Card key={index} className={cn(
                                'p-4 rounded-2xl transition-all duration-300 h-24',
                                item.variant === 'dark' ? 'bg-foreground text-background' : 'bg-card text-foreground border border-border/20'
                            )}>
                               <div className="flex items-center justify-between h-full">
                                    <div className="flex items-center gap-4">
                                        <div className={cn("text-primary", item.variant === 'dark' && 'text-primary')}>
                                            {item.icon}
                                        </div>
                                        <h3 className="font-semibold text-base">{item.title}</h3>
                                    </div>
                                    {item.value && (
                                        <p className="font-bold text-lg text-primary">{item.value}</p>
                                    )}
                                </div>
                            </Card>
                        ))}
                    </div>
                    <div className="lg:col-span-1">
                        <Card className="p-4 h-full flex flex-col bg-card border border-border/20 rounded-2xl">
                            <div className="relative aspect-video w-full rounded-lg overflow-hidden group">
                                <Image 
                                    src="https://picsum.photos/800/450" 
                                    alt="Digital Transformation"
                                    data-ai-hint="company office"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                    <button className="w-16 h-16 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                                        <Play className="w-8 h-8" fill="currentColor"/>
                                    </button>
                                </div>
                            </div>
                            <div className="mt-4 text-center flex-grow flex items-center justify-center">
                                <p className="text-lg font-semibold">Providing digital transformation to progressive companies with <span className="text-primary">modern infrastructure</span>.</p>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
}
