"use client";

import { useEffect } from "react";
import { PageShell } from "@/components/layout/PageShell";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Runtime application error:", error);
  }, [error]);

  return (
    <PageShell>
      <div className="py-24 max-w-xl mx-auto text-center space-y-6">
        <p className="text-evidence text-meta uppercase tracking-widest text-accent">
          500 · System Anomaly
        </p>
        <h1 className="font-serif text-display-xl text-ink tracking-tight">Something broke.</h1>
        <p className="font-sans text-body-md text-ink-secondary leading-relaxed">
          A client-side execution anomaly occurred during rendering.
        </p>
        <div className="pt-4 flex justify-center gap-4">
          <button
            onClick={() => reset()}
            className="inline-flex min-h-11 items-center px-5 py-2.5 bg-ink text-paper text-sm font-sans font-medium rounded-md hover:bg-ink-secondary transition-colors"
          >
            Attempt Recovery
          </button>
        </div>
      </div>
    </PageShell>
  );
}
