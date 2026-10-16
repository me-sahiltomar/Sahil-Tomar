"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { narrativeContent } from "@/content/narrative";

export function Chapter02Problem() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 60, damping: 20 });
  const { headline, situation, initialAssumption, evidence, betterQuestion } = narrativeContent.chapter2;

  const sectionOpacity = useTransform(smoothProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);

  // Progressive disclosure triggers
  const showHeadline = useTransform(smoothProgress, [0.05, 0.15], [0, 1]);
  
  const showSituation = useTransform(smoothProgress, [0.15, 0.25], [0, 1]);
  const showAssumption = useTransform(smoothProgress, [0.25, 0.35], [0, 1]);
  
  // Evidence appears sequentially and moves into frame
  const showEv1 = useTransform(smoothProgress, [0.4, 0.45], [0, 1]);
  const yEv1 = useTransform(smoothProgress, [0.4, 0.45], [20, 0]);
  
  const showEv2 = useTransform(smoothProgress, [0.45, 0.5], [0, 1]);
  const yEv2 = useTransform(smoothProgress, [0.45, 0.5], [20, 0]);
  
  const showEv3 = useTransform(smoothProgress, [0.5, 0.55], [0, 1]);
  const yEv3 = useTransform(smoothProgress, [0.5, 0.55], [20, 0]);

  // Assumption fades out as evidence arrives
  const assumptionOpacity = useTransform(smoothProgress, [0.45, 0.6], [1, 0.2]);
  const assumptionStrike = useTransform(smoothProgress, [0.55, 0.65], ["0%", "100%"]);

  // Better question emerges
  const showBetterQuestion = useTransform(smoothProgress, [0.7, 0.8], [0, 1]);
  const betterQuestionScale = useTransform(smoothProgress, [0.7, 0.8], [0.95, 1]);
  const betterQuestionY = useTransform(smoothProgress, [0.7, 0.8], [30, 0]);

  return (
    <motion.section 
      ref={containerRef}
      className="relative min-h-[400vh] w-full bg-sand"
      style={{ opacity: sectionOpacity }}
    >
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden px-6">
        
        {/* Headline */}
        <motion.div 
          style={{ opacity: showHeadline }}
          className="absolute top-16 md:top-24 text-center w-full max-w-2xl px-6"
        >
          <h2 className="text-sm md:text-base font-mono uppercase tracking-widest text-accent-signal">
            {headline}
          </h2>
        </motion.div>

        <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
          
          {/* Left: The Mess */}
          <div className="space-y-12">
            <motion.div style={{ opacity: showSituation }}>
              <p className="text-[10px] font-mono uppercase tracking-widest text-ink-muted mb-3 border-b border-borderMedium pb-2">Situation</p>
              <div className="text-2xl md:text-3xl font-serif text-ink tracking-tight">
                {situation}
              </div>
            </motion.div>

            <motion.div style={{ opacity: showAssumption }} className="relative">
              <p className="text-[10px] font-mono uppercase tracking-widest text-ink-muted mb-3 border-b border-borderMedium pb-2">Immediate Reaction</p>
              <motion.div 
                style={{ opacity: assumptionOpacity }}
                className="text-xl md:text-2xl font-serif text-ink-light tracking-tight relative inline-block w-full"
              >
                {initialAssumption}
                {/* Strikethrough line */}
                <motion.div 
                  className="absolute left-0 top-1/2 h-[2px] bg-accent-action origin-left"
                  style={{ width: assumptionStrike, marginTop: "-1px" }}
                />
              </motion.div>
            </motion.div>
          </div>

          {/* Right: The Clarity */}
          <div className="space-y-10">
            <div className="space-y-5">
              <motion.div style={{ opacity: showEv1, y: yEv1 }}>
                <p className="text-sm md:text-base text-ink-light bg-paper p-4 border border-borderSoft rounded shadow-sm relative">
                   <span className="absolute -left-2 -top-2 bg-accent-signal text-white text-[9px] font-mono px-2 py-0.5 rounded-sm">DATA</span>
                  {evidence[0]}
                </p>
              </motion.div>
              <motion.div style={{ opacity: showEv2, y: yEv2 }}>
                <p className="text-sm md:text-base text-ink-light bg-paper p-4 border border-borderSoft rounded shadow-sm relative">
                  <span className="absolute -left-2 -top-2 bg-accent-signal text-white text-[9px] font-mono px-2 py-0.5 rounded-sm">BEHAVIOR</span>
                  {evidence[1]}
                </p>
              </motion.div>
              <motion.div style={{ opacity: showEv3, y: yEv3 }}>
                <p className="text-sm md:text-base text-ink-light bg-paper p-4 border border-borderSoft rounded shadow-sm relative">
                  <span className="absolute -left-2 -top-2 bg-accent-signal text-white text-[9px] font-mono px-2 py-0.5 rounded-sm">SUPPORT</span>
                  {evidence[2]}
                </p>
              </motion.div>
            </div>

            <motion.div 
              style={{ opacity: showBetterQuestion, scale: betterQuestionScale, y: betterQuestionY }}
              className="pt-12"
            >
              <p className="text-[10px] font-mono uppercase tracking-widest text-accent-insight font-semibold mb-3">Reframed Question</p>
              <div className="text-3xl md:text-5xl font-serif text-ink tracking-tight leading-tight">
                {betterQuestion}
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </motion.section>
  );
}
