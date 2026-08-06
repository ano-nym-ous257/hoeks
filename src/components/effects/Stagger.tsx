"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface StaggerGroupProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  stagger?: number;
}

interface StaggerItemProps {
  children: ReactNode;
  className?: string;
}

export function StaggerGroup({
  children,
  className,
  delay = 0,
  stagger = 0.12,
}: StaggerGroupProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: false,
        amount: 0.1,
        margin: "-5% 0px -5% 0px",
      }}
      variants={{
        hidden: {
          transition: {
            staggerChildren: 0.06,
            staggerDirection: -1,
          },
        },
        visible: {
          transition: {
            delayChildren: delay,
            staggerChildren: stagger,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: StaggerItemProps) {
  return (
    <motion.div
      className={cn(className)}
      variants={{
        hidden: {
          opacity: 0,
          y: 38,
          scale: 0.988,
          filter: "blur(3px)",
          transition: {
            duration: 0.35,
            ease: "easeOut",
          },
        },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          transition: {
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
