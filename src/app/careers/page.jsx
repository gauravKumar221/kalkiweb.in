'use client';
import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import { CareersForm } from "@/components/forms";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import React from "react";
const jobOpenings = [
    {
        title: "Senior React Developer",
        department: "Engineering, Full-time",
        location: "Molsheim, France"
    },
    {
        title: "Digital Marketing Specialist",
        department: "Marketing, Full-time",
        location: "Molsheim, France"
    },
    {
        title: "UI/UX Designer",
        department: "Design, Full-time",
        location: "Molsheim, France"
    },
    {
        title: "Mechanical Engineer",
        department: "Engineering, Full-time",
        location: "Molsheim, France"
    },
];
const whatWeOffer = [
    {
        image: "https://picsum.photos/400/500",
        hint: "team spirit",
        title: "Team Spirit",
        description: "We foster a collaborative environment where every voice is heard and valued."
    },
    {
        image: "https://picsum.photos/400/500",
        hint: "team events",
        title: "Team Events",
        description: "From track days to team dinners, we believe in building strong bonds."
    },
    {
        image: "https://picsum.photos/400/500",
        hint: "personal development",
        title: "Personal Development",
        description: "We invest in your growth with training, workshops, and opportunities to learn."
    }
];
const ourValues = [
    {
        image: "https://picsum.photos/800/600",
        hint: "car emblem",
        title: "Craft & Arts",
        description: "We are artisans of the automotive world, dedicated to the highest quality and precision in every detail."
    },
    {
        image: "https://picsum.photos/800/600",
        hint: "team collaboration",
        title: "Excellence",
        description: "We relentlessly pursue perfection, pushing the boundaries of performance and design."
    },
    {
        image: "https://picsum.photos/800/600",
        hint: "engineers working",
        title: "Responsibility",
        description: "We take ownership of our work, our team, and our impact on the world, ensuring a legacy of greatness."
    }
];
const testimonials = [
    {
        name: "Alexandre",
        role: "Lead Engineer",
        avatar: "https://picsum.photos/100/100",
        hint: "engineer portrait",
        quote: "Working here is more than a job; it's being part of a legend. The passion for perfection is contagious."
    },
    {
        name: "Sophie",
        role: "Designer",
        avatar: "https://picsum.photos/100/100",
        hint: "designer portrait",
        quote: "I have the creative freedom to push boundaries and design the future of hyper sports cars. It's a dream come true."
    },
    {
        name: "Florent Ligi",
        role: "Director Human Resources",
        avatar: "https://picsum.photos/100/100",
        hint: "man professional",
        quote: "BUGATTI thrives on innovation and attention to detail. We believe in empowering our employees to think boldly, act creatively, and apply their expertise to solve the toughest challenges. We are looking for passionate individuals who are driven by the BUGATTI brand, its incomparable legacy, and its hyper sports cars to join our team."
    }
];
export default function CareersPage() {
    const plugin = React.useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));
    return (<div className="bg-background text-foreground">
        {/* Hero Section */}
        <section className="relative h-[70vh] md:h-screen flex items-center justify-center text-center">
            <Image src="https://picsum.photos/1920/1080" alt="Careers at Kalki Web" data-ai-hint="car workshop" fill className="object-cover"/>
            <div className="absolute inset-0 bg-black/60"></div>
            <div className="relative z-10 p-4">
                <h1 className="font-kalam text-6xl md:text-8xl text-white">Careers</h1>
                <p className="mt-4 text-xl md:text-2xl text-neutral-300 max-w-2xl mx-auto">
                    JOIN A TEAM THAT IS SHAPING THE FUTURE OF AUTOMOTIVE, WHERE HERITAGE AND INNOVATION ARE COMBINED.
                </p>
                <Button asChild size="lg" variant="outline" className="mt-8 bg-transparent border-white text-white hover:bg-white hover:text-black">
                    <Link href="#job-openings">Join the Team</Link>
                </Button>
            </div>
        </section>

        <div className="container py-16 md:py-24">
            {/* Who we are Section */}
            <section className="mb-16 md:mb-24">
                <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
                    <div className="space-y-4">
                        <h2 className="text-3xl md:text-4xl font-bold">WHO WE ARE</h2>
                        <p className="text-neutral-400">
                            We are a team of visionaries, engineers, designers, and artisans, united by a passion for creating the most exclusive and highest-performing hyper sports cars in the world.
                        </p>
                    </div>
                    <div>
                        <Image src="https://picsum.photos/800/600" alt="Kalki Web Team" data-ai-hint="team photo luxury" width={800} height={600} className="rounded-lg"/>
                    </div>
                </div>
            </section>

             {/* What we offer Section */}
            <section className="mb-16 md:mb-24">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">WHAT WE OFFER</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {whatWeOffer.map((offer, index) => (<div key={index}>
                            <Image src={offer.image} data-ai-hint={offer.hint} alt={offer.title} width={400} height={500} className="rounded-lg object-cover mb-4"/>
                            <h3 className="text-xl font-bold">{offer.title}</h3>
                            <p className="text-neutral-400">{offer.description}</p>
                        </div>))}
                </div>
            </section>

             {/* Our Values Section */}
            <section className="mb-16 md:mb-24 space-y-16">
                 <h2 className="text-3xl md:text-4xl font-bold">OUR VALUES</h2>
                {ourValues.map((value, index) => (<div key={index} className={`grid md:grid-cols-2 gap-8 md:gap-16 items-center ${index % 2 !== 0 ? 'md:grid-flow-row-dense' : ''}`}>
                        <div className={`${index % 2 !== 0 ? 'md:col-start-2' : ''}`}>
                            <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                            <p className="text-neutral-400">{value.description}</p>
                        </div>
                        <div>
                             <Image src={value.image} data-ai-hint={value.hint} alt={value.title} width={800} height={600} className="rounded-lg object-cover"/>
                        </div>
                    </div>))}
            </section>
        </div>
            
        {/* Testimonials */}
        <section className="py-16 md:py-24 bg-blue-600 text-white">
            <div className="container">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">HERE, YOUR IDEAS DRIVE THE FUTURE.</h2>
                <Carousel plugins={[plugin.current]} className="w-full max-w-4xl mx-auto" onMouseEnter={plugin.current.stop} onMouseLeave={plugin.current.reset}>
                <CarouselContent>
                    {testimonials.map((testimonial, index) => (<CarouselItem key={index}>
                           <div className="p-1 text-center">
                                <p className="italic text-lg md:text-xl text-neutral-200 mb-6 max-w-3xl mx-auto">&quot;{testimonial.quote}&quot;</p>
                                <div className="flex justify-center items-center gap-4">
                                     <Image src={testimonial.avatar} data-ai-hint={testimonial.hint} alt={testimonial.name} width={56} height={56} className="rounded-full border-2 border-white"/>
                                     <div>
                                        <p className="font-bold text-lg">{testimonial.name}</p>
                                        <p className="text-sm tracking-widest uppercase">{testimonial.role}</p>
                                     </div>
                                </div>
                           </div>
                        </CarouselItem>))}
                </CarouselContent>
                <CarouselPrevious className="text-white bg-transparent hover:bg-white/20 border-white hover:text-white"/>
                <CarouselNext className="text-white bg-transparent hover:bg-white/20 border-white hover:text-white"/>
                </Carousel>
            </div>
        </section>
        
        <div className="container py-16 md:py-24">
            {/* Job Openings */}
            <section id="job-openings" className="mb-16 md:mb-24">
                 <h2 className="text-3xl md:text-4xl font-bold mb-8">JOB OPENINGS</h2>
                 <div className="border-t border-border">
                    {jobOpenings.map((job, index) => (<Link href="#apply-now" key={index} className="group block border-b border-border py-6 transition-colors duration-300 hover:bg-muted">
                            <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-4 px-4">
                                <div className="md:col-span-2">
                                    <h3 className="text-xl font-bold text-foreground">{job.title}</h3>
                                </div>
                                <div>
                                    <p className="text-neutral-400">{job.department}</p>
                                </div>
                                <div className="flex justify-between items-center">
                                    <p className="text-neutral-400">{job.location}</p>
                                    <ArrowUpRight className="w-6 h-6 text-neutral-500 transition-transform duration-300 group-hover:text-primary group-hover:rotate-45"/>
                                </div>
                            </div>
                        </Link>))}
                 </div>
            </section>

             {/* Apply Now Section */}
            <section id="apply-now" className="mb-16 md:mb-24">
                 <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center bg-muted p-8 md:p-12 rounded-lg">
                    <div>
                        <h2 className="text-3xl font-bold mb-4">Apply Now</h2>
                        <p className="text-muted-foreground mb-8">
                            Become a part of our team and help us shape the future. We look forward to receiving your application.
                        </p>
                        <Image src="https://picsum.photos/600/400" data-ai-hint="car driving fast" alt="Apply Now" width={600} height={400} className="rounded-lg object-cover"/>
                    </div>
                    <div>
                        <Card className="bg-card border-border">
                            <CardContent className="p-8">
                                <CareersForm />
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

        </div>
    </div>);
}
