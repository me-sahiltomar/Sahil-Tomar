import React from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { profile } from "@/content/profile";

export function Chapter09Invitation() {
  return (
    <section className="relative w-full bg-sand py-24 px-6 sm:px-10 lg:px-14 xl:px-16 pb-40">
      <div className="max-w-6xl mx-auto">
        <div className="bg-ink text-paper rounded p-10 sm:p-14 lg:p-20 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12 shadow-sm border border-ink-light">
          <div className="space-y-6 max-w-2xl">
            <p className="text-[10px] font-mono uppercase tracking-widest text-borderMedium font-semibold">
              The Invitation
            </p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif tracking-tight text-paper leading-tight">
              Ready to create clarity?
            </h2>
            <p className="text-lg md:text-xl text-borderSoft leading-relaxed max-w-xl font-serif">
              Whether you are a founder looking for an operator, a product leader seeking problem discovery, or you just want to talk strategy — let’s connect.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full lg:w-auto">
            <Link href="/contact" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto bg-paper text-ink hover:bg-borderSoft rounded font-sans uppercase tracking-widest text-xs px-8 h-14">
                <span>Send a Message</span>
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button size="lg" className="w-full sm:w-auto border border-borderMedium text-paper bg-transparent hover:bg-ink-light rounded font-sans uppercase tracking-widest text-xs px-8 h-14">
                <span>LinkedIn</span>
                <ArrowUpRight className="h-4 w-4 ml-2" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
