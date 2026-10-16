export type CapabilityCategory = "AI" | "Software" | "Product" | "Operations" | "Strategy";

export interface Project {
  slug: string;
  title: string;
  category: CapabilityCategory[];
  context?: string;
  shortDescription: string;
  fullDescription: string;
  status: string;
  year: string;
  role: string;
  finding?: string;
  evidence?: string;
  links?: {
    label: string;
    url: string;
    type: "live" | "github" | "artifact" | "read";
  }[];
  caseStudy?: {
    context: string;
    problem: string;
    objective: string;
    myRole: string;
    approach: string;
    execution: string[];
    output: string[];
    resultOrStatus: string;
    learning: string;
    technologies?: string[];
  };
}

export const projects: Project[] = [
  {
    slug: "cevonx",
    title: "CevonX",
    category: ["AI", "Software", "Product", "Operations"],
    shortDescription: "The company I'm building to work on software, AI, and the problems around them.",
    fullDescription: "CevonX is the company I'm building around practical software, AI, and products of my own.",
    status: "LIVE",
    year: "2026",
    role: "Founder",
    finding: "Keeping client delivery and CevonX-owned products in separate workspaces gives each kind of work a clear home.",
    links: [
      { label: "Visit CevonX", url: "https://cevonx.com", type: "live" }
    ],
    caseStudy: {
      context: "CevonX is a founder-led company working across commercial technical delivery and software products owned by CevonX.",
      problem: "Both kinds of work need to share a company identity and infrastructure without mixing client delivery with owned-product development.",
      objective: "Set up clear responsibilities and technical homes for company operations, services, client engineering, product direction, and product development.",
      myRole: "Founder. I defined the operating model and built the company’s technical foundations.",
      approach: "I organized the company into five functional workspaces and paired business direction with the relevant engineering work. Client delivery stays in CevonX Engineering; owned products stay in Product Engineering.",
      execution: [
        "Defined five workspaces for company operations, services, client delivery, product studio, and product engineering.",
        "Documented the handoffs between commercial scoping and technical delivery, and between product direction and product engineering.",
        "Set shared technical rules for CevonX-owned products, including namespaced database tables.",
      ],
      output: [
        "A documented five-workspace operating model.",
        "Separate technical workspaces for client delivery and CevonX-owned products.",
        "Shared technical foundations for CevonX-owned products.",
      ],
      resultOrStatus: "CevonX is live. Its documented structure separates company, commercial, client engineering, product studio, and product engineering responsibilities.",
      learning: "Clear boundaries make it easier to know who owns a decision and where the work belongs.",
      technologies: ["Next.js", "TypeScript", "Supabase", "PostgreSQL"],
    }
  },
  {
    slug: "ledgerlens",
    title: "LedgerLens",
    category: ["AI", "Software", "Product"],
    shortDescription: "AI document processing built around a simple principle: use AI for extraction and deterministic software for verification.",
    fullDescription: "LedgerLens uses multimodal AI to parse unstructured financial documents and a strict deterministic software layer to verify the mathematical integrity of the extracted data.",
    status: "LIVE",
    year: "2025-2026",
    role: "Engineer & Product Owner",
    links: [
      { label: "Visit product", url: "https://ledgerlens.cevonx.com", type: "live" }
    ],
    caseStudy: {
      context: "Financial documents (invoices, receipts) come in thousands of unstructured formats. Traditional OCR requires brittle, layout-specific templates.",
      problem: "LLMs are excellent at extracting data from unstructured documents, but they hallucinate math. You cannot trust an LLM to accurately sum line items or calculate taxes.",
      objective: "Build a document processing system that combines the flexibility of AI extraction with the absolute certainty of deterministic arithmetic.",
      myRole: "Solo builder. I architected the system, wrote the FastAPI backend, built the Next.js frontend, and designed the verification logic.",
      approach: "I separated the extraction and verification layers. The AI extracts the raw values, and a deterministic Python pipeline recalculates the totals. If the AI's extracted total doesn't match the deterministic calculation, the system flags the document.",
      execution: [
        "Implemented multi-provider AI vision (Gemini 2.0 Flash, Groq/Llama).",
        "Built a strict Pydantic schema for structured JSON output.",
        "Engineered the deterministic validation engine (subtotal + tax = total).",
        "Created an audit trail that saves the exact prompt, raw AI response, and validation result.",
        "Built a responsive Next.js 14 frontend for document upload and review.",
      ],
      output: [
        "Production FastAPI backend on Render.",
        "Next.js frontend on Vercel.",
        "57 passing automated tests.",
      ],
      resultOrStatus: "Live product.",
      learning: "AI is powerful but unreliable. The most robust AI systems don't rely entirely on the model; they wrap the model in strict, traditional software rules.",
    }
  },
  {
    slug: "productscout",
    title: "ProductScout",
    category: ["Product", "AI", "Strategy"],
    shortDescription: "A product discovery tool for comparing customer problems and deciding what might be worth building.",
    fullDescription: "ProductScout helps me collect product ideas, compare the problems behind them, and decide which ones deserve more research.",
    status: "LIVE",
    year: "2026",
    role: "Engineer & Product Manager",
    links: [
      { label: "Visit product", url: "https://productscout.cevonx.com", type: "live" }
    ],
    caseStudy: {
      context: "Deciding what to build is harder than actually building it. Many software products fail because they solve a problem that isn't painful enough or doesn't have a viable business model.",
      problem: "Opportunity evaluation is often ad-hoc and based on gut feeling. There was no systematic way to filter weak signals from strong, validated product opportunities.",
      objective: "Build a system to capture, organize, and rigorously evaluate product opportunities based on objective criteria.",
      myRole: "Solo builder. I designed the scoring framework, architected the Supabase database, and built the Next.js application.",
      approach: "I codified a 6-dimension scoring model (Pain Intensity, Frequency, Market Size, Willingness to Pay, Technical Feasibility, Go-To-Market Friction) and built a system around it.",
      execution: [
        "Designed the relational schema in Supabase (Problems, Solutions, Opportunities).",
        "Implemented the 6-dimension scoring algorithm.",
        "Built the intelligence ingestion pipeline.",
        "Developed the Next.js 14 App Router frontend.",
      ],
      output: [
        "Live Next.js application.",
        "Production Supabase database.",
        "Standardized opportunity evaluation framework.",
      ],
      resultOrStatus: "Live internal product.",
      learning: "A structured process doesn't guarantee a successful product, but it prevents you from wasting months building something that clearly fails basic validation criteria.",
    }
  },
  {
    slug: "organizational-adoption-initiative",
    title: "Organizational Adoption Initiative",
    category: ["Operations", "Strategy"],
    shortDescription: "An investigation into why a new tool wasn't being adopted and what needed to change across teams.",
    fullDescription: "Investigated systemic resistance to a newly deployed software system across 9 departments. Conducted root cause analysis and designed a 3-week recovery pilot focused on workflow alignment rather than technical training.",
    status: "COMPLETED",
    year: "2026",
    role: "Team Lead",
    caseStudy: {
      context: "A significant software rollout was failing. Despite training sessions and management mandates, user adoption remained extremely low.",
      problem: "Management was treating an organizational change problem as a technical support problem, resulting in wasted engineering time and continued user resistance.",
      objective: "Conduct a comprehensive Root Cause Analysis (RCA) across the organization, identify the true barriers to adoption, and deliver a strategic recommendation for recovery.",
      myRole: "Team Lead. I managed a 12-member multidisciplinary team, structured the diagnostic approach, synthesized the findings, and designed the recovery pilot.",
      approach: "We stopped looking at bug reports and started looking at workflows. We mapped the daily routines of the users and looked for misaligned incentives. We discovered that the new software actively conflicted with how the departments were evaluated for performance.",
      execution: [
        "Conducted structured interviews and workflow observations across 9 different departments.",
        "Performed Ishikawa (Fishbone) analysis and 5-Whys to drill past superficial complaints.",
        "Categorized findings into People, Process, Communication, and Accountability gaps.",
        "Designed a low-risk 3-week recovery pilot targeting a single department.",
        "Defined explicit quantitative Go/No-Go criteria for expanding the pilot.",
      ],
      output: [
        "Comprehensive Root Cause Analysis report.",
        "Executive presentation on adoption barriers.",
        "Detailed 3-week pilot implementation plan.",
      ],
      resultOrStatus: "Delivered the final leadership recommendation package and executive presentation to senior stakeholders.",
      learning: "If a tool makes a user's job harder, or conflicts with how they get paid or promoted, they will find a way not to use it. Software must align with organizational physics.",
    }
  },
  {
    slug: "priox",
    title: "Prio AI",
    category: ["AI", "Product", "Strategy"],
    shortDescription: "An AI-powered decision-support engine that parses scattered business updates, detects critical signals, and drafts structured decision briefs for founders.",
    fullDescription: "Prio AI helps early-stage founders cut through operational noise by synthesizing meetings, tickets, customer feedback, and metrics into prioritized decision briefs with concrete next actions.",
    status: "PROTOTYPE",
    year: "2026",
    role: "Product & AI Engineer",
    finding: "Decision support succeeds when AI illuminates the pattern and explains why it matters, leaving the final call to the founder.",
    caseStudy: {
      context: "Early-stage startup founders receive fragmented updates across meetings, customer support tickets, sales calls, code commits, and KPI metrics. Context switching leads to dropped balls and reactive fire-fighting.",
      problem: "Founders spend hours piecing together status updates rather than making high-leverage strategic calls. Generic LLM summaries hallucinate or produce bland bullet points without evaluating urgency, recurrence, or business impact.",
      objective: "Build an AI-powered decision-support engine that extracts critical signals from messy founder notes, prioritizes them objectively, explains why they matter, and structures them into actionable decision briefs.",
      myRole: "Solo creator. I designed the 5-stage core loop, engineered the server-side Gemini intelligence engine, built the Next.js 14 App Router frontend, and crafted the follow-up execution ledger.",
      approach: "I structured a multi-factor evaluation matrix (Recurrence, Impact, Urgency) paired with server-side prompt engineering. The system enforces a strict tenet: AI supports founder judgment with transparent evidence, but does not usurp the final decision.",
      execution: [
        "Architected server-side Gemini 3.8 Flash intelligence pipeline with structured schema enforcement and dynamic fallback tiers.",
        "Built 5 responsive views: Executive Overview feed, Smart Inbox with template injections, Signal Analysis matrix, Decision Brief breakdown, and Follow-up execution ledger.",
        "Engineered client-side persistence with localStorage and real-time state synchronization for task status cycling.",
        "Implemented strict error handling and offline fallback data mocks for zero-downtime demonstration.",
      ],
      output: [
        "Complete Next.js 14 App Router codebase with strict TypeScript and zero linter warnings.",
        "Multi-factor signal prioritization matrix (HIGH, MEDIUM, MONITOR, LOW).",
        "3-column Decision Brief engine (What Happened, Why It Matters, Possible Next Action).",
        "Persistent interactive Follow-up Execution Tracker with status cycling.",
      ],
      resultOrStatus: "Functional MVP with server-side Gemini intelligence pipeline, 5 dedicated views, and local execution persistence.",
      learning: "Decision-support tools succeed when they reduce cognitive friction without claiming false agency. Explaining why an item matters builds far more executive trust than simply ranking it.",
      technologies: ["Next.js 14", "TypeScript", "Google Gemini API", "Tailwind CSS"],
    }
  }
];
