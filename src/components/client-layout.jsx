"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import Preloader from "@/components/preloader";
import { Header } from "@/components/layout/header";
import { Toaster } from "@/components/ui/toaster";
import FloatingWhatsAppButton from "./floating-whatsapp-button";
import CtaSection from "./cta-section";
import SmoothScroll from "./smooth-scroll";

export default function ClientLayout({ children }) {
    const pathname = usePathname();
    const isAdminRoute = pathname?.startsWith("/admin") || pathname?.startsWith("/dashboard");
    const isContactRoute = pathname === "/contact";
    const hidePublicChrome = isAdminRoute || isContactRoute;

    const [isLoading, setIsLoading] = useState(!isAdminRoute && !isContactRoute);

    useEffect(() => {
        if (isAdminRoute || isContactRoute) {
            setIsLoading(false);
            return;
        }

        // Preloader runs only for standard public client-side navigation
        const preloaderTimer = setTimeout(() => {
            setIsLoading(false);
            document.body.style.cursor = "default";
            window.scrollTo(0, 0);
        }, 2000);
        return () => clearTimeout(preloaderTimer);
    }, [isAdminRoute, isContactRoute]);

    return (
        <SmoothScroll>
            <AnimatePresence mode="wait">
                {isLoading && !hidePublicChrome && <Preloader />}
            </AnimatePresence>
            {!isLoading && (
                <>
                    {!hidePublicChrome && <Header />}
                    <div>
                        <main className="flex-grow flex flex-col">
                            {children}
                        </main>
                    </div>
                    {!hidePublicChrome && <CtaSection />}
                    <Toaster />
                    {!hidePublicChrome && <FloatingWhatsAppButton />}
                </>
            )}
        </SmoothScroll>
    );
}
