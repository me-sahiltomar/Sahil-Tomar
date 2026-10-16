"use client";

import * as React from "react";
import { CaseStudyItem } from "@/content/portfolioData";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { X, CheckCircle2, AlertTriangle, FileText, Lightbulb } from "lucide-react";

interface CaseStudyModalProps {
  caseStudy: CaseStudyItem | null;
  onClose: () => void;
}

export function CaseStudyModal({ caseStudy, onClose }: CaseStudyModalProps) {
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (caseStudy) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [caseStudy, onClose]);

  if (!caseStudy) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-zinc-950/60 backdrop-blur-xs transition-opacity duration-200 animate-in fade-in"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-3xl max-h-[90vh] flex flex-col bg-white rounded-xl border border-[#E4E4E7] shadow-xl overflow-hidden z-10 animate-in zoom-in-95 duration-150">
        {/* Header */}
        <div className="flex items-start justify-between p-6 sm:p-7 border-b border-[#E4E4E7] bg-white sticky top-0 z-20">
          <div className="space-y-2 pr-6">
            <div className="flex items-center gap-2 flex-wrap">
              <StatusBadge
                variant={caseStudy.badgeVariant}
                label={caseStudy.badge}
              />
              <span className="text-xs font-mono text-zinc-500">
                {caseStudy.roleTimeline}
              </span>
            </div>
            <h2
              id="case-study-title"
              className="text-xl sm:text-2xl font-bold text-[#09090B] tracking-tight leading-snug"
            >
              {caseStudy.title}
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-md text-zinc-400 hover:text-zinc-900 hover:bg-zinc-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900"
            aria-label="Close dialog"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 sm:p-8 space-y-7 overflow-y-auto bg-white text-zinc-800 text-sm leading-relaxed">
          {/* Summary / Context */}
          <div className="p-4 rounded-lg bg-[#FAFAFA] border border-[#E4E4E7]">
            <p className="font-medium text-zinc-900 text-sm sm:text-base leading-snug">
              {caseStudy.summary}
            </p>
          </div>

          {/* 1. Problem & Context */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-zinc-900">
              <AlertTriangle className="h-4 w-4 text-amber-600" />
              <span>01 / The Problem &amp; Operational Friction</span>
            </div>
            <p className="text-zinc-600 pl-6 border-l-2 border-zinc-200">
              {caseStudy.modalData.problem}
            </p>
          </div>

          {/* 2. Methodology & Approach */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-zinc-900">
              <Lightbulb className="h-4 w-4 text-zinc-700" />
              <span>02 / Strategic Methodology &amp; Execution</span>
            </div>
            <p className="text-zinc-600 pl-6 border-l-2 border-zinc-200">
              {caseStudy.modalData.methodology}
            </p>
          </div>

          {/* 3. Deliverables */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-zinc-900">
              <FileText className="h-4 w-4 text-zinc-700" />
              <span>03 / Core Deliverables &amp; Artifacts</span>
            </div>
            <div className="grid grid-cols-1 gap-2 pl-6">
              {caseStudy.modalData.deliverables.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-700">
                  <CheckCircle2 className="h-4 w-4 text-[#059669] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 4. Strategic Lessons & Takeaways */}
          <div className="p-5 rounded-lg bg-[#FFFBEB] border border-[#FDE68A] space-y-2">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#D97706] block">
              EXECUTIVE LESSON &amp; KEY TAKEAWAY
            </span>
            <p className="text-xs sm:text-sm text-amber-950 font-medium leading-relaxed">
              {caseStudy.modalData.keyTakeaways}
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 sm:px-8 border-t border-[#E4E4E7] bg-[#FAFAFA] flex items-center justify-between">
          <span className="text-xs font-mono text-zinc-400">
            CevonX Strategic Diagnostics · Sahil Tomar
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold rounded-md bg-[#09090B] text-white hover:bg-zinc-800 transition-colors"
          >
            Close Post-Mortem
          </button>
        </div>
      </div>
    </div>
  );
}
