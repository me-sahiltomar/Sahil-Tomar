"use client";

import React from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

interface MotionProps {
  children?: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  once?: boolean;
  as?: "div" | "section";
  "aria-labelledby"?: string;
}

export function Reveal({ children, className = "", delay = 0, duration = 0.5, once = true, as = "div", "aria-labelledby": ariaLabelledby }: MotionProps) {
  const shouldReduceMotion = useReducedMotion();
  const MotionComponent = as === "section" ? motion.section : motion.div;
  
  return (
    <MotionComponent
      className={className}
      aria-labelledby={ariaLabelledby}
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-50px" }}
      transition={{ duration: shouldReduceMotion ? 0.1 : duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </MotionComponent>
  );
}

export function Fade({ children, className = "", delay = 0, duration = 0.5, once = true }: MotionProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once, margin: "-50px" }}
      transition={{ duration: shouldReduceMotion ? 0.1 : duration, delay, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}

export function Slide({ children, className = "", delay = 0, duration = 0.5, once = true, direction = "up" }: MotionProps & { direction?: "up" | "down" | "left" | "right" }) {
  const shouldReduceMotion = useReducedMotion();
  
  const getInitial = () => {
    if (shouldReduceMotion) return { opacity: 0, x: 0, y: 0 };
    switch (direction) {
      case "up": return { opacity: 0, y: 24 };
      case "down": return { opacity: 0, y: -24 };
      case "left": return { opacity: 0, x: 24 };
      case "right": return { opacity: 0, x: -24 };
    }
  };

  return (
    <motion.div
      className={className}
      initial={getInitial()}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, margin: "-50px" }}
      transition={{ duration: shouldReduceMotion ? 0.1 : duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function DrawRule({ className = "", delay = 0, duration = 0.8, once = true }: MotionProps) {
  const shouldReduceMotion = useReducedMotion();
  
  return (
    <motion.div
      className={`h-px bg-rule ${className}`}
      initial={{ scaleX: 0, opacity: 0 }}
      whileInView={{ scaleX: 1, opacity: 1 }}
      viewport={{ once, margin: "-50px" }}
      transition={{ duration: shouldReduceMotion ? 0.1 : duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
      style={{ originX: 0 }}
    />
  );
}

export function StaggerGroup({ children, className = "", delay = 0, staggerDelay = 0.1, once = true }: MotionProps & { staggerDelay?: number }) {
  const shouldReduceMotion = useReducedMotion();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : staggerDelay,
        delayChildren: delay,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 12 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once, margin: "-50px" }}
    >
      {React.Children.map(children, (child) => (
        <motion.div variants={item}>{child}</motion.div>
      ))}
    </motion.div>
  );
}
