
"use client";

import Link from "next/link";
import { Button } from "./ui/button";

export default function FixedCtaFooter() {
    return (
        <div className="hidden md:block fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-4xl">
            <div className="bg-card border border-border/50 rounded-full p-3 shadow-lg flex items-center justify-between">
                <p className="text-sm md:text-base font-medium ml-4 md:ml-6">
                    Ready to start a project?
                </p>
                <Button asChild variant="glitch" size="lg" className="rounded-full">
                    <Link href="/contact">Get a free quote</Link>
                </Button>
            </div>
        </div>
    );
}
