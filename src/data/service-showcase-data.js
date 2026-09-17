/**
 * Service Showcase Configuration Registry
 * Dedicated content tailored specifically for New Business Owners across all services.
 */

export const serviceShowcaseData = {
  // =========================================================================
  // 1. DIGITAL MARKETING
  // =========================================================================
  "digital-marketing": {
    serviceKey: "digital-marketing",
    titleLine1: "SCALE YOUR",
    titleLine2: "BRAND TODAY!",
    subtitle:
      "High-converting ad campaigns, viral social funnels, and proven ROAS engineered for new business owners to acquire their first 1,000 customers.",
    pillImage1: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&auto=format&fit=crop&q=80",
    pillAlt1: "Growth Analytics Graph",
    pillImage2: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&auto=format&fit=crop&q=80",
    pillAlt2: "Campaign Conversion Funnel",

    // Floating Card 1: Top Left - Leads Acquired
    card1: {
      metric: "12.8K",
      rating: "4.9 (3.4k reviews)",
      label: "Targeted Buyers Acquired",
      avatars: [
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80",
      ],
      avatarExtra: "8k+",
    },

    // Floating Card 2: Bottom Left - Live Leads / Orders Funnel
    card2: {
      title: "Live Growth Funnel",
      badge: "Scaling Fast",
      item1: {
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&auto=format&fit=crop&q=80",
        tag: "Inbound Lead",
        name: "James Cooper",
        sub: "Google Search PMax",
        metricTag: "ROAS",
        metricValue: "5.2x",
      },
      item2: {
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&auto=format&fit=crop&q=80",
        tag: "High-Value Buyer",
        name: "Sofia Patel",
        sub: "Instagram Video Reel",
        metricTag: "ROAS",
        metricValue: "4.6x",
      },
      barcodeLabel: "TRACKER // KALKI-GROWTH-METRICS-2026",
    },

    // Central Smartphone Mockup (Marketing Command Center)
    phone: {
      gradient: "from-[#2563EB] via-[#3B82F6] to-[#60A5FA]",
      headerTop: "Launch Your",
      headerMain: "Growth Engine",
      userAvatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=120&auto=format&fit=crop&q=80",
      form: {
        field1Label: "Target Channel",
        field1Value: "Google & Meta PMax",
        field2Label: "Campaign Objective",
        field2Value: "High-Intent Paying Customers",
        field3Label: "Daily Budget",
        field3Value: "$25 / day starter",
        field4Label: "Target ROAS",
        field4Value: "4.5x - 6.0x",
        btnText: "Launch Growth Campaign",
      },
      liveCard: {
        badge: "Meta & Google Ads Active",
        title: "PMax & Social Funnel",
        leftValue: "1,420",
        leftLabel: "Clicks Today",
        middleValue: "4.8x",
        middleLabel: "Avg ROAS",
        rightValue: "+340%",
        rightLabel: "Conversions",
      },
    },

    // Floating Card 3: Top Right - Campaign Revenue
    card3: {
      badgeTitle: "Meta & Google Ads",
      iconColor: "bg-blue-500",
      statLeft: "1,420",
      labelLeft: "Clicks (Today)",
      statMid: "4.8x",
      labelMid: "Live ROAS",
      statRight: "$3,840",
      labelRight: "Revenue Made",
      price: "$25",
      priceUnit: "/day plan",
      btnText: "Scale Campaign",
    },

    // Floating Card 4: Middle Right - Transparency Guarantee
    card4: {
      metric: "100%",
      label: "Transparent ROI & No Lock-In Contracts",
      gradient: "bg-[#2563EB] shadow-[0_15px_35px_rgba(37,99,235,0.28)]",
    },

    // Floating Card 5: Bottom Right - AI Assistant
    card5: {
      title: "Ad Strategist AI",
      subtitle: "Optimizing budget in real-time",
      icon: "trending",
    },

    // Mobile fallback cards
    mobile: {
      card1Metric: "12.8K",
      card1Label: "Targeted Buyers Acquired (4.9 ★)",
      card2Metric: "100%",
      card2Label: "Transparent ROI Guaranteed",
    },
  },

  // =========================================================================
  // 2. AI SERVICES
  // =========================================================================
  "ai-services": {
    serviceKey: "ai-services",
    titleLine1: "AUTOMATE YOUR",
    titleLine2: "BUSINESS TODAY!",
    subtitle:
      "24/7 autonomous AI agents, smart customer support bots, and predictive workflow automation that save founders 40+ hours every single week.",
    pillImage1: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=300&auto=format&fit=crop&q=80",
    pillAlt1: "Neural AI Network Interface",
    pillImage2: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=300&auto=format&fit=crop&q=80",
    pillAlt2: "AI Chatbot Intelligence",

    card1: {
      metric: "98.8%",
      rating: "5.0 (2.1k founders)",
      label: "Founder Tasks Automated",
      avatars: [
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80",
      ],
      avatarExtra: "2k+",
    },

    card2: {
      title: "Active AI Workers",
      badge: "24/7 Live",
      item1: {
        avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80&auto=format&fit=crop&q=80",
        tag: "Customer Copilot",
        name: "Kalki Support Bot",
        sub: "0.3s Instant Response",
        metricTag: "Status",
        metricValue: "99.4%",
      },
      item2: {
        avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=80&auto=format&fit=crop&q=80",
        tag: "Autonomous Agent",
        name: "Lead Qualifier AI",
        sub: "Auto-Books Sales Calls",
        metricTag: "Status",
        metricValue: "92% Qual",
      },
      barcodeLabel: "NEURAL TELEMETRY // AI-AGENTIC-WORKFLOWS",
    },

    phone: {
      gradient: "from-[#7C3AED] via-[#8B5CF6] to-[#A78BFA]",
      headerTop: "Deploy Smart",
      headerMain: "AI Copilots",
      userAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80",
      form: {
        field1Label: "AI Agent Role",
        field1Value: "24/7 Customer Support & Sales",
        field2Label: "Knowledge Base",
        field2Value: "Your Website, Docs & FAQs",
        field3Label: "Response Speed",
        field3Value: "< 0.4s Instant",
        field4Label: "Automation Level",
        field4Value: "100% Auto-Pilot",
        btnText: "Deploy AI Agent",
      },
      liveCard: {
        badge: "Autonomous AI Live",
        title: "Kalki Intelligent Copilot",
        leftValue: "1,840",
        leftLabel: "Chats Solved",
        middleValue: "0.3s",
        middleLabel: "Avg Speed",
        rightValue: "99.4%",
        rightLabel: "Satisfaction",
      },
    },

    card3: {
      badgeTitle: "Autonomous Sales Bot",
      iconColor: "bg-purple-500",
      statLeft: "1,840",
      labelLeft: "Queries Solved",
      statMid: "0.3s",
      labelMid: "Response",
      statRight: "$12.4K",
      labelRight: "Deals Closed",
      price: "10x",
      priceUnit: "speed gain",
      btnText: "View Pipeline",
    },

    card4: {
      metric: "10x",
      label: "Faster Business Operations Without Extra Hires",
      gradient: "bg-[#7C3AED] shadow-[0_15px_35px_rgba(124,58,237,0.28)]",
    },

    card5: {
      title: "Kalki AI Copilot",
      subtitle: "All workflows synchronized",
      icon: "bot",
    },

    mobile: {
      card1Metric: "98.8%",
      card1Label: "Automated Workflows (5.0 ★)",
      card2Metric: "10x",
      card2Label: "Faster Business Operations",
    },
  },

  // =========================================================================
  // 3. WEB DEVELOPMENT
  // =========================================================================
  "web-development": {
    serviceKey: "web-development",
    titleLine1: "LAUNCH YOUR",
    titleLine2: "WEBSITE TODAY!",
    subtitle:
      "Ultra-fast Next.js websites and web applications built to establish instant brand authority, crush Google SEO, and convert visitors into paying clients.",
    pillImage1: "/illustrations/seo_search_results.jpg",
    pillAlt1: "Google Search SEO Optimization",
    pillImage2: "/illustrations/team_collaboration.jpg",
    pillAlt2: "Modern Full-Stack Web Development",

    card1: {
      metric: "99/100",
      rating: "5.0 (4.2k visitors)",
      label: "Google PageSpeed Score",
      avatars: [
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80",
      ],
      avatarExtra: "99+",
    },

    card2: {
      title: "Core Web Vitals",
      badge: "Edge Deployed",
      item1: {
        avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80&auto=format&fit=crop&q=80",
        tag: "Load Performance",
        name: "LCP Benchmark",
        sub: "Sub-Second Global CDN",
        metricTag: "Speed",
        metricValue: "0.6s",
      },
      item2: {
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&auto=format&fit=crop&q=80",
        tag: "User Experience",
        name: "Layout Stability",
        sub: "Zero Visual Shifts (CLS)",
        metricTag: "Score",
        metricValue: "0.00",
      },
      barcodeLabel: "BUILD ARTIFACT // NEXTJS-15-EDGE-TURBO",
    },

    phone: {
      gradient: "from-[#059669] via-[#10B981] to-[#34D399]",
      headerTop: "Ship Fast &",
      headerMain: "Scale Instantly",
      userAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80",
      form: {
        field1Label: "Tech Stack",
        field1Value: "Next.js 15 + React + Tailwind",
        field2Label: "Hosting Architecture",
        field2Value: "Vercel Edge Global CDN",
        field3Label: "SEO & Speed",
        field3Value: "100/100 Core Vitals",
        field4Label: "Security",
        field4Value: "SSL & DDoS Shield Active",
        btnText: "Launch Web Platform",
      },
      liveCard: {
        badge: "Live Website Platform",
        title: "Enterprise Web App",
        leftValue: "45.2K",
        leftLabel: "Monthly Users",
        middleValue: "99.99%",
        middleLabel: "Uptime SLA",
        rightValue: "3.4x",
        rightLabel: "Conversions",
      },
    },

    card3: {
      badgeTitle: "Next.js 15 Web Platform",
      iconColor: "bg-emerald-500",
      statLeft: "0.6s",
      labelLeft: "Load Time",
      statMid: "99.99%",
      labelMid: "Uptime",
      statRight: "100%",
      labelRight: "SEO Ready",
      price: "$0",
      priceUnit: "server downtime",
      btnText: "Visit Live Demo",
    },

    card4: {
      metric: "100%",
      label: "Mobile-Responsive & SEO-Ranked Architecture",
      gradient: "bg-[#059669] shadow-[0_15px_35px_rgba(5,150,105,0.28)]",
    },

    card5: {
      title: "Web Architect AI",
      subtitle: "Zero technical debt guaranteed",
      icon: "code",
    },

    mobile: {
      card1Metric: "99/100",
      card1Label: "PageSpeed Performance (5.0 ★)",
      card2Metric: "100%",
      card2Label: "Mobile Responsive & SEO Ready",
    },
  },

  // =========================================================================
  // 4. E-COMMERCE
  // =========================================================================
  "ecommerce": {
    serviceKey: "ecommerce",
    titleLine1: "SELL YOUR",
    titleLine2: "PRODUCTS TODAY!",
    subtitle:
      "Turnkey online stores with frictionless 1-click checkout, automated inventory sync, and multi-currency payments designed to turn browsers into repeat buyers.",
    pillImage1: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=300&auto=format&fit=crop&q=80",
    pillAlt1: "Modern E-Commerce Storefront",
    pillImage2: "https://images.unsplash.com/photo-1556742049-0a67e5572293?w=300&auto=format&fit=crop&q=80",
    pillAlt2: "Instant Frictionless Checkout",

    card1: {
      metric: "$18.4K",
      rating: "4.9 (1.2k orders)",
      label: "First Month Starter Revenue",
      avatars: [
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80",
      ],
      avatarExtra: "1.2k",
    },

    card2: {
      title: "Recent Customer Orders",
      badge: "Paid & Fulfilled",
      item1: {
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&auto=format&fit=crop&q=80",
        tag: "Order #9042",
        name: "Premium Starter Bundle",
        sub: "Stripe 1-Click Pay",
        metricTag: "Total",
        metricValue: "$149.00",
      },
      item2: {
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&auto=format&fit=crop&q=80",
        tag: "Order #9043",
        name: "Deluxe Product Kit",
        sub: "Apple Pay Checkout",
        metricTag: "Total",
        metricValue: "$89.00",
      },
      barcodeLabel: "INVOICE DISPATCH // KALKI-ECOM-FULFILLMENT",
    },

    phone: {
      gradient: "from-[#D97706] via-[#F59E0B] to-[#FCD34D]",
      headerTop: "Your Online",
      headerMain: "Storefront",
      userAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&auto=format&fit=crop&q=80",
      form: {
        field1Label: "Store Platform",
        field1Value: "Headless E-Com & Custom Cart",
        field2Label: "Payment Gateways",
        field2Value: "Stripe, Apple Pay & PayPal",
        field3Label: "Checkout Flow",
        field3Value: "1-Click Accelerated Checkout",
        field4Label: "Inventory Sync",
        field4Value: "Real-Time Auto Stock",
        btnText: "Start Selling Online",
      },
      liveCard: {
        badge: "Live Store Sales",
        title: "DTC Brand Store",
        leftValue: "$2,840",
        leftLabel: "Sales Today",
        middleValue: "4.8%",
        middleLabel: "Conv Rate",
        rightValue: "38",
        rightLabel: "Orders Made",
      },
    },

    card3: {
      badgeTitle: "Accelerated Checkout",
      iconColor: "bg-amber-500",
      statLeft: "$2,840",
      labelLeft: "Today Sales",
      statMid: "15s",
      labelMid: "Checkout Time",
      statRight: "-42%",
      labelRight: "Abandonment",
      price: "3x",
      priceUnit: "sales boost",
      btnText: "Explore Store",
    },

    card4: {
      metric: "3x",
      label: "Higher Checkout Conversion with 1-Click Pay",
      gradient: "bg-[#D97706] shadow-[0_15px_35px_rgba(217,119,6,0.28)]",
    },

    card5: {
      title: "Sales Alert Bot",
      subtitle: "Cha-ching! New order $149",
      icon: "shopping",
    },

    mobile: {
      card1Metric: "$18.4K",
      card1Label: "Starter Store Revenue (4.9 ★)",
      card2Metric: "3x",
      card2Label: "Higher Checkout Conversion",
    },
  },

  // =========================================================================
  // 5. SHOPIFY DEVELOPMENT
  // =========================================================================
  "shopify-development": {
    serviceKey: "shopify-development",
    titleLine1: "BUILD YOUR",
    titleLine2: "SHOPIFY STORE!",
    subtitle:
      "Custom Shopify 2.0 theme design, high-converting checkout flows, and automated app integrations created for new merchants to scale profitably.",
    pillImage1: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=300&auto=format&fit=crop&q=80",
    pillAlt1: "Shopify Brand Showcase",
    pillImage2: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=300&auto=format&fit=crop&q=80",
    pillAlt2: "Shopify Package Shipping",

    card1: {
      metric: "3.2x",
      rating: "5.0 (500+ stores)",
      label: "Average Conversion Increase",
      avatars: [
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80",
      ],
      avatarExtra: "500+",
    },

    card2: {
      title: "Shopify 2.0 Features",
      badge: "Store Ready",
      item1: {
        avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80&auto=format&fit=crop&q=80",
        tag: "Theme Speed",
        name: "Shopify 2.0 Theme",
        sub: "Zero Plugin Bloat",
        metricTag: "Speed",
        metricValue: "98/100",
      },
      item2: {
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&auto=format&fit=crop&q=80",
        tag: "Cart Recovery",
        name: "Automated Retention",
        sub: "Klaviyo & SMS Flows",
        metricTag: "Saved",
        metricValue: "+28% Rev",
      },
      barcodeLabel: "OFFICIAL PARTNER // SHOPIFY-PLUS-VERIFIED",
    },

    phone: {
      gradient: "from-[#008060] via-[#004C3F] to-[#002E25]",
      headerTop: "Your Shopify",
      headerMain: "Business Hub",
      userAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80",
      form: {
        field1Label: "Theme Architecture",
        field1Value: "Bespoke Shopify 2.0 Sections",
        field2Label: "App Stack",
        field2Value: "Klaviyo, Reviews & Upsell",
        field3Label: "Payment System",
        field3Value: "Shopify Payments & Shop Pay",
        field4Label: "Mobile Speed",
        field4Value: "Under 1.2s Fast Load",
        btnText: "Launch Shopify Store",
      },
      liveCard: {
        badge: "Shopify Store Live",
        title: "DTC Apparel Brand",
        leftValue: "$3,920",
        leftLabel: "Today Revenue",
        middleValue: "4.8%",
        middleLabel: "Conv Rate",
        rightValue: "184",
        rightLabel: "Orders Made",
      },
    },

    card3: {
      badgeTitle: "Shopify Plus Ready",
      iconColor: "bg-[#008060]",
      statLeft: "$3,920",
      labelLeft: "Today Rev",
      statMid: "98/100",
      labelMid: "Speed Score",
      statRight: "3.2x",
      labelRight: "ROAS Scale",
      price: "100%",
      priceUnit: "turnkey build",
      btnText: "Inspect Store",
    },

    card4: {
      metric: "100%",
      label: "Turnkey Store Setup with Zero Tech Headaches",
      gradient: "bg-[#008060] shadow-[0_15px_35px_rgba(0,128,96,0.28)]",
    },

    card5: {
      title: "Shopify Growth Bot",
      subtitle: "Ready to scale holiday orders",
      icon: "store",
    },

    mobile: {
      card1Metric: "3.2x",
      card1Label: "Sales Conversion Increase (5.0 ★)",
      card2Metric: "100%",
      card2Label: "Turnkey Store Delivery",
    },
  },

  // =========================================================================
  // 6. GRAPHIC UI/UX DESIGN
  // =========================================================================
  "graphic-ui-ux": {
    serviceKey: "graphic-ui-ux",
    titleLine1: "CRAFT YOUR",
    titleLine2: "BRAND TODAY!",
    subtitle:
      "World-class UI/UX design, interactive Figma prototypes, and distinctive visual identities that make new businesses look world-class from day one.",
    pillImage1: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=300&auto=format&fit=crop&q=80",
    pillAlt1: "Figma UI/UX Design Prototype",
    pillImage2: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=300&auto=format&fit=crop&q=80",
    pillAlt2: "Creative Digital Art Direction",

    card1: {
      metric: "4.9★",
      rating: "5.0 (160+ brands)",
      label: "User Delight Score",
      avatars: [
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80",
      ],
      avatarExtra: "160+",
    },

    card2: {
      title: "Design System Tokens",
      badge: "Figma Ready",
      item1: {
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&auto=format&fit=crop&q=80",
        tag: "Component System",
        name: "UI Component Kit",
        sub: "80+ Responsive States",
        metricTag: "Tokens",
        metricValue: "120+",
      },
      item2: {
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&auto=format&fit=crop&q=80",
        tag: "User Experience",
        name: "Interactive Prototype",
        sub: "Tested with 50+ Users",
        metricTag: "Delight",
        metricValue: "98%",
      },
      barcodeLabel: "FIGMA FILE // DESIGN-SYSTEM-TOKEN-SPEC-2026",
    },

    phone: {
      gradient: "from-[#EA580C] via-[#F97316] to-[#FB923C]",
      headerTop: "Designed To",
      headerMain: "Convert & Inspire",
      userAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80",
      form: {
        field1Label: "Design Deliverable",
        field1Value: "Figma File + Brand Identity Kit",
        field2Label: "Typography & Colors",
        field2Value: "Modern Curated Design Tokens",
        field3Label: "Micro-Interactions",
        field3Value: "Engaging Animated States",
        field4Label: "Responsiveness",
        field4Value: "Pixel-Perfect Mobile & Desktop",
        btnText: "Preview Figma Prototype",
      },
      liveCard: {
        badge: "User Engagement Surge",
        title: "Fintech Mobile App",
        leftValue: "+82%",
        leftLabel: "Engagement",
        middleValue: "98%",
        middleLabel: "Usability",
        rightValue: "14%",
        rightLabel: "Bounce Rate",
      },
    },

    card3: {
      badgeTitle: "Complete Brand Kit",
      iconColor: "bg-orange-500",
      statLeft: "+82%",
      labelLeft: "Engagement",
      statMid: "98%",
      labelMid: "User Score",
      statRight: "100%",
      labelRight: "Vector Ready",
      price: "100%",
      priceUnit: "custom design",
      btnText: "View Showcase",
    },

    card4: {
      metric: "100%",
      label: "Bespoke Brand Identity & Custom Design System",
      gradient: "bg-[#EA580C] shadow-[0_15px_35px_rgba(234,88,12,0.28)]",
    },

    card5: {
      title: "Creative Director AI",
      subtitle: "Exporting production Figma tokens",
      icon: "palette",
    },

    mobile: {
      card1Metric: "4.9★",
      card1Label: "User Delight Score (5.0 ★)",
      card2Metric: "100%",
      card2Label: "Bespoke Brand Identity",
    },
  },

  // =========================================================================
  // 7. MOBILE APP DEVELOPMENT
  // =========================================================================
  "mobile-app-development": {
    serviceKey: "mobile-app-development",
    titleLine1: "LAUNCH YOUR",
    titleLine2: "MOBILE APP!",
    subtitle:
      "Native iOS & Android mobile apps built from a single codebase so new business founders launch on the App Store & Google Play with minimal overhead.",
    pillImage1: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=300&auto=format&fit=crop&q=80",
    pillAlt1: "iOS & Android Smartphone Screens",
    pillImage2: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=300&auto=format&fit=crop&q=80",
    pillAlt2: "Mobile App User Interface",

    card1: {
      metric: "4.9★",
      rating: "5.0 (920+ reviews)",
      label: "App Store Rating",
      avatars: [
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80",
      ],
      avatarExtra: "50k",
    },

    card2: {
      title: "App Store Publishing",
      badge: "Approved & Live",
      item1: {
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&auto=format&fit=crop&q=80",
        tag: "iOS App Store",
        name: "Production v2.1",
        sub: "Apple Reviewed & Passed",
        metricTag: "Status",
        metricValue: "Live",
      },
      item2: {
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&auto=format&fit=crop&q=80",
        tag: "Google Play Store",
        name: "Production v2.1",
        sub: "Zero Policy Violations",
        metricTag: "Status",
        metricValue: "Live",
      },
      barcodeLabel: "BUILD BINARY // SHA-256-IOS-ANDROID-OK",
    },

    phone: {
      gradient: "from-[#0284C7] via-[#0EA5E9] to-[#38BDF8]",
      headerTop: "Smooth & Native",
      headerMain: "On Every Phone",
      userAvatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=120&auto=format&fit=crop&q=80",
      form: {
        field1Label: "Cross-Platform Framework",
        field1Value: "Flutter & React Native",
        field2Label: "Cloud Backend",
        field2Value: "Real-Time Firebase & Node API",
        field3Label: "Push Notifications",
        field3Value: "Instant Smart Segment Alerts",
        field4Label: "Offline Mode",
        field4Value: "Automatic Local Cache Sync",
        btnText: "Test Live Mobile Build",
      },
      liveCard: {
        badge: "Live App Performance",
        title: "On-Demand Delivery App",
        leftValue: "18.5K",
        leftLabel: "Active Users",
        middleValue: "99.9%",
        middleLabel: "Crash Free",
        rightValue: "4.9★",
        rightLabel: "Avg Rating",
      },
    },

    card3: {
      badgeTitle: "iOS & Android Build",
      iconColor: "bg-sky-500",
      statLeft: "18.5K",
      labelLeft: "Active Users",
      statMid: "99.9%",
      labelMid: "Crash Free",
      statRight: "4.9★",
      labelRight: "Store Rating",
      price: "1",
      priceUnit: "shared codebase",
      btnText: "Download Beta",
    },

    card4: {
      metric: "99.9%",
      label: "Crash-Free Rate with Native App Performance",
      gradient: "bg-[#0284C7] shadow-[0_15px_35px_rgba(2,132,199,0.28)]",
    },

    card5: {
      title: "App Release Bot",
      subtitle: "Build compiled & approved",
      icon: "smartphone",
    },

    mobile: {
      card1Metric: "4.9★",
      card1Label: "App Store Rating (5.0 ★)",
      card2Metric: "99.9%",
      card2Label: "Crash-Free Native Performance",
    },
  },

  // =========================================================================
  // 8. DEVOPS & CLOUD
  // =========================================================================
  "devops": {
    serviceKey: "devops",
    titleLine1: "SCALE YOUR",
    titleLine2: "CLOUD INFRA!",
    subtitle:
      "Automated CI/CD pipelines, 99.99% uptime, and cost controls so new business founders never worry about costly outages during sudden customer traffic spikes.",
    pillImage1: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=300&auto=format&fit=crop&q=80",
    pillAlt1: "Cloud Server Datacenter Rack",
    pillImage2: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=300&auto=format&fit=crop&q=80",
    pillAlt2: "Zero Trust Security Architecture",

    card1: {
      metric: "99.99%",
      rating: "5.0 (300+ servers)",
      label: "Guaranteed Uptime SLA",
      avatars: [
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80",
      ],
      avatarExtra: "300+",
    },

    card2: {
      title: "CI/CD Pipeline Telemetry",
      badge: "All Passing",
      item1: {
        avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80&auto=format&fit=crop&q=80",
        tag: "GitHub Action",
        name: "Deploy #512 - Production",
        sub: "Zero-Downtime Rollout",
        metricTag: "Time",
        metricValue: "38s",
      },
      item2: {
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&auto=format&fit=crop&q=80",
        tag: "Kubernetes Auto-Scale",
        name: "Traffic Surge Pods",
        sub: "Auto-Scaled +8 Nodes",
        metricTag: "Health",
        metricValue: "100%",
      },
      barcodeLabel: "INFRASTRUCTURE // TERRAFORM-K8S-HEALTH-OK",
    },

    phone: {
      gradient: "from-[#4F46E5] via-[#6366F1] to-[#818CF8]",
      headerTop: "Cloud Control",
      headerMain: "In Your Pocket",
      userAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80",
      form: {
        field1Label: "Cloud Provider",
        field1Value: "AWS / Google Cloud / Vercel",
        field2Label: "Continuous Delivery",
        field2Value: "Automated GitHub Actions CI/CD",
        field3Label: "Firewall & Security",
        field3Value: "Cloudflare DDoS & SSL Shield",
        field4Label: "Traffic Resilience",
        field4Value: "Auto-Scaling Load Balancers",
        btnText: "Deploy Infrastructure",
      },
      liveCard: {
        badge: "Cluster Status: Healthy",
        title: "Production Infrastructure",
        leftValue: "99.99%",
        leftLabel: "Uptime SLA",
        middleValue: "22ms",
        middleLabel: "Latency",
        rightValue: "-45%",
        rightLabel: "Cloud Costs",
      },
    },

    card3: {
      badgeTitle: "Automated CI/CD",
      iconColor: "bg-indigo-500",
      statLeft: "38s",
      labelLeft: "Deploy Time",
      statMid: "99.99%",
      labelMid: "Uptime",
      statRight: "-45%",
      labelRight: "Cost Saved",
      price: "-45%",
      priceUnit: "AWS bill saved",
      btnText: "Check Health",
    },

    card4: {
      metric: "45%",
      label: "Lower Monthly Cloud Bills with Smart Auto-Scaling",
      gradient: "bg-[#4F46E5] shadow-[0_15px_35px_rgba(79,70,229,0.28)]",
    },

    card5: {
      title: "DevOps Sentry Bot",
      subtitle: "All servers 100% operational",
      icon: "server",
    },

    mobile: {
      card1Metric: "99.99%",
      card1Label: "Guaranteed Uptime (5.0 ★)",
      card2Metric: "45%",
      card2Label: "Cloud Bill Cost Reduction",
    },
  },

  // =========================================================================
  // 9. BACK OFFICE SERVICES
  // =========================================================================
  "back-office": {
    serviceKey: "back-office",
    titleLine1: "DELEGATE YOUR",
    titleLine2: "OPERATIONS!",
    subtitle:
      "Dedicated 24/7 customer care reps, data entry specialists, and CRM managers so new business founders can stop doing grunt work and focus 100% on revenue.",
    pillImage1: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&auto=format&fit=crop&q=80",
    pillAlt1: "Dedicated Customer Support Specialist",
    pillImage2: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=300&auto=format&fit=crop&q=80",
    pillAlt2: "Executive Operations Team",

    card1: {
      metric: "40+ Hrs",
      rating: "5.0 (220+ businesses)",
      label: "Founder Hours Saved Weekly",
      avatars: [
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80",
      ],
      avatarExtra: "220+",
    },

    card2: {
      title: "Daily Operations Log",
      badge: "100% Completed",
      item1: {
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&auto=format&fit=crop&q=80",
        tag: "Customer Care",
        name: "180 Inquiries Handled",
        sub: "Avg Response 4.1 mins",
        metricTag: "CSAT",
        metricValue: "99.6%",
      },
      item2: {
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&auto=format&fit=crop&q=80",
        tag: "Data Operations",
        name: "Invoicing & CRM Sync",
        sub: "Reconciled & Verified",
        metricTag: "Status",
        metricValue: "Done",
      },
      barcodeLabel: "AUDIT LOG // SLA-VERIFIED-DATA-CONFIDENTIAL",
    },

    phone: {
      gradient: "from-[#0D9488] via-[#14B8A6] to-[#5EEAD4]",
      headerTop: "Delegate Tasks",
      headerMain: "Scale Calmly",
      userAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80",
      form: {
        field1Label: "Support Coverage",
        field1Value: "24/7 Live Chat, Tickets & Email",
        field2Label: "Back-Office Tasks",
        field2Value: "Data Entry, Billing & CRM Prep",
        field3Label: "Dedicated Specialist Pod",
        field3Value: "Vetted English & Global Talent",
        field4Label: "SLA Response Guarantee",
        field4Value: "Under 15 Minutes Response",
        btnText: "Delegate Operations Tasks",
      },
      liveCard: {
        badge: "Operations Pod Live",
        title: "Dedicated Support Team",
        leftValue: "320",
        leftLabel: "Tickets Solved",
        middleValue: "4.1m",
        middleLabel: "Response",
        rightValue: "99.6%",
        rightLabel: "CSAT Score",
      },
    },

    card3: {
      badgeTitle: "Dedicated Operations Pod",
      iconColor: "bg-teal-500",
      statLeft: "320",
      labelLeft: "Tickets Done",
      statMid: "4.1m",
      labelMid: "Response",
      statRight: "-60%",
      labelRight: "Cost Saved",
      price: "-60%",
      priceUnit: "vs local staff",
      btnText: "Meet Your Pod",
    },

    card4: {
      metric: "60%",
      label: "Lower Overhead Costs Compared to Hiring In-House",
      gradient: "bg-[#0D9488] shadow-[0_15px_35px_rgba(13,148,136,0.28)]",
    },

    card5: {
      title: "Operations Manager",
      subtitle: "Daily task checklist completed",
      icon: "headphones",
    },

    mobile: {
      card1Metric: "40+ Hrs",
      card1Label: "Founder Hours Saved Weekly (5.0 ★)",
      card2Metric: "60%",
      card2Label: "Lower Overhead Costs",
    },
  },
};
