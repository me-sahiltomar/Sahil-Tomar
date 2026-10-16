import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { workingPatterns } from "@/content/site";
import { ContentBlock, Rule } from "@/components/ui/Content";
import { siteContainerClassName } from "@/components/layout/PageShell";

function BehaviorRow({
  item,
  index,
}: {
  item: (typeof workingPatterns)[0];
  index: number;
}) {
  const headingColumns = [
    "lg:col-span-3",
    "lg:col-span-3",
    "lg:col-span-3",
  ];
  const copyColumns = [
    "lg:col-span-6 lg:col-start-4",
    "lg:col-span-5 lg:col-start-4",
    "lg:col-span-5 lg:col-start-4",
  ];
  const detailColumns = [
    "lg:col-span-3 lg:col-start-10",
    "lg:col-span-4 lg:col-start-9",
    "lg:col-span-4 lg:col-start-9",
  ];

  return (
    <div className="relative">
      <Rule className={`absolute top-0 left-0 w-full ${index === 0 ? "bg-rule-strong" : ""}`} />
      <ContentBlock className={`grid grid-cols-1 gap-x-6 gap-y-5 lg:grid-cols-12 lg:gap-x-8 ${index === 1 ? "py-10 md:py-12" : "py-12 md:py-14"}`}>
        {/* Left: Title */}
        <div className={`${headingColumns[index]} pt-1`}>
          <div className="flex items-baseline gap-3">
            <span className="text-evidence text-meta text-ink-muted tabular-nums">0{index + 1}</span>
            <h3 className="font-serif text-heading-md text-ink tracking-tight leading-tight">
              {item.heading}
            </h3>
          </div>
        </div>

        {/* Center: Copy */}
        <div className={`${copyColumns[index]} space-y-3`}>
          {item.copy.map((paragraph, idx) => (
            <p key={idx} className="font-sans text-body-sm text-ink-secondary leading-relaxed max-w-[64ch]">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Right: Evidence & CTA */}
        <div className={`${detailColumns[index]} flex flex-col items-start gap-3 pt-1 lg:pt-0`}>
          <p className="text-evidence text-meta text-ink-muted tracking-wide">
            {item.evidence}
          </p>
          
          {item.href && (
            <Link
              href={item.href}
              className="group inline-flex min-h-11 items-center gap-1.5 text-meta font-sans font-medium text-ink transition-colors duration-150 hover:text-accent rounded-sm px-1 -ml-1"
            >
              {item.ctaLabel}
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          )}
        </div>
      </ContentBlock>
    </div>
  );
}

export function HomeHowIWork() {
  return (
    <section aria-labelledby="how-i-work" className="w-full bg-paper">
      <div className={`${siteContainerClassName} py-section-home`}>
        {/* Section header */}
        <ContentBlock className="mb-12 md:mb-16">
          <h2 id="how-i-work" className="text-evidence text-xs text-ink-muted uppercase tracking-widest">
            What I tend to do.
          </h2>
        </ContentBlock>

        {/* Behavior rows */}
        <div className="relative">
          <Rule className="absolute top-0 left-0 w-full bg-rule-strong" />
          {workingPatterns.map((item, index) => (
            <BehaviorRow key={item.heading} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
