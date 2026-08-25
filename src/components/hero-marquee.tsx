
import { cn } from "@/lib/utils";
import Link from "next/link";

const logoTexts = [
    { text: "Kalki Web", font: "font-sans" }, // English
    { text: "कल्कि वेब", font: "font-noto-devanagari" }, // Hindi
    { text: "ਕਲਕੀ ਵੈੱਬ", font: "font-noto-gurmukhi" }, // Punjabi
    { text: "カルキウェブ", font: "font-noto-jp" }, // Japanese
    { text: "কল্কি ওয়েব", font: "font-noto-bengali" }, // Bengali
    { text: "卡尔基网络", font: "font-noto-sc" }, // Chinese
];


const MarqueeContent = ({ isLogo = false }: { isLogo?: boolean }) => {
    if (isLogo) {
        return (
            <>
                {logoTexts.map(({ text, font }, index) => (
                    <Link href="/" key={index} className={cn("text-2xl font-bold tracking-widest uppercase px-8 text-foreground whitespace-nowrap", font)}>
                       <span className="text-primary">{text.charAt(0)}</span>{text.substring(1)}
                    </Link>
                ))}
            </>
        )
    }

    return (
        <h2 className="text-4xl md:text-5xl font-bold whitespace-nowrap text-foreground px-8">
            <span className="text-primary">React</span> Developer • <span className="text-primary">Next.js</span> Expert • SEO • Digital Marketing • <span className="text-primary">Shopify</span> Developer
        </h2>
    )
};

const HeroMarquee = ({ isLogo = false }: { isLogo?: boolean }) => {
    return (
        <div
            className={cn(
                "group flex overflow-hidden p-4 gap-16",
                !isLogo && "bg-background/50 border-t border-b border-border backdrop-blur-sm"
            )}
        >
            <div className="flex min-w-full shrink-0 items-center justify-around gap-16 group-hover:[animation-play-state:paused] animate-marquee-horizontal">
                <MarqueeContent isLogo={isLogo} />
                <MarqueeContent isLogo={isLogo} />
            </div>
            <div aria-hidden="true" className="flex min-w-full shrink-0 items-center justify-around gap-16 group-hover:[animation-play-state:paused] animate-marquee-horizontal">
                 <MarqueeContent isLogo={isLogo} />
                 <MarqueeContent isLogo={isLogo} />
            </div>
        </div>
    );
};

export default HeroMarquee;
