import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { aboutProfile } from "@/content/site";
import { ContentBlock } from "@/components/ui/Content";
import { siteContainerClassName } from "@/components/layout/PageShell";

export function HomeAboutPreview() {
  return (
    <section aria-labelledby="about-preview" className="relative w-full border-t border-rule bg-paper">
      <div className={`${siteContainerClassName} py-section-home`}>
        <ContentBlock className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          {/* Left: Heading */}
          <div className="lg:col-span-4">
            <h2 id="about-preview" className="text-evidence text-xs text-ink-muted uppercase tracking-widest mb-6">
              About.
            </h2>
          </div>

          {/* Right: Content */}
          <div className="lg:col-span-6 space-y-5">
            {aboutProfile.homepagePreview.map((paragraph, i) => (
              <p key={i} className="font-sans text-body-lg text-ink-secondary leading-relaxed max-w-[62ch]">
                {paragraph}
              </p>
            ))}

            <div className="pt-8">
              <Link
                href="/about"
                className="group inline-flex min-h-11 items-center gap-2 rounded-sm text-sm font-sans font-medium text-ink border-b border-rule hover:border-ink transition-colors duration-150"
              >
                About Sahil <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </ContentBlock>
      </div>
    </section>
  );
}
