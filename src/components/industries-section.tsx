
import { HeartPulse, ShoppingCart, Users, GraduationCap, Dumbbell, Sparkles, Utensils, Building, Truck, Drama } from "lucide-react";
import React from "react";

const industries = [
    { name: "Healthcare", icon: <HeartPulse className="w-12 h-12 text-blue-500" /> },
    { name: "Shopping", icon: <ShoppingCart className="w-12 h-12 text-green-500" /> },
    { name: "Social Networking", icon: <Users className="w-12 h-12 text-purple-500" /> },
    { name: "Education", icon: <GraduationCap className="w-12 h-12 text-indigo-500" /> },
    { name: "Fitness & Gym", icon: <Dumbbell className="w-12 h-12 text-red-500" /> },
    { name: "Beauty-Wellness", icon: <Sparkles className="w-12 h-12 text-pink-500" /> },
    { name: "Restaurant", icon: <Utensils className="w-12 h-12 text-orange-500" /> },
    { name: "Real Estate", icon: <Building className="w-12 h-12 text-teal-500" /> },
    { name: "Logistics", icon: <Truck className="w-12 h-12 text-cyan-500" /> },
    { name: "Entertainment", icon: <Drama className="w-12 h-12 text-rose-500" /> },
];

export default function IndustriesSection() {
    return (
        <section className="pt-8 pb-16 md:pt-12 md:pb-24 bg-background">
            <div className="container">
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                        Website development services for all <span className="text-primary">Industries</span>
                    </h2>
                    <p className="mt-4 text-muted-foreground text-lg">
                        We provide website development services for diverse industries, including
                    </p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {industries.map((industry, index) => (
                        <div key={index} className="relative group">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-400 to-primary rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                            <div className="relative bg-card p-6 rounded-lg h-full flex flex-col items-center justify-center text-center space-y-4 shadow-md transition-all duration-300 group-hover:shadow-xl">
                                {industry.icon}
                                <h3 className="text-lg font-semibold text-card-foreground">{industry.name}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
