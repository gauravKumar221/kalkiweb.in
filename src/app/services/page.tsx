
import InteractiveServiceList from "@/components/interactive-service-list";

const serviceProjects = [
  {
    title: "Branding & Identity",
    description: [
      "Crafting a unique brand identity that tells your story.",
      "Designing logos and visual assets that resonate with your audience.",
      "Ensuring brand consistency across all platforms.",
    ],
    image: "https://picsum.photos/800/1204",
    imageHint: "branding moodboard",
    bgColor: "bg-neutral-900",
    link: "/services/graphic-ui-ux",
  },
  {
    title: "Web & Mobile Experiences",
    description: [
        "Developing high-performance websites and mobile apps.",
        "Focusing on intuitive UI/UX for exceptional user engagement.",
        "Building scalable solutions that grow with your business.",
    ],
    image: "https://picsum.photos/800/1205",
    imageHint: "mobile app development",
    bgColor: "bg-gray-800",
    link: "/services/web-development",
  },
  {
    title: "Data-Driven Marketing",
    description: [
        "Executing targeted SEO and PPC campaigns for maximum reach.",
        "Creating compelling content that drives conversions.",
        "Leveraging analytics to optimize performance and ROI.",
    ],
    image: "https://picsum.photos/800/1206",
    imageHint: "marketing dashboard",
    bgColor: "bg-slate-900",
    link: "/services/digital-marketing",
  },
];


export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-neutral-100 text-black">
      <div className="container py-16 md:py-24">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">Our Services</h1>
          <p className="text-lg text-neutral-600">
            We deliver high-impact solutions that blend creative-led branding, data-driven marketing, and technical excellence to help you achieve your goals.
          </p>
        </div>
        <InteractiveServiceList />
      </div>
    </div>
  );
}
