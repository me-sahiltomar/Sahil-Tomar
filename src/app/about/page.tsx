import type { Metadata } from "next";
import Link from "next/link";
import { aboutProfile, currentSignal } from "@/content/site";
import { operatingPrinciples } from "@/content/principles";
import { ContentBlock, ContentGroup } from "@/components/ui/Content";
import { PageHeader, PageShell } from "@/components/layout/PageShell";

export const metadata: Metadata = {
  title: "About",
  description: "Background, education, operating principles, and career context for Sahil Tomar.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <PageShell>
      <PageHeader
        title="A little about me."
        description="I studied Computer Science at DCRUST and keep finding questions that sit between software, products, and how teams work."
      />

      {/* Content Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 lg:gap-16">
        
        {/* Main Reading Column */}
        <div className="md:col-span-8 lg:col-span-7 space-y-16 sm:space-y-20">
          
          <ContentBlock as="section" aria-labelledby="background">
            <h2 id="background" className="font-serif text-heading-lg text-ink tracking-tight mb-6">
              Background
            </h2>
            <div className="space-y-6">
              {aboutProfile.fullBackground.map((paragraph, i) => (
                <p key={i} className="font-sans text-body-lg text-ink-secondary leading-relaxed max-w-prose">
                  {paragraph}
                </p>
              ))}
            </div>
          </ContentBlock>

          <ContentBlock as="section" aria-labelledby="principles">
            <div className="mb-6">
              <p className="text-evidence text-meta text-ink-faint uppercase mb-1">How I Operate</p>
              <h2 id="principles" className="font-serif text-heading-lg text-ink tracking-tight">
                Operating Principles
              </h2>
            </div>
            <div className="space-y-8">
              {operatingPrinciples.map((p) => (
                <div key={p.number} className="border-b border-rule-light pb-6 last:border-b-0 last:pb-0">
                  <div className="flex items-baseline gap-3 mb-1">
                    <span className="text-evidence text-meta text-ink-faint">{p.number}</span>
                    <h3 className="font-sans text-body-md font-semibold text-ink">
                      {p.title}
                    </h3>
                  </div>
                  <p className="font-sans text-body-sm text-ink-muted italic mb-2">
                    {p.tagline}
                  </p>
                  <p className="font-sans text-body-sm text-ink-secondary leading-relaxed mb-3">
                    {p.description}
                  </p>
                  <div className="bg-paper-recessed p-3 border border-rule-light rounded-xs">
                    <p className="text-evidence text-label text-ink-muted uppercase mb-1">In Practice</p>
                    <p className="font-sans text-xs text-ink-secondary leading-normal">
                      {p.concreteApplication}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </ContentBlock>

          <ContentBlock as="section" aria-labelledby="cevonx" className="border-l-2 border-accent pl-6 py-2">
            <h2 id="cevonx" className="font-serif text-heading-lg text-ink tracking-tight mb-4">
              CevonX
            </h2>
            <div className="space-y-6">
              {aboutProfile.cevonxContext.map((paragraph, i) => (
                <p key={i} className="font-sans text-body-lg text-ink leading-relaxed font-medium max-w-prose">
                  {paragraph}
                </p>
              ))}
            </div>
          </ContentBlock>

          <ContentBlock as="section" aria-labelledby="career">
            <h2 id="career" className="font-serif text-heading-lg text-ink tracking-tight mb-6">
              Career Context
            </h2>
            <div className="space-y-6">
              {aboutProfile.careerContext.map((paragraph, i) => (
                <p key={i} className="font-sans text-body-lg text-ink-secondary leading-relaxed max-w-prose">
                  {paragraph}
                </p>
              ))}
            </div>
          </ContentBlock>
          
        </div>

        {/* Sticky Metadata Sidebar */}
        <aside className="md:col-span-4 lg:col-span-4 lg:col-start-9 md:border-l border-rule-light md:pl-8 lg:pl-10">
          <ContentGroup className="sticky top-24 space-y-12">
            
            <div>
              <h3 className="text-evidence text-meta text-ink-faint uppercase mb-4">
                Based In
              </h3>
              <p className="font-sans text-body-md text-ink font-medium">
                {aboutProfile.location}
              </p>
            </div>

            <div>
              <h3 className="text-evidence text-meta text-ink-faint uppercase mb-4">
                Education
              </h3>
              <ul className="space-y-4">
                {aboutProfile.education.map((edu, i) => (
                  <li key={i}>
                    <p className="font-sans text-body-md text-ink font-medium">{edu.degree}</p>
                    <p className="font-sans text-body-sm text-ink-secondary">{edu.institution}, {edu.period}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-evidence text-meta text-ink-faint uppercase mb-4">
                Primary Roles
              </h3>
              <ul className="space-y-2">
                {currentSignal.currentlyOpenTo.roles.map((role, i) => (
                  <li key={i} className="font-sans text-body-md text-ink-secondary">
                    {role}
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-8 border-t border-rule-light space-y-3">
              <a
                href="/resumes/Sahil_Tomar_Founders_Office.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex min-h-11 items-center gap-2 rounded-md bg-paper-recessed text-ink text-sm font-sans font-medium px-5 border border-rule transition-colors duration-150 hover:bg-ink hover:text-paper-raised hover:border-ink"
                aria-label="Download Sahil Tomar Founder's Office Resume PDF"
              >
                Download Résumé
                <span className="font-serif text-lg leading-none group-hover:text-accent transition-colors">↓</span>
              </a>
              <p className="font-sans text-xs text-ink-muted">
                Founder’s Office version. <Link href="/resume" className="text-ink underline hover:text-accent transition-colors">View all 4 role resumes →</Link>
              </p>
            </div>

          </ContentGroup>
        </aside>

      </div>
    </PageShell>
  );
}
