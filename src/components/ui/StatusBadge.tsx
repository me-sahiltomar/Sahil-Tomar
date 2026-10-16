import * as React from "react";
import { cn } from "@/lib/utils";

export type BadgeVariant =
  | "emerald"
  | "amber"
  | "slate"
  | "active"
  | "beta"
  | "archived"
  | "case-study";

interface StatusBadgeProps {
  variant?: BadgeVariant;
  label?: string;
  showDot?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export function StatusBadge({
  variant = "slate",
  label,
  showDot = true,
  className,
  children,
}: StatusBadgeProps) {
  const getStyles = () => {
    switch (variant) {
      case "emerald":
      case "active":
        return {
          container: "bg-[#ECFDF5] text-[#059669] border-[#A7F3D0]",
          dot: "bg-[#059669]",
        };
      case "amber":
      case "beta":
        return {
          container: "bg-[#FFFBEB] text-[#D97706] border-[#FDE68A]",
          dot: "bg-[#D97706]",
        };
      case "slate":
      case "archived":
      case "case-study":
      default:
        return {
          container: "bg-[#F4F4F5] text-[#52525B] border-[#E4E4E7]",
          dot: "bg-[#71717A]",
        };
    }
  };

  const styles = getStyles();

  // Sanitize label or string children to strip leading bullet/dot characters
  const rawText = typeof children === "string" ? children : label || "";
  const sanitizedText = rawText ? rawText.replace(/^[•·\s]+/, "").trim() : children;

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border text-[11px] font-mono font-medium uppercase tracking-wider select-none shrink-0 transition-colors whitespace-nowrap",
        styles.container,
        className
      )}
    >
      {showDot && (
        <span
          className={cn("h-1.5 w-1.5 rounded-full shrink-0", styles.dot)}
          aria-hidden="true"
        />
      )}
      <span>{sanitizedText}</span>
    </span>
  );
}
