"use client";

import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  X,
} from "lucide-react";
import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

export interface ProjectBookChapter {
  id: string;
  label: string;
  title: string;
  eyebrow?: string;
  content: React.ReactNode;
}

export interface ProjectBookProject {
  title: string;
  category: string;
  description: string;
  tags: string[];
  href?: string;
  chapters: ProjectBookChapter[];
}

interface ProjectBookProps {
  project: ProjectBookProject;
  open: boolean;
  onClose: () => void;
}

type TurnDirection = "next" | "previous" | null;

interface BookPageData {
  id: string;
  kind: "cover" | "inside" | "chapter" | "back";
  label: string;
  title: string;
  eyebrow?: string;
  content: React.ReactNode;
}

export default function ProjectBook({
  project,
  open,
  onClose,
}: ProjectBookProps) {
  const [spread, setSpread] = useState(0);
  const [turning, setTurning] = useState<TurnDirection>(null);
  const [turningSpread, setTurningSpread] = useState<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const pages = useMemo<BookPageData[]>(() => {
    const chapterPages: BookPageData[] = project.chapters.map((chapter) => ({
      id: chapter.id,
      kind: "chapter",
      label: chapter.label,
      title: chapter.title,
      eyebrow: chapter.eyebrow,
      content: chapter.content,
    }));

    return [
      {
        id: "cover",
        kind: "cover",
        label: "Project",
        title: project.title,
        eyebrow: "GAMEFREAK / PROJECT ARCHIVE",
        content: (
          <>
            <p>{project.description}</p>

            <div className="project-book-tags">
              {project.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </>
        ),
      },
      {
        id: "inside-cover",
        kind: "inside",
        label: "Archive",
        title: "Project notes",
        eyebrow: project.category,
        content: (
          <p>
            A documented record of the ideas, systems and engineering
            decisions behind this project.
          </p>
        ),
      },
      ...chapterPages,
      {
        id: "back-cover",
        kind: "back",
        label: "Archive",
        title: "End of case study",
        eyebrow: "GAMEFREAK / PROJECT ARCHIVE",
        content: (
          <p>
            The case study ends here. The source repository contains the
            project and its implementation details.
          </p>
        ),
      },
    ];
  }, [project]);

  const totalSpreads = Math.ceil(pages.length / 2);
  const currentLeftIndex = spread * 2;
  const currentRightIndex = currentLeftIndex + 1;

  const currentLeft = pages[currentLeftIndex];
  const currentRight = pages[currentRightIndex];

  const nextSpread = Math.min(spread + 1, totalSpreads - 1);
  const previousSpread = Math.max(spread - 1, 0);

  const turningLeftIndex =
    turningSpread !== null ? turningSpread * 2 : currentLeftIndex;

  const turningRightIndex = turningLeftIndex + 1;

  const turningLeft = pages[turningLeftIndex];
  const turningRight = pages[turningRightIndex];

  const turningNextLeft =
    pages[
      (turningSpread !== null ? turningSpread + 1 : nextSpread) * 2
    ];

  const turningPreviousRight =
    pages[
      (turningSpread !== null ? turningSpread - 1 : previousSpread) * 2 + 1
    ];

  const displayLeft =
    turning === "next"
      ? pages[(turningSpread ?? spread) * 2]
      : turning === "previous"
        ? pages[previousSpread * 2]
        : currentLeft;

  const displayRight =
    turning === "next"
      ? pages[(turningSpread ?? spread) * 2 + 3]
      : turning === "previous"
        ? pages[(turningSpread ?? spread) * 2 + 1]
        : currentRight;


  const goNext = useCallback(() => {
    if (turning || spread >= totalSpreads - 1) return;

    setTurningSpread(spread);
    setTurning("next");
    setSpread((current) => Math.min(current + 1, totalSpreads - 1));

    window.setTimeout(() => {
      setTurning(null);
      setTurningSpread(null);
    }, 760);
  }, [spread, totalSpreads, turning]);

  const goPrevious = useCallback(() => {
    if (turning || spread <= 0) return;

    setTurningSpread(spread);
    setTurning("previous");
    setSpread((current) => Math.max(current - 1, 0));

    window.setTimeout(() => {
      setTurning(null);
      setTurningSpread(null);
    }, 760);
  }, [spread, turning]);

  const handleClose = useCallback(() => {
    if (turning) return;
    setSpread(0);
    onClose();
  }, [onClose, turning]);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusTimer = window.setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 50);

    return () => {
      window.clearTimeout(focusTimer);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        handleClose();
        return;
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        goNext();
        return;
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        goPrevious();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, handleClose, goNext, goPrevious]);

  if (!open || !currentLeft) return null;

  const bookClassName = [
    "project-book",
    turning ? `is-turning-${turning}` : "",
    spread === 0 ? "is-first-page" : "",
    spread === totalSpreads - 1 ? "is-last-page" : "",
  ]
    .filter(Boolean)
    .join(" ");

  const displayPageNumber = Math.min(currentLeftIndex + 1, pages.length);

  return (
    <div
      className="project-book-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-book-title"
    >
      <button
        className="project-book-backdrop"
        aria-label="Close project case study"
        onClick={handleClose}
      />

      <div className="project-book-shell">
        <header className="project-book-header">
          <div className="project-book-header-meta">
            <span>CASE STUDY</span>
            <span>
              {String(displayPageNumber).padStart(2, "0")} /{" "}
              {String(pages.length).padStart(2, "0")}
            </span>
          </div>

          <button
            ref={closeButtonRef}
            className="project-book-close"
            onClick={handleClose}
            aria-label="Close case study"
          >
            <X size={18} />
            <span>Close</span>
          </button>
        </header>

        <div className="project-book-stage">
          <div className="project-book-shadow" aria-hidden="true" />

          <div className={bookClassName}>
            <div className="project-book-binding">
              <span />
            </div>

            <div className="project-book-left-page">
              <div className="project-book-page-paper">
                <BookPage
                  page={displayLeft}
                  projectTitle={project.title}
                  pageNumber={currentLeftIndex + 1}
                  side="left"
                  titleId="project-book-title"
                />
              </div>
            </div>

            <div className="project-book-right-page">
              <div className="project-book-page-paper">
                {displayRight ? (
                  <BookPage
                    page={displayRight}
                    projectTitle={project.title}
                    pageNumber={
                      turning === "next"
                        ? currentRightIndex + 3
                        : turning === "previous"
                          ? currentRightIndex + 1
                          : currentRightIndex + 1
                    }
                    side="right"
                  />
                ) : (
                  <EmptyBookPage side="right" />
                )}
              </div>
            </div>

            <div className="project-book-turn-layer" aria-hidden="true">
              <div className="project-book-turn-front">
                {turning === "next" ? (
                  <BookPage
                    page={turningRight ?? turningLeft}
                    projectTitle={project.title}
                    pageNumber={turningRightIndex + 1}
                    side="right"
                  />
                ) : (
                  <BookPage
                    page={turningLeft}
                    projectTitle={project.title}
                    pageNumber={turningLeftIndex + 1}
                    side="left"
                  />
                )}
              </div>

              <div className="project-book-turn-back">
                {turning === "next" ? (
                  <BookPage
                    page={turningNextLeft}
                    projectTitle={project.title}
                    pageNumber={
                      turningSpread !== null
                        ? (turningSpread + 1) * 2 + 1
                        : nextSpread * 2 + 1
                    }
                    side="left"
                  />
                ) : (
                  <BookPage
                    page={turningPreviousRight ?? turningLeft}
                    projectTitle={project.title}
                    pageNumber={
                      turningSpread !== null && turningSpread > 0
                        ? (turningSpread - 1) * 2 + 2
                        : previousSpread * 2 + 2
                    }
                    side="right"
                  />
                )}
              </div>
            </div>

            <div className="project-book-page-stack" aria-hidden="true">
              <span />
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>

        <footer className="project-book-controls">
          <div className="project-book-progress">
            <div className="project-book-progress-track">
              <span
                style={{
                  width: `${((spread + 1) / totalSpreads) * 100}%`,
                }}
              />
            </div>

            <span>
              {currentRight?.label ?? currentLeft.label}
            </span>
          </div>

          <div className="project-book-navigation">
            <button
              onClick={goPrevious}
              disabled={spread === 0 || Boolean(turning)}
              aria-label="Previous spread"
            >
              <ArrowLeft size={17} />
              <span>Previous</span>
            </button>

            <button
              onClick={goNext}
              disabled={
                spread === totalSpreads - 1 || Boolean(turning)
              }
              aria-label="Next spread"
            >
              <span>Next</span>
              <ArrowRight size={17} />
            </button>
          </div>
        </footer>

        {project.href && (
          <a
            className="project-book-source"
            href={project.href}
            target="_blank"
            rel="noreferrer"
          >
            View source
            <ExternalLink size={14} />
          </a>
        )}
      </div>
    </div>
  );
}

interface BookPageProps {
  page: BookPageData;
  projectTitle: string;
  pageNumber: number;
  side: "left" | "right";
  titleId?: string;
}

function BookPage({
  page,
  projectTitle,
  pageNumber,
  side,
  titleId,
}: BookPageProps) {
  return (
    <article
      className={`project-book-page project-book-page-${side} project-book-page-${page.kind}`}
    >
      <div className="project-book-page-header">
        <span>{page.label}</span>
        <span>{String(pageNumber).padStart(2, "0")}</span>
      </div>

      <div className="project-book-page-content">
        {page.eyebrow && (
          <p className="project-book-eyebrow">{page.eyebrow}</p>
        )}

        <h2 id={titleId}>{page.title}</h2>

        <div className="project-book-page-body">
          {page.content}
        </div>
      </div>

      <div className="project-book-page-footer">
        <span>{projectTitle}</span>
        <span>{String(pageNumber).padStart(2, "0")}</span>
      </div>
    </article>
  );
}

function EmptyBookPage({ side }: { side: "left" | "right" }) {
  return (
    <article className={`project-book-page project-book-page-${side}`}>
      <div className="project-book-page-content project-book-empty-page">
        <span />
      </div>
    </article>
  );
}
