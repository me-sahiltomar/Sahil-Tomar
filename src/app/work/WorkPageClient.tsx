"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { type Project, type CapabilityCategory } from "@/content/projects";
import { ContentBlock, Rule } from "@/components/ui/Content";
import { PageHeader, PageShell } from "@/components/layout/PageShell";

function statusColor(status: Project["status"]) {
  if (status.includes("LIVE")) return "text-verified";
  if (status.includes("PROTOTYPE")) return "text-ink";
  if (status.includes("COMPLETED")) return "text-ink-muted";
  return "text-ink-muted";
}

function WorkRow({ project, index }: { project: Project; index: number }) {
  return (
    <div className="relative group">
      <Rule className="absolute top-0 left-0 w-full" />
      <ContentBlock className="grid grid-cols-1 gap-5 px-3 py-7 transition-colors duration-200 group-hover:bg-paper-raised sm:gap-6 lg:-mx-3 lg:grid-cols-12 lg:gap-4 lg:px-3 lg:py-9 rounded-sm">
        {/* Number */}
        <div className="hidden pt-1 lg:col-span-1 lg:block">
          <span className="text-evidence text-meta text-ink-faint">
            0{index + 1}
          </span>
        </div>

        {/* Main Info */}
        <div className="lg:col-span-4">
          <h2 className="font-serif text-heading-md text-ink tracking-tight mb-1 transition-colors duration-150 group-hover:text-accent">
            {project.title}
          </h2>
          <p className="text-evidence text-meta text-ink-muted uppercase">
            {project.category.join(" · ")}
          </p>
        </div>

        {/* Description */}
        <div className="pt-1 lg:col-span-4">
          <p className="font-sans text-body-sm text-ink-secondary leading-relaxed">
            {project.shortDescription}
          </p>
        </div>

        {/* Metadata & Actions */}
        <div className="flex flex-col items-start justify-between pt-1 lg:col-span-3 lg:items-end">
          <div className="mb-3 flex items-center gap-2 lg:mb-0">
            <span className={`text-evidence text-meta font-medium uppercase ${statusColor(project.status)}`}>
              {project.status} &middot; {project.year}
            </span>
          </div>
          
          <div className="flex items-center gap-3 mt-auto">
            {project.caseStudy && <Link
              href={`/work/${project.slug}`}
              aria-label={`Read ${project.title} case study`}
              className="inline-flex min-h-11 items-center gap-1 rounded-sm text-meta font-sans font-medium text-ink transition-colors duration-150 hover:text-accent"
            >
              Case study <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
            </Link>}
            {project.links?.find((l) => l.type === "live") && (
              <a
                href={project.links.find((l) => l.type === "live")!.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-1 rounded-sm text-meta font-sans text-ink-muted transition-colors duration-150 hover:text-ink"
              >
                Visit product <ArrowUpRight className="w-3 h-3" />
              </a>
            )}
          </div>
        </div>
      </ContentBlock>
    </div>
  );
}

export function WorkPageClient({ initialProjects }: { initialProjects: Project[] }) {
  const [filter, setFilter] = useState<string>("All");

  const categories = ["All", ...Array.from(new Set(initialProjects.flatMap((p) => p.category)))];

  const filteredProjects =
    filter === "All"
      ? initialProjects
      : initialProjects.filter((p) => p.category.includes(filter as CapabilityCategory));

  return (
    <PageShell>
      <PageHeader
        title="Work."
        description="A few things I’ve built or worked on, from software products to a cross-team adoption initiative."
        aside={
          <div>
            <p className="eyebrow mb-3">Filter by scope</p>
            <div className="flex flex-wrap gap-2" role="group" aria-label="Filter work by scope">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setFilter(category)}
                  aria-pressed={filter === category}
                  className={`inline-flex min-h-11 items-center rounded-md border px-3 text-meta font-sans font-medium transition-colors duration-150 ${
                    filter === category
                      ? "border-ink bg-ink text-paper-raised"
                      : "border-rule bg-transparent text-ink hover:border-ink-muted hover:bg-paper-recessed"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        }
      />

        {/* Index List */}
        <div className="relative pt-2">
          {filteredProjects.map((project, i) => (
            <WorkRow key={project.slug} project={project} index={i} />
          ))}
        </div>
    </PageShell>
  );
}
