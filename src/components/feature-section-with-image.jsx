import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
export default function FeatureSectionWithImage() {
    return (<section>
      <div className="container py-[60px]">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary">
              Elevate Your E-commerce with Shopify
            </h2>
            <p className="text-lg text-muted-foreground">
              We build beautiful, high-converting Shopify stores that are tailored to your brand. From custom theme development to app integrations, we provide everything you need to create a successful online store and scale your business.
            </p>
            <Button asChild size="lg" variant="glitch">
              <Link href="/services">Explore Shopify Services</Link>
            </Button>
          </div>
          <div>
            <Image src="https://picsum.photos/600/400" data-ai-hint="shopify store" alt="Shopify store example" width={600} height={400} className="rounded-lg object-cover w-full max-w-md mx-auto"/>
          </div>
        </div>
      </div>
    </section>);
}
