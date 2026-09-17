import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Post from "@/models/Post";

export const dynamic = "force-dynamic";

const referenceArticles = [
  {
    title: "How to Create Content That's Found, Cited, and Trusted in the Age of AI",
    slug: "how-to-create-content-found-cited-trusted-age-of-ai",
    category: "AI Digital Marketing",
    snippet:
      "Whether you call it AEO (Answer Engine Optimization) or GEO (Generative Engine Optimization), it's clear that we've now entered a 'search everywhere' era of SEO.",
    content: `Whether you call it AEO (Answer Engine Optimization) or GEO (Generative Engine Optimization), it's clear that we've now entered a **"search everywhere" era of SEO**.

Now, in order to stay ahead, we need to understand how to create content that performs across both traditional search engines and generative AI search experiences like ChatGPT, Perplexity, and Google Gemini.

In this article, I'll share how I create content that gets discovered by both Google and AI search experiences, ensuring it lands in front of the right people wherever they're searching.

## Why Traditional Keyword Stuffing is Dead
Search engines in 2026 evaluate topical entity depth and authoritative consensus. AI engines do not merely match queries; they synthesize answers from trusted, structured sources.

> "If your content does not provide unique primary data, expert citation, or clear structural schema, generative search models will summarize your competitors instead of citing your brand."

## The 3 Pillars of AI Content Optimization

### 1. High Entity Density & Direct Answers
Structure your articles with concise 40-60 word definitive answers directly following major subheadings. This makes it effortless for generative models to quote your exact prose.

### 2. Primary Research and Original Visuals
AI models heavily favor original data points, survey findings, and branded infographic frameworks that have not been scraped thousands of times before.

### 3. Machine-Readable Schema Architecture
Implement comprehensive JSON-LD structured data linking authors to verifiable professional entities, organizations, and topical taxonomies.

\`\`\`json
{
  "@context": "https://schema.org",
  "@type": "TechArticle",
  "headline": "How to Create Content Cited in the Age of AI",
  "author": {
    "@type": "Person",
    "name": "Tasmin Lofthouse",
    "jobTitle": "Content Strategist"
  }
}
\`\`\`

## Summary & Next Steps
By combining deep human expertise with structured digital architecture, your agency can turn AI search disruption into your most powerful organic customer acquisition channel.`,
    coverImage: "/illustrations/seo_search_results.jpg",
    author: {
      name: "Tasmin Lofthouse",
      role: "Senior Content & AI Strategist",
      avatar: "/images videos/gaurav.png",
    },
    tags: ["Articles", "Content Marketing", "Search Engine Optimization", "AI Digital Marketing"],
    readTime: "6 min read",
    featured: true,
    published: true,
  },
  {
    title: "10 Brands Championing Sustainability",
    slug: "10-brands-championing-sustainability",
    category: "Digital Strategy",
    snippet:
      "A deep dive into how leading global enterprises integrate genuine ESG principles into modern brand storytelling and digital customer loyalty.",
    content: `Consumers in 2026 demand genuine environmental accountability. Superficial greenwashing campaigns are quickly scrutinized and rejected by informed digital audiences.

## Moving Beyond Carbon Offsets to Tangible Transparency
Brands that lead the sustainability conversation provide verified, public digital dashboards tracking their supply chain footprints in real time.

### Key Tenets of Sustainable Brand Strategy:
- **Radical Lifecycle Transparency:** Displaying carbon impact ratings directly on e-commerce product pages.
- **Ethical Packaging & Zero-Waste Fulfillment:** Reducing unnecessary plastic and streamlining shipping densities.
- **Community-Driven Circular Economy:** Offering buy-back, repair, and trade-in programs directly through digital portals.

By aligning organizational actions with authentic customer values, forward-thinking brands cultivate unprecedented brand affinity and lifetime customer value.`,
    coverImage: "/illustrations/team_collaboration.jpg",
    author: {
      name: "Gaurav Kumar",
      role: "Brand & Digital Strategist",
      avatar: "/images videos/gaurav.png",
    },
    tags: ["Digital Strategy", "ESG", "Brand Purpose", "Customer Experience"],
    readTime: "5 min read",
    featured: false,
    published: true,
  },
  {
    title: "What is Design Thinking & How Can You Use It to Understand Your Audience?",
    slug: "what-is-design-thinking-understand-audience",
    category: "Web Design, CRO and UX",
    snippet:
      "Master the five stages of design thinking to solve complex consumer pain points, eliminate friction, and unlock exponential conversion rates.",
    content: `Design Thinking is not just for graphic designers; it is an empathy-driven innovation methodology that underpins the highest-converting digital platforms on the modern web.

## The 5 Iterative Phases of Design Thinking

### 1. Empathize
Conduct non-directed user interviews, screen recordings, and session replays to witness real customer struggles rather than relying on theoretical assumptions.

### 2. Define
Formulate concise problem statements centered on user needs, e.g., *"Mid-market SaaS buyers struggle to evaluate enterprise plan pricing without scheduling an intrusive sales call."*

### 3. Ideate
Challenge assumptions and brainstorm unconstrained solutions, exploring conversational AI self-serve quote calculators and interactive sandbox environments.

### 4. Prototype
Develop rapid, low-fidelity wireframes and interactive Next.js micro-prototypes to validate user comprehension in hours rather than months.

### 5. Test
Deploy A/B tests with real traffic cohorts to mathematically measure engagement, scroll depth, and conversion uplifts.`,
    coverImage: "/illustrations/user_conversion.jpg",
    author: {
      name: "Rajeev Kumar",
      role: "Director of UX & Product Strategy",
      avatar: "/images videos/rajeev221.png",
    },
    tags: ["Web Design, CRO and UX", "Design Thinking", "Conversion Rate", "Customer Experience"],
    readTime: "7 min read",
    featured: false,
    published: true,
  },
  {
    title: "Using AI for Video in Your Marketing Campaigns",
    slug: "using-ai-for-video-in-marketing-campaigns",
    category: "Content Marketing",
    snippet:
      "Harness generative video models, synthetic voice dubbing, and automated social clipping to produce high-retention video content at 10x speed.",
    content: `Short-form video is the dominant media consumption format across TikTok, Instagram Reels, and YouTube Shorts. However, traditional production cycles are prohibitively slow.

## The Modern AI Video Production Stack
By integrating generative AI into your creative pipeline, modern growth marketing teams can generate dozens of tailored video variations per day.

### High-Impact AI Video Workflows:
- **Dynamic B-Roll Generation:** Creating contextual background clips with text-to-video diffusion models.
- **Multilingual Lip-Synced Localization:** Re-dubbing flagship product videos into 14 languages with authentic natural voice cadence.
- **Smart Hook Detection:** Analyzing retention drop-off graphs and automatically generating 3-second visual hooks that maximize view duration.

Embrace video automation now to outpace traditional advertising agencies and scale customer acquisition effortlessly.`,
    coverImage: "/illustrations/server_performance.jpg",
    author: {
      name: "Kalki Creative Team",
      role: "Video & Media Production",
      avatar: "/images videos/gaurav.png",
    },
    tags: ["Content Marketing", "AI Digital Marketing", "Display and Video Advertising", "Social Media Marketing"],
    readTime: "6 min read",
    featured: false,
    published: true,
  },
  {
    title: "Influencer Marketing: The Ultimate Guide",
    slug: "influencer-marketing-the-ultimate-guide",
    category: "Social Media Marketing",
    snippet:
      "A step-by-step masterclass on identifying high-affinity micro-creators, structuring performance-based contracts, and driving profitable return on ad spend.",
    content: `The era of paying celebrity influencers massive flat fees for uninspired product placements has passed. The highest-performing influencer campaigns in 2026 prioritize hyper-niche credibility and whitelisted paid social amplification.

## Micro-Influencers vs Macro-Influencers
Micro-creators (10k-100k engaged followers) consistently deliver 3.2x higher comment engagement and authentic trust than mega-influencers.

### 4 Steps to a Scalable Influencer Engine:
1. **Audience Demographics Auditing:** Inspecting follower authenticity scores and geographical density before outreach.
2. **Whitelisted Spark Ads & Dark Posting:** Gaining advertiser access to run paid conversion campaigns directly through the creator's genuine profile.
3. **Usage Rights & Long-Term Exclusivity:** Securing multi-channel distribution rights to repurpose user-generated content across email, landing pages, and search ads.
4. **Attribution Modeling:** Tracking first-party coupon codes and post-purchase attribution surveys to isolate incremental revenue.`,
    coverImage: "/illustrations/team_collaboration.jpg",
    author: {
      name: "Gaurav Kumar",
      role: "Growth & Partnerships Lead",
      avatar: "/images videos/gaurav.png",
    },
    tags: ["Social Media Marketing", "Influencer Marketing", "Social Selling", "Digital Marketing"],
    readTime: "8 min read",
    featured: false,
    published: true,
  },
  {
    title: "Why Headless Shopify 2.0 Outperforms Traditional Monolithic Stores",
    slug: "headless-shopify-outperforms-monolithic-stores",
    category: "E-Commerce",
    snippet:
      "Analyzing the quantifiable conversion gains, frictionless checkout experiences, and sub-second page loads of bespoke headless storefronts.",
    content: `Traditional Liquid templates force stores into bulky script bundles. Headless commerce separates the client storefront from the backend API, delivering instantaneous rendering and limitless creative freedom.

## Key Performance Advantages:
- **Instantaneous Page Transitions:** Zero browser lag as shoppers filter collections and toggle product variants.
- **Near-Perfect Core Web Vitals:** Elimination of third-party app CSS/JS bloat that historically penalizes mobile conversion rates.
- **Omnichannel Unification:** Powering web, native mobile apps, and in-store point-of-sale displays from a single unified product catalog.`,
    coverImage: "/illustrations/user_conversion.jpg",
    author: {
      name: "Kalki Engineering Team",
      role: "E-Commerce Architecture",
      avatar: "/images videos/gaurav.png",
    },
    tags: ["E-Commerce", "Web Design, CRO and UX", "Digital Strategy"],
    readTime: "5 min read",
    featured: false,
    published: true,
  },
  {
    title: "PPC and Paid Search: Scaling ROAS Beyond 5x in 2026",
    slug: "ppc-paid-search-scaling-roas-beyond-5x",
    category: "PPC and Paid Search",
    snippet:
      "How to leverage first-party conversion data, automated bidding adjustments, and intent-matched landing pages to crush competitor CPAs.",
    content: `Third-party cookie deprecation has radically altered paid search management. Advertisers who still rely on legacy last-click attribution are wasting significant capital on underperforming audiences.

## Leveraging Offline Conversion Imports (OCI)
Feed validated CRM sales stages and high-value customer lifetime value signals back into Google Ads and Meta Ads to train smart bidding algorithms toward profitability rather than cheap clicks.`,
    coverImage: "/illustrations/seo_search_results.jpg",
    author: {
      name: "Rajeev Kumar",
      role: "Head of Paid Acquisition",
      avatar: "/images videos/rajeev221.png",
    },
    tags: ["PPC and Paid Search", "Digital Marketing", "Data and Analytics"],
    readTime: "6 min read",
    featured: false,
    published: true,
  },
  {
    title: "10 Steps to Create a User Journey Map [With Template]",
    slug: "10-steps-create-user-journey-map-template",
    category: "Customer Experience",
    snippet:
      "A comprehensive walkthrough on how to map customer touchpoints, identify drop-off hurdles, and align cross-functional engineering teams.",
    content: `A user journey map is the visual spine of customer empathy. It plots every interaction a prospect has with your brand across marketing, onboarding, usage, and retention.

## Step 1: Define User Archetypes
Avoid generic demographic profiles. Ground your personas in actual transactional analytics, recorded user sessions, and recorded customer interviews.

## Step 2: Chart Crucial Micro-Moments
Identify moments of truth where users make high-intent commitments.

## Step 3: Align Internal Departments
Ensure engineering, support, and marketing teams coordinate around unified customer satisfaction benchmarks.`,
    coverImage: "/illustrations/user_conversion.jpg",
    author: {
      name: "Rajeev Kumar",
      role: "Creative Director",
      avatar: "/images videos/gaurav.png",
    },
    tags: ["Customer Experience", "User Journey", "UX Design"],
    readTime: "7 min read",
    featured: false,
    published: true,
  },
  {
    title: "Data-Driven Marketing: Unlocking Attribution in a Cookieless Era",
    slug: "data-driven-marketing-attribution-cookieless-era",
    category: "Data and Analytics",
    snippet:
      "How forward-thinking marketing teams utilize server-side tracking, first-party data warehouses, and incrementality experiments to measure real ROI.",
    content: `With third-party cookies phased out across major browsers, marketing attribution requires robust server-side measurement frameworks and first-party data infrastructure.

## The Shift to Server-Side Tracking
Client-side scripts are frequently blocked by ad-blockers and browser privacy protections. Server-side events via Google Tag Manager Server Container and Meta Conversions API ensure 99%+ telemetry capture.

## Incrementality Testing Over Multi-Touch Models
Rather than relying on misleading last-click attribution, modern agencies run geo-matched split testing and media mix modeling (MMM) to prove verifiable incremental lift.`,
    coverImage: "/illustrations/server_performance.jpg",
    author: {
      name: "Rishav",
      role: "Engineering Lead",
      avatar: "/images videos/gaurav.png",
    },
    tags: ["Data and Analytics", "Attribution", "Server-Side", "Growth"],
    readTime: "6 min read",
    featured: false,
    published: true,
  },
  {
    title: "Email Marketing Automation: Converting Cold Traffic into Repeat Buyers",
    slug: "email-marketing-automation-converting-cold-traffic",
    category: "Email Marketing",
    snippet:
      "A blueprint for automated behavioral nurture sequences that drive consistent, predictable revenue on autopilot.",
    content: `Email marketing consistently yields the highest ROI of any digital channel—often exceeding $36 for every $1 invested.

## The 4 Essential Automation Flows
1. **Welcome Sequence:** Introduce brand story, deliver instant value, and set communication expectations.
2. **Browse Abandonment:** Personalize recommendations based on recently viewed pages.
3. **Post-Purchase Care:** Provide onboarding tutorials and reduce customer support volume.
4. **Win-Back Series:** Re-engage dormant subscribers before sunsetting unengaged contacts.`,
    coverImage: "/illustrations/seo_search_results.jpg",
    author: {
      name: "Gaurav Kumar",
      role: "Brand Strategist",
      avatar: "/images videos/gaurav.png",
    },
    tags: ["Email Marketing", "Automation", "Retention"],
    readTime: "5 min read",
    featured: false,
    published: true,
  },
  {
    title: "Social Selling Playbook: How Modern B2B Brands Close Deals on LinkedIn",
    slug: "social-selling-playbook-b2b-brands-linkedin",
    category: "Social Selling",
    snippet:
      "Ditch spammy InMails. Here is how founders and sales directors build authority, ignite warm conversations, and win enterprise pipeline.",
    content: `Modern B2B decision-makers do not respond to generic cold pitches. They buy from recognizable industry experts whose perspectives they encounter daily on their social feeds.

## The 3 Pillars of B2B Social Selling
- **Optimized Executive Profiles:** Transform your headline from a boring title into a clear customer value proposition.
- **Thought Leadership Consistency:** Share authentic case studies, project breakdowns, and contrarian perspectives.
- **Permission-Based DM Outreach:** Engage in comments for 2-3 weeks before initiating a direct message conversation.`,
    coverImage: "/illustrations/team_collaboration.jpg",
    author: {
      name: "Prince Sharma",
      role: "Technical Director",
      avatar: "/images videos/gaurav.png",
    },
    tags: ["Social Selling", "B2B", "LinkedIn", "Growth"],
    readTime: "5 min read",
    featured: false,
    published: true,
  },
  {
    title: "Zero-Downtime Multi-Cloud Deployments with Docker & Kubernetes",
    slug: "zero-downtime-deployments-docker-kubernetes",
    category: "Digital Management and Leadership",
    snippet:
      "Engineering leaders' guide to continuous integration, blue-green cluster rollouts, and multi-region resilience.",
    content: `Mission-critical enterprise platforms cannot endure planned maintenance outages. By adopting container orchestration and declarative infrastructure-as-code, technical leaders ensure maximum customer availability and flawless SLA compliance.`,
    coverImage: "/illustrations/server_performance.jpg",
    author: {
      name: "Kalki DevOps Team",
      role: "Cloud Infrastructure",
      avatar: "/images videos/gaurav.png",
    },
    tags: ["Digital Management and Leadership", "Digital Strategy", "DevOps"],
    readTime: "7 min read",
    featured: false,
    published: true,
  },
];

export async function POST(request) {
  try {
    await dbConnect();

    // Check if reset is requested
    const { searchParams } = new URL(request.url || "http://localhost:9002/api/posts/seed");
    const forceReset = searchParams.get("force") === "true";

    if (forceReset) {
      await Post.deleteMany({});
    } else {
      const count = await Post.countDocuments();
      if (count > 0) {
        // Clear and reload reference set to ensure matches
        await Post.deleteMany({});
      }
    }

    const created = await Post.insertMany(referenceArticles);

    return NextResponse.json({
      success: true,
      message: `Successfully seeded ${created.length} rich reference articles into MongoDB Atlas!`,
      count: created.length,
      data: created,
    });
  } catch (error) {
    console.error("Seed error:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Failed to seed posts" },
      { status: 500 }
    );
  }
}

export async function GET(request) {
  return POST(request);
}
