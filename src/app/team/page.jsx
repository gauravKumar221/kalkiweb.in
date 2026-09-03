"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Users,
  Search,
  Linkedin,
  Github,
  Twitter,
  Mail,
  ArrowRight,
  CheckCircle2,
  Code2,
  Palette,
  Zap,
  Target,
  HeartHandshake,
  Award,
  Layers,
  Flame,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

// Department categories
const departments = [
  { id: "all", label: "All Departments" },
  { id: "leadership", label: "Leadership & Strategy" },
  { id: "engineering", label: "Engineering & AI" },
  { id: "creative", label: "UI/UX & Creative" },
  { id: "growth", label: "Growth & Marketing" },
];

const ourValues = [
  {
    image: "https://picsum.photos/800/600",
    hint: "car emblem",
    title: "Craft & Arts",
    description:
      "We are artisans of the automotive world, dedicated to the highest quality and precision in every detail.",
  },
  {
    image: "https://picsum.photos/800/600",
    hint: "team collaboration",
    title: "Excellence",
    description:
      "We relentlessly pursue perfection, pushing the boundaries of performance and design.",
  },
  {
    image: "https://picsum.photos/800/600",
    hint: "engineers working",
    title: "Responsibility",
    description:
      "We take ownership of our work, our team, and our impact on the world, ensuring a legacy of greatness.",
  },
];

// Comprehensive team directory
const teamMembers = [
  {
    id: "founder",
    name: "Prince Sharma",
    role: "Founder & Technical Director",
    department: "leadership",
    departmentLabel: "Leadership & Strategy",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
    experience: "8+ Years",
    highlight: "Architected 100+ Enterprise Web Platforms",
    bio: "Passionate technologist driving the vision at Kalki Web. Oversees full-stack architecture, client growth roadmaps, and next-gen AI integration across all digital engagements.",
    skills: [
      "Full-Stack Architecture",
      "Next.js & Cloud",
      "AI Workflows",
      "Product Strategy",
    ],
    socials: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      email: "mailto:kalkiweb06@gmail.com",
    },
    quote:
      "Our mission is simple: build high-speed digital engines that translate directly into undeniable business growth.",
  },
  {
    id: "kiran",
    name: "Kiran Deepak",
    role: "Lead Content & Brand Strategist",
    department: "leadership",
    departmentLabel: "Leadership & Strategy",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    experience: "7+ Years",
    highlight: "Engineered 50+ High-Conversion Brand Narratives",
    bio: "Directs brand communications, editorial pillars, and consumer psychology frameworks to shape narratives that turn casual visitors into loyal brand champions.",
    skills: [
      "Brand Strategy",
      "Conversion Copywriting",
      "Content Architecture",
      "Creative Direction",
    ],
    socials: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "mailto:kalkiweb06@gmail.com",
    },
    quote:
      "Copy isn't just words on a screen; it's the emotional handshake between your product and your audience.",
  },
  {
    id: "neelu",
    name: "Neelu Kumari",
    role: "Senior Full-Stack & Next.js Engineer",
    department: "engineering",
    departmentLabel: "Engineering & AI",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    experience: "5+ Years",
    highlight: "Core Web Vitals & Sub-Second Speeds Master",
    bio: "Specializes in modern React/Next.js architectures, headless CMS integrations, and high-concurrency cloud endpoints with zero layout shift.",
    skills: ["React 19", "Next.js", "TypeScript", "Node.js", "PostgreSQL"],
    socials: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      email: "mailto:kalkiweb06@gmail.com",
    },
    quote:
      "Every millisecond shaved off load time is directly correlated with higher conversions and happier users.",
  },
  {
    id: "pooja",
    name: "Pooja Verma",
    role: "Cloud DevOps & Security Architect",
    department: "engineering",
    departmentLabel: "Engineering & AI",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80",
    experience: "6+ Years",
    highlight: "99.99% Uptime Across 60+ Cloud Infrastructure Clusters",
    bio: "Oversees containerization, CI/CD automated deployments, Kubernetes scaling, and hardened enterprise security standards for all agency client infrastructure.",
    skills: [
      "Docker & K8s",
      "AWS / GCP Edge",
      "CI/CD Pipelines",
      "Cybersecurity",
    ],
    socials: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      email: "mailto:kalkiweb06@gmail.com",
    },
    quote:
      "Resilient infrastructure is invisible when it's perfect—and that's the only benchmark we accept.",
  },
  {
    id: "siddharth",
    name: "Siddharth Roy",
    role: "AI Workflow & LLM Systems Engineer",
    department: "engineering",
    departmentLabel: "Engineering & AI",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
    experience: "4+ Years",
    highlight: "Deployed 20+ Production AI Support & Sales Agents",
    bio: "Builds custom generative AI assistants, retrieval-augmented generation (RAG) pipelines, and intelligent automations that empower customer service and lead capture.",
    skills: [
      "LangChain",
      "OpenAI & Anthropic APIs",
      "Python",
      "Vector Databases",
      "Prompt Ops",
    ],
    socials: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      email: "mailto:kalkiweb06@gmail.com",
    },
    quote:
      "AI isn't replacing the human connection; it's eliminating manual friction so humans can do their finest work.",
  },
  {
    id: "aman",
    name: "Aman Verma",
    role: "Headless Shopify & E-commerce Architect",
    department: "engineering",
    departmentLabel: "Engineering & AI",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80",
    experience: "5+ Years",
    highlight: "Over $15M GMV Processed Across Custom Storefronts",
    bio: "Crafts bespoke Shopify Plus themes, liquid integrations, and headless storefronts tailored for hyper-fast checkout and seamless inventory synchronization.",
    skills: [
      "Shopify Plus",
      "Liquid",
      "Hydrogen / Remix",
      "Stripe Integration",
      "GraphQL",
    ],
    socials: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      email: "mailto:kalkiweb06@gmail.com",
    },
    quote:
      "An online store should feel like a premier flagship boutique—smooth, effortless, and impossible to forget.",
  },
  {
    id: "aarav",
    name: "Aarav Sharma",
    role: "Principal UI/UX Product Designer",
    department: "creative",
    departmentLabel: "UI/UX & Creative",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80",
    experience: "6+ Years",
    highlight: "Redesigned 45+ B2B & Consumer Digital Interfaces",
    bio: "Translates complex business workflows into elegant, intuitive human interfaces. Creates comprehensive design systems, interactive prototypes, and typography hierarchies.",
    skills: [
      "Figma Systems",
      "Interaction Design",
      "User Testing",
      "Design Thinking",
      "Micro-Interactions",
    ],
    socials: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "mailto:kalkiweb06@gmail.com",
    },
    quote:
      "Design is not just what it looks like and feels like. Design is how it actually works for real people.",
  },
  {
    id: "ananya",
    name: "Ananya Sen",
    role: "Motion Designer & 3D Visualizer",
    department: "creative",
    departmentLabel: "UI/UX & Creative",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
    experience: "4+ Years",
    highlight: "Over 1M+ Views on Animated Brand Assets",
    bio: "Brings brands to life with fluid Framer animations, Three.js 3D web elements, and immersive micro-interactions that captivate modern audiences.",
    skills: [
      "Framer Motion",
      "Spline / 3D",
      "After Effects",
      "Web Animations",
      "Brand Assets",
    ],
    socials: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "mailto:kalkiweb06@gmail.com",
    },
    quote:
      "Fluid motion gives digital products a pulse, making software feel tangible, responsive, and alive.",
  },
  {
    id: "devika",
    name: "Devika Pillai",
    role: "Brand Identity & Graphic Artist",
    department: "creative",
    departmentLabel: "UI/UX & Creative",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80",
    experience: "5+ Years",
    highlight: "Crafted 70+ Iconic Logos & Visual Identity Systems",
    bio: "Specializes in corporate identities, luxury packaging, iconography, and visual styling that establishes instant credibility and emotional resonance.",
    skills: [
      "Brand Systems",
      "Vector Art",
      "Packaging Design",
      "Color Theory",
      "Art Direction",
    ],
    socials: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "mailto:kalkiweb06@gmail.com",
    },
    quote:
      "A distinct visual identity is a company's greatest competitive moat in a noisy digital marketplace.",
  },
  {
    id: "nandhini",
    name: "D. Nandhini",
    role: "Senior Digital Marketing & SEO Lead",
    department: "growth",
    departmentLabel: "Growth & Marketing",
    image:
      "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=800&q=80",
    experience: "6+ Years",
    highlight: "Driven 350% Organic Traffic Increases for Clients",
    bio: "Pioneers technical SEO audits, entity-based keyword architecture, and organic search optimization strategies that secure dominating rankings on Google.",
    skills: [
      "Technical SEO",
      "Keyword Architecture",
      "Google Search Console",
      "Content Clusters",
      "Backlink Strategy",
    ],
    socials: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "mailto:kalkiweb06@gmail.com",
    },
    quote:
      "SEO isn't about gaming algorithms; it's about building the most comprehensive answer on the internet.",
  },
  {
    id: "krithiga",
    name: "Krithiga M",
    role: "Performance Marketing & Paid Ads Lead",
    department: "growth",
    departmentLabel: "Growth & Marketing",
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80",
    experience: "5+ Years",
    highlight: "Scaled Multi-Million Ad Budgets at 4.2x ROAS",
    bio: "Manages hyper-targeted PPC campaigns across Google Ads, Meta Ads, and LinkedIn. Specializes in predictive audience targeting and conversion funnel velocity.",
    skills: [
      "Google Ads (PPC)",
      "Meta Performance Ads",
      "Attribution Modeling",
      "A/B Multivariate Testing",
    ],
    socials: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "mailto:kalkiweb06@gmail.com",
    },
    quote:
      "Data-driven creative paired with disciplined attribution is the secret recipe for scalable paid acquisition.",
  },
  {
    id: "rohit",
    name: "Rohit Malhotra",
    role: "Conversion Rate Optimization (CRO) Lead",
    department: "growth",
    departmentLabel: "Growth & Marketing",
    image:
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=800&q=80",
    experience: "5+ Years",
    highlight: "Generated Over $3.8M in Incremental Checkout Revenue",
    bio: "Analyzes user heatmaps, session replays, and checkout friction points to systematically lift landing page conversion rates and customer lifetime value.",
    skills: [
      "CRO Strategy",
      "Hotjar & FullStory",
      "Landing Page Funnels",
      "Google Analytics 4",
      "Behavioral Economics",
    ],
    socials: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "mailto:kalkiweb06@gmail.com",
    },
    quote:
      "Traffic is expensive. Doubling your conversion rate cuts your customer acquisition cost in half immediately.",
  },
];

// Key stats
const agencyStats = [
  { label: "Specialists & Innovators", value: "25+", icon: Users },
  { label: "Delivered Web Deployments", value: "180+", icon: Award },
  { label: "Client Retention Rate", value: "99.4%", icon: Target },
  { label: "Average Client Rating", value: "4.9 / 5", icon: Flame },
];

// Culture pillars
const culturePillars = [
  {
    icon: Code2,
    title: "Sub-Second Engineering",
    description:
      "We reject bloated templates and sluggish codebases. We engineer bespoke, zero-bloat Next.js platforms optimized for instant load times and peak Core Web Vitals.",
  },
  {
    icon: Palette,
    title: "Emotive Human Design",
    description:
      "Great design isn't superficial decoration. We create intuitive visual systems and micro-interactions that reduce user friction and foster deep brand reverence.",
  },
  {
    icon: Zap,
    title: "AI-Augmented Velocity",
    description:
      "We empower every engineer and marketer with state-of-the-art AI workflows, allowing us to ship high-quality enterprise solutions 3x faster without compromising craft.",
  },
  {
    icon: HeartHandshake,
    title: "Radical Transparency",
    description:
      "No corporate jargon or hidden fees. We treat your commercial goals as our own, providing live metric dashboards, clear sprints, and weekly strategic syncs.",
  },
];

// Workflow timeline
const collaborationSteps = [
  {
    number: "01",
    phase: "Discovery & Architecture",
    team: "Leadership + Strategy",
    description:
      "Deep dive into your market positioning, commercial objectives, and technical requirements to design a bulletproof roadmap.",
  },
  {
    number: "02",
    phase: "Interactive UI/UX Craft",
    team: "Product Designers",
    description:
      "Crafting wireframes, design systems, and responsive Figma prototypes with ruthless attention to typography and hierarchy.",
  },
  {
    number: "03",
    phase: "Next.js Full-Stack Build",
    team: "Engineering & DevOps",
    description:
      "Developing robust serverless architectures, integrating headless CMS/APIs, and enforcing automated CI/CD security pipelines.",
  },
  {
    number: "04",
    phase: "Growth, SEO & Optimization",
    team: "Performance Marketing",
    description:
      "Deploying high-intent SEO architectures, tracking funnels, and launching paid acquisition engines that scale client revenue.",
  },
];

export default function MeetOurTeamPage() {
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMember, setSelectedMember] = useState(null);

  // Filtered members based on department and search query
  const filteredMembers = useMemo(() => {
    return teamMembers.filter((member) => {
      const matchesTab = activeTab === "all" || member.department === activeTab;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        member.name.toLowerCase().includes(q) ||
        member.role.toLowerCase().includes(q) ||
        member.departmentLabel.toLowerCase().includes(q) ||
        member.skills.some((s) => s.toLowerCase().includes(q));
      return matchesTab && matchesSearch;
    });
  }, [activeTab, searchQuery]);

  return (
    <div className="bg-background text-foreground min-h-screen selection:bg-primary selection:text-black">
      {/* 1. Hero Section */}
      <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 border-b border-border/40 overflow-hidden">
        {/* Subtle Ambient Background Gradients */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-primary/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none" />

        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.08]">
              The People Behind the{" "}
              <span className="text-primary underline decoration-primary/40 decoration-wavy underline-offset-8">
                Code & Craft
              </span>
            </h1>

            <p className="text-muted-foreground text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto font-normal">
              We are a multidisciplinary team of software architects, UI/UX
              designers, data engineers, and growth strategists passionate about
              building digital products that accelerate businesses.
            </p>

            {/* Quick Hero Actions */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Button
                asChild
                size="lg"
                variant="glitch"
                className="rounded-full px-8 text-black font-bold cursor-pointer"
              >
                <Link href="/contact">Work With Our Team</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full px-8 border-white/20 text-white hover:bg-white hover:text-black transition-colors cursor-pointer"
              >
                <Link href="/careers">Join Our Ranks</Link>
              </Button>
            </div>
          </div>

          {/* 2. Key Statistics Bar */}
          <div className="mt-16 sm:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {agencyStats.map((stat, idx) => {
              const IconComp = stat.icon;
              return (
                <div
                  key={idx}
                  className="rounded-2xl p-6 bg-neutral-900/60 border border-white/10 backdrop-blur-sm flex flex-col items-center text-center space-y-2 group hover:border-primary/50 transition-all duration-300"
                >
                  <div className="p-2.5 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-black transition-colors duration-300 mb-1">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <span className="text-3xl sm:text-4xl font-black text-white font-mono tracking-tight group-hover:text-primary transition-colors">
                    {stat.value}
                  </span>
                  <span className="text-xs sm:text-sm text-muted-foreground font-medium">
                    {stat.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className=" container mb-16 md:mb-24 space-y-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          OUR DEVIILLISH VALUES
        </h2>
        {ourValues.map((value, index) => (
          <div
            key={index}
            className={`grid md:grid-cols-2 gap-8 md:gap-16 items-center ${index % 2 !== 0 ? "md:grid-flow-row-dense" : ""}`}
          >
            <div className={`${index % 2 !== 0 ? "md:col-start-2" : ""}`}>
              <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
              <p className="text-neutral-400">{value.description}</p>
            </div>
            <div>
              <Image
                src={value.image}
                data-ai-hint={value.hint}
                alt={value.title}
                width={800}
                height={600}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        ))}
      </section>

      {/* 4. Team DNA & Culture Pillars */}
      <section className="py-20 md:py-28 bg-background relative border-b border-border/40">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/25 text-primary text-xs font-bold uppercase tracking-widest">
              <Flame className="w-3.5 h-3.5" />
              <span>Our Culture & DNA</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              The Principles That Bind Our Team
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              We operate without red tape or corporate silos. Every specialist
              at Kalki Web is driven by extreme ownership, uncompromised craft,
              and measurable client results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {culturePillars.map((pillar, idx) => {
              const IconComp = pillar.icon;
              return (
                <div
                  key={idx}
                  className="rounded-3xl p-8 sm:p-10 bg-neutral-900/60 border border-white/10 hover:border-primary/40 transition-all duration-300 flex flex-col justify-between space-y-6 group"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/25 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-black transition-colors duration-300">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-neutral-300 text-sm sm:text-base leading-relaxed font-normal">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center gap-2 text-xs font-mono text-primary">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Non-Negotiable Agency Standard</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. How Our Teams Collaborate (Workflow Lifecycle) */}
      <section className="py-20 md:py-28 bg-neutral-950/80 relative border-b border-border/40">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/25 text-primary text-xs font-bold uppercase tracking-widest">
              <Layers className="w-3.5 h-3.5" />
              <span>Cross-Disciplinary Symphony</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              How Our Specialists Deliver Together
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              No handoff friction. Our engineers, designers, copywriters, and
              marketers collaborate side-by-side from day zero to deployment.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {collaborationSteps.map((step, idx) => (
              <div
                key={idx}
                className="relative rounded-3xl p-6 sm:p-7 bg-neutral-900/70 border border-white/10 hover:border-primary/40 flex flex-col justify-between space-y-6 transition-all duration-300"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-black font-mono text-white/25">
                      {step.number}
                    </span>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-primary px-2 py-0.5 rounded-full bg-primary/10 border border-primary/20">
                      {step.team}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white">{step.phase}</h3>
                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 text-[11px] font-mono text-neutral-400 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                  <span>Phase Output Delivered</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. High-Impact Careers & Consultation Banner */}
      <section className="py-20 md:py-28 bg-neutral-950 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-primary/10 rounded-full blur-[160px] pointer-events-none" />

        <div className="container max-w-4xl mx-auto px-4 sm:px-6 relative z-10 space-y-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/25 text-primary text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Scale With Us</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight">
            Ready to Build With the Best in the Industry?
          </h2>

          <p className="text-neutral-300 text-sm sm:text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            Whether you need a full dedicated engineering team, a brand
            transformation, or high-velocity SEO & digital growth, we're ready
            to partner with you.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Button
              asChild
              size="lg"
              variant="glitch"
              className="rounded-full px-8 text-black font-bold cursor-pointer"
            >
              <Link href="/contact">Schedule Team Consultation</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full px-8 border-white/20 text-white hover:bg-white hover:text-black transition-colors cursor-pointer"
            >
              <Link href="/careers">View Open Positions</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 7. Detailed Member Profile Modal */}
      <Dialog
        open={!!selectedMember}
        onOpenChange={(open) => !open && setSelectedMember(null)}
      >
        <DialogContent className="max-w-2xl bg-neutral-950 border border-white/15 text-white p-6 sm:p-8 rounded-3xl shadow-2xl">
          {selectedMember && (
            <div className="space-y-6">
              <DialogHeader className="text-left space-y-2">
                <div className="flex items-center gap-3">
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border border-primary/40 shrink-0">
                    <Image
                      src={selectedMember.image}
                      alt={selectedMember.name}
                      fill
                      unoptimized
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-1">
                    <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-[10px] font-mono font-bold uppercase tracking-wider">
                      {selectedMember.departmentLabel}
                    </div>
                    <DialogTitle className="text-2xl font-bold text-white">
                      {selectedMember.name}
                    </DialogTitle>
                    <DialogDescription className="text-xs sm:text-sm text-neutral-300 font-medium">
                      {selectedMember.role} &bull; {selectedMember.experience}{" "}
                      Exp
                    </DialogDescription>
                  </div>
                </div>
              </DialogHeader>

              {/* Bio & Philosophy */}
              <div className="space-y-4 text-left">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 font-mono mb-2">
                    Professional Background
                  </h4>
                  <p className="text-sm text-neutral-200 leading-relaxed">
                    {selectedMember.bio}
                  </p>
                </div>

                {/* Key Accomplishment */}
                <div className="p-3.5 rounded-2xl bg-primary/10 border border-primary/20 flex items-start gap-3">
                  <Award className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold text-white block">
                      Key Impact Milestone
                    </span>
                    <span className="text-xs text-primary">
                      {selectedMember.highlight}
                    </span>
                  </div>
                </div>

                {/* Philosophy Quote */}
                {selectedMember.quote && (
                  <div className="p-4 rounded-2xl bg-neutral-900 border border-white/10 italic text-xs sm:text-sm text-neutral-300">
                    "{selectedMember.quote}"
                  </div>
                )}

                {/* Core Skills & Tools */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 font-mono mb-2">
                    Specialized Competencies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedMember.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-xs px-3 py-1 rounded-full bg-white/10 border border-white/15 text-white font-mono"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Footer / Contact Action */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  {selectedMember.socials.linkedin && (
                    <a
                      href={selectedMember.socials.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-full bg-white/10 hover:bg-primary hover:text-black text-white transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  )}
                  {selectedMember.socials.github && (
                    <a
                      href={selectedMember.socials.github}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-full bg-white/10 hover:bg-primary hover:text-black text-white transition-colors"
                      aria-label="GitHub"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                  {selectedMember.socials.email && (
                    <a
                      href={selectedMember.socials.email}
                      className="p-2 rounded-full bg-white/10 hover:bg-primary hover:text-black text-white transition-colors"
                      aria-label="Email"
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                  )}
                </div>

                <Button
                  asChild
                  variant="glitch"
                  size="sm"
                  className="rounded-full px-5 text-black font-bold cursor-pointer"
                >
                  <Link href="/contact" onClick={() => setSelectedMember(null)}>
                    Collaborate With {selectedMember.name.split(" ")[0]}
                  </Link>
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
