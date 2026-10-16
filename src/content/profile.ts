export interface Education {
  institution: string;
  degree: string;
  period: string;
  description?: string;
}

export interface Credential {
  name: string;
  issuer: string;
  category: "AI & Engineering" | "Product" | "Analytics & Strategy" | "Leadership";
}

export interface Profile {
  name: string;
  headline: string;
  subheadline: string;
  positioningStatement: string;
  email: string;
  location: string;
  timezone: string;
  linkedin: string;
  github: string;
  careerProgression: string[];
  education: Education[];
  credentials: Credential[];
  targetRoles: {
    title: string;
    focus: string;
    value: string;
  }[];
}

export const profile: Profile = {
  name: "Sahil Tomar",
  headline: "Builder & Operator",
  subheadline: "Product · Operations · Strategy · AI & Software",
  positioningStatement:
    "I work across AI, software, products, and business operations — turning ambiguous problems into structured decisions, practical systems, and working products.",
  email: "sahiltomar2430@gmail.com",
  location: "Sonipat, Haryana, India (Delhi NCR)",
  timezone: "Asia/Calcutta (GMT+5:30)",
  linkedin: "https://www.linkedin.com/in/me-sahiltomar/",
  github: "https://github.com/me-sahiltomar",
  careerProgression: [
    "Builder (Practical engineering, rapid prototyping, software delivery)",
    "Operator (Cross-functional alignment, workflow design, execution discipline)",
    "Venture Builder (Company architecture, product-market validation, sustainable scale)",
  ],
  education: [
    {
      institution: "DCRUST (Deenbandhu Chhotu Ram University of Science and Technology)",
      degree: "B.Tech, Computer Science & Engineering",
      period: "2022 – 2026",
      description: "Rigorous foundation in computer science, distributed software systems, algorithms, database architectures, and engineering principles.",
    },
    {
      institution: "iHUB DivyaSampark, IIT Roorkee",
      degree: "Program on New Age Tools & Technology — AI Engineering",
      period: "2025 – 2026",
      description: "Applied generative AI, LLM systems, multimodal processing, agentic architectures, and production AI engineering.",
    },
  ],
  credentials: [
    {
      name: "IBM Generative AI Engineering Specialization",
      issuer: "IBM",
      category: "AI & Engineering",
    },
    {
      name: "Google Data Analytics Professional Certificate",
      issuer: "Google",
      category: "Analytics & Strategy",
    },
    {
      name: "McKinsey Forward Program",
      issuer: "McKinsey & Company",
      category: "Leadership",
    },
    {
      name: "Product Discovery Certification",
      issuer: "Pendo.io",
      category: "Product",
    },
    {
      name: "Quantium Data Analytics Job Simulation",
      issuer: "Quantium",
      category: "Analytics & Strategy",
    },
  ],
  targetRoles: [
    {
      title: "Founder’s Office",
      focus: "Ambiguity, research, decision support, company building, cross-functional execution",
      value: "Operates as a high-leverage proxy for leadership—deconstructing ambiguous strategic priorities, coordinating cross-functional teams, structuring research, and driving operational execution.",
    },
    {
      title: "Product & Product Operations",
      focus: "Problem discovery, requirements, MVP prioritization, validation, workflow understanding",
      value: "Bridges user friction and software engineering with empirical problem validation, structured specifications, and rapid MVP release cycles.",
    },
    {
      title: "Strategy & Business Operations",
      focus: "Process design, workflow optimization, root-cause analysis, change management, automation",
      value: "Diagnoses operational friction across departments, designs structured pilots with Go/No-Go criteria, and builds automated systems to eliminate recurring bottlenecks.",
    },
    {
      title: "AI & Software Systems",
      focus: "Production AI systems, APIs, database architecture, deterministic validation, full-stack",
      value: "Builds functional software prototypes and production platforms using modern web stacks, vision models, structured pipelines, and deterministic verification.",
    },
  ],
};
