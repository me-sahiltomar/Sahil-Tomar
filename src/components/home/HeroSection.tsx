import * as React from "react";
import { Button } from "@/components/ui/Button";
import { ArrowDown, ArrowUpRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="pt-14 pb-16 sm:pt-20 sm:pb-24 border-b border-[#E4E4E7] bg-white">
      <div className="max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="w-full space-y-7">
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ECFDF5] border border-[#A7F3D0] text-xs font-mono font-medium tracking-wider text-[#059669] select-none whitespace-nowrap">
            <span className="h-1.5 w-1.5 rounded-full bg-[#059669] shrink-0" aria-hidden="true" />
            <span>AVAILABLE FOR HIGH-OWNERSHIP ROLES &amp; AI SPRINTS · DELHI NCR</span>
          </div>

          {/* Primary Identity: Name H1 & Subtitle */}
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#09090B] tracking-tight leading-tight">
              Sahil Tomar
            </h1>
            <p className="text-lg sm:text-xl font-medium text-zinc-700 tracking-tight">
              Startup Operator &amp; AI-Augmented Product Builder — Decoding bottlenecks and engineering practical AI systems.
            </p>
          </div>

          {/* Mission Statement & Executive Thesis */}
          <p className="text-base sm:text-lg md:text-xl text-zinc-600 leading-relaxed max-w-4xl">
            Computer Science graduate based in Delhi NCR. My mission is to increase startup survival and execution speed by diagnosing why early-stage ventures stall, preventing avoidable operational mistakes, and building software systems that turn company-building into a repeatable discipline.
          </p>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
            <Button href="#products" variant="primary" size="lg" className="gap-2 shadow-sm whitespace-nowrap">
              <span>Explore Shipped Products</span>
              <ArrowDown className="h-4 w-4" />
            </Button>
            <Button href="#case-studies" variant="outline" size="lg" className="gap-2 whitespace-nowrap">
              <span>Read Venture Case Studies</span>
              <ArrowDown className="h-4 w-4 text-zinc-400" />
            </Button>
          </div>

          {/* 3-Column Metadata Strip (Below CTAs, full-width aligned) */}
          <div className="w-full border-t border-zinc-200 pt-6 mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-xs">
            <div className="space-y-1">
              <span className="block text-[11px] font-mono uppercase tracking-widest text-zinc-400 font-medium">
                TARGET ROLES
              </span>
              <p className="font-semibold text-zinc-900 leading-snug">
                Founder&apos;s Office · Strategy &amp; Ops
              </p>
              <p className="font-mono text-xs text-zinc-500">
                Product Ops · BizOps · AI Implementation
              </p>
            </div>

            <div className="space-y-1">
              <span className="block text-[11px] font-mono uppercase tracking-widest text-zinc-400 font-medium">
                VENTURE &amp; PRODUCT LAB
              </span>
              <p className="font-semibold text-zinc-900 leading-snug">
                Founder &amp; Architect at CevonX
              </p>
              <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-zinc-500">
                <a
                  href="https://productstudio.cevonx.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline hover:text-zinc-900 inline-flex items-center gap-1 transition-colors whitespace-nowrap"
                >
                  <span>productstudio.cevonx.com</span>
                  <ArrowUpRight className="h-3 w-3 text-zinc-400 group-hover:text-zinc-900" />
                </a>
                <span className="text-zinc-300">·</span>
                <a
                  href="https://core.cevonx.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline hover:text-zinc-900 inline-flex items-center gap-1 transition-colors whitespace-nowrap"
                >
                  <span>core.cevonx.com</span>
                  <ArrowUpRight className="h-3 w-3 text-zinc-400 group-hover:text-zinc-900" />
                </a>
              </div>
            </div>

            <div className="space-y-1">
              <span className="block text-[11px] font-mono uppercase tracking-widest text-zinc-400 font-medium">
                OPERATING METHOD
              </span>
              <p className="font-semibold text-zinc-900 leading-snug">
                Evidence Before Expansion
              </p>
              <p className="font-mono text-xs text-zinc-500">
                7-Day Build Loops · Lifecycle Governance
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
