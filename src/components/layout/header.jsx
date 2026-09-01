"use client";
import Link from "next/link";
import { Phone, ArrowRight, MessageCircle, Mail, X, } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, } from "@/components/ui/dropdown-menu";
import TypewriterEffect from "../typewriter-effect";
import HeroMarquee from "../hero-marquee";
const mainNavLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/careers", label: "Careers" },
    { href: "/contact", label: "Contact Us" },
];
const companyLinks = [
    { href: "/about", label: "About Us" },
    { href: "/portfolio", label: "Work" },
    { href: "/services", label: "Services" },
    { href: "/careers", label: "Careers" },
];
const servicesLinks = [
    { href: "/services/web-development", label: "Web Development" },
    { href: "/services/digital-marketing", label: "Digital Marketing" },
    { href: "/services/ecommerce", label: "Ecommerce" },
    { href: "/services/ai-services", label: "AI Services" },
    { href: "/services/shopify-development", label: "Shopify Development" },
    { href: "/services/mobile-app-development", label: "Mobile App Development" },
    { href: "/services/graphic-ui-ux", label: "Graphic & UI/UX" },
    { href: "/services/devops", label: "DevOps" },
    { href: "/services/back-office", label: "Back Office Services" },
];
function Logo() {
    return (<Link href="/" className="text-2xl font-bold tracking-widest uppercase">
      <span className="text-primary">K</span>alki Web
    </Link>);
}
function NavMenu({ isMobile = false, onClose, }) {
    const pathname = usePathname();
    const handleLinkClick = () => {
        if (onClose) {
            onClose();
        }
    };
    if (isMobile) {
        return (<div className="container mx-auto pt-24 px-4 h-full text-black overflow-y-auto pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-sm text-gray-500 uppercase tracking-widest">
              Company
            </h3>
            <ul className="space-y-2">
              {companyLinks.map((link) => (<li key={link.href}>
                  <Link href={link.href} onClick={handleLinkClick} className="text-3xl font-bold text-gray-800 hover:text-primary transition-colors duration-300">
                    {link.label}
                  </Link>
                </li>))}
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm text-gray-500 uppercase tracking-widest">
              Services
            </h3>
            <ul className="space-y-2">
              {servicesLinks.map((link) => (<li key={link.href}>
                  <Link href={link.href} onClick={handleLinkClick} className="text-3xl font-bold text-gray-800 hover:text-primary transition-colors duration-300">
                    {link.label}
                  </Link>
                </li>))}
            </ul>
          </div>
          <div className="space-y-8">
            <div>
              <h3 className="text-sm text-gray-500 uppercase tracking-widest mb-2">
                Subscribe to our Newsletter
              </h3>
              <form className="flex">
                <input type="email" placeholder="Your Email" className="bg-transparent border-b border-gray-400 w-full focus:outline-none focus:border-primary"/>
                <Button type="submit" variant="ghost" size="icon">
                  <ArrowRight />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>);
    }
    return (<nav>
      <ul className="hidden md:flex items-center gap-6">
        {mainNavLinks.map((link) => (<li key={link.href}>
            <Link href={link.href} className={cn("transition-colors hover:text-primary text-sm font-medium", pathname === link.href
                ? "text-primary"
                : "text-muted-foreground")}>
              {link.label}
            </Link>
          </li>))}
      </ul>
    </nav>);
}
export function Header() {
    const [open, setOpen] = useState(false);
    const menuVariants = {
        open: {
            top: 0,
            transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
        },
        closed: {
            top: "-100vh",
            transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
        },
    };
    return (<header className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4">
      <div className="w-full max-w-7xl flex h-20 items-center justify-between text-white bg-black/20 backdrop-blur-md rounded-full px-4 md:px-8">
        <div className="flex-1 flex justify-start">
          <button onClick={() => setOpen((prev) => !prev)} aria-label="Toggle navigation menu" className="group flex items-center gap-2 z-50">
            <div className="flex flex-col justify-center items-center h-10 w-10 bg-black/10 rounded-full transition-colors group-hover:bg-primary">
              <motion.div animate={open ? "open" : "closed"} variants={{
            open: { rotate: 45, y: 2 },
            closed: { rotate: 0, y: 0 },
        }} className="w-6 h-0.5 bg-white group-hover:bg-primary-foreground"/>
              <motion.div animate={open ? "open" : "closed"} variants={{
            open: { rotate: -45, y: -2 },
            closed: { rotate: 0, y: 0 },
        }} className="w-6 h-0.5 bg-white group-hover:bg-primary-foreground mt-1.5"/>
            </div>
            <span className={cn("font-medium text-sm tracking-wider uppercase hidden md:inline", open && "text-black")}>
              Menu
            </span>
          </button>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 hidden md:block">
          <Link href="/">
            <TypewriterEffect />
          </Link>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 w-[60%] overflow-hidden md:hidden">
          <HeroMarquee isLogo={true}/>
        </div>

        <div className="flex-1 flex justify-end items-center gap-2">
          <Button asChild variant="glitch" size="lg" className="rounded-full hidden md:inline-flex">
            <Link href="/contact">Get a free quote</Link>
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" className="rounded-full h-10 w-10 bg-white text-black hover:bg-gray-200">
                <Phone className="h-5 w-5"/>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuItem asChild>
                <a href="tel:+919304987505">
                  <Phone className="mr-2"/>
                  <span>Call</span>
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a href="https://wa.me/919304987505" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2"/>
                  <span>WhatsApp</span>
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a href="mailto:kalkiweb06@gmail.com">
                  <Mail className="mr-2"/>
                  <span>Email</span>
                </a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <AnimatePresence>
        {open && (<motion.div variants={menuVariants} initial="closed" animate="open" exit="closed" className="fixed left-0 w-full h-screen bg-neutral-100 z-40 origin-top overflow-y-auto">
            <NavMenu isMobile onClose={() => setOpen(false)}/>
            <div className="fixed top-5 right-5 z-50">
              <button onClick={() => setOpen(false)} aria-label="Close navigation menu" className="group flex items-center gap-2">
                <span className="font-medium text-sm tracking-wider uppercase text-black">
                  Close
                </span>
                <div className="flex flex-col justify-center items-center h-10 w-10 bg-black/10 rounded-full transition-colors group-hover:bg-black">
                  <X className="w-6 h-6 text-black group-hover:text-white"/>
                </div>
              </button>
            </div>
          </motion.div>)}
      </AnimatePresence>
    </header>);
}
