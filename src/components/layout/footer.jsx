import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
const servicesLinks = [
  { name: "Web Development", href: "/services/web-development" },
  { name: "Digital Marketing & SEO", href: "/services/digital-marketing" },
  { name: "Shopify Development", href: "/services/shopify-development" },
  { name: "E-Commerce Solutions", href: "/services/ecommerce" },
  { name: "Graphic & UI/UX Design", href: "/services/graphic-ui-ux" },
  { name: "Mobile App Development", href: "/services/mobile-app-development" },
  { name: "AI & Automation Services", href: "/services/ai-services" },
  { name: "Cloud & DevOps", href: "/services/devops" },
  { name: "Back Office & Support", href: "/services/back-office" },
];

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Meet Our Team", href: "/team" },
  { name: "Our Portfolio", href: "/portfolio" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Pricing Plans", href: "/pricing" },
  { name: "Blog & Insights", href: "/blog" },
  { name: "Contact Us", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-neutral-400 border-t border-neutral-800">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-4">
            <h3 className="font-bold text-foreground text-xl mb-4">
              Our Company
            </h3>
            <p className="text-sm">
              Kalki Web, we provide high-quality services designed to meet your
              specific needs. As the Best marketing agency in Patna, your
              satisfaction is our top priority, and we work hard to exceed your
              expectations.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-foreground text-xl mb-4">Services</h3>
            <ul className="space-y-3 text-sm">
              {servicesLinks.map((link) => (<li key={link.name}>
                  <Link href={link.href} className="hover:text-primary transition-colors border-b border-dotted border-border hover:border-primary pb-1">
                    {link.name}
                  </Link>
                </li>))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-foreground text-xl mb-4">
              Contact Detail
            </h3>
            <div className="space-y-4 text-sm">
              <p>Feel free to contact & reach us !</p>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-1 shrink-0"/>
                <span>Address : Dak Bunglow, Lodipur, Patna, Bihar 800001</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary shrink-0"/>
                <a href="mailto:kalkiweb06@gmail.com" className="hover:text-primary">
                  Email : kalkiweb06@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary shrink-0"/>
                <a href="tel:+919304987505" className="hover:text-primary">
                  Phone : +919304987505
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-foreground text-xl mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm">
              {quickLinks.map((link) => (<li key={link.name}>
                  <Link href={link.href} className="hover:text-primary transition-colors border-b border-dotted border-border hover:border-primary pb-1">
                    {link.name}
                  </Link>
                </li>))}
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} Kalki Web. All Rights Reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-primary">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>);
}
