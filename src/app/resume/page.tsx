import type { Metadata } from "next";
import { Download, ArrowUpRight } from "lucide-react";
import { PageHeader, PageShell } from "@/components/layout/PageShell";
import { profile } from "@/content/profile";

export const metadata: Metadata = {
  title: "Resume & CV",
  description:
    "Executive Curriculum Vitae for Sahil Tomar. Download tailored PDF resumes.",
  alternates: { canonical: "/resume" },
};

const RESUME_DOWNLOADS = [
  {
    title: "Founder’s Office & Strategy",
    filename: "Sahil_Tomar_Founders_Office.pdf",
    description: "Focus on cross-functional execution, ambiguity structuring, business intelligence, and company building.",
  },
  {
    title: "Product Management",
    filename: "Sahil_Tomar_Product_Management.pdf",
    description: "Focus on problem discovery, requirements definition, MVP prioritization, and user workflow validation.",
  },
  {
    title: "Operations & Process",
    filename: "Sahil_Tomar_Operations.pdf",
    description: "Focus on workflow mapping, root cause analysis, change management pilots, and operational systems.",
  },
  {
    title: "Project Management",
    filename: "Sahil_Tomar_Project_Management.pdf",
    description: "Focus on integrated frameworks, WBS, risk registers, stakeholder engagement, and delivery governance.",
  },
];

export default function ResumePage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Curriculum Vitae"
        title="Executive Resume."
        description="Interactive digital summary of my operational background, founder experience, leadership roles, and technical skills."
      />

        {/* Downloads */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-0 border-b border-rule-light">
          <div className="lg:col-span-3 py-12 pr-8 lg:border-r border-rule-light">
            <p className="eyebrow mb-2">
              PDFs
            </p>
            <h2 className="font-serif text-2xl text-ink tracking-tight leading-tight">Downloads</h2>
          </div>
          <div className="lg:col-span-9 py-12 lg:pl-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-rule-light border border-rule-light">
              {RESUME_DOWNLOADS.map((doc) => (
                <div key={doc.filename} className="bg-paper p-6 flex flex-col justify-between min-h-[160px]">
                  <div>
                    <h3 className="font-sans text-sm font-medium text-ink mb-1.5">{doc.title}</h3>
                    <p className="font-sans text-xs text-ink-muted leading-relaxed">{doc.description}</p>
                  </div>
                  <div className="mt-6 flex items-center justify-between">
                    <span className="text-evidence text-meta text-verified tracking-widest uppercase">
                      Verified
                    </span>
                    <div className="flex items-center gap-3">
                      <a
                        href={`/resumes/${doc.filename}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-11 items-center gap-1 rounded-sm text-meta font-sans font-medium text-ink-secondary transition-colors duration-150 hover:text-ink"
                        aria-label={`Preview ${doc.title} Resume in new tab`}
                      >
                        View
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                      <a
                        href={`/resumes/${doc.filename}`}
                        download={doc.filename}
                        className="inline-flex min-h-11 items-center gap-1.5 rounded-sm text-meta font-sans font-medium text-ink transition-colors duration-150 hover:text-accent"
                        aria-label={`Download ${doc.title} Resume PDF`}
                      >
                        <Download className="w-3.5 h-3.5" />
                        Download
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Digital CV — Summary */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-0 border-b border-rule-light">
          <div className="lg:col-span-3 py-12 pr-8 lg:border-r border-rule-light">
            <p className="eyebrow mb-2">
              Profile
            </p>
            <h2 className="font-serif text-2xl text-ink tracking-tight leading-tight">Summary</h2>
          </div>
          <div className="lg:col-span-9 py-12 lg:pl-12">
            <p className="font-sans text-base text-ink-secondary leading-relaxed max-w-prose">
              Startup-oriented builder and operator with a Computer Science Engineering foundation and hands-on experience across strategy, product discovery, business analysis, operations, project execution, market research, and AI systems. Proven record taking ambiguous problems from research and diagnosis through structured recommendations, planning, validation, and cross-functional execution.
            </p>
          </div>
        </section>

        {/* Capabilities */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-0 border-b border-rule-light">
          <div className="lg:col-span-3 py-12 pr-8 lg:border-r border-rule-light">
            <p className="eyebrow mb-2">
              Domains
            </p>
            <h2 className="font-serif text-2xl text-ink tracking-tight leading-tight">Capabilities</h2>
          </div>
          <div className="lg:col-span-9 py-12 lg:pl-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-rule-light border border-rule-light">
              {[
                {
                  title: "Strategy & Decision Support",
                  desc: "Strategic problem solving, root cause analysis (RCA), market & competitor intelligence, business model analysis, positioning, decision trees, executive recommendation packages.",
                },
                {
                  title: "Founder’s Office & Operations",
                  desc: "Cross-functional execution, project planning, workflow optimization, stakeholder management, change management, pilot design, Go/No-Go criteria, team coordination.",
                },
                {
                  title: "Product & Product Operations",
                  desc: "Problem discovery, user friction mapping, requirements definition (PRDs), MVP prioritization, product strategy, customer feedback synthesis, beta cohort governance.",
                },
                {
                  title: "Technology & AI Systems",
                  desc: "Full-stack web apps (Next.js 14/15, TypeScript, Tailwind), Python microservices (FastAPI), PostgreSQL / Supabase schemas & RLS, multimodal vision & LLM pipelines, deterministic validation, automated testing.",
                },
              ].map((cap, i) => (
                <div key={i} className="bg-paper-recessed p-6">
                  <p className="font-sans text-sm font-medium text-ink mb-2">{cap.title}</p>
                  <p className="font-sans text-xs text-ink-muted leading-relaxed">{cap.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-0 border-b border-rule-light">
          <div className="lg:col-span-3 py-12 pr-8 lg:border-r border-rule-light">
            <p className="eyebrow mb-2">
              History
            </p>
            <h2 className="font-serif text-2xl text-ink tracking-tight leading-tight">Experience</h2>
          </div>
          <div className="lg:col-span-9 py-12 lg:pl-12 space-y-10">
            {/* CevonX */}
            <div>
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-3">
                <div>
                  <h3 className="font-sans text-base font-medium text-ink">Founder & Operator</h3>
                  <p className="font-sans text-sm text-ink-secondary">CevonX — AI & Software Solutions</p>
                </div>
                <p className="text-evidence text-meta text-ink-faint mt-1 sm:mt-0">2026 – Present</p>
              </div>
              <ul className="space-y-2 text-sm font-sans text-ink-muted pl-4 list-outside list-disc marker:text-rule-strong leading-relaxed max-w-prose">
                <li>Designed the unified two-engine company model uniting commercial technical delivery and an owned software product studio.</li>
                <li>Architected the Five Functional Workspaces filesystem model maintaining strict functional separation between client code and owned intellectual property.</li>
                <li>Engineered and deployed production web applications (cevonx.com, products.cevonx.com, ledgerlens.cevonx.com, productscout.cevonx.com) with shared Supabase database architecture.</li>
                <li>Enforced company-wide proof-of-work governance: empirical testing, zero fabrication, and documented evidence trails.</li>
              </ul>
            </div>

            {/* FinStation */}
            <div>
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-3">
                <div>
                  <h3 className="font-sans text-base font-medium text-ink">Co-Founder</h3>
                  <p className="font-sans text-sm text-ink-secondary">FinStation — Early-Stage Financial Intelligence Startup</p>
                </div>
                <p className="text-evidence text-meta text-ink-faint mt-1 sm:mt-0">2026</p>
              </div>
              <ul className="space-y-2 text-sm font-sans text-ink-muted pl-4 list-outside list-disc marker:text-rule-strong leading-relaxed max-w-prose">
                <li>Refined positioning and company narrative around financial research and decision support rather than regulated investment advisory.</li>
                <li>Conducted market, competitor, financial data, and API cost research; evaluated unit economics and compliance boundaries.</li>
                <li>Designed controlled beta strategy with staged cohorts (25 → 50 → 100 → 500+ users), linking user expansion strictly to retention and platform stability.</li>
                <li>Built founding team hiring pipelines: role definition, candidate screening, structured practical trial assignments, and interview rubrics.</li>
              </ul>
            </div>

            {/* Excelerate PM */}
            <div>
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-3">
                <div>
                  <h3 className="font-sans text-base font-medium text-ink">Project Management Associate (Team Lead)</h3>
                  <p className="font-sans text-sm text-ink-secondary">Excelerate</p>
                </div>
                <p className="text-evidence text-meta text-ink-faint mt-1 sm:mt-0">Jul 2026 – Aug 2026</p>
              </div>
              <ul className="space-y-2 text-sm font-sans text-ink-muted pl-4 list-outside list-disc marker:text-rule-strong leading-relaxed max-w-prose">
                <li>Led a 12-member multidisciplinary team on an organizational adoption improvement initiative spanning 9 departments.</li>
                <li>Conducted Root Cause Analysis (RCA) across people, process, communication, and accountability gaps; distinguished adoption barriers from software defects.</li>
                <li>Designed a 3-week pilot with quantitative KPIs, success thresholds, and explicit Go/No-Go decision criteria before organizational relaunch.</li>
                <li>Delivered final leadership recommendation package and executive presentation to senior stakeholders.</li>
              </ul>
            </div>

            {/* Excelerate Ops */}
            <div>
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-3">
                <div>
                  <h3 className="font-sans text-base font-medium text-ink">Business Operations & Compliance Analyst</h3>
                  <p className="font-sans text-sm text-ink-secondary">Excelerate</p>
                </div>
                <p className="text-evidence text-meta text-ink-faint mt-1 sm:mt-0">Aug 2026 – Sep 2026</p>
              </div>
              <ul className="space-y-2 text-sm font-sans text-ink-muted pl-4 list-outside list-disc marker:text-rule-strong leading-relaxed max-w-prose">
                <li>Analyzed B2B marketplace ecosystem dynamics; benchmarked onboarding experiences across IndiaMART, Alibaba.com, and TradeIndia.</li>
                <li>Developed personas and onboarding journey maps for SME suppliers, wholesale buyers, and export trading intermediaries.</li>
                <li>Formulated a 9-stage progressive onboarding framework balancing regulatory/tax compliance with low user drop-off.</li>
              </ul>
            </div>

            {/* CountryEdu */}
            <div>
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-3">
                <div>
                  <h3 className="font-sans text-base font-medium text-ink">Business Analyst Intern</h3>
                  <p className="font-sans text-sm text-ink-secondary">CountryEdu Private Limited</p>
                </div>
                <p className="text-evidence text-meta text-ink-faint mt-1 sm:mt-0">Oct 2025 – Dec 2025</p>
              </div>
              <ul className="space-y-2 text-sm font-sans text-ink-muted pl-4 list-outside list-disc marker:text-rule-strong leading-relaxed max-w-prose">
                <li>Structured stakeholder requirements and evaluated operational business workflows for inefficiencies.</li>
                <li>Documented process flows, functional requirements, and connected business objectives with practical software requirements.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Education & Academic Foundation */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-0 border-b border-rule-light">
          <div className="lg:col-span-3 py-12 pr-8 lg:border-r border-rule-light">
            <p className="eyebrow mb-2">Academics</p>
            <h2 className="font-serif text-2xl text-ink tracking-tight leading-tight">Education</h2>
          </div>
          <div className="lg:col-span-9 py-12 lg:pl-12 space-y-8">
            {profile.education.map((edu, i) => (
              <div key={i} className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <div>
                  <h3 className="font-sans text-base font-medium text-ink">{edu.degree}</h3>
                  <p className="font-sans text-sm text-ink-secondary">{edu.institution}</p>
                  {edu.description && (
                    <p className="font-sans text-xs text-ink-muted mt-1.5 max-w-prose leading-relaxed">
                      {edu.description}
                    </p>
                  )}
                </div>
                <p className="text-evidence text-meta text-ink-faint shrink-0 mt-1 sm:mt-0">{edu.period}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Verified Professional Certifications */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-0">
          <div className="lg:col-span-3 py-12 pr-8 lg:border-r border-rule-light">
            <p className="eyebrow mb-2">Credentials</p>
            <h2 className="font-serif text-2xl text-ink tracking-tight leading-tight">Certifications</h2>
          </div>
          <div className="lg:col-span-9 py-12 lg:pl-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-rule-light border border-rule-light">
              {profile.credentials.map((cert, i) => (
                <div key={i} className="bg-paper p-5 flex flex-col justify-between min-h-[90px]">
                  <div>
                    <h3 className="font-sans text-sm font-medium text-ink">{cert.name}</h3>
                    <p className="font-sans text-xs text-ink-secondary mt-1">{cert.issuer}</p>
                  </div>
                  <span className="text-evidence text-[10px] text-ink-faint uppercase tracking-wider mt-3">
                    {cert.category}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

    </PageShell>
  );
}
