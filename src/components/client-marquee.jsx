import Image from "next/image";
import Link from "next/link";
const logos = [
    {
        name: "Google",
        src: "https://cdn.shopify.com/s/files/1/0789/1333/files/google.svg?v=1602131238",
        href: "#",
    },
    {
        name: "Microsoft",
        src: "https://cdn.shopify.com/s/files/1/0789/1333/files/microsoft.svg?v=1602131238",
        href: "#",
    },
    {
        name: "Amazon",
        src: "https://cdn.shopify.com/s/files/1/0789/1333/files/amazon.svg?v=1602131238",
        href: "#",
    },
    {
        name: "Slack",
        src: "https://cdn.shopify.com/s/files/1/0789/1333/files/slack.svg?v=1602131238",
        href: "#",
    },
    {
        name: "Adobe",
        src: "https://cdn.shopify.com/s/files/1/0789/1333/files/adobe.svg?v=1602131238",
        href: "#",
    },
    {
        name: "Netflix",
        src: "https://cdn.shopify.com/s/files/1/0789/1333/files/netflix.svg?v=1602131238",
        href: "#",
    },
    {
        name: "Spotify",
        src: "https://cdn.shopify.com/s/files/1/0789/1333/files/spotify.svg?v=1602131238",
        href: "#",
    },
    {
        name: "Shopify",
        src: "https://cdn.shopify.com/s/files/1/0789/1333/files/shopify.svg?v=1602131238",
        href: "#",
    },
];
const LogoItem = ({ logo }) => (<div className="w-48 h-32 flex-shrink-0 text-center flex items-center">
        <Link href={logo.href} className="w-full h-full flex items-center justify-center p-4 hover:filter-none">
            <div className="relative w-full h-12">
                 <Image src={logo.src} alt={logo.name} fill className="object-contain"/>
            </div>
        </Link>
    </div>);
const ClientMarquee = () => {
    const extendedLogos = [...logos, ...logos];
    return (<div className="group overflow-x-hidden min-w-full outline-0 mb-12">
      <div className="flex animate-marquee-slow group-hover:[animation-play-state:paused]">
        {extendedLogos.map((logo, index) => (<div key={index} className="flex-shrink-0 transition-all duration-300 group-hover:grayscale group-hover:opacity-50 group-hover:blur-[1px]">
             <LogoItem logo={logo}/>
          </div>))}
      </div>
    </div>);
};
export default ClientMarquee;
