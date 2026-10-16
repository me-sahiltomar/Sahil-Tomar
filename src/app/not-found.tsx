import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";

export default function NotFound() {
  return (
    <PageShell>
      <div className="py-24 max-w-xl mx-auto text-center space-y-6">
        <p className="text-evidence text-meta uppercase tracking-widest text-ink-muted">
          404 · Not Found
        </p>
        <h1 className="font-serif text-display-xl text-ink tracking-tight">Artifact missing.</h1>
        <p className="font-sans text-body-md text-ink-secondary leading-relaxed">
          The requested route or case study does not exist in the active archive.
        </p>
        <div className="pt-4">
          <Link
            href="/"
            className="inline-flex min-h-11 items-center px-5 py-2.5 bg-ink text-paper text-sm font-sans font-medium rounded-md hover:bg-ink-secondary transition-colors"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </PageShell>
  );
}
