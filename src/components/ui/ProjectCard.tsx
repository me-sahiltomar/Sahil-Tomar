import React from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Github, ExternalLink, FileText } from "lucide-react";
import { Project, CapabilityCategory } from "@/content/projects";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  const getBadgeVariant = (cap: CapabilityCategory) => {
    switch (cap) {
      case "Product":
        return "product";
      case "Operations":
        return "operations";
      case "Strategy":
        return "strategy";
      case "AI":
        return "ai";
      case "Software":
        return "ai";
      default:
        return "default";
    }
  };

  return (
    <article
      className={cn(
        "group relative rounded-lg border border-zinc-200 bg-white p-6 sm:p-7 flex flex-col justify-between transition-all duration-200",
        "hover:border-zinc-400 hover:shadow-xs",
        featured ? "bg-zinc-50/30" : "bg-white"
      )}
    >
      <div>
        {/* Top Meta: Year & Status */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className="font-mono text-xs text-zinc-400 font-medium">
            {project.year}
          </span>
          <Badge variant="status">
            {project.status}
          </Badge>
        </div>

        {/* Title & Descriptor */}
        <div className="mb-3">
          <h3 className="text-xl font-bold tracking-tight text-zinc-950 group-hover:text-zinc-800 transition-colors">
            <Link
              href={`/work/${project.slug}`}
              className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 rounded"
            >
              {project.title}
            </Link>
          </h3>
          <p className="text-xs font-medium text-zinc-500 mt-1">
            {project.context}
          </p>
        </div>

        {/* Capabilities */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.category.map((cap) => (
            <Badge key={cap} variant={getBadgeVariant(cap)}>
              {cap}
            </Badge>
          ))}
        </div>

        {/* One-Sentence Summary */}
        <p className="text-sm text-zinc-700 leading-relaxed mb-5">
          {project.shortDescription}
        </p>

        {/* Ownership / My Role */}
        <div className="border-t border-zinc-100 pt-3.5 mb-6">
          <p className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 font-semibold mb-1">
            Sahil&apos;s Ownership
          </p>
          <p className="text-xs text-zinc-600 leading-relaxed">
            {project.role}
          </p>
        </div>
      </div>

      {/* Footer / CTAs */}
      <div className="pt-4 border-t border-zinc-100 flex items-center justify-between gap-3">
        <Link
          href={`/work/${project.slug}`}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-zinc-950 hover:text-zinc-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 rounded py-1"
        >
          <span>View Case Study</span>
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
        </Link>

        {/* Optional quick external links */}
        {project.links && project.links.length > 0 && (
          <div className="flex items-center gap-2">
            {project.links.slice(0, 2).map((link) => (
              <a
                key={link.url}
                href={link.url}
                target={link.url.startsWith("http") ? "_blank" : undefined}
                rel={link.url.startsWith("http") ? "noopener noreferrer" : undefined}
                className="text-zinc-400 hover:text-zinc-800 transition-colors p-1 rounded"
                title={link.label}
                aria-label={`${link.label} for ${project.title}`}
              >
                {link.type === "github" ? (
                  <Github className="h-3.5 w-3.5" />
                ) : link.type === "artifact" ? (
                  <FileText className="h-3.5 w-3.5" />
                ) : (
                  <ExternalLink className="h-3.5 w-3.5" />
                )}
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
