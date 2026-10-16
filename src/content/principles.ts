export interface OperatingPrinciple {
  number: string;
  title: string;
  tagline: string;
  description: string;
  concreteApplication: string;
}

export const operatingPrinciples: OperatingPrinciple[] = [
  {
    number: "01",
    title: "Start with the Problem",
    tagline: "Understand operational reality before proposing solutions",
    description:
      "Most wasted engineering and strategy stems from solving the wrong problem or accepting surface-level symptoms as root causes. I spend time mapping actual workflows, observing where users get stuck, and separating perceived problems from structural friction.",
    concreteApplication:
      "Conducting root cause analysis (RCA), workflow tracing, and user friction interviews before authoring technical or product specifications.",
  },
  {
    number: "02",
    title: "Structure Ambiguity",
    tagline: "Break unclear challenges into constraints, decisions, and priorities",
    description:
      "Early-stage initiatives are inherently chaotic and under-specified. Rather than waiting for complete clarity, I decompose complex, open-ended objectives into explicit constraints, clear trade-offs, prioritized questions, and concrete next actions.",
    concreteApplication:
      "Creating decision trees, stakeholder matrices, Go/No-Go evaluation gates, and phased pilot roadmaps.",
  },
  {
    number: "03",
    title: "Move to Evidence",
    tagline: "Prefer prototypes, research, feedback, and working code over conjecture",
    description:
      "Opinions and ungrounded assumptions compound risk. I anchor decisions in verified data: customer feedback, competitive benchmarks, functional prototypes, empirical test suites, and controlled user cohorts.",
    concreteApplication:
      "Establishing strict evidence thresholds before allocating engineering capacity, and documenting decisions in verifiable logs.",
  },
  {
    number: "04",
    title: "Build When Useful",
    tagline: "Apply software and AI only when they materially improve the outcome",
    description:
      "Software and AI models are force multipliers, not default obligations. If a problem can be resolved with a streamlined process, clear documentation, or standard off-the-shelf tools, I avoid creating unnecessary code and technical debt.",
    concreteApplication:
      "Choosing deterministic logic and proven patterns first, reserving AI models for genuine unstructured intelligence, extraction, and synthesis.",
  },
  {
    number: "05",
    title: "Iterate with Discipline",
    tagline: "Ship → Observe → Learn → Refine",
    description:
      "A fast feedback loop beats speculative perfection. I focus on deploying complete, tightly scoped minimum viable versions, measuring real usage and edge-case behavior, and systematically refining based on observed reality.",
    concreteApplication:
      "Deploying staged cohorts (e.g. 25 → 50 → 100 users), gathering structured feedback, and killing or doubling down on features based on retention.",
  },
];
