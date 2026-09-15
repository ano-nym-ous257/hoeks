"use client";

import Image from "next/image";
import { createPortal } from "react-dom";
import { useEffect, useState } from "react";

interface ZoomableImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export default function ZoomableImage({
  src,
  alt,
  width,
  height,
}: ZoomableImageProps) {
  const [zoomed, setZoomed] = useState(false);

  useEffect(() => {
    if (!zoomed) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        event.stopPropagation();
        setZoomed(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown, true);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown, true);
      document.body.style.overflow = previousOverflow;
    };
  }, [zoomed]);

  const viewer =
    zoomed && typeof document !== "undefined"
      ? createPortal(
          <div
            className="project-book-image-zoom"
            role="dialog"
            aria-modal="true"
            aria-label={`Zoomed image: ${alt}`}
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) {
                setZoomed(false);
              }
            }}
          >
            <button
              type="button"
              className="project-book-image-zoom-close"
              onClick={() => setZoomed(false)}
              aria-label="Close enlarged image"
            >
              ×
            </button>

            <div className="project-book-image-zoom-image">
              <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                sizes="96vw"
                priority
              />
            </div>
          </div>,
          document.body
        )
      : null;

  return (
    <>
      <button
        type="button"
        className="project-book-image-trigger"
        onClick={() => setZoomed(true)}
        aria-label={`View larger: ${alt}`}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
        />
      </button>

      {viewer}
    </>
  );
}
