import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { nowData } from "@/content/site";
import { ContentBlock, ContentGroup } from "@/components/ui/Content";
import { siteContainerClassName } from "@/components/layout/PageShell";

export function HomeNowPreview() {
  const blocks = [
    { label: "Building", items: nowData.homepagePreview.building },
    { label: "Exploring", items: nowData.homepagePreview.exploring },
    { label: "Learning", items: nowData.homepagePreview.learning },
  ];

  return (
    <section aria-labelledby="now-preview" className="relative w-full border-t border-rule bg-paper-recessed">
      <div className={`${siteContainerClassName} py-section-home`}>
        <ContentBlock className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          {/* Left: Heading */}
          <div className="lg:col-span-4">
            <h2 id="now-preview" className="text-evidence text-xs text-ink-muted uppercase tracking-widest mb-6">
              Now.
            </h2>
            <p className="text-evidence text-meta text-ink-muted">Updated {nowData.lastUpdated}</p>
          </div>

          {/* Right: Content */}
          <div className="lg:col-span-8">
            <ContentGroup className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-5 mb-8 md:mb-10">
              {blocks.map((block) => (
                <div key={block.label} className="flex flex-col gap-2 border-t border-rule-light pt-3">
                  <h3 className="text-evidence text-meta tracking-widest text-ink-muted uppercase">
                    {block.label}
                  </h3>
                  <p className="font-sans text-body-sm text-ink font-medium leading-relaxed">
                    {block.items.join(" · ")}
                  </p>
                </div>
              ))}
            </ContentGroup>

            <Link
              href="/now"
              className="group inline-flex min-h-11 items-center gap-2 rounded-sm text-sm font-sans font-medium text-ink border-b border-rule hover:border-ink transition-colors duration-150"
            >
              See what I'm doing now <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </ContentBlock>
      </div>
    </section>
  );
}
