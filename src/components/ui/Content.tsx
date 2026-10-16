import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ContentBlockProps {
  children?: ReactNode;
  className?: string;
  as?: "div" | "section";
  "aria-labelledby"?: string;
}

interface ContentGroupProps {
  children?: ReactNode;
  className?: string;
}

export function ContentBlock({
  children,
  className,
  as: Element = "div",
  "aria-labelledby": ariaLabelledBy,
}: ContentBlockProps) {
  return (
    <Element className={className} aria-labelledby={ariaLabelledBy}>
      {children}
    </Element>
  );
}

export function ContentGroup({ children, className }: ContentGroupProps) {
  return <div className={className}>{children}</div>;
}

export function Rule({ className }: { className?: string }) {
  return <div aria-hidden="true" className={cn("h-px bg-rule", className)} />;
}
