import React from "react";
import Link from "next/link";
import { profile } from "@/content/profile";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function Chapter07Meet() {
  return (
    <section className="relative w-full bg-sand py-40 px-6 sm:px-10 lg:px-14 xl:px-16 border-t border-borderSoft">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        <div>
          <p className="text-[10px] font-mono uppercase tracking-widest text-accent-insight font-semibold mb-6">
            The Person
          </p>
          <h2 className="text-6xl sm:text-7xl lg:text-9xl font-serif tracking-tighter text-ink mb-8 leading-none">
            Sahil Tomar
          </h2>
          <p className="text-lg md:text-2xl font-serif text-ink-light mb-8 max-w-3xl mx-auto leading-relaxed">
            {profile.positioningStatement}
          </p>
          <p className="text-sm font-mono text-ink-muted uppercase tracking-widest">
            {profile.headline}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 pt-12">
          <Link href="/about">
            <Button size="lg" className="bg-ink hover:bg-ink-light text-white rounded font-sans px-8 tracking-wide">
              <span>Full Profile</span>
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </Link>
          <Link href="/resume">
            <Button size="lg" className="bg-paper border border-borderMedium text-ink hover:bg-borderSoft rounded font-sans px-8 tracking-wide">
              <span>Executive Resume</span>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
