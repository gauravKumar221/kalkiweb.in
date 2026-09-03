import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";

export default function FeatureSectionWithImage() {
  return (
    <section className="w-full">
      <div className="container py-12 md:py-16">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="space-y-6 text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white !leading-[60px]">
              Elevate Your{" "}
              <span className="bg-[#95BF47]"> E-commerce with Shopify </span>
            </h2>
            <p className="text-base md:text-lg text-neutral-300 leading-relaxed font-normal">
              We build beautiful, high-converting Shopify stores that are
              tailored to your brand. From custom theme development to app
              integrations, we provide everything you need to create a
              successful online store and scale your business.
            </p>
            <div>
              <Button asChild size="lg" variant="glitch">
                <Link href="/services/shopify-development">
                  Explore Shopify Services
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative  ">
            <Image
              src="/images videos/logo-color-dark-bg.png"
              alt="Shopify high converting store showcase"
              width={400}
              height={400}
              unoptimized
              className="object-contain transition-transform duration-700 hover:scale-105 w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
