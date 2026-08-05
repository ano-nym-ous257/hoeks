"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ParallaxTextProps {
  children: ReactNode;
  className?: string;
  distance?: number;
}

export default function ParallaxText({
  children,
  className,
  distance = 55,
}: ParallaxTextProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [-distance, distance],
  );

  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      style={{ y }}
      aria-hidden="true"
    >
      {children}
    </motion.div>
  );
}
