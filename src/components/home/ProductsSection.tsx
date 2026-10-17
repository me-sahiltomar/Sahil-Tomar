"use client";

import * as React from "react";
import { PRODUCTS_DATA } from "@/content/portfolioData";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  FileCheck,
  Compass,
  Target,
  Activity,
  Layers,
} from "lucide-react";
import { cn } from "@/lib/utils";

type FilterTab = "all" | "active-beta" | "archived";

export function ProductsSection() {
  const [activeTab, setActiveTab] = React.useState<FilterTab>("all");

  const filteredProducts = React.useMemo(() => {
    switch (activeTab) {
      case "active-beta":
        return PRODUCTS_DATA.filter(
          (p) => p.status === "active" || p.status === "beta"
        );
      case "archived":
        return PRODUCTS_DATA.filter((p) => p.status === "archived");
      case "all":
      default:
        return PRODUCTS_DATA;
    }
  }, [activeTab]);

  const getProductGlyph = (slug: string) => {
    switch (slug) {
      case "ledgerlens":
        return <FileCheck className="h-5 w-5 text-white" aria-hidden="true" />;
      case "productscout":
        return <Compass className="h-5 w-5 text-white" aria-hidden="true" />;
      case "priox":
        return <Target className="h-5 w-5 text-white" aria-hidden="true" />;
      case "vyra":
        return <Activity className="h-5 w-5 text-white" aria-hidden="true" />;
      default:
        return <Layers className="h-5 w-5 text-white" aria-hidden="true" />;
    }
  };

  return (
    <section id="products" className="py-16 sm:py-20 md:py-24 border-b border-[#E4E4E7] bg-[#FAFAFA]">
      <div className="max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <SectionHeader
            eyebrow="01 / OWNED SOFTWARE PORTFOLIO"
            heading="Software Built via CevonX Product Studio"
            description="Production applications and operational tools engineered around real startup friction points. Built under strict lifecycle governance."
            className="mb-0"
          />

          {/* Interactive Filter Tabs */}
          <div className="flex items-center gap-1 p-1 bg-white border border-[#E4E4E7] rounded-lg self-start md:self-auto shrink-0 shadow-xs">
            <button
              type="button"
              onClick={() => setActiveTab("all")}
              className={cn(
                "px-3 py-1.5 text-xs font-medium rounded-md transition-all duration-150 select-none",
                activeTab === "all"
                  ? "bg-[#09090B] text-white shadow-xs font-semibold"
                  : "text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100"
              )}
            >
              All Systems ({PRODUCTS_DATA.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("active-beta")}
              className={cn(
                "px-3 py-1.5 text-xs font-medium rounded-md transition-all duration-150 select-none",
                activeTab === "active-beta"
                  ? "bg-[#09090B] text-white shadow-xs font-semibold"
                  : "text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100"
              )}
            >
              Active &amp; Beta (3)
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("archived")}
              className={cn(
                "px-3 py-1.5 text-xs font-medium rounded-md transition-all duration-150 select-none",
                activeTab === "archived"
                  ? "bg-[#09090B] text-white shadow-xs font-semibold"
                  : "text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100"
              )}
            >
              Archived (1)
            </button>
          </div>
        </div>

        {/* 2-Column Desktop Grid / 1-Column Mobile Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="flex flex-col h-full justify-between rounded-lg border border-[#E4E4E7] bg-white p-6 sm:p-7 shadow-xs hover:border-zinc-300 transition-all duration-150"
            >
              <div className="space-y-4 flex flex-col flex-1">
                {/* Header: Glyph, Category, Name & Status Badge */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-md bg-[#09090B] shadow-xs shrink-0">
                      {getProductGlyph(product.slug)}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#09090B] tracking-tight leading-tight">
                        {product.name}
                      </h3>
                      <span className="text-[11px] font-mono font-medium uppercase tracking-widest text-zinc-500">
                        {product.category}
                      </span>
                    </div>
                  </div>
                  <StatusBadge
                    variant={
                      product.status === "active"
                        ? "active"
                        : product.status === "beta"
                        ? "beta"
                        : "archived"
                    }
                    label={product.statusLabel}
                  />
                </div>

                {/* Primary Headline FIRST */}
                <p className="text-base font-semibold text-zinc-950 leading-snug">
                  {product.headline}
                </p>

                {/* Subtitle directly UNDERNEATH headline, font-sans and text-zinc-500 */}
                <p className="text-sm font-sans text-zinc-500 leading-relaxed">
                  {product.subtitle}
                </p>

                {/* Operational Highlights */}
                <div className="pt-3 border-t border-[#E4E4E7]/70 space-y-2">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-400 font-semibold block">
                    OPERATIONAL HIGHLIGHTS
                  </span>
                  <ul className="space-y-1.5 text-xs text-zinc-600">
                    {product.operationalHighlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-zinc-400 shrink-0 mt-1.5 select-none" />
                        <span className="leading-relaxed">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack Pills */}
                <div className="pt-2 flex flex-wrap gap-1.5">
                  {product.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded bg-zinc-100 border border-zinc-200/80 text-[11px] font-mono text-zinc-700 select-none"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer CTAs pushed to bottom */}
              <div className="mt-auto pt-4 border-t border-zinc-200 flex flex-wrap items-center justify-between gap-3">
                <div>
                  {product.primaryCta ? (
                    <Button
                      href={product.primaryCta.href}
                      variant="primary"
                      size="sm"
                      isExternal={product.primaryCta.isExternal}
                      className="gap-1.5 text-xs whitespace-nowrap"
                    >
                      <span>{product.primaryCta.label}</span>
                    </Button>
                  ) : product.secondaryCta && product.status === "archived" ? (
                    <Button
                      href={product.secondaryCta.href}
                      variant="outline"
                      size="sm"
                      isExternal={product.secondaryCta.isExternal}
                      className="gap-1.5 text-xs text-zinc-700 whitespace-nowrap"
                    >
                      <span>{product.secondaryCta.label}</span>
                    </Button>
                  ) : null}
                </div>

                <div className="flex items-center gap-4">
                  {product.githubUrl && (
                    <a
                      href={product.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-zinc-700 hover:text-zinc-950 transition-colors whitespace-nowrap"
                    >
                      <span>GitHub ↗</span>
                    </a>
                  )}
                  {product.secondaryCta && product.primaryCta && (
                    <a
                      href={product.secondaryCta.href}
                      target={product.secondaryCta.isExternal ? "_blank" : undefined}
                      rel={product.secondaryCta.isExternal ? "noopener noreferrer" : undefined}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-zinc-700 hover:text-zinc-950 transition-colors whitespace-nowrap"
                    >
                      <span>{product.secondaryCta.label}</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
