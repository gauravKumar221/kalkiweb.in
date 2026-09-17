import InteractiveServiceList from "@/components/interactive-service-list";
import ServicesOfferings from "@/components/services-offerings";

export const metadata = {
  title: "Our Services | Digital Marketing, SEO & Web Development - Kalki Web",
  description: "Explore the comprehensive services offered by Kalki Web — India's premier digital agency for website development, SEO services, PPC management, and Shopify.",
  keywords: [
    "Digital Marketing Services for Business",
    "Website Development Services India",
    "SEO Services India",
    "Shopify Development Company",
    "Google Ads Agency India",
  ],
  alternates: {
    canonical: "https://www.kalkiweb.in/services",
  },
  openGraph: {
    title: "Our Services | Kalki Web",
    description: "Full-spectrum digital marketing, website development, and e-commerce solutions.",
    url: "https://www.kalkiweb.in/services",
    siteName: "Kalki Web",
    locale: "en_IN",
    type: "website",
  },
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section with fixed header clearance */}
      <section className="relative overflow-hidden pt-36 pb-16 md:pt-44 md:pb-24 border-b border-border/40">
        <div className="absolute inset-0 bg-grid-white/[0.03] pointer-events-none" />
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6">
              Our Services
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              We deliver high-impact solutions that blend creative-led branding,
              data-driven marketing, and technical excellence to scale your
              business.
            </p>
          </div>
          <InteractiveServiceList />
        </div>
      </section>

      <ServicesOfferings />
    </div>
  );
}
