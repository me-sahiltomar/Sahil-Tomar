export interface SiteIdentity {
  name: string;
  domain: string;
  shortBio: string;
  role: string;
}

export const siteIdentity: SiteIdentity = {
  name: "Sahil Tomar",
  domain: "sahiltomar.com",
  shortBio: "I like work that starts out unclear. I figure out what matters, build what helps, and keep learning from what happens next.",
  role: "Product · Operations · Strategy · AI & Software"
};

export interface CurrentSignal {
  currentlyBuilding: {
    title: string;
    description: string;
  };
  lastShipped: {
    title: string;
    status: string;
  };
  currentlyOpenTo: {
    roles: string[];
    location: string;
  };
}

export const currentSignal: CurrentSignal = {
  currentlyBuilding: {
    title: "CevonX Ecosystem",
    description: "Solo-operated · 2026",
  },
  lastShipped: {
    title: "LedgerLens v1",
    status: "Live product · 57 passing tests",
  },
  currentlyOpenTo: {
    roles: ["Founder’s Office", "Product", "Operations"],
    location: "Delhi NCR · Remote / Hybrid",
  },
};

export interface WorkingPattern {
  heading: string;
  copy: string[];
  evidence: string;
  href: string; // The case study slug to link to
  ctaLabel: string;
}

export const workingPatterns: WorkingPattern[] = [
  {
    heading: "Find the real problem.",
    copy: [
      "An adoption effort was being treated as a software problem.",
      "Looking closer showed that workflow friction and conflicting KPIs were driving much of the resistance."
    ],
    evidence: "Root Cause Analysis · 9 departments",
    href: "/work/organizational-adoption-initiative",
    ctaLabel: "View the work →"
  },
  {
    heading: "Turn signals into decisions.",
    copy: [
      "ProductScout started with a simple question: which customer complaints actually point to something worth building?",
      "I built a scoring system around the signals that matter."
    ],
    evidence: "6-dimension opportunity scoring model",
    href: "/work/productscout",
    ctaLabel: "View ProductScout →"
  },
  {
    heading: "Build around the constraint.",
    copy: [
      "LedgerLens forced a useful boundary: AI can extract information, but software should verify the arithmetic.",
      "That became the basis of the system."
    ],
    evidence: "57 passing automated tests",
    href: "/work/ledgerlens",
    ctaLabel: "View LedgerLens →"
  }
];

export interface AboutProfile {
  homepagePreview: string[];
  fullBackground: string[];
  education: {
    institution: string;
    degree: string;
    period: string;
  }[];
  location: string;
  cevonxContext: string[];
  careerContext: string[];
}

export const aboutProfile: AboutProfile = {
  homepagePreview: [
    "I'm a Computer Science graduate interested in how product, operations, strategy, and software come together.",
    "I've spent the last few years learning by building — working on products, studying AI systems, exploring startup operations, and building CevonX along the way.",
    "I'm usually most useful when the problem is still unclear and someone needs to figure out what matters next.",
  ],
  fullBackground: [
    "I studied Computer Science, but I’ve always been interested in the space around the code too: what people need, how a team works, and whether a product solves the right problem.",
    "That curiosity has taken me from software projects into product discovery and operations. I still like getting close to the technical details, especially when they help make a decision clearer or an idea tangible.",
  ],
  education: [
    {
      institution: "DCRUST (Deenbandhu Chhotu Ram University of Science & Technology)",
      degree: "B.Tech, Computer Science & Engineering",
      period: "2022–2026",
    },
    {
      institution: "iHUB DivyaSampark, IIT Roorkee",
      degree: "Program on New Age Tools & Technology — AI Engineering",
      period: "2025–2026",
    },
  ],
  location: "Sonipat, Haryana, India / Delhi NCR",
  cevonxContext: [
    "I’m building CevonX as a place to work on practical software and AI products, while also developing the company itself. ProductScout and LedgerLens are two of the products I’ve built there.",
  ],
  careerContext: [
    "I’m open to thoughtful opportunities in Founder’s Office, Product, and Operations, particularly in Delhi NCR or remote and hybrid teams.",
  ],
};

export interface NowData {
  lastUpdated: string;
  building: {
    title: string;
    description: string;
  }[];
  exploring: {
    title: string;
    description: string;
  }[];
  learning: {
    title: string;
    description: string;
  }[];
  homepagePreview: {
    building: string[];
    exploring: string[];
    learning: string[];
  };
}

export const nowData: NowData = {
  lastUpdated: "October 2026",
  homepagePreview: {
    building: ["CevonX", "ProductScout"],
    exploring: ["Founder’s Office", "Product", "Operations"],
    learning: ["LLM verification", "PostgreSQL", "Product discovery"]
  },
  building: [
    {
      title: "CevonX",
      description: "Building the company and its products, including the systems that help me keep the work moving.",
    },
    {
      title: "ProductScout",
      description: "Refining the scoring model and analysis flow I use to compare product opportunities.",
    }
  ],
  exploring: [
    {
      title: "Founder’s Office / Chief of Staff roles",
      description: "Looking for a role close to company priorities, research, and the work that helps a team execute.",
    },
    {
      title: "Associate Product Manager / Product Operations",
      description: "Interested in taking a product from understanding the problem through to a useful first release.",
    }
  ],
  learning: [
    {
      title: "Checking AI outputs",
      description: "Learning how conventional software checks can catch errors in AI-generated results.",
    },
    {
      title: "PostgreSQL",
      description: "Going deeper on database design and row-level security.",
    },
    {
      title: "Early-stage company building",
      description: "Paying attention to how small teams choose what to work on and when to invest further.",
    }
  ],
};

export interface ContactData {
  email: string;
  linkedin: string;
  github: string;
  location: string;
}

export const contactData: ContactData = {
  email: "sahiltomar2430@gmail.com",
  linkedin: "https://www.linkedin.com/in/me-sahiltomar/",
  github: "https://github.com/me-sahiltomar",
  location: "Delhi NCR, India",
};
