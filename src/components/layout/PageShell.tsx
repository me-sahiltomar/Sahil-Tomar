import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export const siteContainerClassName =
  "mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10 xl:px-12";

export function PageShell({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("bg-paper pb-20 sm:pb-24", className)}>
      <div className={cn(siteContainerClassName, "pt-12 sm:pt-16 lg:pt-20")}>
        {children}
      </div>
    </div>
  );
}

export function PageHeader({
  title,
  description,
  eyebrow,
  aside,
}: {
  title: string;
  description?: string;
  eyebrow?: ReactNode;
  aside?: ReactNode;
}) {
  return (
    <header
      className={cn(
        "grid grid-cols-1 gap-8 border-b border-rule-strong pb-8 mb-12 sm:pb-10 sm:mb-14 lg:gap-12",
        aside && "lg:grid-cols-12 lg:items-end",
      )}
    >
      <div className={cn(aside && "lg:col-span-7")}>
        {eyebrow && (
          <div className="mb-4 text-evidence text-meta text-ink-muted uppercase">
            {eyebrow}
          </div>
        )}
        <h1 className="font-serif text-display-xl text-ink tracking-tighter leading-[0.98]">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-reading font-sans text-body-lg text-ink-secondary leading-relaxed">
            {description}
          </p>
        )}
      </div>
      {aside && <aside className="lg:col-span-4 lg:col-start-9">{aside}</aside>}
    </header>
  );
}
