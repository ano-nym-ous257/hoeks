import type { CSSProperties } from "react";

const shapes = [
  {
    className:
      "scene-shape scene-square scene-square-one scene-float-a",
    duration: "16s",
    delay: "0s",
  },
  {
    className:
      "scene-shape scene-square scene-square-two scene-float-b",
    duration: "20s",
    delay: "1.5s",
  },
  {
    className:
      "scene-shape scene-block scene-block-one scene-float-c",
    duration: "18s",
    delay: "0.8s",
  },
  {
    className:
      "scene-shape scene-block scene-block-two scene-float-a",
    duration: "22s",
    delay: "2s",
  },
  {
    className:
      "scene-shape scene-line scene-line-one scene-float-b",
    duration: "19s",
    delay: "1s",
  },
  {
    className:
      "scene-shape scene-line scene-line-two scene-float-c",
    duration: "24s",
    delay: "0.5s",
  },
];

export default function BackgroundEffects() {
  return (
    <div className="background-scene" aria-hidden="true">
      <div className="scene-grid" />

      <div className="scene-outline-word">
        SYSTEMS
      </div>

      <div className="scene-cross scene-cross-one">
        <span />
        <span />
      </div>

      <div className="scene-cross scene-cross-two">
        <span />
        <span />
      </div>

      {shapes.map((shape) => (
        <span
          key={shape.className}
          className={shape.className}
          style={
            {
              "--scene-duration": shape.duration,
              "--scene-delay": shape.delay,
            } as CSSProperties
          }
        />
      ))}

      <div className="scene-noise" />
      <div className="scene-vignette" />
    </div>
  );
}
