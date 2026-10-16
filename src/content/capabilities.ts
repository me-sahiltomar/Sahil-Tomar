export interface CapabilityItem {
  id: "product" | "operations" | "strategy" | "ai-software";
  name: string;
  tagline: string;
  summary: string;
  whatICanDo: string[];
  artifactsProduced: string[];
  roleRelevance: string;
}

export const capabilities: CapabilityItem[] = [
  {
    id: "product",
    name: "Product",
    tagline: "Discover, define, validate, build, and improve",
    summary:
      "Identifying high-friction problems through empirical research, framing product thesis, defining MVP scopes, prioritizing features, and building user-centric software.",
    whatICanDo: [
      "Discover real market problems before writing code through multi-source research and user signals",
      "Formulate testable product theses and clear value propositions",
      "Define MVP scope and technical/functional requirements (PRDs, specs, user journeys)",
      "Prioritize features based on business impact, customer friction, and engineering feasibility",
      "Design closed-beta cohort rollouts to measure retention and real usage",
      "Translate user feedback and workflow friction into continuous product improvements",
    ],
    artifactsProduced: [
      "Product Requirements Documents (PRDs)",
      "User Journey & Friction Maps",
      "MVP Prioritization Matrices",
      "Beta Cohort Governance Frameworks",
      "Opportunity Evaluation Rubrics",
    ],
    roleRelevance: "Product Manager · Associate Product Manager · Product Operations",
  },
  {
    id: "operations",
    name: "Operations",
    tagline: "Understand workflows, structure processes, eliminate bottlenecks, and automate",
    summary:
      "Analyzing operational friction across departments, designing structured handoffs, designing pilot frameworks with Go/No-Go criteria, and applying systems & automation to streamline execution.",
    whatICanDo: [
      "Map cross-functional workflows and identify recurring communication or process bottlenecks",
      "Conduct rigorous Root Cause Analysis (RCA) across people, process, communication, and systems",
      "Design staged pilot programs with quantitative success thresholds and Go/No-Go decision gates",
      "Establish cross-departmental accountability, handoff standards, and operating rhythms",
      "Automate repetitive manual operations using APIs, scripts, webhooks, and modern integration tools",
      "Turn ad-hoc tribal knowledge into reproducible operating procedures and living documentation",
    ],
    artifactsProduced: [
      "Process Flowcharts & Service Blueprints",
      "Root Cause Analysis (RCA) Decks",
      "Pilot Governance & Go/No-Go Rubrics",
      "Standard Operating Procedures (SOPs)",
      "Cross-Functional Communication Matrices",
    ],
    roleRelevance: "Operations Associate · BizOps · Founder’s Office · Project Manager",
  },
  {
    id: "strategy",
    name: "Strategy",
    tagline: "Research, analyze, structure ambiguity, and support decisions",
    summary:
      "Translating ambiguous market and business signals into structured analyses, competitor benchmarks, risk assessments, and executive recommendation packages.",
    whatICanDo: [
      "Break down ambiguous strategic questions into structured constraints, hypotheses, and decision trees",
      "Conduct in-depth market scanning, competitor intelligence, and business model evaluations",
      "Synthesize disparate qualitative and quantitative signals into actionable executive briefings",
      "Develop stakeholder Power–Interest matrices and change management strategies",
      "Evaluate pricing models, monetization mechanics, and unit economics",
      "Structure multi-horizon roadmaps aligned with empirical organizational evidence",
    ],
    artifactsProduced: [
      "Executive Recommendation Packages",
      "Market Intelligence & Competitor Audits",
      "Risk Registers & Mitigation Plans",
      "Stakeholder Power–Interest Matrices",
      "Business Model & Unit Economic Breakdowns",
    ],
    roleRelevance: "Founder’s Office · Strategy Associate · Business Analyst",
  },
  {
    id: "ai-software",
    name: "AI & Software",
    tagline: "Build practical systems using AI, software, APIs, and databases",
    summary:
      "Architecting and implementing working applications, multi-model AI vision pipelines, structured data extractions, database schemas, and deterministic validation layers.",
    whatICanDo: [
      "Build full-stack production web applications using Next.js 14/15, TypeScript, and modern styling",
      "Develop high-performance REST APIs and microservices using Python and FastAPI",
      "Design relational schemas, multi-tenant databases, and Row Level Security (RLS) on PostgreSQL / Supabase",
      "Integrate multimodal AI models (vision, extraction, reasoning) with deterministic validation rules",
      "Implement human-in-the-loop validation workflows for critical data pipelines",
      "Deploy and maintain scalable web and backend applications with automated test coverage",
    ],
    artifactsProduced: [
      "Production Web Applications (Next.js/React)",
      "High-Performance Python / FastAPI Microservices",
      "Relational Database Schemas & Migrations",
      "Multimodal AI Extraction & Validation Pipelines",
      "Comprehensive Automated Test Suites",
    ],
    roleRelevance: "AI Product Engineer · Technical Generalist · Full-Stack Prototyper",
  },
];
