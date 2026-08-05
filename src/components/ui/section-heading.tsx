import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  number: string;
  label: string;
  overline?: string;
  title: string;
  accent?: string;
  className?: string;
}

export function SectionHeading({
  number,
  label,
  overline,
  title,
  accent,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("design-section-heading", className)}>
      <span className="design-section-number" aria-hidden="true">
        {number}
      </span>

      <div className="design-section-label">
        <span>{label}</span>
        <span className="design-section-line" aria-hidden="true" />
      </div>

      <div className="design-section-copy">
        {overline ? (
          <p className="design-section-overline">{overline}</p>
        ) : null}

        <h2 className="design-section-title">
          {title}
          {accent ? <span> {accent}</span> : null}
        </h2>
      </div>
    </div>
  );
}
