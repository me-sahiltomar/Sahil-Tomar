import React from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { nowData } from "@/content/now";

export function Chapter08Now() {
  return (
    <section className="relative w-full bg-sand py-32 px-6 sm:px-10 lg:px-14 xl:px-16 border-t border-borderSoft">
      <div className="max-w-6xl mx-auto">
        <div className="rounded border border-borderMedium bg-paper p-8 sm:p-12 lg:p-16 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-accent-action animate-pulse" />
                <p className="text-[10px] font-mono uppercase tracking-widest text-ink-muted">
                  Right Now · {nowData.lastUpdated}
                </p>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif tracking-tight text-ink">
                What I am focused on now.
              </h2>
            </div>
            <Link href="/now">
              <Button size="md" className="bg-sand border border-borderMedium text-ink hover:bg-borderSoft rounded font-sans uppercase tracking-widest text-xs px-6">
                <span>Read the full 'Now' log</span>
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {nowData.building.slice(0, 2).map((item, idx) => (
              <div key={idx} className="bg-sand border border-borderSoft rounded p-6 flex flex-col justify-between">
                <div>
                  <p className="text-[10px] font-mono uppercase tracking-widest text-accent-insight font-semibold mb-3 border-b border-borderMedium pb-2">
                    Active Build
                  </p>
                  <h3 className="text-xl font-serif text-ink tracking-tight mb-3 leading-snug">{item.title}</h3>
                  <p className="text-sm text-ink-muted leading-relaxed font-sans">{item.description}</p>
                </div>
                {item.link && (
                  <div className="pt-6 mt-6 border-t border-borderSoft">
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent-action hover:text-ink transition-colors uppercase tracking-widest font-mono"
                    >
                      <span>{item.linkLabel || "View project"}</span>
                      <ArrowUpRight className="h-3 w-3" />
                    </a>
                  </div>
                )}
              </div>
            ))}
            {nowData.exploring.slice(0, 2).map((item, idx) => (
              <div key={idx} className="bg-sand border border-borderSoft rounded p-6 flex flex-col justify-between">
                <div>
                  <p className="text-[10px] font-mono uppercase tracking-widest text-accent-signal font-semibold mb-3 border-b border-borderMedium pb-2">
                    Exploration
                  </p>
                  <h3 className="text-xl font-serif text-ink tracking-tight mb-3 leading-snug">{item.domain}</h3>
                  <p className="text-sm text-ink-muted leading-relaxed font-sans">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
