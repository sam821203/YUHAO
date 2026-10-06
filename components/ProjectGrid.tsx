"use client";

import { useCallback, useState } from "react";
import { categories, projects, type Category, type Project } from "@/lib/content";
import { ProjectCard } from "./ProjectCard";
import { Lightbox } from "./Lightbox";
import { Reveal } from "./Reveal";

export function ProjectGrid() {
  const [filter, setFilter] = useState<"all" | Category>("all");
  const [preview, setPreview] = useState<Project | null>(null);
  const closePreview = useCallback(() => setPreview(null), []);

  const shown = projects.filter((p) => filter === "all" || p.category === filter);

  return (
    <>
      <div className="mb-8 flex flex-wrap gap-2" role="tablist">
        {categories.map((c) => (
          <button
            key={c.key}
            type="button"
            role="tab"
            aria-selected={filter === c.key}
            onClick={() => setFilter(c.key)}
            className={`rounded-full border px-4 py-1.5 text-sm transition-all ${
              filter === c.key ? "border-primary bg-primary text-primary-foreground" : "hover:border-primary hover:text-primary"
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((p, i) => (
          <Reveal key={`${filter}-${p.title}`} delay={(i % 3) * 80} className="h-full">
            <ProjectCard p={p} onPreview={setPreview} />
          </Reveal>
        ))}
      </div>
      {preview && <Lightbox project={preview} onClose={closePreview} />}
    </>
  );
}
