"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import type { Project } from "@/lib/content";

export function Lightbox({ project, onClose }: { project: Project; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = overflow;
      document.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <div role="dialog" aria-modal="true" aria-label={project.title} className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-10">
      <div className="animate-in fade-in absolute inset-0 bg-background/85 backdrop-blur-sm duration-300" onClick={onClose} />
      <button
        ref={closeRef}
        type="button"
        onClick={onClose}
        aria-label="關閉"
        className="absolute top-4 right-4 z-10 rounded-lg border bg-card p-2 transition-colors hover:border-primary hover:text-primary"
      >
        <X className="size-5" />
      </button>
      <Image
        src={project.image.src}
        alt={project.title}
        width={project.image.width}
        height={project.image.height}
        sizes="90vw"
        className="animate-in fade-in zoom-in-95 relative max-h-[85vh] w-auto max-w-full rounded-xl border object-contain shadow-2xl duration-300"
      />
    </div>
  );
}
