"use client";

import { useState } from "react";
import { categories, projects, type Category } from "@/lib/content";
import { ProjectCard } from "./ProjectCard";
import { Reveal } from "./Reveal";

export function ProjectGrid() {
  const [filter, setFilter] = useState<"all" | Category>("all");

  const matches = projects.filter((p) => filter === "all" || p.category === filter);
  const featured = matches.filter((p) => p.featured);
  const rest = matches.filter((p) => !p.featured);

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
      {featured.length > 0 && (
        <>
          <p className="mb-4 font-mono text-xs uppercase tracking-wider text-accent">★ 置頂</p>
          <div className={`mb-12 grid gap-6 ${featured.length % 3 !== 0 && featured.length % 2 === 0 ? "md:grid-cols-2" : "md:grid-cols-3"}`}>
            {featured.map((p, i) => (
              <Reveal key={`${filter}-${p.slug}`} delay={i * 80} className="h-full">
                <ProjectCard p={p} large />
              </Reveal>
            ))}
          </div>
        </>
      )}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {rest.map((p, i) => (
          <Reveal key={`${filter}-${p.slug}`} delay={(i % 3) * 80} className="h-full">
            <ProjectCard p={p} />
          </Reveal>
        ))}
      </div>
    </>
  );
}
