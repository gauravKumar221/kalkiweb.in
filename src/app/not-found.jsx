import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center text-center px-4">
      <h1 className="text-6xl font-bold tracking-tighter text-primary sm:text-7xl">404</h1>
      <h2 className="mt-4 text-2xl font-semibold sm:text-3xl">Page Not Found</h2>
      <p className="mt-2 text-muted-foreground max-w-[500px]">
        Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have been moved or deleted.
      </p>
      <div className="mt-6">
        <Button asChild>
          <Link href="/">Return to Home</Link>
        </Button>
      </div>
    </div>
  );
}
