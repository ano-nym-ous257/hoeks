"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const roles = [
  "Cybersecurity",
  "AWS Cloud",
  "Network Engineering",
  "Software Engineering",
];

export default function RotatingRole() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % roles.length);
    }, 2600);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <span className="rotating-role">
      <AnimatePresence mode="wait">
        <motion.span
          key={roles[index]}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -18 }}
          transition={{
            duration: 0.45,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {roles[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
