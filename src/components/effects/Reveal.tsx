"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  distance?: number;
}

export default function Reveal({
  children,
  delay = 0,
  className,
  distance = 34,
}: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: distance }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{
        duration: 0.75,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
