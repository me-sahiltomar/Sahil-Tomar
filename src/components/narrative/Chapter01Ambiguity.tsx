"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { narrativeContent } from "@/content/narrative";

export function Chapter01Ambiguity() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 50, damping: 20 });
  const { phrases } = narrativeContent.chapter1;

  // The section fades out at the very end to transition to Chapter 02
  const opacity = useTransform(smoothProgress, [0.85, 1], [1, 0]);

  // Generate some abstract signal nodes
  const nodes = Array.from({ length: 12 }).map((_, i) => ({
    x: (Math.random() * 80) + 10, // 10% to 90%
    y: (Math.random() * 80) + 10,
    delay: Math.random() * 0.2,
    type: i % 3 === 0 ? 'text' : 'dot',
    label: ['latency', 'churn', 'cac', 'reqs'][i % 4]
  }));

  return (
    <motion.section 
      ref={containerRef}
      className="relative min-h-[300vh] w-full bg-sand"
      style={{ opacity }}
    >
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        
        {/* Background Ambiguity System */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
           {nodes.map((node, i) => {
             // eslint-disable-next-line react-hooks/rules-of-hooks
             const yMove = useTransform(smoothProgress, [0, 1], [0, (i % 2 === 0 ? -100 : 100)]);
             // eslint-disable-next-line react-hooks/rules-of-hooks
             const scale = useTransform(smoothProgress, [0, 0.5], [1, 0.5]);
             // eslint-disable-next-line react-hooks/rules-of-hooks
             const nodeOpacity = useTransform(smoothProgress, [0, 0.6, 0.8], [0.3, 0.8, 0]);

             return (
               <motion.div
                 key={i}
                 className="absolute flex items-center gap-2"
                 style={{ 
                   left: `${node.x}%`, 
                   top: `${node.y}%`, 
                   y: yMove,
                   scale,
                   opacity: nodeOpacity 
                 }}
               >
                 {node.type === 'dot' ? (
                   <div className="w-1.5 h-1.5 rounded-full bg-accent-signal" />
                 ) : (
                   <span className="font-mono text-[10px] uppercase tracking-widest text-accent-insight">
                     {node.label}
                   </span>
                 )}
               </motion.div>
             )
           })}
        </div>

        {/* Phrases Sequence */}
        <div className="relative z-10 w-full max-w-4xl px-6 text-center h-32 flex items-center justify-center">
          {phrases.map((phrase, index) => {
            const isFirst = index === 0;
            const isLast = index === phrases.length - 1;
            
            const segment = 0.85 / phrases.length;
            const start = index * segment;
            const fullyVisible = isFirst ? 0 : start + (segment * 0.15);
            const startFadeOut = start + (segment * 0.85);
            const end = start + segment;

            // eslint-disable-next-line react-hooks/rules-of-hooks
            const phraseOpacity = useTransform(
              smoothProgress,
              [start, fullyVisible, startFadeOut, end],
              [isFirst ? 1 : 0, 1, 1, isLast ? 1 : 0]
            );

            // eslint-disable-next-line react-hooks/rules-of-hooks
            const y = useTransform(
              smoothProgress,
              [start, fullyVisible, startFadeOut, end],
              [isFirst ? 0 : 40, 0, 0, -40]
            );
            
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const blur = useTransform(
              smoothProgress,
              [start, fullyVisible],
              [isFirst ? "blur(0px)" : "blur(12px)", "blur(0px)"]
            );

            return (
              <motion.div
                key={index}
                className="absolute w-full"
                style={{ opacity: phraseOpacity, y, filter: blur }}
              >
                <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-ink tracking-tight leading-tight mix-blend-multiply">
                  {phrase}
                </h2>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
