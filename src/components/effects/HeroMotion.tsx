"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

interface HeroMotionProps {
  children: ReactNode;
  className?: string;
  variant: "content" | "terminal" | "footer";
}

const viewport = {
  once: false,
  amount: 0.28,
  margin: "-8% 0px -8% 0px",
};

export default function HeroMotion({
  children,
  className,
  variant,
}: HeroMotionProps) {
  if (variant === "content") {
    return (
      <motion.div
        className={className}
        initial={{
          opacity: 0,
          x: -42,
          filter: "blur(4px)",
        }}
        whileInView={{
          opacity: 1,
          x: 0,
          filter: "blur(0px)",
        }}
        viewport={viewport}
        transition={{
          duration: 1.05,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {children}
      </motion.div>
    );
  }

  if (variant === "terminal") {
    return (
      <motion.div
        className={className}
        initial={{
          opacity: 0,
          x: 46,
          scale: 0.975,
          filter: "blur(4px)",
        }}
        whileInView={{
          opacity: 1,
          x: 0,
          scale: 1,
          filter: "blur(0px)",
        }}
        viewport={viewport}
        transition={{
          duration: 1.1,
          delay: 0.12,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        y: 18,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: false,
        amount: 0.3,
      }}
      transition={{
        duration: 0.85,
        delay: 0.28,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
