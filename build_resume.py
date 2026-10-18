import os
import subprocess
from pathlib import Path
import pypdf

HTML_TEMPLATE = """<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Sahil Tomar - Resume</title>
<style>
  @page {
    size: A4 portrait;
    margin: 0;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    color: #18181b;
    background-color: #ffffff;
    line-height: 1.36;
    font-size: 9.1pt;
    width: 210mm;
    min-height: 297mm;
    max-height: 297mm;
    padding: 10mm 13.5mm 8mm 13.5mm;
    overflow: hidden;
  }
  a {
    color: #18181b;
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }

  /* Header */
  .header {
    border-bottom: 2px solid #09090b;
    padding-bottom: 6px;
    margin-bottom: 8px;
  }
  .header-top {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }
  .name {
    font-size: 21.5pt;
    font-weight: 800;
    letter-spacing: -0.035em;
    color: #09090b;
    text-transform: uppercase;
    line-height: 1;
  }
  .target-title {
    font-size: 8.7pt;
    font-weight: 700;
    color: #27272a;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    margin-top: 1px;
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  }
  .contact-strip {
    display: flex;
    flex-wrap: wrap;
    gap: 3px 10px;
    font-size: 8.1pt;
    color: #52525b;
    margin-top: 5px;
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  }
  .contact-strip span {
    display: inline-flex;
    align-items: center;
  }
  .contact-strip a {
    color: #09090b;
    font-weight: 600;
  }
  .sep {
    color: #a1a1aa;
    user-select: none;
  }

  /* Section Styling */
  .section {
    margin-bottom: 7.5px;
  }
  .section-title {
    font-size: 8.4pt;
    font-weight: 800;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #09090b;
    border-bottom: 1px solid #d4d4d8;
    padding-bottom: 2.5px;
    margin-bottom: 5px;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }
  .section-tag {
    font-size: 7.0pt;
    font-weight: 600;
    color: #52525b;
    letter-spacing: 0.04em;
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  }

  /* Summary */
  .summary-text {
    font-size: 8.35pt;
    color: #3f3f46;
    line-height: 1.38;
    text-align: justify;
  }

  /* Experience Entry */
  .exp-item {
    margin-bottom: 5.5px;
  }
  .exp-item:last-child {
    margin-bottom: 0;
  }
  .item-header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    font-size: 8.8pt;
  }
  .item-title-row {
    font-weight: 700;
    color: #09090b;
  }
  .item-role {
    font-weight: 700;
    color: #09090b;
  }
  .item-company {
    font-weight: 600;
    color: #27272a;
  }
  .item-meta {
    font-size: 7.6pt;
    color: #52525b;
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
    font-weight: 600;
    white-space: nowrap;
  }
  .sub-bullet-group {
    margin-top: 1.5px;
    padding-left: 12px;
  }
  .bullet {
    font-size: 8.1pt;
    color: #3f3f46;
    line-height: 1.33;
    position: relative;
    margin-bottom: 1.5px;
    list-style-type: disc;
  }
  .bullet strong {
    color: #09090b;
    font-weight: 600;
  }

  /* Projects Grid */
  .projects-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 4px;
  }
  .project-card {
    background: #fafafa;
    border: 1px solid #e4e4e7;
    border-left: 3px solid #09090b;
    padding: 3.5px 8px;
  }
  .project-header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    font-size: 8.4pt;
  }
  .project-name {
    font-weight: 700;
    color: #09090b;
  }
  .project-links {
    font-size: 7.4pt;
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
    color: #52525b;
  }
  .project-links a {
    color: #09090b;
    font-weight: 600;
  }
  .project-desc {
    font-size: 7.8pt;
    color: #3f3f46;
    line-height: 1.31;
    margin-top: 1px;
  }
  .project-tech {
    font-size: 7.0pt;
    color: #52525b;
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
    margin-top: 1px;
  }

  /* Skills Matrix */
  .skills-matrix {
    font-size: 8.05pt;
    line-height: 1.36;
    color: #3f3f46;
  }
  .skill-row {
    margin-bottom: 2px;
  }
  .skill-label {
    font-weight: 700;
    color: #09090b;
    display: inline-block;
    min-width: 154px;
  }

  /* Education & Credentials */
  .edu-cred-grid {
    display: grid;
    grid-template-columns: 1.1fr 0.9fr;
    gap: 14px;
  }
  .edu-item, .cred-item {
    font-size: 8.05pt;
    line-height: 1.33;
  }
  .edu-degree {
    font-weight: 700;
    color: #09090b;
  }
  .edu-school {
    color: #52525b;
    font-size: 7.65pt;
  }
  .edu-year {
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
    font-size: 7.35pt;
    color: #52525b;
    float: right;
  }
</style>
</head>
<body>

  <!-- HEADER -->
  <header class="header">
    <div class="header-top">
      <h1 class="name">Sahil Tomar</h1>
      <div class="target-title">Founder’s Office · Strategy & Ops · AI Product Builder</div>
    </div>
    <div class="contact-strip">
      <span>Delhi NCR, India</span>
      <span class="sep">·</span>
      <span>+91 9050977919</span>
      <span class="sep">·</span>
      <span><a href="mailto:sahiltomar2430@gmail.com">sahiltomar2430@gmail.com</a></span>
      <span class="sep">·</span>
      <span><a href="https://sahiltomar.pro">sahiltomar.pro</a></span>
      <span class="sep">·</span>
      <span><a href="https://www.linkedin.com/in/me-sahiltomar/">linkedin.com/in/me-sahiltomar</a></span>
      <span class="sep">·</span>
      <span><a href="https://github.com/me-sahiltomar">github.com/me-sahiltomar</a></span>
      <span class="sep">·</span>
      <span><a href="https://cal.com/me-sahiltomar">cal.com/me-sahiltomar</a></span>
    </div>
  </header>

  <!-- EXECUTIVE PROFILE -->
  <section class="section">
    <div class="section-title">
      <span>Executive Summary</span>
      <span class="section-tag">AVAILABLE IMMEDIATELY · FULL-TIME (DELHI NCR / REMOTE)</span>
    </div>
    <p class="summary-text">
      Computer Science graduate (2026) and startup generalist operating across strategy, operational design, and applied AI systems. Founder of <strong>CevonX</strong> (applied software studio) and Co-founder of <strong>FinStation</strong> (financial intelligence venture). Experienced leading 12-member cross-functional teams, executing enterprise root cause analysis across 9 departments, conducting regulatory compliance audits, and shipping full-stack AI applications with deterministic validation. Available immediately for full-time Founder's Office or Operations Lead roles.
    </p>
  </section>

  <!-- PROFESSIONAL EXPERIENCE -->
  <section class="section">
    <div class="section-title">
      <span>Operational & Founder Experience</span>
      <span class="section-tag">VENTURE BUILDING · CROSS-FUNCTIONAL EXECUTION</span>
    </div>

    <!-- CevonX -->
    <div class="exp-item">
      <div class="item-header">
        <div class="item-title-row">
          <span class="item-role">Founder & Product Builder</span> | <span class="item-company">CevonX (cevonx.com)</span>
        </div>
        <div class="item-meta">Sept 2026 – Present | Delhi NCR</div>
      </div>
      <ul class="sub-bullet-group">
        <li class="bullet"><strong>Venture Architecture:</strong> Designed two-engine company model uniting an owned software product studio (3 live products) with a commercial AI solutions layer, operating under rapid 7-day build sprints and strict proof-of-work governance.</li>
        <li class="bullet"><strong>Software Delivery:</strong> Built and shipped 3 production platforms: <em>LedgerLens</em> (AI vision document validation), <em>ProductScout</em> (market signal intelligence), and <em>PrioX</em> (founder priority inbox) using Next.js 14, FastAPI, Supabase, and Gemini APIs.</li>
        <li class="bullet"><strong>Systems Infrastructure:</strong> Architected unified Supabase (PostgreSQL 17.6) database with strict multi-tenant Row-Level Security, schema namespaces, and Dockerized microservices with Prometheus metrics and Grafana observability.</li>
      </ul>
    </div>

    <!-- FinStation -->
    <div class="exp-item">
      <div class="item-header">
        <div class="item-title-row">
          <span class="item-role">Co-Founder</span> | <span class="item-company">FinStation — AI Financial Intelligence</span>
        </div>
        <div class="item-meta">Jun 2026 – Oct 2026 | Delhi NCR</div>
      </div>
      <ul class="sub-bullet-group">
        <li class="bullet"><strong>0-to-1 Venture Direction:</strong> Structured product requirements, financial API integration feasibility, and unit economics; onboarded and governed a <strong>~35-user controlled beta cohort</strong> with staged retention checkpoints.</li>
        <li class="bullet"><strong>Recruitment & Evaluations:</strong> Screened and interviewed <strong>15–20+ candidates</strong> using practical trial assignments; authored candidate evaluation rubrics, task briefs, and onboarding workflows for intern hires.</li>
        <li class="bullet"><strong>Regulatory Forensics:</strong> Executed compliance boundary audit under SEBI (RA/IA) regulations; proactively paused commercial licensing to prevent statutory liability and preserve runway for non-advisory workflow software.</li>
      </ul>
    </div>

    <!-- Excelerate -->
    <div class="exp-item">
      <div class="item-header">
        <div class="item-title-row">
          <span class="item-role">Team Lead (Project Management & Operations Sprints)</span> | <span class="item-company">Excelerate</span>
        </div>
        <div class="item-meta">Jun 2026 – Oct 2026 | Remote (Cross-Border)</div>
      </div>
      <ul class="sub-bullet-group">
        <li class="bullet"><strong>ProjectUp (12-Member Lead):</strong> Diagnosed software adoption failure across <strong>150 employees and 9 departments</strong>. Delivered Root Cause Analysis (Ishikawa/5-Whys), risk register, and a 3-week pilot (10–15 users) with quantitative Go/No-Go exit gates.</li>
        <li class="bullet"><strong>AI Connect 2026 (Programme Delivery):</strong> Engineered a 5-month Work Breakdown Structure (140+ work packages), critical path matrix, and an activity-based <strong>$20,000 budget model</strong> for a 10-day global virtual summit.</li>
        <li class="bullet"><strong>Pepagora B2B Marketplace:</strong> Benchmarked onboarding across IndiaMART, Alibaba, and TradeIndia; designed a tiered verification model balancing regulatory compliance with low supplier drop-off.</li>
      </ul>
    </div>

    <!-- CountryEdu -->
    <div class="exp-item">
      <div class="item-header">
        <div class="item-title-row">
          <span class="item-role">Business Analyst Intern</span> | <span class="item-company">CountryEdu Private Limited</span>
        </div>
        <div class="item-meta">Oct 2025 – Dec 2025 | Gurugram</div>
      </div>
      <ul class="sub-bullet-group">
        <li class="bullet">Analyzed business workflows and operational bottlenecks; authored functional requirement documents (FRDs) connecting commercial objectives directly to software engineering sprints.</li>
      </ul>
    </div>
  </section>

  <!-- SHIPPED SOFTWARE & SYSTEMS -->
  <section class="section">
    <div class="section-title">
      <span>Shipped Software & Applied AI Systems</span>
      <span class="section-tag">PRODUCTION PROOF-OF-WORK</span>
    </div>
    <div class="projects-grid">
      <div class="project-card">
        <div class="project-header">
          <span class="project-name">LedgerLens — AI Vision Financial Document Intelligence</span>
          <span class="project-links"><a href="https://ledgerlens.cevonx.com">ledgerlens.cevonx.com</a> · <a href="https://github.com/me-sahiltomar/LedgerLens">GitHub ↗</a></span>
        </div>
        <p class="project-desc">Document validation platform extracting and cross-verifying financial records from receipts/invoices. Built with FastAPI (Python 3.11), Next.js 14 App Router, dynamic Pydantic v2 schemas, multi-provider vision (OpenAI, Gemini, Groq), Docker, and Prometheus/Grafana.</p>
        <div class="project-tech">Tech: FastAPI · Python 3.11 · Next.js 14 · Pydantic v2 · Multi-Provider Vision · Docker · Prometheus · Supabase</div>
      </div>
      <div class="project-card">
        <div class="project-header">
          <span class="project-name">ProductScout — Market Opportunity & Signal Intelligence Engine</span>
          <span class="project-links"><a href="https://productscout.cevonx.com">productscout.cevonx.com</a></span>
        </div>
        <p class="project-desc">Evidence-first research system harvesting developer discussions into a structured 20-field opportunity model separating direct user proof from AI inference. Built with Next.js 14, Supabase (PostgreSQL 17.6 + RLS), and Gemini/OpenAI pipelines.</p>
        <div class="project-tech">Tech: Next.js 14 · Supabase (PostgreSQL 17.6 + RLS) · Server Actions · OpenAI & Gemini APIs · Tailwind CSS</div>
      </div>
      <div class="project-card">
        <div class="project-header">
          <span class="project-name">PrioX — Founder Operational Decision & Signal Triage Inbox</span>
          <span class="project-links"><a href="https://priox.cevonx.com">priox.cevonx.com</a></span>
        </div>
        <p class="project-desc">Founder decision-support system analyzing inbound startup signals across customer risk, sales blockers, and product friction via a 4-stage pipeline (Understand → Detect → Prioritize → Recommend) with pre-loaded demo scenarios.</p>
        <div class="project-tech">Tech: Next.js 14 App Router · TypeScript · Google Gemini API (Serverless) · Tailwind CSS</div>
      </div>
    </div>
  </section>

  <!-- SKILLS & COMPETENCIES -->
  <section class="section">
    <div class="section-title">
      <span>Core Skills & Tooling</span>
      <span class="section-tag">OPERATIONAL & TECHNICAL ARSENAL</span>
    </div>
    <div class="skills-matrix">
      <div class="skill-row">
        <span class="skill-label">Founder’s Office & Ops:</span>
        Cross-Functional Execution, Root Cause Analysis (RCA/5-Whys), Workflow Mapping, Pilot Design & Go/No-Go Gates, Risk Registers, Work Breakdown Structure (WBS), Stakeholder Management, Candidate Hiring Rubrics.
      </div>
      <div class="skill-row">
        <span class="skill-label">Product & Strategy:</span>
        Problem Discovery, PRD Authoring, Competitor Benchmarking, User Journey Mapping, Controlled Beta Governance, Unit Economics, GTM Sprints, Pricing Analysis, Qualitative & Quantitative User Research.
      </div>
      <div class="skill-row">
        <span class="skill-label">AI & Software Engineering:</span>
        Python, FastAPI, Next.js 14/15, TypeScript, PostgreSQL, Supabase (RLS), Pydantic v2, REST APIs, Docker, Prometheus & Grafana, n8n Automation, Multimodal Vision, LLM Hot-Swapping, Git/GitHub.
      </div>
    </div>
  </section>

  <!-- EDUCATION & CREDENTIALS -->
  <section class="section" style="margin-bottom:0;">
    <div class="section-title">
      <span>Education & Verified Credentials</span>
      <span class="section-tag">ACADEMIC & PROFESSIONAL RECOGNITION</span>
    </div>
    <div class="edu-cred-grid">
      <div class="edu-item">
        <span class="edu-year">2022 – 2026</span>
        <div class="edu-degree">B.Tech, Computer Science & Engineering</div>
        <div class="edu-school">DCRUST (Deenbandhu Chhotu Ram University of Science and Technology)</div>
        <div style="margin-top: 3px;">
          <span class="edu-year">2025 – 2026</span>
          <div class="edu-degree">AI Engineering (New Age Tools & Tech)</div>
          <div class="edu-school">iHUB DivyaSampark, IIT Roorkee</div>
        </div>
      </div>
      <div class="cred-item">
        <div style="font-weight: 700; color: #09090b; margin-bottom: 2px;">Verified Certifications:</div>
        <div style="color: #3f3f46; font-size: 7.3pt; line-height: 1.35;">
          • IBM Generative AI Engineering Specialization<br>
          • Google Data Analytics Professional Certificate<br>
          • McKinsey Forward Program (Leadership & Strategy)<br>
          • Product Discovery Certification (Pendo.io)<br>
          • Quantium Data Analytics Job Simulation
        </div>
      </div>
    </div>
  </section>

</body>
</html>
"""

def main():
    workspace = Path(__file__).parent
    html_path = workspace / "Sahil_Tomar_Resume.html"
    pdf_path = workspace / "public" / "Sahil_Tomar_Resume.pdf"
    preview_img = workspace / "public" / "Sahil_Tomar_Resume_Preview.png"

    html_path.write_text(HTML_TEMPLATE, encoding="utf-8")
    print(f"Wrote HTML template to {html_path}")

    chrome_path = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
    if not os.path.exists(chrome_path):
        chrome_path = r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"

    print(f"Using browser at: {chrome_path}")

    # Generate PDF
    cmd_pdf = [
        chrome_path,
        "--headless=new",
        "--disable-gpu",
        "--no-pdf-header-footer",
        f"--print-to-pdf={pdf_path.resolve()}",
        str(html_path.resolve()),
    ]
    subprocess.run(cmd_pdf, check=True)
    print(f"Generated PDF at {pdf_path}")

    # Generate Preview Screenshot
    cmd_img = [
        chrome_path,
        "--headless=new",
        "--disable-gpu",
        "--window-size=1240,1754",
        f"--screenshot={preview_img.resolve()}",
        str(html_path.resolve()),
    ]
    subprocess.run(cmd_img, check=True)
    print(f"Generated Preview image at {preview_img}")

    # Verify Page Count
    reader = pypdf.PdfReader(str(pdf_path))
    num_pages = len(reader.pages)
    print(f"Verified PDF Page Count: {num_pages}")
    assert num_pages == 1, f"Expected 1 page, got {num_pages} pages!"

if __name__ == "__main__":
    main()
