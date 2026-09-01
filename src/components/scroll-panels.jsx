"use client";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowLeft, Sparkles, CheckCircle2, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
export default function ScrollPanels() {
    const containerRef = useRef(null);
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end end"],
    });
    // Transform 5 panels horizontally: 0% to -80% (since 5 panels = 500% width, moving 4 panels = 80%)
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);
    const handleAnchorClick = (e, targetId) => {
        e.preventDefault();
        const targetElem = document.querySelector(targetId);
        if (!targetElem)
            return;
        if (targetId.startsWith("#panel-") && targetRef.current) {
            const panelNum = parseInt(targetId.replace("#panel-", ""), 10);
            const panelIndex = Math.max(0, Math.min(4, panelNum - 1));
            const targetOffsetTop = targetRef.current.offsetTop;
            const totalScroll = targetRef.current.offsetHeight - window.innerHeight;
            const targetScroll = targetOffsetTop + (panelIndex / 4) * totalScroll;
            window.scrollTo({ top: targetScroll, behavior: "smooth" });
        }
        else {
            targetElem.scrollIntoView({ behavior: "smooth" });
        }
    };
    return (<div ref={containerRef} className="relative bg-black text-white min-h-screen font-sans selection:bg-primary selection:text-black">
      {/* Fixed Premium Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-black/40 backdrop-blur-md border-b border-white/10 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2 group">
          <span className="text-xl font-bold tracking-tighter bg-gradient-to-r from-primary to-yellow-300 bg-clip-text text-transparent group-hover:opacity-80 transition-opacity">
            KALKI WEB
          </span>
          <Sparkles className="w-4 h-4 text-primary animate-pulse"/>
        </Link>
        <nav className="hidden md:flex items-center space-x-1">
          {[
            { label: "Home", target: "#intro" },
            { label: "Strategy", target: "#panel-1" },
            { label: "Design", target: "#panel-2" },
            { label: "Engineering", target: "#panel-3" },
            { label: "Marketing", target: "#panel-4" },
            { label: "AI & Growth", target: "#panel-5" },
            { label: "Collab", target: "#panel-6" },
        ].map((item) => (<a key={item.target} href={item.target} onClick={(e) => handleAnchorClick(e, item.target)} className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200">
              {item.label}
            </a>))}
        </nav>
        <Button size="sm" variant="glitch" asChild className="rounded-full bg-primary text-black hover:bg-primary/90">
          <a href="#panel-6" onClick={(e) => handleAnchorClick(e, "#panel-6")}>
            Get Started
          </a>
        </Button>
      </header>

      {/* Intro Panel (Vertical Scroll) */}
      <section id="intro" className="w-full h-screen flex flex-col justify-center items-center relative overflow-hidden px-6 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,223,0,0.07)_0%,transparent_60%)] pointer-events-none"/>
        <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none"/>

        <div className="max-w-4xl mx-auto space-y-6 z-10">
          <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full text-xs text-primary font-mono tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5"/>
            <span>Digital Agency Excellence</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-none">
            Bold Design. <br />
            <span className="bg-gradient-to-r from-primary via-yellow-400 to-amber-500 bg-clip-text text-transparent">
              High Performance Code.
            </span>
          </h1>
          <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Experience our comprehensive strategic, creative, and technical solutions laid out horizontally below. Scroll down to start the journey.
          </p>
          <div className="pt-6">
            <Button size="lg" variant="outline" className="rounded-full border-white/20 hover:border-primary/50 text-white hover:text-primary" onClick={(e) => handleAnchorClick(e, "#panel-1")}>
              Start Experience
              <ArrowDown className="w-4 h-4 ml-2 animate-bounce"/>
            </Button>
          </div>
        </div>
      </section>

      {/* Horizontal Scroll Track Container */}
      <section ref={targetRef} id="panels" className="relative h-[450vh]">
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          <motion.div style={{ x }} className="flex w-[500vw]">
            {/* Panel 1: Strategy */}
            <article id="panel-1" className="w-[100vw] h-screen shrink-0 flex items-center justify-center bg-gradient-to-br from-emerald-950/20 via-black to-black border-r border-white/5">
              <div className="flex flex-col lg:flex-row items-center justify-center gap-8 md:gap-16 w-full h-full p-6 md:p-20 max-w-7xl mx-auto">
                <div className="w-full lg:w-1/2 h-[35vh] lg:h-[55vh] relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">
                  <Image src="/illustrations/team_collaboration.jpg" alt="Team Collaboration" fill className="object-cover group-hover:scale-105 transition-transform duration-700" priority/>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"/>
                  <div className="absolute bottom-6 left-6 flex items-center space-x-2">
                    <span className="text-xs font-mono bg-emerald-500/20 border border-emerald-500/30 px-3 py-1 rounded-full text-emerald-400">
                      Phase 01
                    </span>
                  </div>
                </div>
                <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-6">
                  <div className="text-primary font-mono text-lg font-semibold tracking-wider">
                    01. STRATEGY
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                    Brand Strategy & Identity
                  </h2>
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                    We shape clear brand architectures. We define positioning frameworks and target-audience maps to align marketing investments with measurable business milestones.
                  </p>
                  <ul className="space-y-2 text-sm text-neutral-300">
                    <li className="flex items-center">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 mr-2"/> Market Positioning & Analysis
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 mr-2"/> Customer Persona Development
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 mr-2"/> Brand Strategy & Guidelines
                    </li>
                  </ul>
                  <div className="pt-4 flex items-center justify-between">
                    <a href="#panel-2" onClick={(e) => handleAnchorClick(e, "#panel-2")} className="inline-flex items-center text-sm font-semibold text-primary hover:text-white transition-colors duration-200">
                      Next: UX Design
                      <ChevronRight className="w-4 h-4 ml-1"/>
                    </a>
                  </div>
                </div>
              </div>
            </article>

            {/* Panel 2: Design */}
            <article id="panel-2" className="w-[100vw] h-screen shrink-0 flex items-center justify-center bg-gradient-to-br from-blue-950/20 via-black to-black border-r border-white/5">
              <div className="flex flex-col lg:flex-row items-center justify-center gap-8 md:gap-16 w-full h-full p-6 md:p-20 max-w-7xl mx-auto">
                <div className="w-full lg:w-1/2 h-[35vh] lg:h-[55vh] relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">
                  <Image src="/illustrations/design_audience_steps.jpg" alt="Design & User Experience" fill className="object-cover group-hover:scale-105 transition-transform duration-700"/>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"/>
                  <div className="absolute bottom-6 left-6 flex items-center space-x-2">
                    <span className="text-xs font-mono bg-blue-500/20 border border-blue-500/30 px-3 py-1 rounded-full text-blue-400">
                      Phase 02
                    </span>
                  </div>
                </div>
                <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-6">
                  <div className="text-primary font-mono text-lg font-semibold tracking-wider">
                    02. CREATIVE
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                    High-Fidelity Web UI/UX
                  </h2>
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                    Crafting premium user interfaces with custom component hierarchies, responsive frameworks, and rich interactive micro-animations that engage your customers.
                  </p>
                  <ul className="space-y-2 text-sm text-neutral-300">
                    <li className="flex items-center">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 mr-2"/> Custom Design Systems
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 mr-2"/> Dynamic UX Prototyping
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 mr-2"/> Micro-Animations & Interactivity
                    </li>
                  </ul>
                  <div className="pt-4 flex items-center gap-6">
                    <a href="#panel-1" onClick={(e) => handleAnchorClick(e, "#panel-1")} className="inline-flex items-center text-sm font-semibold text-muted-foreground hover:text-white transition-colors duration-200">
                      <ArrowLeft className="w-4 h-4 mr-1.5"/>
                      Prev
                    </a>
                    <a href="#panel-3" onClick={(e) => handleAnchorClick(e, "#panel-3")} className="inline-flex items-center text-sm font-semibold text-primary hover:text-white transition-colors duration-200">
                      Next: Engineering
                      <ChevronRight className="w-4 h-4 ml-1"/>
                    </a>
                  </div>
                </div>
              </div>
            </article>

            {/* Panel 3: Engineering */}
            <article id="panel-3" className="w-[100vw] h-screen shrink-0 flex items-center justify-center bg-gradient-to-br from-purple-950/20 via-black to-black border-r border-white/5">
              <div className="flex flex-col lg:flex-row items-center justify-center gap-8 md:gap-16 w-full h-full p-6 md:p-20 max-w-7xl mx-auto">
                <div className="w-full lg:w-1/2 h-[35vh] lg:h-[55vh] relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">
                  <Image src="/illustrations/server_performance.jpg" alt="Server Performance & Web Coding" fill className="object-cover group-hover:scale-105 transition-transform duration-700"/>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"/>
                  <div className="absolute bottom-6 left-6 flex items-center space-x-2">
                    <span className="text-xs font-mono bg-purple-500/20 border border-purple-500/30 px-3 py-1 rounded-full text-purple-400">
                      Phase 03
                    </span>
                  </div>
                </div>
                <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-6">
                  <div className="text-primary font-mono text-lg font-semibold tracking-wider">
                    03. CODE
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                    Next-Gen Development
                  </h2>
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                    We build blazing fast React/Next.js architectures optimized for speed, reliability, and security. Zero technical debt, responsive sizing, and fully SEO optimized structures.
                  </p>
                  <ul className="space-y-2 text-sm text-neutral-300">
                    <li className="flex items-center">
                      <CheckCircle2 className="w-4 h-4 text-purple-400 mr-2"/> Next.js App Router Architecture
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="w-4 h-4 text-purple-400 mr-2"/> Tailwind CSS Design Systems
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="w-4 h-4 text-purple-400 mr-2"/> REST & GraphQL API Integration
                    </li>
                  </ul>
                  <div className="pt-4 flex items-center gap-6">
                    <a href="#panel-2" onClick={(e) => handleAnchorClick(e, "#panel-2")} className="inline-flex items-center text-sm font-semibold text-muted-foreground hover:text-white transition-colors duration-200">
                      <ArrowLeft className="w-4 h-4 mr-1.5"/>
                      Prev
                    </a>
                    <a href="#panel-4" onClick={(e) => handleAnchorClick(e, "#panel-4")} className="inline-flex items-center text-sm font-semibold text-primary hover:text-white transition-colors duration-200">
                      Next: Marketing
                      <ChevronRight className="w-4 h-4 ml-1"/>
                    </a>
                  </div>
                </div>
              </div>
            </article>

            {/* Panel 4: Marketing */}
            <article id="panel-4" className="w-[100vw] h-screen shrink-0 flex items-center justify-center bg-gradient-to-br from-rose-950/20 via-black to-black border-r border-white/5">
              <div className="flex flex-col lg:flex-row items-center justify-center gap-8 md:gap-16 w-full h-full p-6 md:p-20 max-w-7xl mx-auto">
                <div className="w-full lg:w-1/2 h-[35vh] lg:h-[55vh] relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">
                  <Image src="/illustrations/seo_search_results.jpg" alt="Search Engine Optimization" fill className="object-cover group-hover:scale-105 transition-transform duration-700"/>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"/>
                  <div className="absolute bottom-6 left-6 flex items-center space-x-2">
                    <span className="text-xs font-mono bg-rose-500/20 border border-rose-500/30 px-3 py-1 rounded-full text-rose-400">
                      Phase 04
                    </span>
                  </div>
                </div>
                <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-6">
                  <div className="text-primary font-mono text-lg font-semibold tracking-wider">
                    04. GROWTH
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                    SEO & Digital Marketing
                  </h2>
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                    Drive traffic and capture valuable leads. We execute targeted SEO strategies, programmatic search indexing, and performance advertising to scale customer acquisition.
                  </p>
                  <ul className="space-y-2 text-sm text-neutral-300">
                    <li className="flex items-center">
                      <CheckCircle2 className="w-4 h-4 text-rose-400 mr-2"/> Advanced Search Engine Optimization
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="w-4 h-4 text-rose-400 mr-2"/> ROI Driven Advertising Campaigns
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="w-4 h-4 text-rose-400 mr-2"/> High Converting Landing Pages
                    </li>
                  </ul>
                  <div className="pt-4 flex items-center gap-6">
                    <a href="#panel-3" onClick={(e) => handleAnchorClick(e, "#panel-3")} className="inline-flex items-center text-sm font-semibold text-muted-foreground hover:text-white transition-colors duration-200">
                      <ArrowLeft className="w-4 h-4 mr-1.5"/>
                      Prev
                    </a>
                    <a href="#panel-5" onClick={(e) => handleAnchorClick(e, "#panel-5")} className="inline-flex items-center text-sm font-semibold text-primary hover:text-white transition-colors duration-200">
                      Next: AI Integration
                      <ChevronRight className="w-4 h-4 ml-1"/>
                    </a>
                  </div>
                </div>
              </div>
            </article>

            {/* Panel 5: AI & Growth */}
            <article id="panel-5" className="w-[100vw] h-screen shrink-0 flex items-center justify-center bg-gradient-to-br from-amber-950/20 via-black to-black">
              <div className="flex flex-col lg:flex-row items-center justify-center gap-8 md:gap-16 w-full h-full p-6 md:p-20 max-w-7xl mx-auto">
                <div className="w-full lg:w-1/2 h-[35vh] lg:h-[55vh] relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">
                  <Image src="/illustrations/user_conversion.jpg" alt="Conversion Optimization & AI" fill className="object-cover group-hover:scale-105 transition-transform duration-700"/>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"/>
                  <div className="absolute bottom-6 left-6 flex items-center space-x-2">
                    <span className="text-xs font-mono bg-amber-500/20 border border-amber-500/30 px-3 py-1 rounded-full text-amber-400">
                      Phase 05
                    </span>
                  </div>
                </div>
                <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-6">
                  <div className="text-primary font-mono text-lg font-semibold tracking-wider">
                    05. FUTURE
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                    AI Solutions & Analytics
                  </h2>
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                    Integrate intelligent marketing bots, custom AI integrations, and automated lead analysis scripts directly into your business pipelines to maximize conversions.
                  </p>
                  <ul className="space-y-2 text-sm text-neutral-300">
                    <li className="flex items-center">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 mr-2"/> Custom AI & LLM Automation
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 mr-2"/> Deep Analytical Audits
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 mr-2"/> Automated Conversion Hooks
                    </li>
                  </ul>
                  <div className="pt-4 flex items-center gap-6">
                    <a href="#panel-4" onClick={(e) => handleAnchorClick(e, "#panel-4")} className="inline-flex items-center text-sm font-semibold text-muted-foreground hover:text-white transition-colors duration-200">
                      <ArrowLeft className="w-4 h-4 mr-1.5"/>
                      Prev
                    </a>
                    <a href="#panel-6" onClick={(e) => handleAnchorClick(e, "#panel-6")} className="inline-flex items-center text-sm font-semibold text-primary hover:text-white transition-colors duration-200">
                      Next: Connect
                      <ChevronRight className="w-4 h-4 ml-1"/>
                    </a>
                  </div>
                </div>
              </div>
            </article>
          </motion.div>
        </div>
      </section>

      {/* Panel 6: Bottom Call to Action (Vertical Scroll) */}
      <section id="panel-6" className="w-full min-h-screen flex flex-col justify-center items-center relative overflow-hidden px-6 py-20 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,223,0,0.05)_0%,transparent_60%)] pointer-events-none"/>
        <div className="absolute inset-0 bg-grid-white/[0.01] pointer-events-none"/>

        <div className="max-w-4xl mx-auto space-y-8 z-10">
          <span className="text-primary font-mono text-sm tracking-wider uppercase font-semibold">
            06. CONNECT
          </span>
          <h2 className="text-4xl md:text-7xl font-extrabold tracking-tight text-white leading-none">
            Ready to Build <br />
            <span className="bg-gradient-to-r from-primary via-yellow-300 to-amber-500 bg-clip-text text-transparent">
              Something Legendary?
            </span>
          </h2>
          <p className="text-base md:text-xl text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Let's discuss how we can skyrocket your online presence, design premium platforms, and execute ROI-driven campaigns.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="rounded-full bg-primary text-black hover:bg-primary/90 px-8 py-6 text-base font-semibold w-full sm:w-auto" asChild>
              <Link href="/contact">Book a Strategy Call</Link>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full border-white/20 hover:border-primary/50 text-white hover:text-primary px-8 py-6 text-base font-semibold w-full sm:w-auto" asChild>
              <Link href="/portfolio">Explore Our Portfolio</Link>
            </Button>
          </div>
        </div>

        {/* Mini Footer */}
        <footer className="absolute bottom-8 text-xs text-muted-foreground font-mono">
          © {new Date().getFullYear()} Kalki Web. All rights reserved. Design & Engineering built with passion.
        </footer>
      </section>
    </div>);
}
