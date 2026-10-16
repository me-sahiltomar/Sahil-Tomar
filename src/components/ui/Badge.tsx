import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "product" | "operations" | "strategy" | "ai" | "status" | "outline";
}

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center text-xs font-medium px-2.5 py-0.5 rounded border leading-none transition-colors",
        {
          "bg-zinc-100 text-zinc-800 border-zinc-200": variant === "default",
          "bg-blue-50/80 text-blue-800 border-blue-200/70": variant === "product",
          "bg-emerald-50/80 text-emerald-800 border-emerald-200/70": variant === "operations",
          "bg-purple-50/80 text-purple-800 border-purple-200/70": variant === "strategy",
          "bg-amber-50/80 text-amber-800 border-amber-200/70": variant === "ai",
          "bg-zinc-900 text-zinc-100 border-zinc-800 font-mono text-[11px]": variant === "status",
          "bg-transparent text-zinc-600 border-zinc-200": variant === "outline",
        },
        className
      )}
      {...props}
    />
  );
}
