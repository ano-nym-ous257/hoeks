import type { CSSProperties, ReactNode } from "react";
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
  index?: number;
}

export function StaggerGroup({
  children,
  className,
  delay = 0,
  stagger = 0.12,
}: StaggerGroupProps) {
  return (
    <div
      className={cn("css-stagger-group", className)}
      style={
        {
          "--stagger-delay": `${delay}s`,
          "--stagger-step": `${stagger}s`,
        } as CSSProperties
      }
    >
      {children}
    </div>
  );
}

export function StaggerItem({
  children,
  className,
  index = 0,
}: StaggerItemProps) {
  return (
    <div
      className={cn("css-stagger-item", className)}
      style={
        {
          "--stagger-index": index,
        } as CSSProperties
      }
    >
      {children}
    </div>
  );
}
