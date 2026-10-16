import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { projects, type Project } from "@/content/projects";
import { ContentBlock, Rule } from "@/components/ui/Content";
import { siteContainerClassName } from "@/components/layout/PageShell";

const FEATURED_SLUGS = ["ledgerlens", "productscout", "organizational-adoption-initiative"];

function statusColor(status: Project["status"]) {
  if (status.includes("LIVE")) return "text-verified";
  if (status.includes("COMPLETED")) return "text-ink-muted";
  return "text-ink-muted";
}

function WorkRow({ project, index }: { project: Project; index: number }) {
  return (
    <div className="relative group">
      <Rule className="absolute top-0 left-0 w-full" />
      <ContentBlock className="grid grid-cols-1 gap-5 py-7 transition-colors duration-200 group-hover:bg-paper-raised sm:gap-6 lg:-mx-3 lg:grid-cols-12 lg:gap-4 lg:px-3 lg:py-9 rounded-sm">
        {/* Main Info */}
        <div className="flex flex-col gap-3 lg:col-span-4 lg:flex-row lg:gap-4">
          <div className="hidden w-10 shrink-0 pt-1 lg:block">
            <span className="text-evidence text-meta tracking-widest text-ink-faint">
              0{index + 1} &mdash;
            </span>
          </div>
          <div>
            <h3 className="font-serif text-heading-md text-ink tracking-tight mb-1 group-hover:text-accent transition-colors">
              <span className="mr-2 font-sans text-meta tracking-widest text-ink-faint lg:hidden">0{index + 1} &mdash;</span>
              {project.title}
            </h3>
            <p className="text-evidence text-meta tracking-widest text-ink-muted uppercase">
              {project.category.join(" · ")}
            </p>
          </div>
        </div>

        {/* Description */}
        <div className="pt-1 lg:col-span-5">
          <p className="font-sans text-sm text-ink-secondary leading-relaxed max-w-prose">
            {project.shortDescription}
          </p>
        </div>

        {/* Metadata & Actions */}
        <div className="flex flex-col items-start justify-between pt-1 lg:col-span-3 lg:items-end">
          <div className="mb-3 flex items-center gap-2 lg:mb-0">
            <span className={`text-evidence text-meta tracking-widest font-medium uppercase ${statusColor(project.status)}`}>
              {project.status} &middot; {project.year}
            </span>
          </div>
          
          <div className="flex flex-wrap items-center gap-x-4 gap-y-0">
            <Link
              href={`/work/${project.slug}`}
              className="inline-flex min-h-11 items-center gap-1.5 text-meta font-sans font-medium text-ink transition-colors duration-150 hover:text-accent"
            >
              Case study <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
            {project.links?.find((l) => l.type === "live") && (
              <a
                href={project.links.find((l) => l.type === "live")!.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-1.5 text-meta font-sans font-medium text-ink-muted transition-colors duration-150 hover:text-ink"
              >
                Visit product <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>
      </ContentBlock>
    </div>
  );
}

export function HomeWork() {
  const featured = FEATURED_SLUGS.map((slug) =>
    projects.find((p) => p.slug === slug)
  ).filter(Boolean) as Project[];

  const cevonx = projects.find((p) => p.slug === "cevonx");

  return (
    <section aria-labelledby="selected-work" className="w-full bg-paper">
      <div className={`${siteContainerClassName} py-section-home`}>
        {/* Section header */}
        <ContentBlock className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12 md:mb-16">
          <div className="md:col-span-6 lg:col-span-5">
            <h2 id="selected-work" className="text-evidence text-xs text-ink-muted uppercase tracking-widest mb-3">
              Work.
            </h2>
            <p className="font-serif text-heading-lg text-ink tracking-tight leading-tight">
              A few things I've built or worked on.
            </p>
          </div>
          
          <div className="md:col-span-6 lg:col-span-7 flex items-start md:items-end justify-start md:justify-end">
            <Link
              href="/work"
              className="group inline-flex min-h-11 items-center gap-2 rounded-sm text-sm font-sans font-medium text-ink border-b border-rule hover:border-ink transition-colors duration-150"
            >
              View all work <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </ContentBlock>

        {/* CevonX Distinct Block */}
        {cevonx && (
          <ContentBlock className="mb-10 md:mb-12 py-7 md:py-8 border-y border-rule-light">
            <p className="text-evidence text-meta tracking-widest text-ink-muted uppercase mb-5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-verified" aria-hidden="true" />
              Current Company
            </p>
            <div className="grid grid-cols-1 items-start gap-x-8 gap-y-5 lg:grid-cols-12 lg:gap-x-12">
              <div className="lg:col-span-3">
                <h3 className="font-serif text-heading-xl text-ink tracking-tight mb-2">
                  {cevonx.title}
                </h3>
                <p className="text-evidence text-meta tracking-widest text-ink-muted uppercase">
                  {cevonx.category.join(" · ")}
                </p>
              </div>
              <div className="lg:col-span-6 lg:col-start-4">
                <p className="font-sans text-body-md text-ink-secondary leading-relaxed max-w-[58ch]">
                  {cevonx.shortDescription}
                </p>
              </div>
              <div className="flex lg:col-span-2 lg:col-start-10 lg:justify-end">
                <Link
                  href={`https://cevonx.com`}
                  target="_blank"
                  className="group inline-flex min-h-11 items-center gap-2 rounded-sm text-meta font-sans font-medium text-ink border-b border-rule hover:border-ink transition-colors duration-150"
                >
                  Visit CevonX
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </ContentBlock>
        )}

        {/* Work items */}
        <div className="relative pt-2">
          <Rule className="absolute top-0 left-0 w-full bg-rule-strong" />
          {featured.map((project, i) => (
            <WorkRow key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
