import * as React from "react";
import { CAPABILITIES_DATA, EDUCATION_DATA } from "@/content/portfolioData";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Compass, Cpu, Terminal, GraduationCap, Award, Check } from "lucide-react";

export function CapabilitiesSection() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Compass":
        return <Compass className="h-5 w-5 text-[#09090B]" />;
      case "Cpu":
        return <Cpu className="h-5 w-5 text-[#09090B]" />;
      case "Terminal":
        return <Terminal className="h-5 w-5 text-[#09090B]" />;
      default:
        return null;
    }
  };

  return (
    <section id="capabilities" className="py-16 sm:py-20 md:py-24 border-b border-[#E4E4E7] bg-white">
      <div className="max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <SectionHeader
          eyebrow="04 / CAPABILITY MATRIX & EDUCATION"
          heading="The AI-Augmented Generalist Stack"
          description="A structured combination of first-principles strategic diagnosis, robust AI workflow engineering, and modern full-stack software delivery."
        />

        {/* 3-Column Capability Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {CAPABILITIES_DATA.map((col, idx) => (
            <div
              key={idx}
              className="rounded-lg border border-[#E4E4E7] bg-[#FAFAFA] p-6 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="p-2 rounded-md bg-white border border-[#E4E4E7] shadow-2xs">
                    {getIcon(col.iconName)}
                  </div>
                  <h3 className="text-base font-bold text-[#09090B] tracking-tight">
                    {col.title}
                  </h3>
                </div>

                <ul className="space-y-2.5 pt-2">
                  {col.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-2 text-xs sm:text-sm text-zinc-700">
                      <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-zinc-400 shrink-0 mt-2 select-none" />
                      <span className="leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Education & Credentials Strip (2-Column Bordered Card below grid) */}
        <div className="rounded-xl border border-[#E4E4E7] bg-[#FAFAFA] p-6 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 divide-y lg:divide-y-0 lg:divide-x divide-zinc-200">
            {/* Column 1: Academic Foundation */}
            <div className="space-y-5">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-900 font-bold">
                <GraduationCap className="h-4 w-4 text-zinc-700" />
                <span>ACADEMIC FOUNDATION</span>
              </div>

              <div className="space-y-4">
                {EDUCATION_DATA.academics.map((item, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex items-baseline justify-between gap-2">
                      <h4 className="text-sm font-bold text-[#09090B]">
                        {item.degree}
                      </h4>
                      <span className="text-xs font-mono text-zinc-500 shrink-0">
                        {item.period}
                      </span>
                    </div>
                    <p className="text-xs text-zinc-600">
                      {item.institution}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 2: Verified Credentials & Simulations */}
            <div className="pt-6 lg:pt-0 lg:pl-12 space-y-5">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-900 font-bold">
                <Award className="h-4 w-4 text-zinc-700" />
                <span>VERIFIED CREDENTIALS &amp; SIMULATIONS</span>
              </div>

              <div className="space-y-2.5">
                {EDUCATION_DATA.credentials.map((cred, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-zinc-700">
                    <Check className="h-3.5 w-3.5 text-[#059669] shrink-0" />
                    <span>{cred}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
