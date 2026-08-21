import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import SocialFollow from "../social-follow";

const servicesLinks = [
    { name: "Web Designing", href: "/services/web-development" },
    { name: "Search Engine Optimization (SEO)", href: "/services/digital-marketing" },
    { name: "Shopify Development", href: "/services/shopify-development" },
    { name: "Social Media Marketing (SMM)", href: "/services/digital-marketing" },
    { name: "Graphic Designing", href: "/services/graphic-ui-ux" },
    { name: "Network Security WordPress", href: "/services/web-development" },
];

const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About us", href: "/about" },
    { name: "Blogs", href: "#" },
    { name: "Contact Us", href: "/contact" },
]

export function Footer() {
  return (
    <footer className="bg-neutral-50 text-neutral-600 border-t border-border">
      <SocialFollow />
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          <div className="space-y-4">
            <h4 className="font-bold text-foreground text-xl mb-4">Our Company</h4>
            <p className="text-sm">
              Kalki Web, we provide high-quality services designed to meet your specific needs. As the Best marketing agency in Patna, your satisfaction is our top priority, and we work hard to exceed your expectations.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-foreground text-xl mb-4">Services</h4>
            <ul className="space-y-3 text-sm">
              {servicesLinks.map((link) => (
                <li key={link.name}>
                    <Link href={link.href} className="hover:text-primary transition-colors border-b border-dotted border-border hover:border-primary pb-1">
                        {link.name}
                    </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-foreground text-xl mb-4">Contact Detail</h4>
            <div className="space-y-4 text-sm">
                <p>Feel free to contact & reach us !</p>
                <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-primary mt-1 shrink-0" />
                    <span>Address : Dak Bunglow, Lodipur, Patna, Bihar 800001</span>
                </div>
                 <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-primary shrink-0" />
                    <a href="mailto:kalkiweb06@gmail.com" className="hover:text-primary">Email : kalkiweb06@gmail.com</a>
                </div>
                 <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-primary shrink-0" />
                    <a href="tel:+919304987505" className="hover:text-primary">Phone : +919304987505</a>
                </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-foreground text-xl mb-4">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                     <Link href={link.href} className="hover:text-primary transition-colors border-b border-dotted border-border hover:border-primary pb-1">
                        {link.name}
                     </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>&copy; {new Date().getFullYear()} Kalki Web. All Rights Reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-primary">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-primary">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
