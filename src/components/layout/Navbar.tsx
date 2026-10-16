"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X, ExternalLink, FileText, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

const NAV_LINKS = [
  { href: "#products", label: "Products" },
  { href: "#case-studies", label: "Case Studies" },
  { href: "#timeline", label: "Timeline" },
  { href: "#capabilities", label: "Capabilities" },
  {
    href: "https://productstudio.cevonx.com",
    label: "CevonX Studio ↗",
    isExternal: true,
  },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#E4E4E7] bg-white/95 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Left: Brand Monogram & Title */}
          <div className="flex items-center">
            <Link
              href="/"
              className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 rounded-sm"
              aria-label="Sahil Tomar Executive Portfolio"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-md bg-[#09090B] text-xs font-bold font-mono text-white shadow-xs group-hover:bg-zinc-800 transition-colors">
                S
              </span>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-2">
                <span className="font-bold text-[#09090B] text-sm sm:text-base tracking-tight leading-tight">
                  Sahil Tomar
                </span>
                <span className="tracking-widest text-[10px] sm:text-[11px] font-mono uppercase text-zinc-500 font-medium">
                  OPERATOR &amp; BUILDER
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Center/Right Navigation */}
          <div className="hidden lg:flex items-center space-x-7">
            <nav className="flex items-center space-x-6" aria-label="Main Navigation">
              {NAV_LINKS.map((link) => {
                if (link.isExternal) {
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm font-medium text-zinc-600 hover:text-[#09090B] transition-colors"
                    >
                      <span>{link.label.replace(" ↗", "")}</span>
                      <ExternalLink className="h-3 w-3 text-zinc-400" aria-hidden="true" />
                    </a>
                  );
                }

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-sm font-medium text-zinc-600 hover:text-[#09090B] transition-colors"
                  >
                    {link.label}
                  </a>
                );
              })}
            </nav>

            <div className="h-4 w-px bg-[#E4E4E7]" />

            {/* Desktop CTAs */}
            <div className="flex items-center gap-2.5">
              <Button
                href="/Sahil_Tomar_Resume.pdf"
                variant="outline"
                size="sm"
                isExternal
                className="gap-1.5 text-xs text-zinc-700 hover:text-[#09090B]"
              >
                <FileText className="h-3.5 w-3.5 text-zinc-500" />
                <span>Download Resume</span>
                <ExternalLink className="h-3 w-3 text-zinc-400" />
              </Button>

              <Button
                href="#contact"
                variant="primary"
                size="sm"
                className="text-xs"
              >
                <span>Work With Me</span>
              </Button>
            </div>
          </div>

          {/* Medium Screens (Tablet) CTAs & Mobile Button */}
          <div className="flex lg:hidden items-center gap-2">
            <Button
              href="/Sahil_Tomar_Resume.pdf"
              variant="outline"
              size="sm"
              isExternal
              className="hidden sm:inline-flex text-xs h-8 px-2.5 gap-1 text-zinc-700"
            >
              <span>Resume</span>
              <ExternalLink className="h-3 w-3 text-zinc-400" />
            </Button>
            <Button
              href="#contact"
              variant="primary"
              size="sm"
              className="hidden sm:inline-flex text-xs h-8 px-2.5"
            >
              <span>Work With Me</span>
            </Button>

            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-zinc-700 hover:bg-zinc-100 hover:text-zinc-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900"
              aria-controls="mobile-menu"
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Toggle navigation menu</span>
              {mobileMenuOpen ? (
                <X className="block h-5 w-5" aria-hidden="true" />
              ) : (
                <Menu className="block h-5 w-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden border-b border-[#E4E4E7] bg-white shadow-md animate-in slide-in-from-top-2 duration-150"
          id="mobile-menu"
        >
          <div className="space-y-1 px-4 pt-3 pb-6">
            <nav className="space-y-1">
              {NAV_LINKS.map((link) => {
                if (link.isExternal) {
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between px-3 py-2.5 text-sm font-medium text-zinc-700 hover:bg-zinc-50 hover:text-[#09090B] rounded-md transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span>{link.label.replace(" ↗", "")}</span>
                      <ExternalLink className="h-4 w-4 text-zinc-400" aria-hidden="true" />
                    </a>
                  );
                }

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    className="block px-3 py-2.5 text-sm font-medium text-zinc-700 hover:bg-zinc-50 hover:text-[#09090B] rounded-md transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                );
              })}
            </nav>

            <div className="pt-4 mt-3 border-t border-[#E4E4E7] space-y-2">
              <Button
                href="/Sahil_Tomar_Resume.pdf"
                variant="outline"
                size="md"
                isExternal
                className="w-full justify-center gap-1.5 text-sm"
              >
                <FileText className="h-4 w-4 text-zinc-500" />
                <span>Download Resume ↗</span>
              </Button>
              <Button
                href="#contact"
                variant="primary"
                size="md"
                className="w-full justify-center text-sm gap-1.5"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>Work With Me</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
