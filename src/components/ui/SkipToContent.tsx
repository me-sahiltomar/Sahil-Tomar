import React from "react";

export function SkipToContent() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2.5 focus:bg-[#09090B] focus:text-white focus:rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:ring-offset-2 text-xs font-semibold select-none shadow-md"
    >
      Skip to main content
    </a>
  );
}
