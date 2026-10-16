export interface NowFocus {
  lastUpdated: string;
  location: string;
  building: {
    title: string;
    description: string;
    link?: string;
    linkLabel?: string;
  }[];
  workingOn: {
    title: string;
    description: string;
  }[];
  learning: {
    topic: string;
    context: string;
  }[];
  exploring: {
    domain: string;
    description: string;
  }[];
}

export const nowData: NowFocus = {
  lastUpdated: "October 2026",
  location: "Sonipat / Delhi NCR, India",
  building: [
    {
      title: "CevonX Ecosystem Architecture",
      description:
        "Refining the unified two-engine operating model (CevonX Core for client technical delivery and CevonX Product Studio for owned software products), with shared database architecture on Supabase.",
      link: "https://cevonx.com",
      linkLabel: "Visit CevonX",
    },
    {
      title: "ProductScout Intelligence Pipeline",
      description:
        "Hardening the multi-source signal ingestion engine that detects market friction and converts user complaint clusters into quantified product opportunity dossiers.",
      link: "https://productscout.cevonx.com",
      linkLabel: "Visit ProductScout",
    },
    {
      title: "LedgerLens Extraction & Verification Engine",
      description:
        "Maintaining and expanding the AI vision document extraction platform, combining multimodal LLM extraction with deterministic mathematical validation rules and human-in-the-loop audit flows.",
      link: "https://ledgerlens.cevonx.com",
      linkLabel: "Visit LedgerLens",
    },
    {
      title: "PrioX Decision Engine",
      description:
        "Prototyping an interactive prioritization matrix for early-stage founders to structure ambiguous operational signals, evaluate trade-offs, and guide resource allocation.",
    },
  ],
  workingOn: [
    {
      title: "Founder’s Office & Cross-Functional Workflows",
      description:
        "Designing standardized decision logs, company handoff protocols, and operational templates that allow solo and small leadership teams to operate with high leverage.",
    },
    {
      title: "Autonomous AI Agent Workflows",
      description:
        "Building structured, tool-augmented agent workflows for repetitive research, market intelligence scanning, and automated document synthesis.",
    },
    {
      title: "Controlled Beta Cohort Strategies",
      description:
        "Formalizing onboarding playbooks and retention measurement gates for early-stage software launches.",
    },
  ],
  learning: [
    {
      topic: "Deterministic Verification for LLM Pipelines",
      context:
        "Combining generative AI reasoning with strict formal verification, Pydantic type validation, and database-level constraints to prevent hallucination in critical business systems.",
    },
    {
      topic: "Advanced PostgreSQL & Row Level Security (RLS)",
      context:
        "Optimizing multi-tenant database policies, InitPlan query performance, and granular authorization architectures on Supabase PostgreSQL 17.",
    },
    {
      topic: "Venture Operations & Early-Stage Capital Allocation",
      context:
        "Studying operational cadence, board reporting, unit economics analysis, and corporate structuring for high-growth tech ventures.",
    },
  ],
  exploring: [
    {
      domain: "Founder’s Office / Chief of Staff Roles",
      description:
        "Opportunities to partner directly with high-velocity startup founders, taking ownership of ambiguous cross-functional challenges, special projects, and operational cadence.",
    },
    {
      domain: "Associate Product Manager / Product Operations",
      description:
        "Roles focusing on problem discovery, customer workflow analysis, PRD authoring, and bridging user friction with agile engineering execution.",
    },
    {
      domain: "Strategy & Business Operations (BizOps)",
      description:
        "Positions focused on workflow mapping, root cause analysis, pilot implementation, and scaling operational efficiency in fast-growing tech companies.",
    },
  ],
};
