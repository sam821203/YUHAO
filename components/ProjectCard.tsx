import Image from "next/image";
import { ArrowUpRight, Expand } from "lucide-react";
import type { Project } from "@/lib/content";
import { GithubIcon } from "./GithubIcon";

const categoryLabel = { works: "Works", sp: "Side Project", sh: "Side Hustle" };

export function ProjectCard({ p, onPreview }: { p: Project; onPreview?: (p: Project) => void }) {
  const isPlaceholder = p.image.src.endsWith("empty.jpg");
  const isExternal = p.href?.startsWith("http");

  return (
    <article className="card-lift group flex h-full flex-col overflow-hidden rounded-xl border bg-card">
      <div className="relative aspect-video overflow-hidden bg-muted">
        <Image
          src={p.image.src}
          alt={p.title}
          width={p.image.width}
          height={p.image.height}
          sizes="(min-width: 1024px) 368px, (min-width: 640px) 50vw, 100vw"
          className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {!isPlaceholder && onPreview && (
          <button
            type="button"
            onClick={() => onPreview(p)}
            aria-label={`Preview ${p.title}`}
            className="absolute inset-0 flex cursor-zoom-in items-end justify-end p-3 opacity-0 transition-opacity focus-visible:opacity-100 group-hover:opacity-100"
          >
            <span className="rounded-md bg-background/80 p-1.5 text-foreground backdrop-blur">
              <Expand className="size-4" />
            </span>
          </button>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <p className="font-mono text-[11px] uppercase tracking-widest text-primary">{categoryLabel[p.category]}</p>
        <h3 className="-mt-1 font-semibold leading-snug">{p.title}</h3>
        <p className="text-sm text-muted-foreground">{p.info}</p>
        <div className="flex flex-wrap gap-1.5 pt-1">
          {p.tags.map((tag) => (
            <span key={tag} className="rounded bg-secondary px-2 py-0.5 font-mono text-[11px] text-secondary-foreground">
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-auto flex items-center justify-end gap-2 pt-3">
          {p.github && (
            <a
              href={p.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${p.title} on GitHub`}
              className="rounded-lg border p-2 text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <GithubIcon className="size-4" />
            </a>
          )}
          {p.href ? (
            <a
              href={p.href}
              target="_blank"
              rel={isExternal ? "noopener noreferrer" : undefined}
              className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-3.5 py-2 text-sm font-medium text-primary-foreground transition-all hover:-translate-y-0.5 hover:shadow-[0_10px_30px_-10px_var(--glow)]"
            >
              查看
              <ArrowUpRight className="size-4" />
            </a>
          ) : (
            <span
              aria-disabled="true"
              className="inline-flex cursor-not-allowed items-center gap-1.5 rounded-lg border px-3.5 py-2 text-sm text-muted-foreground opacity-60"
            >
              查看
              <ArrowUpRight className="size-4" />
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
