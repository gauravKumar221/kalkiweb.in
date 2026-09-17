"use client";

import Link from "next/link";
import {
  Phone,
  ArrowRight,
  MessageCircle,
  Mail,
  X,
  ChevronDown,
  Sparkles,
  Code2,
  TrendingUp,
  ShoppingCart,
  Bot,
  Layers,
  Smartphone,
  Palette,
  Cloud,
  Headphones,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import TypewriterEffect from "../typewriter-effect";
import HeroMarquee from "../hero-marquee";

// Main navigation items
const menuMainLinks = [
  { href: "/", label: "Home", num: "(01)" },
  { href: "/about", label: "About", num: "(02)" },
  { href: "/services", label: "Services", num: "(03)", isSubmenu: true },
  { href: "/team", label: "Meet Our Team", num: "(04)" },
  { href: "/portfolio", label: "Portfolio", num: "(05)" },
  { href: "/case-studies", label: "Case Studies", num: "(06)" },
  { href: "/pricing", label: "Pricing", num: "(07)" },
  { href: "/blog", label: "Blog", num: "(08)" },
  { href: "/contact", label: "Contact Us", num: "(09)" },
];

// All individual service sub-pages with icons & descriptions
const allServicesSubmenu = [
  {
    title: "Web Development",
    subNum: "(3.1)",
    description: "Custom high-speed Next.js web interfaces & architecture.",
    href: "/services/web-development",
    icon: Code2,
  },
  {
    title: "Digital Marketing",
    subNum: "(3.2)",
    description: "Organic SEO, PPC advertising & conversion rate funnels.",
    href: "/services/digital-marketing",
    icon: TrendingUp,
  },
  {
    title: "Ecommerce Development",
    subNum: "(3.3)",
    description: "Robust conversion-focused online shopping storefronts.",
    href: "/services/ecommerce",
    icon: ShoppingCart,
  },
  {
    title: "AI Services & Agents",
    subNum: "(3.4)",
    description: "Custom LLM workflows, conversational bots & automation.",
    href: "/services/ai-services",
    icon: Bot,
  },
  {
    title: "Shopify Development",
    subNum: "(3.5)",
    description: "Bespoke Shopify Plus themes, liquid code & app setups.",
    href: "/services/shopify-development",
    icon: Layers,
  },
  {
    title: "Mobile App Development",
    subNum: "(3.6)",
    description: "Native & cross-platform iOS & Android mobile apps.",
    href: "/services/mobile-app-development",
    icon: Smartphone,
  },
  {
    title: "Graphic & UI/UX Design",
    subNum: "(3.7)",
    description: "Brand identities, design systems, packaging & vector art.",
    href: "/services/graphic-ui-ux",
    icon: Palette,
  },
  {
    title: "DevOps & Cloud",
    subNum: "(3.8)",
    description: "CI/CD automation, Docker/Kubernetes & high availability.",
    href: "/services/devops",
    icon: Cloud,
  },
  {
    title: "Back Office Services",
    subNum: "(3.9)",
    description: "24/7 dedicated support, data operations & QA testing.",
    href: "/services/back-office",
    icon: Headphones,
  },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [servicesExpanded, setServicesExpanded] = useState(false);
  const pathname = usePathname();

  // Prevent background body scrolling when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  // Close menu on route change
  useEffect(() => {
    setOpen(false);
    setServicesExpanded(false);
  }, [pathname]);

  const menuVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
    },
    closed: {
      opacity: 0,
      y: "-100%",
      transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <header className="fixed top-3 sm:top-5 left-0 right-0 z-50 flex justify-center px-3 sm:px-4">
      <div className="w-full max-w-7xl flex h-16 sm:h-20 items-center justify-between text-white bg-black/40 backdrop-blur-xl border border-white/15 rounded-full px-3 sm:px-6 md:px-8 shadow-2xl">
        {/* Left Menu Toggle Button */}
        <div className="flex-1 flex justify-start z-20">
          <button
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            className="group flex items-center gap-2 sm:gap-3 cursor-pointer select-none"
          >
            <div className="flex flex-col justify-center items-center h-10 w-10 sm:h-11 sm:w-11 bg-white/20 border border-white/25 group-hover:bg-primary group-hover:border-primary rounded-full transition-all duration-300 shadow-md">
              <motion.div
                animate={open ? "open" : "closed"}
                variants={{
                  open: { rotate: 45, y: 3 },
                  closed: { rotate: 0, y: 0 },
                }}
                className="w-5 h-[2px] bg-white group-hover:bg-black transition-colors rounded-full"
              />
              <motion.div
                animate={open ? "open" : "closed"}
                variants={{
                  open: { rotate: -45, y: -3 },
                  closed: { rotate: 0, y: 0 },
                }}
                className="w-5 h-[2px] bg-white group-hover:bg-black transition-colors rounded-full mt-1.5"
              />
            </div>
            <span className="font-bold text-xs sm:text-sm tracking-widest uppercase text-white group-hover:text-primary transition-colors hidden sm:inline">
              Menu
            </span>
          </button>
        </div>

        {/* Center Animated Logo / Brand Title */}
        <div className="absolute left-1/2 -translate-x-1/2 hidden md:block">
          <Link href="/">
            <TypewriterEffect />
          </Link>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 w-[50%] sm:w-[60%] overflow-hidden md:hidden pointer-events-none">
          <HeroMarquee isLogo={true} />
        </div>

        {/* Right CTA & Contact Actions */}
        <div className="flex-1 flex justify-end items-center gap-2 z-20">
          <Button
            asChild
            variant="glitch"
            size="lg"
            className="rounded-full hidden md:inline-flex"
          >
            <Link href="/contact">Get a free quote</Link>
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full h-10 w-10 sm:h-11 sm:w-11 bg-white text-black hover:bg-primary hover:border-primary transition-all duration-300 cursor-pointer shrink-0 shadow-md"
              >
                <Phone className="h-4.5 w-4.5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="w-56 bg-neutral-900 text-white border-white/15"
            >
              <DropdownMenuItem asChild>
                <a
                  href="tel:+919304987505"
                  className="flex items-center cursor-pointer py-2"
                >
                  <Phone className="mr-2 h-4 w-4 text-primary" />
                  <span>Call Us</span>
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a
                  href="https://wa.me/919304987505"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center cursor-pointer py-2"
                >
                  <MessageCircle className="mr-2 h-4 w-4 text-green-500" />
                  <span>WhatsApp</span>
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a
                  href="mailto:kalkiweb06@gmail.com"
                  className="flex items-center cursor-pointer py-2"
                >
                  <Mail className="mr-2 h-4 w-4 text-primary" />
                  <span>Email Us</span>
                </a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Full-Screen Premium Slide-Down Menu Overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            data-lenis-prevent="true"
            data-lenis-prevent-wheel="true"
            data-lenis-prevent-touch="true"
            tabIndex={-1}
            className="fixed inset-0 w-full h-[100dvh] bg-[#F8F8FA] text-[#0d0c22] z-50 overflow-y-auto overscroll-contain flex flex-col justify-start"
            style={{ WebkitOverflowScrolling: "touch", touchAction: "pan-y" }}
          >
            {/* Sticky Top Header with Logo & Close Button */}
            <div className="sticky top-0 left-0 right-0 z-50 bg-[#F8F8FA]/95 backdrop-blur-md border-b border-black/5 shrink-0">
              <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5 flex items-center justify-between">
                <Link
                  href="/"
                  onClick={() => setOpen(false)}
                  className="text-xl sm:text-2xl font-black uppercase tracking-tight text-[#0d0c22]"
                >
                  <span className="text-primary">Kalki</span> Web
                </Link>

                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close navigation menu"
                  className="group flex items-center gap-2 sm:gap-3 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full border border-black/10 hover:border-black bg-white hover:bg-black hover:text-white transition-all duration-300 cursor-pointer shadow-sm"
                >
                  <span className="font-bold text-[11px] sm:text-xs uppercase tracking-widest">
                    Close
                  </span>
                  <X className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:rotate-90" />
                </button>
              </div>
            </div>

            {/* Main Menu Typography List Section */}
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 pb-28">
              <div className="flex flex-col w-full">
                {menuMainLinks.map((item, index) => {
                  const isServices = item.isSubmenu;

                  return (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.035 }}
                      className="border-b border-black/10"
                    >
                      {/* Row Item */}
                      {isServices ? (
                        <div>
                          <div
                            onClick={() => setServicesExpanded((prev) => !prev)}
                            className="group flex items-center justify-between py-3.5 sm:py-4 md:py-5 hover:text-primary transition-all duration-300 cursor-pointer select-none"
                          >
                            <div className="flex items-baseline gap-2.5 sm:gap-4 md:gap-6 min-w-0">
                              <span className="text-2xl xs:text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#0d0c22] group-hover:text-primary group-hover:translate-x-1.5 transition-all duration-300 truncate">
                                {item.label}
                              </span>
                              <span className="text-[11px] sm:text-xs md:text-sm text-neutral-500 font-mono font-medium shrink-0">
                                {item.num}
                              </span>
                              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20 hidden xs:inline-flex items-center gap-1">
                                <Sparkles className="w-3 h-3" />9 Sub-Services
                              </span>
                            </div>

                            <div className="flex items-center gap-2 sm:gap-3 shrink-0 ml-3">
                              <div className="h-9 w-9 sm:h-12 sm:w-12 md:h-14 md:w-14 rounded-full border border-black/10 flex items-center justify-center text-[#0d0c22] group-hover:border-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                <motion.div
                                  animate={{
                                    rotate: servicesExpanded ? 180 : 0,
                                  }}
                                  transition={{ duration: 0.3 }}
                                >
                                  <ChevronDown className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
                                </motion.div>
                              </div>
                            </div>
                          </div>

                          {/* Collapsible/Expandable Submenu Grid */}
                          <AnimatePresence>
                            {servicesExpanded && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{
                                  duration: 0.35,
                                  ease: "easeInOut",
                                }}
                                className="overflow-hidden pb-6 sm:pb-8 pt-2"
                              >
                                <div className="bg-[#eeecf8] rounded-3xl p-4 sm:p-6 md:p-8 border border-black/5 shadow-inner">
                                  {/* Submenu Top Header */}
                                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-black/10">
                                    <span className="text-xs font-bold text-black">
                                      All Agency Services
                                    </span>
                                    <Link
                                      href="/services"
                                      onClick={() => setOpen(false)}
                                      className="text-xs sm:text-sm font-bold text-black hover:text-black transition-colors flex items-center gap-1.5"
                                    >
                                      <span>View Overview Page</span>
                                      <ArrowRight className="w-3.5 h-3.5" />
                                    </Link>
                                  </div>

                                  {/* 9 Services Sub-Grid */}
                                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                                    {allServicesSubmenu.map((sub, sIdx) => {
                                      const IconComp = sub.icon;
                                      return (
                                        <Link
                                          key={sIdx}
                                          href={sub.href}
                                          onClick={() => setOpen(false)}
                                          className="group/sub flex items-start gap-3.5 p-3.5 sm:p-4 rounded-2xl bg-white/80 hover:bg-white border border-black/5 hover:border-primary/40 hover:shadow-md transition-all duration-300"
                                        >
                                          <div className="flex flex-col text-left">
                                            <div className="flex items-center gap-2">
                                              <h4 className="text-sm sm:text-base font-bold text-[#0d0c22] group-hover/sub:text-primary transition-colors">
                                                {sub.title}
                                              </h4>
                                            </div>
                                            <p className="text-xs text-neutral-500 leading-snug mt-1 line-clamp-2">
                                              {sub.description}
                                            </p>
                                          </div>
                                        </Link>
                                      );
                                    })}
                                  </div>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <Link
                          href={item.href}
                          onClick={() => setOpen(false)}
                          className="group flex items-center justify-between py-3.5 sm:py-4 md:py-5 hover:text-primary transition-all duration-300"
                        >
                          <div className="flex items-baseline gap-2.5 sm:gap-4 md:gap-6 min-w-0">
                            <span className="text-2xl xs:text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#0d0c22] group-hover:text-primary group-hover:translate-x-1.5 transition-all duration-300 truncate">
                              {item.label}
                            </span>
                            <span className="text-[11px] sm:text-xs md:text-sm text-neutral-500 font-mono font-medium shrink-0">
                              {item.num}
                            </span>
                          </div>

                          <div className="h-9 w-9 sm:h-12 sm:w-12 md:h-14 md:w-14 rounded-full border border-black/10 flex items-center justify-center text-[#0d0c22] group-hover:border-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 shrink-0 ml-3">
                            <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 transform group-hover:translate-x-1 transition-transform duration-300" />
                          </div>
                        </Link>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
export default Header;
