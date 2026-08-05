"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";

const shapes = [
  {
    className: "scene-shape scene-square scene-square-one",
    duration: 16,
    delay: 0,
    x: [0, 34, -12, 0],
    y: [0, -24, 18, 0],
    rotate: [0, 8, -5, 0],
  },
  {
    className: "scene-shape scene-square scene-square-two",
    duration: 20,
    delay: 1.5,
    x: [0, -28, 15, 0],
    y: [0, 30, -12, 0],
    rotate: [0, -7, 6, 0],
  },
  {
    className: "scene-shape scene-block scene-block-one",
    duration: 18,
    delay: 0.8,
    x: [0, 22, -18, 0],
    y: [0, 26, -20, 0],
    rotate: [0, 4, -3, 0],
  },
  {
    className: "scene-shape scene-block scene-block-two",
    duration: 22,
    delay: 2,
    x: [0, -20, 26, 0],
    y: [0, -16, 25, 0],
    rotate: [0, -4, 5, 0],
  },
  {
    className: "scene-shape scene-line scene-line-one",
    duration: 19,
    delay: 1,
    x: [0, 35, 8, 0],
    y: [0, 15, -18, 0],
    rotate: [18, 23, 14, 18],
  },
  {
    className: "scene-shape scene-line scene-line-two",
    duration: 24,
    delay: 0.5,
    x: [0, -24, 14, 0],
    y: [0, -30, 18, 0],
    rotate: [-24, -18, -29, -24],
  },
];

export default function BackgroundEffects() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();

  const gridY = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const wordX = useTransform(scrollYProgress, [0, 1], [0, -140]);

  return (
    <div className="scene-background" aria-hidden="true">
      <motion.div
        className="scene-grid"
        style={reduceMotion ? undefined : { y: gridY }}
      />

      <motion.div
        className="scene-outline-word"
        style={reduceMotion ? undefined : { x: wordX }}
      >
        SYSTEMS
      </motion.div>

      <div className="scene-cross scene-cross-one">
        <span />
        <span />
      </div>

      <div className="scene-cross scene-cross-two">
        <span />
        <span />
      </div>

      {shapes.map((shape) => (
        <motion.span
          key={shape.className}
          className={shape.className}
          animate={
            reduceMotion
              ? undefined
              : {
                  x: shape.x,
                  y: shape.y,
                  rotate: shape.rotate,
                }
          }
          transition={{
            duration: shape.duration,
            delay: shape.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="scene-noise" />
      <div className="scene-vignette" />
    </div>
  );
}
