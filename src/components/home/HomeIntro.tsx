import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { siteIdentity } from "@/content/site";
import { ContentBlock } from "@/components/ui/Content";
import { siteContainerClassName } from "@/components/layout/PageShell";

export function HomeIntro() {
  return (
    <header className="relative w-full border-b border-rule bg-paper">
      <div className={`${siteContainerClassName} py-12 sm:py-14 lg:py-16`}>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">

          {/* Left Column - Core Identity */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Top annotation bar */}
            <ContentBlock className="flex items-center gap-3 mb-6">
              <span className="text-evidence text-meta text-ink-muted uppercase">
                Personal &middot; Professional
              </span>
            </ContentBlock>

            {/* Name - the single most important signal */}
            <ContentBlock className="mb-5">
              <h1 className="font-serif text-display-xl text-ink tracking-tighter leading-[0.98]">
                {siteIdentity.name}
              </h1>
            </ContentBlock>

            {/* Positioning line */}
            <ContentBlock className="mb-5">
              <p className="text-ink-secondary font-sans text-body-lg max-w-[58ch] leading-relaxed">
                {siteIdentity.shortBio}
              </p>
            </ContentBlock>

            {/* Role Metadata */}
            <ContentBlock className="mb-8">
              <p className="text-evidence text-label text-ink-muted uppercase tracking-wide">
                {siteIdentity.role}
              </p>
            </ContentBlock>

            {/* CTAs */}
            <ContentBlock className="flex flex-wrap gap-3">
              <Link
                href="/work"
                className="inline-flex min-h-11 items-center gap-2 rounded-md bg-ink text-paper-raised text-sm font-sans font-medium px-5 hover:bg-ink-secondary transition-colors duration-150"
              >
                See the work
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/resume"
                className="inline-flex min-h-11 items-center gap-2 rounded-md border border-rule text-ink text-sm font-sans font-medium px-5 hover:bg-paper-recessed transition-colors duration-150"
              >
                Resume
              </Link>
              <Link
                href="/about"
                className="inline-flex min-h-11 items-center gap-2 rounded-md border border-rule text-ink text-sm font-sans font-medium px-5 hover:bg-paper-recessed transition-colors duration-150"
              >
                About Sahil
              </Link>
            </ContentBlock>
          </div>

          {/* Right Column - Status/Proof */}
          <div className="lg:col-span-4 lg:col-start-9 flex flex-col justify-end pt-2 lg:pt-0 lg:pb-1">
            <ContentBlock className="grid grid-cols-3 gap-3 border-t border-rule-light pt-4 sm:gap-5 lg:flex lg:flex-col lg:gap-4 lg:border-l lg:border-t-0 lg:pl-6 lg:pt-2">
              {[
                { title: "CevonX", label: "Live Company", slug: "cevonx" },
                { title: "ProductScout", label: "Live Product", slug: "productscout" },
                { title: "LedgerLens", label: "Live Product", slug: "ledgerlens" }
              ].map((p) => (
                <Link
                  key={p.title}
                  href={`/work/${p.slug}`}
                  className="flex min-w-0 flex-col gap-1 group"
                  aria-label={`View ${p.title} case study (${p.label})`}
                >
                  <span className="text-evidence text-meta text-ink font-medium tracking-wide uppercase transition-colors duration-150 group-hover:text-accent">
                    {p.title}
                  </span>
                  <div className="flex items-center gap-1.5">
                    <span
                      className="w-1.5 h-1.5 rounded-full bg-verified"
                      aria-hidden="true"
                    />
                    <span className="text-evidence text-meta text-ink-muted uppercase">
                      {p.label}
                    </span>
                  </div>
                </Link>
              ))}
            </ContentBlock>
          </div>

        </div>
      </div>
    </header>
  );
}
