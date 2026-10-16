import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { projects } from "@/content/projects";
import { ContentBlock, ContentGroup } from "@/components/ui/Content";
import { siteContainerClassName } from "@/components/layout/PageShell";

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} — Case Study`,
    description: project.shortDescription,
    alternates: { canonical: `/work/${project.slug}` },
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const project = currentIndex !== -1 ? projects[currentIndex] : null;

  if (!project) notFound();

  const { caseStudy } = project;
  if (!caseStudy) notFound();

  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <article className="bg-paper pb-20 sm:pb-24">
      {/* Top nav */}
      <div className="border-b border-rule-light bg-paper">
        <div className={`${siteContainerClassName} py-1`}>
          <Link
            href="/work"
            className="inline-flex min-h-11 items-center gap-1.5 rounded-sm font-sans text-body-sm font-medium text-ink-muted transition-colors duration-150 hover:text-ink"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to work
          </Link>
        </div>
      </div>

      <div className={`${siteContainerClassName} pt-12 sm:pt-16 lg:pt-20`}>
        
        {/* Header Section */}
        <header className="mb-16 sm:mb-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 lg:gap-16">
            <ContentBlock className="md:col-span-8 lg:col-span-7">
              <h1 className="font-serif text-display-xl text-ink tracking-tight leading-tight mb-6">
                {project.title}
              </h1>
              <p className="font-sans text-heading-md text-ink-secondary leading-relaxed mb-8">
                {project.fullDescription}
              </p>
              
              <div className="flex flex-wrap items-center gap-4">
                {project.links?.map(link => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex min-h-11 items-center gap-2 rounded-md bg-ink text-paper-raised text-body-sm font-sans font-medium px-5 transition-colors duration-150 hover:bg-ink-secondary"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                ))}
              </div>
            </ContentBlock>
            
            <ContentGroup className="md:col-span-4 lg:col-span-4 lg:col-start-9 space-y-6 pt-2 md:pt-4 border-t md:border-t-0 md:border-l border-rule-light md:pl-8 lg:pl-12">
              <div>
                <p className="text-evidence text-meta text-ink-faint uppercase mb-1">Status</p>
                <p className="font-sans text-body-md text-ink font-medium">{project.status}</p>
                <p className="text-evidence text-meta text-ink-muted">{project.year}</p>
              </div>
              <div>
                <p className="text-evidence text-meta text-ink-faint uppercase mb-1">Role & Ownership</p>
                <p className="font-sans text-body-sm text-ink-secondary">{project.role}</p>
              </div>
              <div>
                <p className="text-evidence text-meta text-ink-faint uppercase mb-1.5">Capabilities</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.category.map(cat => (
                    <span key={cat} className="text-evidence text-meta text-ink-secondary bg-paper-recessed px-2 py-1 border border-rule-light uppercase">
                      {cat}
                    </span>
                  ))}
                </div>
              </div>
              {caseStudy.technologies && caseStudy.technologies.length > 0 && (
                <div>
                  <p className="text-evidence text-meta text-ink-faint uppercase mb-1.5">Stack / Tools</p>
                  <div className="flex flex-wrap gap-1.5">
                    {caseStudy.technologies.map(tech => (
                      <span key={tech} className="text-evidence text-meta text-ink-muted border border-rule-light px-2 py-1">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </ContentGroup>
          </div>
        </header>

        <hr className="border-rule-strong mb-20" />

        {/* Narrative Sections */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-16 md:gap-x-12 lg:gap-x-16 pb-20">
          
          <ContentBlock className="md:col-span-12 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 border-b border-rule-light pb-16">
            <div className="md:col-span-4 lg:col-span-3">
              <h2 className="font-serif text-heading-lg text-ink">Situation</h2>
            </div>
            <div className="md:col-span-8 lg:col-span-7">
              <p className="font-sans text-body-lg text-ink-secondary leading-relaxed max-w-prose">
                {caseStudy.context}
              </p>
            </div>
          </ContentBlock>

          <ContentBlock className="md:col-span-12 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 border-b border-rule-light pb-16">
            <div className="md:col-span-4 lg:col-span-3">
              <h2 className="font-serif text-heading-lg text-ink">Question & Problem</h2>
            </div>
            <div className="md:col-span-8 lg:col-span-7 border-l-2 border-accent pl-6 py-1">
              <p className="font-sans text-body-lg text-ink font-medium leading-relaxed max-w-prose">
                {caseStudy.problem}
              </p>
            </div>
          </ContentBlock>

          {project.finding && <ContentBlock className="md:col-span-12 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 border-b border-rule-light pb-16">
            <div className="md:col-span-4 lg:col-span-3">
              <h2 className="font-serif text-heading-lg text-ink">Finding</h2>
            </div>
            <div className="md:col-span-8 lg:col-span-7">
              <p className="font-sans text-body-lg text-ink-secondary leading-relaxed max-w-prose">
                <span className="mark-highlight mr-2">Core insight</span>
                {project.finding}
              </p>
            </div>
          </ContentBlock>}

          <ContentBlock className="md:col-span-12 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 border-b border-rule-light pb-16">
            <div className="md:col-span-4 lg:col-span-3">
              <h2 className="font-serif text-heading-lg text-ink">Decision & Objective</h2>
            </div>
            <div className="md:col-span-8 lg:col-span-7">
              <p className="font-sans text-body-lg text-ink-secondary leading-relaxed max-w-prose">
                {caseStudy.objective}
              </p>
              <p className="font-sans text-body-lg text-ink-secondary leading-relaxed max-w-prose mt-4">
                {caseStudy.approach}
              </p>
            </div>
          </ContentBlock>

          <ContentBlock className="md:col-span-12 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 border-b border-rule-light pb-16">
            <div className="md:col-span-4 lg:col-span-3">
              <h2 className="font-serif text-heading-lg text-ink">What I built</h2>
            </div>
            <div className="md:col-span-8 lg:col-span-7">
              <ul className="space-y-6">
                {caseStudy.execution.map((step, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="text-evidence text-meta text-ink-muted mt-1 shrink-0">
                      {(i + 1).toString().padStart(2, '0')}
                    </span>
                    <span className="font-sans text-body-lg text-ink-secondary leading-relaxed max-w-prose">
                      {step}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </ContentBlock>

          <ContentBlock className="md:col-span-12 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 border-b border-rule-light pb-16">
            <div className="md:col-span-4 lg:col-span-3">
              <h2 className="font-serif text-heading-lg text-ink">Evidence</h2>
            </div>
            <div className="md:col-span-8 lg:col-span-9">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {caseStudy.output.map((out, i) => (
                  <div key={i} className="p-6 bg-paper-raised border border-rule rounded-sm flex flex-col justify-between">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-evidence text-meta text-ink-faint uppercase">
                        Deliverable {(i + 1).toString().padStart(2, '0')}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-evidence text-meta text-verified uppercase">
                        <span className="w-1.5 h-1.5 rounded-full bg-verified" aria-hidden="true" />
                        Verified
                      </span>
                    </div>
                    <p className="font-mono text-sm text-ink font-medium leading-relaxed">
                      {out}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </ContentBlock>

          <ContentBlock className="md:col-span-12 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 border-b border-rule-light pb-16">
            <div className="md:col-span-4 lg:col-span-3">
              <h2 className="font-serif text-heading-lg text-ink">What happened</h2>
            </div>
            <div className="md:col-span-8 lg:col-span-7">
              <p className="font-sans text-body-lg text-ink leading-relaxed max-w-prose">
                {caseStudy.resultOrStatus}
              </p>
            </div>
          </ContentBlock>

          <ContentBlock className="md:col-span-12 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
            <div className="md:col-span-4 lg:col-span-3">
              <h2 className="font-serif text-heading-lg text-ink">What I learned</h2>
            </div>
            <div className="md:col-span-8 lg:col-span-7">
              <div className="p-8 bg-paper-recessed border border-rule-light">
                <p className="font-sans text-body-lg text-ink-secondary italic leading-relaxed max-w-prose">
                  "{caseStudy.learning}"
                </p>
              </div>
            </div>
          </ContentBlock>

        </div>

        {/* Navigation & Discussion Footer */}
        <div className="border-t border-rule-strong pt-12 sm:pt-16 mt-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <Link
              href="/work"
              className="inline-flex min-h-11 items-center gap-2 rounded-sm text-sm font-sans font-medium text-ink-muted hover:text-ink transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Return to all work
            </Link>

            <div className="flex flex-wrap items-center gap-3">
              {prevProject && prevProject.caseStudy && (
                <Link
                  href={`/work/${prevProject.slug}`}
                  aria-label={`Previous case study: ${prevProject.title}`}
                  className="inline-flex min-h-11 items-center gap-1.5 rounded-sm border border-rule px-4 py-2 text-sm font-sans text-ink hover:bg-paper-recessed transition-colors"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  {prevProject.title}
                </Link>
              )}
              {nextProject && nextProject.caseStudy && (
                <Link
                  href={`/work/${nextProject.slug}`}
                  aria-label={`Next case study: ${nextProject.title}`}
                  className="inline-flex min-h-11 items-center gap-1.5 rounded-sm border border-rule px-4 py-2 text-sm font-sans text-ink hover:bg-paper-recessed transition-colors"
                >
                  {nextProject.title}
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              )}
              <Link
                href="/contact"
                className="inline-flex min-h-11 items-center gap-2 rounded-md bg-ink px-5 py-2 text-sm font-sans font-medium text-paper-raised hover:bg-ink-secondary transition-colors"
              >
                Discuss this project
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </article>
  );
}
