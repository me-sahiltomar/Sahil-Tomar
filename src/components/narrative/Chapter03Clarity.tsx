"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { narrativeContent } from "@/content/narrative";

export function Chapter03Clarity() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 60, damping: 20 });
  const { headline, steps } = narrativeContent.chapter3;

  const sectionOpacity = useTransform(smoothProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);

  return (
    <motion.section 
      ref={containerRef}
      className="relative min-h-[400vh] w-full bg-sand text-ink"
      style={{ opacity: sectionOpacity }}
    >
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden px-6">
        
        <motion.div 
          className="absolute top-16 md:top-24 text-center max-w-2xl px-6"
          style={{ opacity: useTransform(smoothProgress, [0.05, 0.15], [0, 1]) }}
        >
          <h2 className="text-xl md:text-2xl font-serif text-ink tracking-tight">
            {headline}
          </h2>
        </motion.div>

        <div className="relative w-full max-w-3xl mx-auto flex flex-col items-center justify-center gap-4 mt-20">
          {steps.map((step, index) => {
            const isFirst = index === 0;
            const isLast = index === steps.length - 1;
            
            // Staggered entrance
            const startReveal = 0.1 + (index * 0.08);
            const fullReveal = startReveal + 0.1;

            // eslint-disable-next-line react-hooks/rules-of-hooks
            const opacity = useTransform(smoothProgress, [startReveal, fullReveal], [0, 1]);
            
            // X-axis convergence (starts scattered, converges to center at 0.5)
            const randomXOffset = (index % 2 === 0 ? -60 : 60) * (index + 1);
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const x = useTransform(smoothProgress, [startReveal, 0.55], [isFirst || isLast ? 0 : randomXOffset, 0]);
            
            // Final compression (at 0.6 to 0.8, all intermediate steps fade out, last step scales up)
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const finalOpacity = useTransform(smoothProgress, [0.65, 0.75], [1, isLast ? 1 : 0.1]);
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const finalScale = useTransform(smoothProgress, [0.65, 0.75], [1, isLast ? 1.2 : 0.9]);
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const finalY = useTransform(smoothProgress, [0.65, 0.75], [0, isLast ? - (index * 30) : 0]);

            // Combine opacity
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const combinedOpacity = useTransform(smoothProgress, (v) => {
              if (v < 0.65) return opacity.get();
              return finalOpacity.get();
            });

            return (
              <motion.div
                key={index}
                className={`w-full max-w-sm text-center py-4 px-6 rounded-md font-medium tracking-wide transition-colors ${
                  isFirst ? "bg-transparent text-ink-muted font-mono text-[10px] uppercase tracking-widest border border-dashed border-borderMedium" : 
                  isLast ? "bg-accent-clarity text-white font-serif text-2xl md:text-3xl shadow-lg" : 
                  "bg-paper border border-borderSoft text-ink-light shadow-sm"
                }`}
                style={{ opacity: combinedOpacity, x, scale: finalScale, y: finalY }}
              >
                {step}
              </motion.div>
            );
          })}

          {/* Central Connecting Line that grows as they align */}
          <motion.div 
            className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-borderMedium -z-10 -translate-x-1/2"
            style={{ 
              scaleY: useTransform(smoothProgress, [0.4, 0.6], [0, 1]),
              opacity: useTransform(smoothProgress, [0.65, 0.75], [1, 0])
            }}
          />
        </div>

      </div>
    </motion.section>
  );
}
