import { Lightbulb, Search, Megaphone, Code, Tv, PencilRuler, Share2, Globe } from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const services = [
  {
    icon: <Lightbulb className="w-12 h-12 text-primary" />,
    title: "Creative & Communication",
    description: "Adding and uplifting the brand psyche with communication & creative outlook.",
    link: "/services",
  },
  {
    icon: <Search className="w-12 h-12 text-primary" />,
    title: "Search Engine Marketing",
    description: "Ensuring more visibility for your brand and more business for you.",
    link: "/services",
  },
  {
    icon: <Megaphone className="w-12 h-12 text-primary" />,
    title: "Digital Marketing",
    description: "Get the right marketing on the digital domain to reach out to billions of users.",
    link: "/services",
  },
  {
    icon: <Code className="w-12 h-12 text-primary" />,
    title: "Website Development",
    description: "Make your brand/business stand out online. Kick-ass is not a formal phrase, and Apps.",
    link: "/services",
  },
  {
    icon: <Tv className="w-12 h-12 text-primary" />,
    title: "AD Management",
    description: "From creating Ads to running them and churning out leads, we do it all for you.",
    link: "/services",
  },
  {
    icon: <PencilRuler className="w-12 h-12 text-primary" />,
    title: "Content Marketing",
    description: "Content is the key to all of it. We get you the right content that gives you the right hits.",
    link: "/services",
  },
  {
    icon: <Share2 className="w-12 h-12 text-primary" />,
    title: "Social Media Marketing",
    description: "Connect and interact with billions of users on social media with the right content.",
    link: "/services",
  },
  {
    icon: <Globe className="w-12 h-12 text-primary" />,
    title: "Online Reputation",
    description: "When reputation is everything for your brand/business, we build it right for you.",
    link: "/services",
  },
];

export default function ServicesGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {services.map((service, index) => (
        <Card key={index} className="bg-card/50 hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl">
          <CardHeader className="items-center text-center">
            <div className="p-4 bg-primary/10 rounded-full mb-4">
              {service.icon}
            </div>
            <CardTitle className="text-lg font-semibold">{service.title}</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
            <Link href={service.link} className="font-semibold text-primary hover:underline">
              Explore More
            </Link>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
