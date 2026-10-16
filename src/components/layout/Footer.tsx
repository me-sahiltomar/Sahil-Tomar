import * as React from "react";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#E4E4E7] bg-white py-12 sm:py-16 text-zinc-600 text-xs sm:text-sm">
      <div className="max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 pb-12 border-b border-[#E4E4E7]">
          {/* Column 1: Identity & Architect Statement */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <span className="flex h-7 w-7 items-center justify-center rounded-md bg-[#09090B] text-xs font-bold font-mono text-white">
                S
              </span>
              <span className="font-bold text-[#09090B] text-base tracking-tight">
                Sahil Tomar
              </span>
            </div>
            <p className="text-zinc-500 leading-relaxed max-w-xs">
              Operator, Product Builder &amp; Architect of CevonX. Building practical AI systems and software around real business friction points.
            </p>
            <div className="pt-2 text-xs font-mono text-zinc-400">
              Delhi NCR, India · sahiltomar.pro
            </div>
          </div>

          {/* Column 2: CevonX Ecosystem */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-[#09090B]">
              CevonX Ecosystem
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="https://cevonx.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#09090B] inline-flex items-center gap-1 transition-colors"
                >
                  <span>CevonX Corporate</span>
                  <ArrowUpRight className="h-3 w-3 text-zinc-400" />
                </a>
              </li>
              <li>
                <a
                  href="https://productstudio.cevonx.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#09090B] inline-flex items-center gap-1 transition-colors"
                >
                  <span>Product Studio</span>
                  <ArrowUpRight className="h-3 w-3 text-zinc-400" />
                </a>
              </li>
              <li>
                <a
                  href="https://core.cevonx.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#09090B] inline-flex items-center gap-1 transition-colors"
                >
                  <span>CevonX Core</span>
                  <ArrowUpRight className="h-3 w-3 text-zinc-400" />
                </a>
              </li>
              <li>
                <a
                  href="https://ledgerlens.cevonx.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#09090B] inline-flex items-center gap-1 transition-colors"
                >
                  <span>LedgerLens (Document Vision)</span>
                  <ArrowUpRight className="h-3 w-3 text-zinc-400" />
                </a>
              </li>
              <li>
                <a
                  href="https://productscout.cevonx.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#09090B] inline-flex items-center gap-1 transition-colors"
                >
                  <span>ProductScout (Opportunity Intel)</span>
                  <ArrowUpRight className="h-3 w-3 text-zinc-400" />
                </a>
              </li>
              <li>
                <a
                  href="https://priox.cevonx.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#09090B] inline-flex items-center gap-1 transition-colors"
                >
                  <span>PrioX (Founder Decision Engine)</span>
                  <ArrowUpRight className="h-3 w-3 text-zinc-400" />
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Connect & Contact */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-[#09090B]">
              Connect
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="https://linkedin.com/in/me-sahiltomar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#09090B] inline-flex items-center gap-1 transition-colors"
                >
                  <span>LinkedIn (in/me-sahiltomar)</span>
                  <ArrowUpRight className="h-3 w-3 text-zinc-400" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/me-sahiltomar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#09090B] inline-flex items-center gap-1 transition-colors"
                >
                  <span>GitHub (@me-sahiltomar)</span>
                  <ArrowUpRight className="h-3 w-3 text-zinc-400" />
                </a>
              </li>
              <li>
                <a
                  href="mailto:sahiltomar2430@gmail.com"
                  className="hover:text-[#09090B] inline-flex items-center gap-1 transition-colors"
                >
                  <span>Email (sahiltomar2430@gmail.com)</span>
                  <ArrowUpRight className="h-3 w-3 text-zinc-400" />
                </a>
              </li>
              <li className="pt-2">
                <a
                  href="/Sahil_Tomar_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-medium text-zinc-800 hover:text-black underline underline-offset-4"
                >
                  <span>Download Executive Resume (PDF)</span>
                  <ArrowUpRight className="h-3 w-3 text-zinc-500" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright & attribution */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <div>
            &copy; {currentYear} Sahil Tomar. All rights reserved.
          </div>
          <div>
            Evidence Before Expansion · Ecosystem Layer: sahiltomar.pro
          </div>
        </div>
      </div>
    </footer>
  );
}
