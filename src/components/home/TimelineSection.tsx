import * as React from "react";
import { TIMELINE_DATA } from "@/content/portfolioData";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ExternalLink } from "lucide-react";

export function TimelineSection() {
  return (
    <section id="timeline" className="py-16 sm:py-20 md:py-24 border-b border-[#E4E4E7] bg-[#FAFAFA]">
      <div className="max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <SectionHeader
          eyebrow="03 / CHRONOLOGICAL TRACK RECORD"
          heading="Experience &amp; Execution Timeline"
          description="Strict reverse-chronological progression across product building, venture initiatives, global strategy sprints, and business analysis."
        />

        {/* Swiss-grid Vertical Timeline */}
        <div className="relative border-l border-zinc-200 ml-3 md:ml-64 space-y-10 sm:space-y-12">
          {TIMELINE_DATA.map((item) => (
            <div key={item.id} className="relative pl-6 sm:pl-8 group">
              {/* Timeline Marker Dot */}
              <div
                className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-[#09090B] border-2 border-white ring-1 ring-zinc-300 group-hover:scale-125 transition-transform"
                aria-hidden="true"
              />

              {/* Desktop Left Date Node (widened md:w-56 and whitespace-nowrap to prevent date wrapping) */}
              <div className="hidden md:block absolute -left-64 top-1 w-56 text-right pr-4 shrink-0">
                <span className="block text-xs font-mono font-medium text-zinc-900 whitespace-nowrap">
                  {item.dates}
                </span>
                <span className="block text-[11px] font-mono text-zinc-400">
                  {item.location}
                </span>
              </div>

              {/* Mobile Date Header */}
              <div className="md:hidden mb-2">
                <span className="inline-block text-xs font-mono font-semibold text-zinc-900 whitespace-nowrap">
                  {item.dates}
                </span>
              </div>

              {/* Role Card */}
              <div className="rounded-lg border border-[#E4E4E7] bg-white p-5 sm:p-6 shadow-xs hover:border-zinc-300 transition-colors">
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                  <h3 className="text-base sm:text-lg font-bold text-[#09090B] tracking-tight">
                    {item.title}
                  </h3>
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-mono text-zinc-500 hover:text-zinc-900 transition-colors whitespace-nowrap"
                    >
                      <span>{item.org}</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  )}
                </div>

                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                  {item.details}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
