"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { narrativeContent } from "@/content/narrative";
import { ArrowDown } from "lucide-react";

export function Chapter04Action() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 60, damping: 20 });
  const { headline, subHeadline, transformation } = narrativeContent.chapter4;

  const sectionOpacity = useTransform(smoothProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);

  return (
    <motion.section 
      ref={containerRef}
      className="relative min-h-[400vh] w-full bg-sand"
      style={{ opacity: sectionOpacity }}
    >
      <div className="sticky top-0 h-screen w-full flex flex-col md:flex-row items-center justify-center overflow-hidden px-6 gap-12 md:gap-24">
        
        {/* Headlines */}
        <div className="max-w-md w-full text-center md:text-left space-y-6">
          <motion.h2 
            className="text-2xl md:text-4xl font-serif text-ink-muted tracking-tight leading-tight"
            style={{ opacity: useTransform(smoothProgress, [0.05, 0.15], [0, 1]) }}
          >
            {headline}
          </motion.h2>
          <motion.h2 
            className="text-3xl md:text-5xl font-serif text-ink tracking-tight leading-tight"
            style={{ opacity: useTransform(smoothProgress, [0.15, 0.25], [0, 1]) }}
          >
            {subHeadline}
          </motion.h2>
        </div>

        {/* Transformation Pipeline */}
        <div className="w-full max-w-sm">
          <div className="relative flex flex-col items-stretch space-y-1">
            {transformation.map((step, index) => {
              const start = 0.25 + (index * 0.1);
              const end = start + 0.1;
              const isLast = index === transformation.length - 1;
              
              // eslint-disable-next-line react-hooks/rules-of-hooks
              const opacity = useTransform(smoothProgress, [start, end], [0, 1]);
              // eslint-disable-next-line react-hooks/rules-of-hooks
              const x = useTransform(smoothProgress, [start, end], [30, 0]);
              // eslint-disable-next-line react-hooks/rules-of-hooks
              const width = useTransform(smoothProgress, [start, end], ["80%", "100%"]);

              return (
                <motion.div 
                  key={index}
                  className={`py-3 px-6 rounded text-sm tracking-wide shadow-sm flex items-center justify-between overflow-hidden relative ${
                    isLast ? "bg-ink text-white font-bold" : "bg-paper border border-borderSoft text-ink font-medium"
                  }`}
                  style={{ opacity, x, width }}
                >
                  <span className="relative z-10">{step}</span>
                  {isLast && (
                    <motion.div 
                      className="absolute inset-0 bg-accent-insight/20"
                      initial={{ scaleX: 0, transformOrigin: "left" }}
                      style={{ scaleX: useTransform(smoothProgress, [end, end + 0.1], [0, 1]) }}
                    />
                  )}
                  {!isLast && (
                    <span className="text-[10px] font-mono text-ink-muted uppercase">0{index + 1}</span>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </motion.section>
  );
}
