import InteractiveServiceList from "@/components/interactive-service-list";
import ServicesOfferings from "@/components/services-offerings";
import { Sparkles } from "lucide-react";

export default function ServicesPage() {
    return (
      <div className="min-h-screen bg-background text-foreground">
        {/* Hero Section with fixed header clearance */}
        <section className="relative overflow-hidden pt-36 pb-16 md:pt-44 md:pb-24 border-b border-border/40">
          <div className="absolute inset-0 bg-grid-white/[0.03] pointer-events-none" />
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto mb-16 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/15 border border-primary/30 text-primary text-xs md:text-sm font-semibold uppercase tracking-wider mb-6">
                <Sparkles className="w-4 h-4" />
                <span>What We Do</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6">
                Our Services
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                We deliver high-impact solutions that blend creative-led branding, data-driven marketing, and technical excellence to scale your business.
              </p>
            </div>
            <InteractiveServiceList />
          </div>
        </section>

        <ServicesOfferings />
      </div>
    );
}
