import Image from "next/image";
import Link from "next/link";
const logos = [
  {
    name: "Google",
    src: "/svg/google.svg",
    href: "#",
  },
  {
    name: "Microsoft",
    src: "/svg/microsoft.svg",
    href: "#",
  },

  {
    name: "Apple",
    src: "/svg/apple.svg",
    href: "#",
  },
  {
    name: "Meta",
    src: "/svg/meta.svg",
    href: "#",
  },
  {
    name: "Adobe",
    src: "/svg/adobe.svg",
    href: "#",
  },
  {
    name: "After Effects",
    src: "/svg/after-effects.svg",
    href: "#",
  },
  {
    name: "AWS",
    src: "/svg/aws.svg",
    href: "#",
  },
  {
    name: "Cloudflare",
    src: "/svg/cloudflare.svg",
    href: "#",
  },
  {
    name: "Discord",
    src: "/svg/discord.svg",
    href: "#",
  },
  {
    name: "Firefox",
    src: "/svg/firefox.svg",
    href: "#",
  },
  {
    name: "GitHub",
    src: "/svg/github.svg",
    href: "#",
  },
  {
    name: "GitHub Copilot",
    src: "/svg/github-copilot.svg",
    href: "#",
  },
  {
    name: "Gmail",
    src: "/svg/gmail-2026.svg",
    href: "#",
  },
  {
    name: "Google Gemini",
    src: "/svg/google-gemini.svg",
    href: "#",
  },
  {
    name: "Google Workspace",
    src: "/svg/google-workspace-admin.svg",
    href: "#",
  },
  {
    name: "Google Analytics",
    src: "/svg/google-analytics.svg",
    href: "#",
  },
  {
    name: "Google AdSense",
    src: "/svg/google-adsense.svg",
    href: "#",
  },
  {
    name: "Google Drive",
    src: "/svg/google-drive-2026.svg",
    href: "#",
  },
  {
    name: "Google Docs",
    src: "/svg/google-docs-2026.svg",
    href: "#",
  },
  {
    name: "Google Sheets",
    src: "/svg/google-sheets-2026.svg",
    href: "#",
  },
  {
    name: "Google Slides",
    src: "/svg/google-slides-2026.svg",
    href: "#",
  },
  {
    name: "Google Meet",
    src: "/svg/google-meet-2026.svg",
    href: "#",
  },
  {
    name: "Google Calendar",
    src: "/svg/google-calendar-2026.svg",
    href: "#",
  },
  {
    name: "Google Forms",
    src: "/svg/google-forms-2026.svg",
    href: "#",
  },
  {
    name: "Google Keep",
    src: "/svg/google-keep-2026.svg",
    href: "#",
  },
  {
    name: "Google Chat",
    src: "/svg/google-chat-2026.svg",
    href: "#",
  },
  {
    name: "Google Sites",
    src: "/svg/google-sites-2026.svg",
    href: "#",
  },
  {
    name: "Google Tasks",
    src: "/svg/google-tasks-2026.svg",
    href: "#",
  },
  {
    name: "Google Vids",
    src: "/svg/google-vids-2026.svg",
    href: "#",
  },
  {
    name: "Linux",
    src: "/svg/linux.svg",
    href: "#",
  },
  {
    name: "Microsoft Excel",
    src: "/svg/microsoft-excel.svg",
    href: "#",
  },
  {
    name: "MongoDB",
    src: "/svg/mongodb.svg",
    href: "#",
  },
  {
    name: "PostgreSQL",
    src: "/svg/postgresql.svg",
    href: "#",
  },
  {
    name: "Redis",
    src: "/svg/redis.svg",
    href: "#",
  },
  {
    name: "Safari",
    src: "/svg/safari.svg",
    href: "#",
  },
  {
    name: "Slack",
    src: "/svg/slack.svg",
    href: "#",
  },
  {
    name: "Supabase",
    src: "/svg/supabase.svg",
    href: "#",
  },
  {
    name: "Swift",
    src: "/svg/swift.svg",
    href: "#",
  },
  {
    name: "v0",
    src: "/svg/v0.svg",
    href: "#",
  },
  {
    name: "Vercel",
    src: "/svg/vercel.svg",
    href: "#",
  },
];
const LogoItem = ({ logo }) => (
  <div className="w-48 h-32 flex-shrink-0 text-center flex items-center">
    <Link
      href={logo.href}
      className="w-full h-full flex items-center justify-center p-4 hover:filter-none"
    >
      <div className="relative w-full h-12">
        <Image src={logo.src} alt={logo.name} fill className="object-contain" />
      </div>
    </Link>
  </div>
);
const ClientMarquee = () => {
  const extendedLogos = [...logos, ...logos];
  return (
    <div className="group overflow-x-hidden min-w-full outline-0 mb-12">
      <div className="flex animate-marquee-slow group-hover:[animation-play-state:paused]">
        {extendedLogos.map((logo, index) => (
          <div
            key={index}
            className="flex-shrink-0 transition-all duration-300  group-hover:blur-[1px]"
          >
            <LogoItem logo={logo} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default ClientMarquee;
