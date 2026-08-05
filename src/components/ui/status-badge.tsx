import { cn } from "@/lib/utils";

type StatusTone = "online" | "warning" | "neutral";

interface StatusBadgeProps {
  children: React.ReactNode;
  tone?: StatusTone;
  className?: string;
}

export function StatusBadge({
  children,
  tone = "online",
  className,
}: StatusBadgeProps) {
  return (
    <span
      className={cn(
        "status-badge",
        `status-badge-${tone}`,
        className
      )}
    >
      <span className="status-badge-dot" aria-hidden="true" />
      {children}
    </span>
  );
}
