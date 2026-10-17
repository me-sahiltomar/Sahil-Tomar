export interface ProductItem {
  id: string;
  name: string;
  slug: string;
  status: "active" | "beta" | "archived";
  statusLabel: string;
  category: string;
  headline: string;
  subtitle: string;
  operationalHighlights: string[];
  techStack: string[];
  githubUrl?: string;
  primaryCta?: {
    label: string;
    href: string;
    isExternal?: boolean;
  };
  secondaryCta?: {
    label: string;
    href: string;
    isExternal?: boolean;
  };
}

export interface CaseStudyItem {
  id: string;
  title: string;
  roleTimeline: string;
  badge: string;
  badgeVariant: "emerald" | "amber" | "slate";
  summary: string;
  deliverable?: string;
  domainTag?: string;
  isFeatured?: boolean;
  metrics?: { value: string; label: string }[];
  strategicLesson?: string;
  modalData: {
    problem: string;
    methodology: string;
    deliverables: string[];
    keyTakeaways: string;
  };
}

export interface TimelineItem {
  id: string;
  title: string;
  org: string;
  role: string;
  dates: string;
  location: string;
  details: string;
  link?: string;
  contextBadge?: string;
}

export interface CapabilityColumn {
  title: string;
  iconName: "Compass" | "Cpu" | "Terminal";
  items: string[];
}

export const PRODUCTS_DATA: ProductItem[] = [
  {
    id: "ledgerlens",
    name: "LedgerLens",
    slug: "ledgerlens",
    status: "active",
    statusLabel: "ACTIVE",
    category: "DOCUMENT VISION & VALIDATION",
    headline: "AI document intelligence for extracting and validating financial records from receipts and invoices.",
    subtitle: "AI-powered document intelligence & financial validation platform",
    operationalHighlights: [
      "Multi-provider vision processing with hot-swapping between OpenAI, Gemini, and Groq models",
      "Dynamic Pydantic v2 schema prompting enforcing strict JSON schema contracts and confidence scoring",
      "Production-hardened Docker container with Prometheus metrics (/metrics) and Grafana observability",
    ],
    techStack: [
      "Next.js 14 App Router",
      "FastAPI / Python 3.11+",
      "Multi-Provider Vision (OpenAI, Gemini, Groq)",
      "Supabase (PostgreSQL + CDN)",
    ],
    githubUrl: "https://github.com/me-sahiltomar/LedgerLens",
    primaryCta: {
      label: "Open LedgerLens ↗",
      href: "https://ledgerlens.cevonx.com",
      isExternal: true,
    },
    secondaryCta: {
      label: "Specifications →",
      href: "https://productstudio.cevonx.com",
      isExternal: true,
    },
  },
  {
    id: "productscout",
    name: "ProductScout",
    slug: "productscout",
    status: "active",
    statusLabel: "ACTIVE",
    category: "RESEARCH / OPPORTUNITY INTELLIGENCE",
    headline: "Discovers real problems and identifies software products worth building.",
    subtitle: "Evidence-first product research & opportunity intelligence engine",
    operationalHighlights: [
      "Automated multi-source signal harvesting from developer and operator discussions",
      "20-field structured opportunity model separating direct user evidence from AI inference",
      "Durable Supabase persistence (PostgreSQL 17.6 + RLS) with Next.js server actions and fallback cache",
    ],
    techStack: [
      "Next.js 14 App Router",
      "React 18",
      "Tailwind CSS",
      "Supabase (PostgreSQL 17.6 + RLS)",
      "OpenAI & Gemini APIs",
    ],
    primaryCta: {
      label: "Open ProductScout ↗",
      href: "https://productscout.cevonx.com",
      isExternal: true,
    },
    secondaryCta: {
      label: "Specifications →",
      href: "https://productstudio.cevonx.com",
      isExternal: true,
    },
  },
  {
    id: "priox",
    name: "PrioX",
    slug: "priox",
    status: "beta",
    statusLabel: "BETA",
    category: "OPERATIONAL INTELLIGENCE",
    headline: "Startup signal prioritization and operational decision engine.",
    subtitle: "AI-powered founder decision support & priority inbox",
    operationalHighlights: [
      "Context-aware signal parsing across customer churn risk, sales blockers, and product friction",
      "4-stage workflow (Understand → Detect → Prioritize → Recommend) generating explainable Decision Briefs",
      "Frictionless demo mode pre-loaded with 3 operational startup scenarios for instant triage testing",
    ],
    techStack: [
      "Next.js 14 App Router",
      "TypeScript",
      "Tailwind CSS",
      "Google Gemini API (Serverless)",
    ],
    primaryCta: {
      label: "Open PrioX Beta ↗",
      href: "https://priox.cevonx.com",
      isExternal: true,
    },
    secondaryCta: {
      label: "Specifications →",
      href: "https://productstudio.cevonx.com",
      isExternal: true,
    },
  },
  {
    id: "vyra",
    name: "Vyra (H²OS)",
    slug: "vyra",
    status: "archived",
    statusLabel: "ARCHIVED",
    category: "EXPERIMENTAL / HEALTH OS",
    headline: "Human Health OS experimental prototype and longitudinal health research.",
    subtitle: "Systems architecture & biomarker normalization spike",
    operationalHighlights: [
      "Unified biomarker normalization architecture prototype and longitudinal timeline visualization",
      "Deliberately concluded and preserved as architectural proof-of-work under studio governance",
    ],
    techStack: [
      "Next.js / TypeScript Prototype",
      "Local Heuristic Health Schema",
      "SQLite / Supabase Persistence Spike",
    ],
    secondaryCta: {
      label: "View Archive Specs →",
      href: "https://productstudio.cevonx.com",
      isExternal: true,
    },
  },
];

export const CASE_STUDIES_DATA: CaseStudyItem[] = [
  {
    id: "finstation",
    title: "FinStation — 0-to-1 Venture & Regulatory Forensics",
    roleTimeline: "Co-Founder | Jun 2026 – Oct 2026 | Delhi NCR",
    badge: "0-TO-1 VENTURE & REGULATORY PIVOT",
    badgeVariant: "amber",
    isFeatured: true,
    summary:
      "Co-founded an AI-powered financial intelligence concept for Indian retail investors. Led product positioning, data/API feasibility, early GTM, and founding team recruitment.",
    metrics: [
      {
        value: "15–20+",
        label: "Intern candidates screened & interviewed via practical trial assignments",
      },
      {
        value: "~35 Users",
        label: "Early controlled beta cohort onboarded for workflow & feature validation",
      },
      {
        value: "SEBI RA/IA Audit",
        label: "Identified regulatory compliance bottleneck prior to Pvt. Ltd. incorporation",
      },
    ],
    strategicLesson:
      "Through 1-on-1 discovery calls and regulatory audits, we discovered our initial value proposition crossed into SEBI Research Analyst / Investment Adviser compliance walls. Rather than blindly incorporating and burning capital on a legally blocked model, we paused commercial rollout to re-architect around non-advisory workflow intelligence.",
    modalData: {
      problem:
        "Indian retail investors face severe information asymmetry when parsing quarterly earnings reports, NSE filings, and complex corporate balance sheets. However, any automated service providing structured price predictions or curated stock screening approaches statutory investment advice under SEBI guidelines.",
      methodology:
        "Conducted 1-on-1 discovery interviews with retail traders and equity analysts; audited financial data API providers (NSE/BSE feeds, market tick data); established practical trial assignments to evaluate and interview 15–20 prospective intern candidates; and performed an intensive regulatory boundary audit under SEBI (Research Analyst) Regulations, 2014 and SEBI (Investment Advisers) Regulations, 2013.",
      deliverables: [
        "Comprehensive Product Requirements Document (PRD) and feature scope",
        "Financial data API integration feasibility & latency benchmark",
        "Founding team trial task rubrics & candidate assessment logs",
        "35-user controlled beta testing cohort feedback log",
        "Formal regulatory risk and compliance audit report",
      ],
      keyTakeaways:
        "Evidence before expansion is not merely an operational mantra—it is statutory self-defense. Pausing commercial rollout before incorporating a Private Limited entity and committing to annual data licenses prevented catastrophic regulatory and financial liability, preserving capital for compliant workflow software.",
    },
  },
  {
    id: "pepagora",
    title: "Pepagora B2B Marketplace — Onboarding & Competitive Benchmarking",
    roleTimeline: "Business Operations & Compliance Sprint | Excelerate",
    badge: "CASE STUDY",
    badgeVariant: "slate",
    domainTag: "B2B MARKETPLACE OPS",
    summary:
      "Benchmarked activation and verification funnels against IndiaMART, Alibaba.com, and TradeIndia to propose frictionless verification and re-engagement workflows.",
    deliverable:
      "Mapped supplier, buyer, and export-agent personas and onboarding journeys; benchmarked activation and verification funnels against IndiaMART, Alibaba.com, and TradeIndia to propose frictionless verification and re-engagement workflows.",
    modalData: {
      problem:
        "B2B marketplace platforms suffer severe seller churn and drop-off during onboarding due to high-friction verification gates, opaque supplier tiering, and disconnected buyer inquiry notification funnels.",
      methodology:
        "Conducted end-to-end user journey mapping across 3 core personas (Suppliers, Global Buyers, Export Agents); analyzed verification barriers and user friction points; completed systematic competitive benchmarking against IndiaMART, Alibaba.com, and TradeIndia examining verification velocity, trust signals, and lead re-engagement mechanisms.",
      deliverables: [
        "End-to-end persona journey maps (Supplier, Buyer, Export Agent)",
        "Competitive funnel benchmarking matrix across IndiaMART, Alibaba, and TradeIndia",
        "Tiered verification architecture with progressive document requests",
        "Automated lead re-engagement and drop-off recovery workflow specifications",
      ],
      keyTakeaways:
        "Verification must be progressive rather than all-or-nothing. By enabling instant low-tier supplier registration with basic business proof and reserving stringent verification for transactional escrow, marketplaces preserve top-of-funnel liquidity while maintaining trust.",
    },
  },
  {
    id: "projectup",
    title: "ProjectUp — 9-Department Organizational Adoption & RCA",
    roleTimeline: "Team Lead (12-Member Global Team) | Project Management Associate Track (Excelerate)",
    badge: "CASE STUDY",
    badgeVariant: "slate",
    domainTag: "CHANGE MANAGEMENT & RCA",
    summary:
      "Diagnosed internal software adoption failure across 150 employees and 9 departments. Delivered Root Cause Analysis (RCA), an 8-week implementation roadmap, and a 3-week pilot framework.",
    deliverable:
      "Diagnosed internal software adoption failure across 150 employees and 9 departments. Delivered Root Cause Analysis (RCA), an 8-week implementation roadmap, risk register, and a 3-week pilot framework (10–15 users) with explicit Go / Conditional Go / No-Go gates.",
    modalData: {
      problem:
        "A newly deployed enterprise software system across 150 employees and 9 departments suffered near-total user abandonment, with staff reverting to shadow spreadsheets despite management mandates and previous technical training sessions.",
      methodology:
        "Led a 12-member global multidisciplinary team executing systematic Root Cause Analysis (RCA) using Ishikawa (Fishbone) analysis and the 5-Whys framework across People, Process, Governance, and Technology dimensions; mapped daily departmental workflows to identify misaligned performance incentives.",
      deliverables: [
        "Comprehensive 9-Department Root Cause Analysis (RCA) diagnostic document",
        "25-item organizational risk register with mitigation triggers and owners",
        "8-week cross-departmental rollout roadmap with change champions",
        "3-week isolated pilot framework (10–15 users) with measurable Go / Conditional Go / No-Go exit gates",
      ],
      keyTakeaways:
        "Software adoption failure is fundamentally an incentive-alignment and change-management failure, not a technical tooling defect. Designing pilots with hard quantitative exit criteria prevents enterprise leadership from throwing good capital after bad implementation.",
    },
  },
  {
    id: "digital-strategy",
    title: "Multi-Stakeholder Digital Strategy & GTM Architecture",
    roleTimeline: "Team Lead (Team 5) | Digital Strategy Track (Excelerate)",
    badge: "CASE STUDY",
    badgeVariant: "slate",
    domainTag: "MULTI-SIDED GTM",
    summary:
      "Mapped learner, university, and employer journeys across 190+ countries. Built a 4-pillar content architecture and 5 production-ready campaign briefs with KPI frameworks.",
    deliverable:
      "Mapped learner, university, and employer journeys across 190+ countries (Discovery → Validation → Application → Onboarding → Engagement → Advocacy). Built a 4-pillar content architecture and 5 production-ready campaign briefs (3 organic, 2 paid) with KPI frameworks.",
    modalData: {
      problem:
        "A global digital education ecosystem operating across 190+ countries lacked unified go-to-market orchestration, producing fragmented marketing messages, erratic brand positioning, and weak organic retention across institutional stakeholders.",
      methodology:
        "Directed Team 5 through end-to-end journey mapping across three distinct audiences (Learners, Universities, Employers) across 6 lifecycle stages: Discovery, Validation, Application, Onboarding, Engagement, and Advocacy; synthesized multi-regional acquisition data and established unified KPI measurement trees.",
      deliverables: [
        "Global stakeholder journey matrix across 190+ countries and 6 funnel stages",
        "4-pillar core content strategy framework (Authority, Student Proof, Institutional Trust, Career Outcomes)",
        "5 production-ready campaign execution briefs (3 organic community series, 2 paid performance funnels)",
        "Multi-stakeholder KPI dashboard architecture and attribution model",
      ],
      keyTakeaways:
        "Multi-sided network marketing requires synchronized messaging: university partners demand academic prestige and accreditation, employers demand validated skills, and students demand tangible career placement. Campaigns must measure down-funnel retention rather than top-of-funnel reach.",
    },
  },
  {
    id: "ai-connect",
    title: "AI Connect 2026 — Global Programme Delivery & $20k Budget Model",
    roleTimeline: "Team Lead | Project Management Trainee Track (Excelerate)",
    badge: "CASE STUDY",
    badgeVariant: "slate",
    domainTag: "PROGRAMME & BUDGET MODEL",
    summary:
      "Engineered a 5-month Work Breakdown Structure (WBS), dependency matrix, stakeholder QA framework, and an activity-based $20,000 budget simulation for a 10-day global virtual AI summit.",
    deliverable:
      "Engineered a 5-month Work Breakdown Structure (WBS), dependency matrix, stakeholder QA framework, and an activity-based $20,000 budget simulation for a 10-day global virtual AI summit.",
    modalData: {
      problem:
        "Planning a 10-day global virtual AI summit featuring international keynote speakers, interactive workshops, and multi-track live streams required strict cost containment within an unyielding $20,000 budget constraint and high cross-timezone logistical complexity.",
      methodology:
        "Constructed a comprehensive 5-month operational project plan using critical-path project management; designed activity-based financial models with built-in variance tolerances; established rigorous stakeholder communication protocols and speaker failure contingencies.",
      deliverables: [
        "Hierarchical 5-month Work Breakdown Structure (WBS) with 140+ discrete work packages",
        "Critical-path dependency matrix and operational bottleneck map",
        "Activity-based $20,000 budget allocation spreadsheet with contingency reserves",
        "Speaker onboarding SLA, rehearsal schedule, and technical failure recovery checklist",
      ],
      keyTakeaways:
        "Large-scale operational programmes succeed through rigorous dependency mapping. When budget margins are razor-thin, pre-negotiated contracts and scenario-tested emergency protocols protect event delivery from unexpected speaker dropouts and streaming disruptions.",
    },
  },
];

export const TIMELINE_DATA: TimelineItem[] = [
  {
    id: "cevonx",
    title: "CevonX — Founder & Product Builder",
    org: "cevonx.com",
    role: "Founder & Product Builder",
    dates: "Sept 2026 – Present",
    location: "Delhi NCR",
    link: "https://cevonx.com",
    contextBadge: "cevonx.com",
    details:
      "Established an applied AI product studio (productstudio.cevonx.com) and commercial automation solutions layer (core.cevonx.com). Shipped LedgerLens, ProductScout, and PrioX (Beta) using 7-day rapid build loops and strict lifecycle governance.",
  },
  {
    id: "excelerate",
    title: "Excelerate — Team Lead (Global Strategy, Project Management & Operations Sprints)",
    org: "Excelerate Global",
    role: "Team Lead",
    dates: "Jun 2026 – Oct 2026",
    location: "Remote (Cross-Border Teams across Asia & Africa)",
    contextBadge: "4 Global Sprints · Team Lead",
    details:
      "Served as Team Lead across structured 4-week consulting and delivery sprints to build practical operational frameworks: Project Management Associate (Led 12-member team on ProjectUp 9-department RCA & pilot), Digital Strategy Associate (Led Team 5 on multi-stakeholder GTM & 5 campaign briefs), Project Management Trainee (5-month WBS & $20k budget for AI Connect 2026), and Business Operations & Compliance (Pepagora B2B marketplace benchmarking).",
  },
  {
    id: "finstation",
    title: "FinStation — Co-Founder (0-to-1 Venture Initiative)",
    org: "FinStation",
    role: "Co-Founder",
    dates: "Jun 2026 – Oct 2026",
    location: "New Delhi / NCR",
    contextBadge: "0-to-1 Venture Discovery",
    details:
      "Led product strategy, market/API research, and early operations for an AI retail investor platform. Screened and interviewed 15–20+ intern candidates, onboarded ~35 beta users, conducted user discovery calls, and executed a disciplined regulatory pause after uncovering SEBI RA/IA compliance constraints.",
  },
  {
    id: "countryedu",
    title: "CountryEdu Pvt. Ltd. — Business Analyst Intern",
    org: "CountryEdu Pvt. Ltd.",
    role: "Business Analyst Intern",
    dates: "Oct 2025 – Dec 2025",
    location: "Gurugram, Haryana",
    contextBadge: "Requirements & Process Ops",
    details:
      "Conducted competitor research, requirement gathering, business requirements documentation (BRDs), and internal workflow mapping to identify process-improvement opportunities.",
  },
  {
    id: "hackathons",
    title: "Independent — Team Lead (Hackathons & Strategy Competitions)",
    org: "Independent",
    role: "Team Lead",
    dates: "Aug 2025 – Present",
    location: "National / India",
    contextBadge: "National Hackathons & Strategy",
    details:
      "Led 3–6 member interdisciplinary teams across national problem-solving competitions, including Smart India Hackathon 2025 (Teams Quantum Coders & Victus), Digital Health Systems Optimization Challenge, and the RIT City Strategy Challenge.",
  },
];

export const CAPABILITIES_DATA: CapabilityColumn[] = [
  {
    title: "Strategy, Research & Operations",
    iconName: "Compass",
    items: [
      "Market & Competitor Forensics",
      "Customer Discovery",
      "Business Requirement Docs (BRDs)",
      "Root Cause Analysis (RCA)",
      "Pilot & KPI Frameworks",
      "Cross-Functional Project Delivery",
    ],
  },
  {
    title: "Applied AI & Workflow Automation",
    iconName: "Cpu",
    items: [
      "n8n Workflow Orchestration",
      "Multi-LLM Routing (OpenAI, Gemini, Groq)",
      "Structured Extraction & Pydantic Validation",
      "Human-in-the-Loop Confidence Scoring",
      "Prompt & Context Engineering",
    ],
  },
  {
    title: "Product & Technical Execution",
    iconName: "Terminal",
    items: [
      "Python, FastAPI",
      "Next.js 14 (TypeScript)",
      "Supabase / PostgreSQL (RLS)",
      "SQLite",
      "REST APIs, Docker",
      "Figma Wireframing",
      "Git/GitHub",
      "Vercel & Render Deployment",
    ],
  },
];

export const EDUCATION_DATA = {
  academics: [
    {
      degree: "Bachelor of Technology (B.Tech) in Computer Science & Engineering",
      institution: "Deenbandhu Chhotu Ram University of Science & Technology (DCRUST), Murthal",
      period: "2022 – 2026",
    },
    {
      degree: "New Age Tools & Technology (AI & Software Engineering Program)",
      institution: "iHUB DivyaSampark, IIT Roorkee",
      period: "Sept 2025 – Aug 2026",
    },
  ],
  credentials: [
    "McKinsey Forward Program (Alumni Network)",
    "Product Discovery Certification (Pendo & Mind the Product)",
    "IBM Generative AI Engineering Specialization",
    "Google Data Analytics Professional Certificate",
    "Quantium Data Analytics Simulation (Forage)",
  ],
};
