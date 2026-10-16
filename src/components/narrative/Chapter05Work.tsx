import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projects } from "@/content/projects";

export function Chapter05Work() {
  const featuredProjects = projects.filter((p) => true).slice(0, 3);

  return (
    <section className="relative w-full bg-sand py-40 px-6 sm:px-10 lg:px-14 xl:px-16 border-t border-borderSoft">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-24">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-6xl font-serif text-ink tracking-tight mb-6 leading-tight">
              Evidence of execution.
            </h2>
            <p className="text-lg text-ink-muted leading-relaxed font-sans">
              Ideas are cheap. True clarity is demonstrated through working software, resilient systems, and measurable outcomes.
            </p>
          </div>
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-sm font-semibold text-ink hover:text-ink-muted group pb-1 border-b border-ink transition-colors font-sans uppercase tracking-widest"
          >
            <span>View Complete Portfolio</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="space-y-32">
          {featuredProjects.map((project, index) => (
            <div key={project.slug} className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 md:gap-24 items-center`}>
              
              {/* Visual Presentation (Placeholder for screenshots) */}
              <div className="w-full md:w-3/5 aspect-[4/3] bg-borderSoft rounded-lg overflow-hidden relative group shadow-sm">
                 <div className="absolute inset-0 bg-ink/5 group-hover:bg-transparent transition-colors duration-500 z-10" />
                 {/* Simulated Interface Wireframe */}
                 <div className="absolute inset-4 bg-paper rounded border border-borderMedium shadow-sm flex flex-col">
                    <div className="h-10 border-b border-borderSoft flex items-center px-4 gap-2">
                       <div className="w-2.5 h-2.5 rounded-full bg-borderMedium" />
                       <div className="w-2.5 h-2.5 rounded-full bg-borderMedium" />
                       <div className="w-2.5 h-2.5 rounded-full bg-borderMedium" />
                    </div>
                    <div className="flex-1 p-6 flex flex-col justify-center items-center text-center space-y-4">
                       <p className="text-xs font-mono text-accent-signal tracking-widest uppercase">Visual Evidence Asset</p>
                       <h3 className="text-2xl font-serif text-ink opacity-30">{project.title} Interface</h3>
                    </div>
                 </div>
              </div>

              {/* Text / Context */}
              <div className="w-full md:w-2/5 space-y-6">
                <div className="space-y-2">
                  <p className="text-[10px] font-mono uppercase tracking-widest text-accent-insight border-b border-borderMedium pb-2 inline-block">
                    {project.status}
                  </p>
                  <h3 className="text-3xl md:text-4xl font-serif text-ink tracking-tight leading-tight">
                    {project.title}
                  </h3>
                </div>
                
                <p className="text-ink-muted leading-relaxed font-sans text-sm md:text-base">
                  {project.shortDescription}
                </p>

                <div className="flex flex-wrap gap-2 pt-4">
                  {project.category.map(cap => (
                    <span key={cap} className="px-3 py-1 bg-paper border border-borderMedium text-ink-muted text-[10px] uppercase font-mono tracking-widest rounded-sm">
                      {cap}
                    </span>
                  ))}
                </div>

                <div className="pt-6">
                  <Link 
                    href={`/work/${project.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-accent-action hover:text-ink transition-colors group"
                  >
                    <span>Read Case Study</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
