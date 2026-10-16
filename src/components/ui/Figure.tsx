import React from "react";

interface FigureProps {
  children: React.ReactNode;
  caption: string;
  number?: string;
  source?: string;
  className?: string;
}

export function Figure({ children, caption, number, source, className = "" }: FigureProps) {
  return (
    <figure className={`flex flex-col gap-3 ${className}`}>
      <div className="figure-frame overflow-hidden">
        {children}
      </div>
      <figcaption className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 px-1">
        <div>
          {number && (
            <span className="text-evidence text-meta text-ink-muted uppercase mr-2">
              FIG. {number}
            </span>
          )}
          <span className="font-sans text-body-sm text-ink-secondary">
            {caption}
          </span>
        </div>
        {source && (
          <span className="text-evidence text-meta text-ink-faint uppercase sm:ml-auto">
            {source}
          </span>
        )}
      </figcaption>
    </figure>
  );
}

interface EvidenceTextProps {
  content: string;
}

export function EvidenceText({ content }: EvidenceTextProps) {
  return (
    <div className="p-6 bg-paper-recessed font-mono text-sm text-ink-secondary leading-relaxed overflow-x-auto whitespace-pre-wrap">
      {content}
    </div>
  );
}
