import * as React from "react";
import { Mail, ArrowUpRight } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="py-16 sm:py-20 md:py-24 bg-white">
      <div className="max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Rounded dark container matching productstudio.cevonx.com and aligned with outer grid */}
        <div className="w-full rounded-2xl border border-zinc-800 bg-[#09090B] text-white p-8 sm:p-10 md:p-12 shadow-md">
          <div className="w-full space-y-8">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-[11px] font-mono uppercase tracking-widest text-zinc-300 select-none whitespace-nowrap">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
              <span>WORK WITH SAHIL TOMAR</span>
            </div>

            {/* Headline */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight max-w-4xl">
              Ready to eliminate bottlenecks and ship high-leverage systems?
            </h2>

            {/* 2 Side-by-Side Sub-Cards spanning full container width */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2 items-stretch">
              {/* Track 1: Full-Time Roles */}
              <div className="rounded-xl border border-zinc-800 bg-zinc-900/90 p-6 sm:p-7 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] font-mono uppercase tracking-widest text-zinc-400 whitespace-nowrap">
                    <span>TRACK 01 · FULL-TIME ENGAGEMENT</span>
                  </div>
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    Founder&apos;s Office / Strategy &amp; Ops / AI Ops
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    Available for high-ownership roles in Delhi NCR (Gurugram/Noida/Delhi) or remote teams where I can bridge business problem-solving, product execution, and AI workflow automation.
                  </p>
                </div>

                <div className="pt-2">
                  <a
                    href="mailto:sahiltomar2430@gmail.com"
                    className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-4 py-2.5 rounded-md bg-white text-[#09090B] text-xs sm:text-sm font-semibold hover:bg-zinc-100 transition-colors shadow-xs whitespace-nowrap"
                  >
                    <Mail className="h-4 w-4 text-zinc-600" />
                    <span>Email Sahil (sahiltomar2430@gmail.com) ↗</span>
                  </a>
                </div>
              </div>

              {/* Track 2: Commercial AI Automation & Software Sprints */}
              <div className="rounded-xl border border-zinc-800 bg-zinc-900/90 p-6 sm:p-7 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] font-mono uppercase tracking-widest text-zinc-400 whitespace-nowrap">
                    <span>TRACK 02 · CLIENT SOLUTIONS</span>
                  </div>
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    Commercial AI Automation &amp; Software Sprints (via CevonX Core)
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    Need invoice/PDF extraction, n8n CRM automation, or an internal decision dashboard built on a fixed scope and timeline? Partner with CevonX Core for rapid implementation.
                  </p>
                </div>

                <div className="pt-2">
                  <a
                    href="https://core.cevonx.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-4 py-2.5 rounded-md border border-zinc-700 bg-zinc-800/80 text-white text-xs sm:text-sm font-semibold hover:bg-zinc-800 hover:border-zinc-600 transition-colors whitespace-nowrap"
                  >
                    <span>Work with CevonX Core</span>
                    <ArrowUpRight className="h-4 w-4 text-zinc-400" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
