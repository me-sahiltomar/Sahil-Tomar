import type { Metadata } from "next";
import { Mail, ArrowUpRight } from "lucide-react";
import { profile } from "@/content/profile";
import { PageHeader, PageShell } from "@/components/layout/PageShell";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Sahil Tomar.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Contact"
        title="Let’s talk."
        description="I am actively exploring Founder’s Office, Product Operations, Strategy & BizOps, and early-stage startup roles."
      />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border-b border-rule-light">
          <div className="lg:col-span-3 py-12 pr-8 lg:border-r border-rule-light">
            <p className="eyebrow mb-2">
              Direct
            </p>
            <h2 className="font-serif text-2xl text-ink tracking-tight leading-tight">Email</h2>
          </div>
          <div className="lg:col-span-9 py-12 lg:pl-12">
            <p className="font-sans text-base text-ink-secondary leading-relaxed mb-6">
              Best for detailed inquiries, project briefs, and full-time or fractional opportunities.
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex min-h-11 items-center gap-2 rounded-md bg-ink text-paper-raised text-sm font-sans font-medium px-5 transition-colors duration-150 hover:bg-ink-secondary"
            >
              <Mail className="w-4 h-4" />
              {profile.email}
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border-b border-rule-light">
          <div className="lg:col-span-3 py-12 pr-8 lg:border-r border-rule-light">
            <p className="eyebrow mb-2">
              Network
            </p>
            <h2 className="font-serif text-2xl text-ink tracking-tight leading-tight">Profiles</h2>
          </div>
          <div className="lg:col-span-9 py-12 lg:pl-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-rule-light border border-rule-light">
              <div className="bg-paper p-6">
                <p className="font-sans text-sm font-medium text-ink mb-2">LinkedIn</p>
                <p className="font-sans text-xs text-ink-muted leading-relaxed mb-4">
                  Best for professional networking, direct messages, and credential verification.
                </p>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center gap-1 rounded-sm text-meta font-sans text-ink-muted transition-colors duration-150 hover:text-ink"
                >
                  in/me-sahiltomar <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
              <div className="bg-paper p-6">
                <p className="font-sans text-sm font-medium text-ink mb-2">GitHub</p>
                <p className="font-sans text-xs text-ink-muted leading-relaxed mb-4">
                  Explore open-source repositories, application architecture, and commits.
                </p>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center gap-1 rounded-sm text-meta font-sans text-ink-muted transition-colors duration-150 hover:text-ink"
                >
                  github.com/me-sahiltomar <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
          <div className="lg:col-span-3 py-12 pr-8 lg:border-r border-rule-light">
            <p className="eyebrow mb-2">
              Logistics
            </p>
            <h2 className="font-serif text-2xl text-ink tracking-tight leading-tight">Details</h2>
          </div>
          <div className="lg:col-span-9 py-12 lg:pl-12">
            <div className="flex flex-col sm:flex-row gap-8 sm:gap-16">
              <div>
                <p className="eyebrow mb-2">Location</p>
                <p className="font-sans text-sm text-ink font-medium">Delhi NCR, India</p>
                <p className="font-sans text-xs text-ink-muted mt-1">Open to hybrid/remote</p>
              </div>
              <div>
                <p className="eyebrow mb-2">Timezone</p>
                <p className="font-sans text-sm text-ink font-medium">Asia/Calcutta (GMT+5:30)</p>
                <p className="font-sans text-xs text-ink-muted mt-1">Open to global async & hybrid teams</p>
              </div>
            </div>
          </div>
        </div>

    </PageShell>
  );
}
