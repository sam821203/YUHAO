import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/content";

export function ProjectCard({ p, large }: { p: Project; large?: boolean }) {
  return (
    <Link
      href={`/projects/${p.slug}`}
      className="card-lift group flex h-full flex-col overflow-hidden rounded-xl border bg-card focus-visible:outline-2 focus-visible:outline-ring"
    >
      <div className={`overflow-hidden bg-muted ${large ? "aspect-[16/10]" : "aspect-video"}`}>
        <Image
          src={p.image.src}
          alt={p.title}
          width={p.image.width}
          height={p.image.height}
          sizes="(min-width: 1024px) 368px, (min-width: 640px) 50vw, 100vw"
          className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-semibold leading-snug">{p.title}</h3>
          <ArrowUpRight className="size-4 shrink-0 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
        </div>
        <p className="text-sm text-muted-foreground">{p.info}</p>
        <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
          {p.tags.map((tag) => (
            <span key={tag} className="rounded bg-secondary px-2 py-0.5 font-mono text-[11px] text-secondary-foreground">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
