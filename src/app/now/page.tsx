import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { nowData } from "@/content/now";
import { ContentBlock, ContentGroup } from "@/components/ui/Content";
import { PageHeader, PageShell } from "@/components/layout/PageShell";

export const metadata: Metadata = {
  title: "Now",
  description: "What Sahil Tomar is currently building, working on, learning, and exploring. Updated regularly.",
  alternates: { canonical: "/now" },
};

export default function NowPage() {
  return (
    <PageShell>
      <PageHeader
        title="Now."
        description="A current log of what I'm building, working through, learning, and exploring."
        eyebrow={
          <span className="inline-flex items-center gap-2 text-verified">
            <span className="h-1.5 w-1.5 rounded-full bg-verified" aria-hidden="true" />
            Live — updated {nowData.lastUpdated} &middot; {nowData.location}
          </span>
        }
      />

      {/* Sections */}
      <div className="space-y-16 sm:space-y-20">
        
        {/* 01 Building */}
        <ContentBlock as="section" aria-labelledby="building" className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 lg:gap-16">
          <div className="md:col-span-4 lg:col-span-3">
            <p className="text-evidence text-meta text-ink-faint uppercase mb-2">01</p>
            <h2 id="building" className="font-serif text-heading-lg text-ink tracking-tight">Building</h2>
          </div>
          <div className="md:col-span-8 lg:col-span-7">
            <ContentGroup className="space-y-8">
              {nowData.building.map((item, i) => (
                <div key={i} className="pb-8 border-b border-rule-light last:border-b-0 last:pb-0">
                  <div className="flex items-baseline justify-between gap-4 mb-2">
                    <h3 className="font-sans text-body-lg font-medium text-ink">
                      {item.title}
                    </h3>
                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-evidence text-meta text-ink-muted hover:text-ink transition-colors"
                      >
                        {item.linkLabel ?? "Visit"} <ArrowUpRight className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                  <p className="font-sans text-body-md text-ink-secondary leading-relaxed max-w-prose">
                    {item.description}
                  </p>
                </div>
              ))}
            </ContentGroup>
          </div>
        </ContentBlock>

        {/* 02 Working On */}
        <ContentBlock as="section" aria-labelledby="working-on" className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 lg:gap-16 border-t border-rule-light pt-16 sm:pt-20">
          <div className="md:col-span-4 lg:col-span-3">
            <p className="text-evidence text-meta text-ink-faint uppercase mb-2">02</p>
            <h2 id="working-on" className="font-serif text-heading-lg text-ink tracking-tight">Working On</h2>
          </div>
          <div className="md:col-span-8 lg:col-span-7">
            <ContentGroup className="space-y-8">
              {nowData.workingOn.map((item, i) => (
                <div key={i} className="pb-8 border-b border-rule-light last:border-b-0 last:pb-0">
                  <h3 className="font-sans text-body-lg font-medium text-ink mb-2">
                    {item.title}
                  </h3>
                  <p className="font-sans text-body-md text-ink-secondary leading-relaxed max-w-prose">
                    {item.description}
                  </p>
                </div>
              ))}
            </ContentGroup>
          </div>
        </ContentBlock>

        {/* 03 Learning */}
        <ContentBlock as="section" aria-labelledby="learning" className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 lg:gap-16 border-t border-rule-light pt-16 sm:pt-20">
          <div className="md:col-span-4 lg:col-span-3">
            <p className="text-evidence text-meta text-ink-faint uppercase mb-2">03</p>
            <h2 id="learning" className="font-serif text-heading-lg text-ink tracking-tight">Learning</h2>
          </div>
          <div className="md:col-span-8 lg:col-span-7">
            <ContentGroup className="space-y-8">
              {nowData.learning.map((item, i) => (
                <div key={i} className="pb-8 border-b border-rule-light last:border-b-0 last:pb-0">
                  <h3 className="font-sans text-body-lg font-medium text-ink mb-2">
                    {item.topic}
                  </h3>
                  <p className="font-sans text-body-md text-ink-secondary leading-relaxed max-w-prose">
                    {item.context}
                  </p>
                </div>
              ))}
            </ContentGroup>
          </div>
        </ContentBlock>

        {/* 04 Exploring */}
        <ContentBlock as="section" aria-labelledby="exploring" className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 lg:gap-16 border-t border-rule-light pt-16 sm:pt-20">
          <div className="md:col-span-4 lg:col-span-3">
            <p className="text-evidence text-meta text-ink-faint uppercase mb-2">04</p>
            <h2 id="exploring" className="font-serif text-heading-lg text-ink tracking-tight">Exploring</h2>
          </div>
          <div className="md:col-span-8 lg:col-span-7">
            <ContentGroup className="space-y-8">
              {nowData.exploring.map((item, i) => (
                <div key={i} className="pb-8 border-b border-rule-light last:border-b-0 last:pb-0">
                  <h3 className="font-sans text-body-lg font-medium text-ink mb-2">
                    {item.domain}
                  </h3>
                  <p className="font-sans text-body-md text-ink-secondary leading-relaxed max-w-prose">
                    {item.description}
                  </p>
                </div>
              ))}
            </ContentGroup>
          </div>
        </ContentBlock>

      </div>
    </PageShell>
  );
}
