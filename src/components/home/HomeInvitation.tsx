import { ArrowRight, ArrowUpRight } from "lucide-react";
import { contactData } from "@/content/site";
import { ContentBlock } from "@/components/ui/Content";
import { siteContainerClassName } from "@/components/layout/PageShell";

export function HomeInvitation() {
  return (
    <section aria-labelledby="invitation" className="relative w-full border-t border-rule bg-ink text-paper">
      <div className={`${siteContainerClassName} py-12 md:py-14 lg:py-16`}>
        <ContentBlock className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          {/* Left: Heading */}
          <div className="lg:col-span-4">
            <p className="text-evidence text-xs text-paper-muted uppercase tracking-widest mb-1">Get in touch</p>
          </div>

          {/* Right: Content */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <h2 id="invitation" className="font-serif text-heading-xl text-paper tracking-tight leading-tight mb-4 max-w-[24ch]">
              Have a problem worth figuring out?
            </h2>
            <p className="font-sans text-body-md text-paper-muted max-w-[56ch] leading-relaxed mb-7">
              I'm open to thoughtful opportunities in Founder’s Office, Product, Operations, and Strategy.
            </p>
            
            <div className="flex flex-wrap items-center gap-5">
              <a
                href={`mailto:${contactData.email}`}
                className="group inline-flex min-h-11 items-center gap-2 rounded-md bg-paper-raised text-ink px-6 text-sm font-sans font-medium hover:bg-paper-recessed transition-colors duration-150"
              >
                Email
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href={contactData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex min-h-11 items-center gap-2 rounded-sm text-paper text-sm font-sans font-medium border-b border-rule-dark hover:text-white hover:border-paper transition-colors duration-150"
              >
                LinkedIn
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </ContentBlock>
      </div>
    </section>
  );
}
