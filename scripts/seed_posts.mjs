import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.resolve(__dirname, "../.env.local") });

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.error("No MONGODB_URI found in .env.local");
  process.exit(1);
}

const PostSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    snippet: { type: String, required: true },
    content: { type: String, required: true },
    coverImage: { type: String },
    category: { type: String, required: true },
    author: {
      name: { type: String, default: "Kalki Editorial Team" },
      role: { type: String, default: "Senior Strategist" },
      avatar: { type: String, default: "/images videos/gaurav.png" },
    },
    tags: [{ type: String }],
    readTime: { type: String, default: "5 min read" },
    featured: { type: Boolean, default: false },
    published: { type: Boolean, default: true },
    views: { type: Number, default: 0 },
  },
  { timestamps: true }
);

const Post = mongoose.models.Post || mongoose.model("Post", PostSchema);

const newArticles = [
  {
    title: "Top-Rated & Most Trusted SEO Company in India: 2026 Guide to Organic Search Domination",
    slug: "best-seo-company-india-guide",
    category: "Search Engine Optimization",
    snippet:
      "Looking for the top-rated & most trusted SEO company in India? Discover how professional SEO services, content clusters, and technical audits elevate organic revenue for small businesses and enterprises alike.",
    content: `In the intensely competitive digital landscape of 2026, securing first-page rankings on Google is no longer about generic keyword repetition. Modern search engines and generative AI models evaluate topical entity authority, search intent satisfaction, and Core Web Vitals speed.

Partnering with an established **SEO Company India** is the single most cost-effective investment an ambitious business can make to generate sustainable, high-converting organic pipeline.

## Why Work with a Top-Rated & Most Trusted SEO Company in India?

India has emerged as the global hub for technological innovation and digital marketing excellence. When you collaborate with a verified **Top-Rated & Most Trusted SEO Company in India**, you gain access to world-class strategic execution at highly competitive investment thresholds.

> "A top-tier SEO company does not simply chase vanity keyword rankings; it engineers holistic organic search systems that convert high-intent buyers into profitable, long-term clients."

### Core Pillars of Professional SEO Services:

### 1. In-Depth Technical SEO Audits & Core Web Vitals
Search algorithms prioritize websites that load instantly and offer flawless mobile interactivity. Our engineers audit server response times, schema markup, dynamic sitemaps, and JavaScript rendering bottlenecks to ensure frictionless indexing.

### 2. High-Intent Keyword Mapping & Content Clusters
We move beyond broad search terms to target commercial and transactional keywords. By creating comprehensive topic clusters, your brand establishes indisputable domain authority for terms like **SEO Services India**, **Best SEO Company**, and enterprise industry solutions.

### 3. High-Authority Digital PR & Ethical Link Building
Spammy backlink farms are penalized by modern spam updates. We acquire genuine editorial backlinks from reputable business publications, industry journals, and regional authority domains.

## Tailored SEO Services for Small Business & Enterprise Scaling

Whether you operate a local venture or a multinational enterprise, bespoke **SEO Services for Small Business** ensure that every marketing dollar yields measurable compounding returns. 

### Why Small Businesses Choose Our SEO Solutions:
- **Hyper-Local Google Business Profile (GBP) Optimization:** Dominate map pack results and capture local buyers ready to purchase.
- **Affordable Digital Marketing Services:** Scalable monthly retainers engineered to grow proportionally with your revenue.
- **Conversion Rate Optimization (CRO):** Turning incoming organic visitors into booked inquiries, phone calls, and checkout completions.

If you are ready to outrank your competitors and build a permanent organic moat, connect with Kalki Web — India's premier SEO partner.`,
    coverImage: "/illustrations/seo_search_results.jpg",
    author: {
      name: "Gaurav Kumar",
      role: "Founder & Chief SEO Strategist",
      avatar: "/images videos/gaurav.png",
    },
    tags: [
      "SEO Company India",
      "Top-Rated & Most Trusted SEO Company in India",
      "SEO Services India",
      "Best SEO Company",
      "Professional SEO Services",
      "SEO Services for Small Business",
      "Search Engine Optimization",
    ],
    readTime: "7 min read",
    featured: true,
    published: true,
  },
  {
    title: "Why Hiring the Best Digital Marketing Agency in India Unlocks Exponential ROI for Modern Brands",
    slug: "hire-best-digital-marketing-agency-india",
    category: "Digital Marketing",
    snippet:
      "Why settling for average marketing hurts your bottom line. Learn how hiring the best digital marketing agency in India accelerates your pipeline through performance marketing, full-funnel lead generation, and brand equity.",
    content: `Every growing brand reaches a pivotal crossroads: continue managing fragmented in-house campaigns, or **hire digital marketing agency** veterans with the proven track record to scale revenue predictably.

As consumer attention fragments across search engines, social platforms, and generative AI chat feeds, disjointed marketing tactics fail. You need an integrated **Digital Marketing Company India** that aligns creative brand storytelling with strict mathematical unit economics.

## The Advantage of Partnering with the Best Digital Marketing Agency

Choosing the **Best Digital Marketing Agency** means partnering with a dedicated growth team that treats your marketing budget with the same discipline as private equity investors treat capital allocation.

### The Modern 360-Degree Growth Stack:
1. **Performance Marketing Agency Precision:** Data-driven ad funnels running on Google, Meta, and LinkedIn with continuous A/B split-testing.
2. **Digital Branding Agency Storytelling:** Cohesive visual identities, typography, and messaging guidelines that establish instant market credibility.
3. **Omnichannel Lead Generation Agency Architecture:** Dynamic landing pages, automated email nurturing sequences, and CRM integrations that maximize sales closing rates.

> "True digital marketing is not an expense line item; it is a customer acquisition machine where every rupee invested yields predictable, measurable revenue."

## Digital Marketing Services for Business Growth

Comprehensive **Digital Marketing Services for Business** encompass:
- **Search Engine Optimization:** Capturing consumers at the exact moment they express purchase intent.
- **Paid Advertising & Performance Marketing:** Scaling profitable customer acquisition with negative keyword lists, audience lookalikes, and real-time ROAS dashboards.
- **Social Media Marketing Services:** Building active, loyal communities that advocate for your brand organically.
- **Affordable Digital Marketing Services for High-Growth Startups:** Flexible growth partnerships tailored to mid-market and emerging enterprises.

Partner with Kalki Web to accelerate your market expansion with India's most results-driven digital marketing professionals.`,
    coverImage: "/illustrations/team_collaboration.jpg",
    author: {
      name: "Tasmin Lofthouse",
      role: "Senior Growth Strategist",
      avatar: "/images videos/gaurav.png",
    },
    tags: [
      "Digital Marketing Agency India",
      "Best Digital Marketing Agency",
      "Digital Marketing Company India",
      "Hire Digital Marketing Agency",
      "Digital Marketing Services for Business",
      "Performance Marketing Agency",
      "Digital Branding Agency",
    ],
    readTime: "8 min read",
    featured: true,
    published: true,
  },
  {
    title: "Google Ads Management & PPC Services in India: Maximizing ROAS with Performance Marketing",
    slug: "google-ads-agency-ppc-management-services-india",
    category: "PPC and Paid Search",
    snippet:
      "Stop wasting ad budget on vanity impressions. Master Google Ads management and PPC management services in India with high-intent keyword targeting, smart bidding, and automated lead generation funnels.",
    content: `Paid search remains the highest-intent advertising channel in existence. Unlike social feeds where users passively consume entertainment, a Google search represents an active user urgently looking for a solution.

However, poorly structured campaigns waste thousands on irrelevant search terms and misconfigured broad match keywords. Partnering with a specialized **Google Ads Agency India** ensures your capital is deployed exclusively toward queries that convert into paying customers.

## Strategic Pillars of High-ROAS PPC Management Services

Professional **PPC Management Services** transform paid search from a cost center into a scalable revenue driver.

### 1. Granular Campaign Architecture & Negative Keyword Sculpting
We separate campaigns by exact user intent, isolating brand, competitor, and generic transactional queries. Comprehensive negative keyword lists prevent wasted clicks from job seekers, students, and low-budget searchers.

### 2. Performance Max & Smart Bidding Calibration
Google's automated AI bidding works wonders only when provided with clean, first-party conversion data. We calibrate target CPA and target ROAS thresholds based on actual closed-won customer lifetime value.

### 3. Lead Generation Agency Funnels with CRO
A Google ad is only as effective as the landing page it directs to. As a seasoned **Lead Generation Agency**, we build lightweight, mobile-optimized landing pages with clear single-action CTAs and sub-second load times.

### 4. Cross-Channel Social Media Marketing Integration
Combine paid search with retargeting from our **Social Media Marketing Agency** arm. Re-engage visitors who visited your high-value pricing pages via Instagram, Facebook, and LinkedIn dark posts.

Scale your revenue today with Kalki Web's elite performance marketing team.`,
    coverImage: "/illustrations/user_conversion.jpg",
    author: {
      name: "Rajeev Kumar",
      role: "Paid Media Lead",
      avatar: "/images videos/rajeev221.png",
    },
    tags: [
      "Google Ads Management",
      "PPC Management Services",
      "Performance Marketing Agency",
      "Google Ads Agency India",
      "Social Media Marketing Services",
      "Lead Generation Agency",
    ],
    readTime: "6 min read",
    featured: false,
    published: true,
  },
  {
    title: "Next-Gen Website Development Services in India: Scaling E-Commerce with Shopify & Next.js",
    slug: "website-development-services-india-ecommerce-shopify",
    category: "Web Design, CRO and UX",
    snippet:
      "Slow websites destroy conversion rates. Discover how a premier website development company and Shopify development company in India engineers lightning-fast web applications and e-commerce storefronts.",
    content: `Your website is the single most important touchpoint in your customer's journey. Even a one-second delay in page load time reduces conversion rates by up to 7%.

Collaborating with a premier **Website Development Company** and **Web Design Company India** guarantees that your digital presence not only looks visually stunning but also executes at peak technological velocity.

## Why Modern Enterprises Choose a Web Development Agency India

India's top engineering talent is recognized globally for developing cutting-edge web applications. At Kalki Web, our **Web Development Agency India** leverages modern stacks like Next.js 15, React, Tailwind CSS, and headless architectures.

### Advantages of Next.js Architecture:
- **Sub-Second Core Web Vitals:** Static Site Generation (SSG) and Server-Side Rendering (SSR) guarantee maximum Google PageSpeed scores.
- **Native SEO Architecture:** Dynamic OpenGraph metadata, machine-readable JSON-LD schemas, and automated XML sitemaps built right in.
- **Enterprise Security:** Decoupled backends prevent traditional SQL injection and server vulnerabilities.

## E-commerce Website Development with Shopify & WordPress

### Custom Shopify Development Company Solutions
As a dedicated **Shopify Development Company**, we build high-converting Liquid and Hydrogen headless storefronts for D2C brands. From custom product bundling apps to customized checkout extensibility, we engineer stores built to handle massive flash-sale traffic surges effortlessly.

### Enterprise WordPress Development Company Workflows
For media publishers, corporate enterprises, and content-rich organizations, our **WordPress Development Company** team crafts bespoke Gutenberg block themes without bulky, slow third-party plugins.

Elevate your brand's digital infrastructure with the most trusted **Website Development Services India** team at Kalki Web.`,
    coverImage: "/illustrations/server_performance.jpg",
    author: {
      name: "Gaurav Kumar",
      role: "Director of Technology",
      avatar: "/images videos/gaurav.png",
    },
    tags: [
      "Website Development Company",
      "Web Design Company India",
      "Web Development Agency India",
      "Website Development Services India",
      "E-commerce Website Development",
      "Shopify Development Company",
      "WordPress Development Company",
    ],
    readTime: "7 min read",
    featured: false,
    published: true,
  },
];

async function run() {
  try {
    console.log("Connecting to MongoDB Atlas...");
    await mongoose.connect(MONGODB_URI);
    console.log("Connected successfully.");

    for (const article of newArticles) {
      const updated = await Post.findOneAndUpdate(
        { slug: article.slug },
        article,
        { upsert: true, new: true, setDefaultsOnInsert: true }
      );
      console.log(`Upserted article: "${updated.title}" (slug: ${updated.slug})`);
    }

    const totalPosts = await Post.countDocuments();
    console.log(`Total posts in MongoDB Atlas now: ${totalPosts}`);
    await mongoose.disconnect();
    console.log("Done.");
  } catch (err) {
    console.error("Database seed error:", err);
    process.exit(1);
  }
}

run();
