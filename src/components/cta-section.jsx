import Link from "next/link";
import Image from "next/image";
export default function CtaSection() {
    return (<section className="relative bg-background text-foreground py-20 md:py-32 overflow-hidden border-t border-b border-border">
      <div className="absolute inset-0 bg-repeat opacity-20"></div>
      <div className="absolute -bottom-1/2 -left-1/4 w-full h-full rounded-full bg-primary/20 blur-[150px]" style={{
            background: "radial-gradient(circle, hsl(var(--primary) / 0.1), transparent 60%)",
        }}></div>

      <div className="container mx-auto text-center relative z-10">
        <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black uppercase tracking-tighter text-center leading-tight">
          {/* Left Image */}
          <Image src="/images videos/infoxbox-ico1.png" alt="Caricature 1" width={120} height={120} className="inline-block w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 object-contain align-middle mr-2 sm:mr-3 md:mr-4 flex-shrink-0"/>
          {/* Text */}
          <span className="align-middle">
            Chalo, Saath Mein Kaam Karte Hain!
          </span>
          {/* Right Image */}
          <Image src="/images videos/infoxbox-ico2.png" alt="Caricature 2" width={120} height={120} className="inline-block w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 object-contain align-middle ml-2 sm:ml-3 md:ml-4 flex-shrink-0"/>
        </h2>
        <div className="relative inline-block my-4">
          <Link href="/contact" className="absolute -right-20 top-1/2 -translate-y-1/2 group"></Link>
        </div>
      </div>
    </section>);
}
