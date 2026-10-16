"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { narrativeContent } from "@/content/narrative";
import { ArrowRight } from "lucide-react";

export function Chapter06Pattern() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 60, damping: 20 });
  const { phrases, pattern } = narrativeContent.chapter6;
  const sectionOpacity = useTransform(smoothProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);

  return (
    <motion.section 
      ref={containerRef}
      className="relative min-h-[300vh] w-full bg-sand text-ink"
      style={{ opacity: sectionOpacity }}
    >
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden px-6">
        
        {/* Phrases */}
        <div className="text-center space-y-4 mb-24 max-w-3xl">
          {phrases.map((phrase, index) => {
            const start = 0.1 + (index * 0.1);
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const opacity = useTransform(smoothProgress, [start, start + 0.1], [0, 1]);
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const y = useTransform(smoothProgress, [start, start + 0.1], [10, 0]);
            
            return (
              <motion.h3 
                key={index}
                className={`text-3xl md:text-5xl font-serif tracking-tight leading-tight ${index === phrases.length - 1 ? "text-accent-insight mt-8" : "text-ink-muted"}`}
                style={{ opacity, y }}
              >
                {phrase}
              </motion.h3>
            );
          })}
        </div>

        {/* Pattern Ribbon */}
        <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
          {pattern.map((step, index) => {
            const start = 0.5 + (index * 0.08);
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const opacity = useTransform(smoothProgress, [start, start + 0.05], [0, 1]);
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const y = useTransform(smoothProgress, [start, start + 0.05], [20, 0]);
            
            return (
              <React.Fragment key={index}>
                <motion.div 
                  className="px-6 py-4 rounded bg-paper border border-borderMedium text-ink-light font-mono text-sm uppercase tracking-widest font-semibold shadow-sm relative overflow-hidden"
                  style={{ opacity, y }}
                >
                  <span className="relative z-10">{step}</span>
                  <div className="absolute inset-0 bg-accent-signal/5" />
                </motion.div>
                {index < pattern.length - 1 && (
                  <motion.div 
                    className="text-borderMedium hidden md:block"
                    style={{ opacity: useTransform(smoothProgress, [start + 0.05, start + 0.1], [0, 1]) }}
                  >
                    <ArrowRight className="w-5 h-5" strokeWidth={1.5} />
                  </motion.div>
                )}
              </React.Fragment>
            );
          })}
        </div>

      </div>
    </motion.section>
  );
}
