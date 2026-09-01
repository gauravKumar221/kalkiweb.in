"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center text-center px-4">
      <h2 className="text-3xl font-bold tracking-tight">Something went wrong!</h2>
      <p className="mt-2 text-muted-foreground max-w-[500px]">
        An unexpected error occurred.
      </p>
      <div className="mt-6 flex gap-4">
        <Button onClick={() => reset()}>Try again</Button>
      </div>
    </div>
  );
}
