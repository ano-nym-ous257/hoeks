import type { CSSProperties, ReactNode } from "react";
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
  return (
    <div
      className={cn("css-parallax-text", className)}
      style={
        {
          "--parallax-distance": `${distance}px`,
        } as CSSProperties
      }
      aria-hidden="true"
    >
      {children}
    </div>
  );
}
