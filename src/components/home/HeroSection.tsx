import * as React from "react";
import { Button } from "@/components/ui/Button";
import { ArrowDown, ArrowUpRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="pt-14 pb-16 sm:pt-20 sm:pb-24 border-b border-[#E4E4E7] bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl space-y-7">
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ECFDF5] border border-[#A7F3D0] text-xs font-mono font-medium tracking-wider text-[#059669] select-none">
            <span className="h-1.5 w-1.5 rounded-full bg-[#059669] shrink-0" aria-hidden="true" />
            <span>FOUNDER&apos;S OFFICE · PRODUCT &amp; AI OPERATIONS</span>
          </div>

          {/* H1 Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-[#09090B] tracking-tight leading-[1.12]">
            Decoding startup bottlenecks and engineering practical AI systems.
          </h1>

          {/* Subtitle / Executive Thesis */}
          <p className="text-base sm:text-lg md:text-xl text-zinc-600 leading-relaxed max-w-3xl">
            Computer Science graduate and AI-augmented product builder based in Delhi NCR. My mission is to increase startup survival and execution speed by diagnosing why early-stage ventures stall, preventing avoidable operational mistakes, and building software systems that turn company-building into a repeatable discipline.
          </p>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
            <Button href="#products" variant="primary" size="lg" className="gap-2 shadow-sm">
              <span>Explore Shipped Products</span>
              <ArrowDown className="h-4 w-4" />
            </Button>
            <Button href="#case-studies" variant="outline" size="lg" className="gap-2">
              <span>Read Venture Case Studies</span>
              <ArrowDown className="h-4 w-4 text-zinc-400" />
            </Button>
          </div>

          {/* 3-Column Metadata Strip (Below CTAs, separated by top border) */}
          <div className="pt-8 mt-8 border-t border-[#E4E4E7] grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4 text-xs">
            <div className="space-y-1">
              <span className="block text-[11px] font-mono uppercase tracking-widest text-zinc-400 font-medium">
                PRIMARY FOCUS
              </span>
              <p className="font-semibold text-zinc-900 leading-snug">
                Founder&apos;s Office · Strategy &amp; Ops · AI Implementation
              </p>
            </div>

            <div className="space-y-1">
              <span className="block text-[11px] font-mono uppercase tracking-widest text-zinc-400 font-medium">
                STUDIO ECOSYSTEM
              </span>
              <p className="font-semibold text-zinc-900 leading-snug">
                <a
                  href="https://productstudio.cevonx.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline inline-flex items-center gap-1 group"
                >
                  <span>Architect at CevonX</span>
                  <span className="text-zinc-500 font-mono text-[11px]">(productstudio.cevonx.com)</span>
                  <ArrowUpRight className="h-3 w-3 text-zinc-400 group-hover:text-zinc-900" />
                </a>
              </p>
            </div>

            <div className="space-y-1">
              <span className="block text-[11px] font-mono uppercase tracking-widest text-zinc-400 font-medium">
                OPERATING METHOD
              </span>
              <p className="font-semibold text-zinc-900 leading-snug">
                Evidence Before Expansion · 7-Day Build Loops
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
