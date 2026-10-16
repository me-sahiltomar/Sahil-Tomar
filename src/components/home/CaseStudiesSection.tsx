"use client";

import * as React from "react";
import { CASE_STUDIES_DATA, CaseStudyItem } from "@/content/portfolioData";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CaseStudyModal } from "./CaseStudyModal";
import { ArrowRight, ShieldAlert } from "lucide-react";

export function CaseStudiesSection() {
  const [selectedCaseStudy, setSelectedCaseStudy] = React.useState<CaseStudyItem | null>(null);

  const featured = CASE_STUDIES_DATA.find((c) => c.isFeatured) || CASE_STUDIES_DATA[0];
  const standardCaseStudies = CASE_STUDIES_DATA.filter((c) => !c.isFeatured);

  return (
    <section id="case-studies" className="py-16 sm:py-20 md:py-24 border-b border-[#E4E4E7] bg-white">
      <div className="max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <SectionHeader
          eyebrow="02 / STRATEGIC DIAGNOSTICS & CASE STUDIES"
          heading="0-to-1 Venture Forensics & Cross-Border Sprints"
          description="Deep-dive operational audits, regulatory discovery, and multi-stakeholder execution frameworks."
        />

        {/* 1. Featured Full-Width Card: FinStation */}
        <div className="rounded-xl border border-[#E4E4E7] bg-[#FAFAFA] p-6 sm:p-8 md:p-10 mb-8 shadow-xs hover:border-zinc-300 transition-all">
          <div className="space-y-6">
            {/* Header / Badges */}
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2 flex-wrap">
                <StatusBadge
                  variant={featured.badgeVariant}
                  label={featured.badge}
                />
                <span className="text-xs font-mono text-zinc-500 whitespace-nowrap">
                  {featured.roleTimeline}
                </span>
              </div>
              <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-400 font-semibold whitespace-nowrap">
                FEATURED VENTURE FORENSICS
              </span>
            </div>

            {/* Title & Summary */}
            <div className="space-y-2">
              <h3 className="text-2xl sm:text-3xl font-bold text-[#09090B] tracking-tight">
                {featured.title}
              </h3>
              <p className="text-base text-zinc-600 leading-relaxed max-w-4xl">
                {featured.summary}
              </p>
            </div>

            {/* Key Execution Metrics: 3 Mini Stat Boxes */}
            {featured.metrics && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                {featured.metrics.map((metric, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-lg bg-white border border-[#E4E4E7] shadow-2xs space-y-1"
                  >
                    <div className="text-xl sm:text-2xl font-bold font-mono text-[#09090B]">
                      {metric.value}
                    </div>
                    <div className="text-xs text-zinc-500 leading-snug">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* The Strategic Lesson Callout Box */}
            {featured.strategicLesson && (
              <div className="p-5 rounded-lg bg-[#FFFBEB] border border-[#FDE68A] flex items-start gap-3">
                <ShieldAlert className="h-5 w-5 text-[#D97706] shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <span className="text-[11px] font-mono uppercase font-bold tracking-wider text-[#D97706] block">
                    THE STRATEGIC LESSON
                  </span>
                  <p className="text-xs sm:text-sm text-amber-950 leading-relaxed font-medium">
                    {featured.strategicLesson}
                  </p>
                </div>
              </div>
            )}

            {/* Action */}
            <div className="pt-2">
              <button
                type="button"
                onClick={() => setSelectedCaseStudy(featured)}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-[#09090B] text-white text-xs sm:text-sm font-semibold hover:bg-zinc-800 transition-colors shadow-xs whitespace-nowrap"
              >
                <span>Read Venture &amp; Regulatory Case Study</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* 2. Grid of Standard Case Study Cards (2x2 Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {standardCaseStudies.map((study) => (
            <div
              key={study.id}
              className="flex flex-col h-full justify-between rounded-lg border border-[#E4E4E7] bg-[#FAFAFA] p-6 sm:p-7 shadow-xs hover:border-zinc-300 transition-all duration-150"
            >
              <div className="space-y-3.5 flex flex-col flex-1">
                <div className="flex items-center justify-between gap-2">
                  <StatusBadge
                    variant={study.badgeVariant}
                    label={study.badge}
                  />
                  <span className="text-[11px] font-mono text-zinc-400 whitespace-nowrap uppercase tracking-wider font-semibold">
                    {study.domainTag || "CASE STUDY"}
                  </span>
                </div>

                <h4 className="text-lg font-bold text-[#09090B] tracking-tight leading-snug">
                  {study.title}
                </h4>

                <div className="text-xs font-mono text-zinc-500">
                  {study.roleTimeline}
                </div>

                <div className="pt-2 border-t border-[#E4E4E7]/70">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-400 font-semibold block mb-1">
                    DELIVERABLE &amp; METHODOLOGY
                  </span>
                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                    {study.deliverable || study.summary}
                  </p>
                </div>
              </div>

              {/* Footer aligned across cards */}
              <div className="mt-auto pt-4 border-t border-zinc-200">
                <button
                  type="button"
                  onClick={() => setSelectedCaseStudy(study)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#09090B] hover:text-zinc-600 transition-colors whitespace-nowrap"
                >
                  <span>Inspect Case Study</span>
                  <ArrowRight className="h-3.5 w-3.5 text-zinc-400" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Case Study Modal */}
        <CaseStudyModal
          caseStudy={selectedCaseStudy}
          onClose={() => setSelectedCaseStudy(null)}
        />
      </div>
    </section>
  );
}
