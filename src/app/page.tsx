import * as React from "react";
import { HeroSection } from "@/components/home/HeroSection";
import { ProductsSection } from "@/components/home/ProductsSection";
import { CaseStudiesSection } from "@/components/home/CaseStudiesSection";
import { TimelineSection } from "@/components/home/TimelineSection";
import { CapabilitiesSection } from "@/components/home/CapabilitiesSection";
import { ContactSection } from "@/components/home/ContactSection";

export const revalidate = 3600;

export default function HomePage() {
  return (
    <div className="flex flex-col w-full bg-[#FAFAFA]">
      {/* 01 — Hero Section */}
      <HeroSection />

      {/* 02 — Section 01: Shipped Software & Operational Systems */}
      <ProductsSection />

      {/* 03 — Section 02: Venture Forensics & Strategy Case Studies */}
      <CaseStudiesSection />

      {/* 04 — Section 03: Full Experience & Venture Timeline */}
      <TimelineSection />

      {/* 05 — Section 04: Operating Capabilities & Credentials */}
      <CapabilitiesSection />

      {/* 06 — Section: Dual-Track High-Contrast Dark Engagement */}
      <ContactSection />
    </div>
  );
}
