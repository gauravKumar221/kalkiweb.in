"use client";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Preloader from "@/components/preloader";
import { Header } from "@/components/layout/header";
import { Toaster } from "@/components/ui/toaster";
import FloatingWhatsAppButton from "./floating-whatsapp-button";
import CtaSection from "./cta-section";
import SmoothScroll from "./smooth-scroll";

export default function ClientLayout({ children }) {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        // This logic ensures the preloader runs only on the client-side.
        const preloaderTimer = setTimeout(() => {
            setIsLoading(false);
            document.body.style.cursor = "default";
            window.scrollTo(0, 0);
        }, 3000);
        return () => clearTimeout(preloaderTimer);
    }, []);
    return (<SmoothScroll>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      {!isLoading && (<>
          <Header />
          <div>
            <main className="flex-grow flex flex-col">
              {children}
            </main>
          </div>
          <CtaSection />
          <Toaster />
          <FloatingWhatsAppButton />
        </>)}
    </SmoothScroll>);
}
