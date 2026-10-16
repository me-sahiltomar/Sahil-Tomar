# Sahil Tomar — Personal Executive Portfolio (`sahiltomar.pro`)

Production-ready executive portfolio, Founder’s Office track record, Venture Forensics repository, and proof-of-work systems for **Sahil Tomar**.

Engineered with **Next.js 15 (App Router), TypeScript, Tailwind CSS, and Lucide React**. Designed to strictly match the visual design language of `productstudio.cevonx.com` (minimalist, institutional, high-density Swiss grid inspired by Linear, Vercel, and Shadcn UI).

---

## 1. Positioning & Profile Summary

- **Primary Identity:** Sahil Tomar
- **Executive Title:** Startup Operator & AI-Augmented Product Builder
- **Target Roles:** Founder's Office · Strategy & Ops · Product Ops · BizOps · AI Implementation
- **Venture & Product Lab:** Founder & Architect at CevonX ([productstudio.cevonx.com](https://productstudio.cevonx.com) · [core.cevonx.com](https://core.cevonx.com))
- **Operating Method:** Evidence Before Expansion · 7-Day Build Loops · Lifecycle Governance
- **Status:** Available for High-Ownership Roles & AI Sprints (Delhi NCR / Remote)
- **LinkedIn:** [linkedin.com/in/me-sahiltomar](https://www.linkedin.com/in/me-sahiltomar/)
- **GitHub:** [github.com/me-sahiltomar](https://github.com/me-sahiltomar)
- **Email:** [sahiltomar2430@gmail.com](mailto:sahiltomar2430@gmail.com)
- **Canonical Domain:** `sahiltomar.pro`

---

## 2. Site Architecture & Feature Sections

1. **Sticky Top Navigation Bar**:
   - Monogram logo badge (`[S]`), title (`Sahil Tomar`), subtitle badge (`OPERATOR & BUILDER`).
   - Desktop anchor links: `Products` (`#products`), `Case Studies` (`#case-studies`), `Timeline` (`#timeline`), `Capabilities` (`#capabilities`), `CevonX Studio ↗`.
   - Action CTAs: `[Download Resume ↗]` (`/Sahil_Tomar_Resume.pdf`) and `[Work With Me]` (`#contact`).
2. **Hero Section**:
   - Status badge: `• AVAILABLE FOR HIGH-OWNERSHIP ROLES & AI SPRINTS · DELHI NCR`.
   - H1 Primary Focus: `Sahil Tomar` with subtitle `Startup Operator & AI-Augmented Product Builder — Decoding bottlenecks and engineering practical AI systems.`
   - Executive Thesis: Cleanly articulated mission to increase startup survival and execution speed.
   - Dual CTAs: `Explore Shipped Products ↓` and `Read Venture Case Studies ↓`.
   - 3-Column Metadata Strip: Full-width aligned (`TARGET ROLES`, `VENTURE & PRODUCT LAB`, `OPERATING METHOD`).
3. **Owned Software Portfolio (`#products`)**:
   - Interactive filter tabs: `All Systems (4)` | `Active & Beta (3)` | `Archived (1)`.
   - Production systems: `LedgerLens` (Document Vision & Validation), `ProductScout` (Opportunity Intelligence), `PrioX` (Operational Intelligence), `Vyra (H²OS)` (Experimental Biomarker OS).
4. **Venture Forensics & Strategic Diagnostics (`#case-studies`)**:
   - Featured Post-Mortem: `FinStation` (0-to-1 Venture & SEBI RA/IA Regulatory Forensics) with full interactive audit modal.
   - Cross-Border Execution Sprints: `Pepagora` (B2B Marketplace Ops), `ProjectUp` (Change Management & RCA), `Multi-Stakeholder Digital Strategy` (Multi-Sided GTM), and `AI Connect 2026` (Programme & Budget Model).
5. **Chronological Track Record (`#timeline`)**:
   - Vertical Swiss-grid reverse-chronological timeline with wide date column and monospace context badges (`cevonx.com ↗`, `4 Global Sprints · Team Lead`, `0-to-1 Venture Discovery`, `Requirements & Process Ops`, `National Hackathons & Strategy`).
6. **Capability Matrix & Education (`#capabilities`)**:
   - 3-Column AI Generalist Stack: Strategy & Operations, Applied AI & Workflow Automation, Product & Technical Execution.
   - 2-Column Academic Foundation (`B.Tech CSE, DCRUST Murthal` & `iHUB DivyaSampark, IIT Roorkee`) + Verified Credentials (`McKinsey Forward`, `Pendo Product Discovery`, `IBM GenAI`, `Google Data Analytics`).
7. **Dual-Track Engagement (`#contact`)**:
   - High-contrast dark callout card: Track 1 (Full-Time Founder's Office / Ops Roles) and Track 2 (CevonX Core Applied AI Sprints).
8. **Institutional Footer**:
   - Architect statement, CevonX Ecosystem navigation directory, and verified connection links.

---

## 3. Repository Structure

```
sahiltomar-website/
├── public/                     # Static assets (Resume PDF, icons, OpenGraph)
│   ├── Sahil_Tomar_Resume.pdf  # Canonical resume document
│   ├── resumes/                # Specialized track resumes
│   ├── icon.svg                # Favicon
│   └── og-image.svg            # OpenGraph social banner
├── src/
│   ├── app/                    # Next.js App Router routes & layouts
│   │   ├── layout.tsx          # Root layout (Metadata, Fonts, Analytics)
│   │   ├── page.tsx            # Main executive portfolio homepage
│   │   ├── globals.css         # Tailwind directives & CSS variables
│   │   ├── robots.ts           # Dynamic robots.txt
│   │   ├── sitemap.ts          # Dynamic XML sitemap
│   │   ├── about/              # About / personal manifesto route
│   │   ├── resume/             # Web resume view
│   │   ├── now/                # /now activity tracker
│   │   └── work/               # Expanded work & case studies archive
│   ├── components/
│   │   ├── home/               # Homepage domain sections
│   │   │   ├── HeroSection.tsx
│   │   │   ├── ProductsSection.tsx
│   │   │   ├── CaseStudiesSection.tsx
│   │   │   ├── CaseStudyModal.tsx
│   │   │   ├── TimelineSection.tsx
│   │   │   ├── CapabilitiesSection.tsx
│   │   │   └── ContactSection.tsx
│   │   ├── layout/             # Shared layout components
│   │   │   ├── Navbar.tsx      # Sticky header with responsive drawer
│   │   │   ├── Footer.tsx      # Institutional 3-column footer
│   │   │   └── PageShell.tsx   # Subpage wrapper container
│   │   └── ui/                 # Reusable design system primitives
│   │       ├── Badge.tsx       # Standard badge
│   │       ├── Button.tsx      # Solid & outline buttons
│   │       ├── Content.tsx     # Typography & content groupings
│   │       ├── SectionHeader.tsx # Swiss-grid section eyebrow & title
│   │       ├── SkipToContent.tsx # Accessibility keyboard navigation bypass
│   │       └── StatusBadge.tsx # Sanitized single-dot micro badges
│   ├── content/                # Structured data models
│   │   ├── portfolioData.ts    # Single source-of-truth for products, cases, timeline
│   │   ├── profile.ts          # Identity and biographical data
│   │   ├── projects.ts         # Project registry
│   │   └── site.ts             # Site metadata & navigation links
│   └── lib/
│       └── utils.ts            # Class merging utility (clsx + tailwind-merge)
├── test/
│   └── verify_site.mjs         # Automated end-to-end verification suite
├── DESIGN.md                   # Visual design system specifications
├── package.json                # Project dependencies and npm scripts
├── tailwind.config.ts          # Tailwind theme & design tokens
└── tsconfig.json               # TypeScript compiler configuration
```

---

## 4. Design & Engineering Standards

- **Visual Tone:** Minimalist, high-density Swiss grid inspired by Linear, Vercel, and Shadcn UI.
- **Palette:** `#FFFFFF` card surfaces, `#FAFAFA` background, `#09090B` primary text, `#71717A` muted text, `#E4E4E7` structural 1px borders, and high-contrast dark callouts (`#09090B`).
- **Widescreen Optimization:** Global container widened to `max-w-[1480px]` with `xl:px-12` to eliminate awkward side margins on 1080p and 1440p displays.
- **Micro-Badges:** Emerald (`• ACTIVE`), Amber (`• BETA`), Slate (`• ARCHIVED` / `• CASE STUDY`) with bullet sanitization preventing duplicate dots.
- **Typography:** Inter (headings & body), JetBrains Mono (section eyebrows, tech stack, and metadata).
- **Accessibility:** WCAG AAA focus rings (`outline: 2px solid #09090b`), `aria-hidden` on visual decorative glyphs, accessible CSS dots, and focus-trapped ESC-closable modals.

---

## 5. Development & Verification Commands

```bash
# Install dependencies
npm.cmd install

# Run local development server (Port 3007)
npm.cmd run dev

# Run TypeScript type check
npm.cmd run type-check

# Build optimized production bundle
npm.cmd run build

# Start production server (Port 3007)
npm.cmd start

# Run automated verification suite
npm.cmd test
```
