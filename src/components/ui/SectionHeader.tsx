import * as React from "react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow: string;
  heading: string;
  description?: string;
  className?: string;
}

export function SectionHeader({
  eyebrow,
  heading,
  description,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn("space-y-2 mb-8 sm:mb-12", className)}>
      <div className="tracking-widest text-xs font-mono uppercase text-zinc-500 font-medium">
        {eyebrow}
      </div>
      <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold tracking-tight text-[#09090B] leading-tight">
        {heading}
      </h2>
      {description && (
        <p className="text-sm sm:text-base text-[#71717A] max-w-2xl leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
