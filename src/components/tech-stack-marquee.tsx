
const MarqueeRow = ({ items, duration }: { items: string[], duration: string }) => {
    const animationStyle = { '--t': duration } as React.CSSProperties;
    return (
        <div className="relative flex w-full max-w-4xl overflow-hidden [mask-image:linear-gradient(90deg,transparent,white_30%,white_70%,transparent)]">
            <div className="whitespace-nowrap animate-marquee" style={animationStyle}>
                {items.map((item, index) => (
                    <span key={index} className="inline-flex m-2.5 px-2.5 py-1.5 rounded-md tracking-[0.3em] uppercase bg-[#333] text-white transition-colors duration-500 hover:bg-primary cursor-pointer">{item}</span>
                ))}
            </div>
            <div className="absolute top-0 whitespace-nowrap animate-marquee2" style={animationStyle}>
                 {items.map((item, index) => (
                    <span key={index} className="inline-flex m-2.5 px-2.5 py-1.5 rounded-md tracking-[0.3em] uppercase bg-[#333] text-white transition-colors duration-500 hover:bg-primary cursor-pointer">{item}</span>
                ))}
            </div>
        </div>
    );
};

export default function TechStackMarquee() {
    const row1 = ["HTML", "CSS", "Javascript", "React JS", "Node JS", "SQL", "Git", "AWS", "AZURE"];
    const row2 = ["Typescript", "Redux", "Bootstrap", "Material UI", "Tailwind", "SCSS", "Webpack", "Babel", "NPM", "Jenkins"];
    const row3 = ["Rest API", "Docker", "Linux", "SEO", "Agile Methedology", "Jira", "SDLC"];

    return (
        <section className="py-16 md:py-24 bg-card text-card-foreground">
            <div className="container flex flex-col items-center gap-4">
                 <MarqueeRow items={row1} duration="20s" />
                 <MarqueeRow items={row2} duration="30s" />
                 <MarqueeRow items={row3} duration="25s" />
            </div>
        </section>
    )
}
