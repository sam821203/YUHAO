import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/GithubIcon";
import { Reveal } from "@/components/Reveal";
import { categoryLabel, projects, site, type CaseStudy } from "@/lib/content";

type Params = { slug: string };

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  if (!p) return {};
  return { title: `${p.title} · ${site.name}`, description: p.info };
}

function Heading({ n, children }: { n: string; children: ReactNode }) {
  return (
    <h2 className="mb-4 flex items-baseline gap-3 text-2xl font-bold">
      <span className="font-mono text-sm text-primary">{n}</span>
      {children}
    </h2>
  );
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-muted-foreground">
          <span className="text-accent">▸</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function sections(cs: CaseStudy): { title: string; body: ReactNode }[] {
  const list: { title: string; body: ReactNode }[] = [
    {
      title: "問題",
      body: (
        <>
          <p className="leading-relaxed text-muted-foreground">{cs.problem}</p>
          {cs.problemItems && (
            <div className="mt-4">
              <Bullets items={cs.problemItems} />
            </div>
          )}
        </>
      ),
    },
    { title: "我的角色", body: <p className="leading-relaxed text-muted-foreground">{cs.role}</p> },
  ];
  if (cs.challenges) list.push({ title: "前端挑戰", body: <Bullets items={cs.challenges} /> });
  if (cs.strategies) {
    list.push({
      title: "核心對策",
      body: (
        <div className="grid gap-4 sm:grid-cols-2">
          {cs.strategies.map((s) => (
            <div key={s.label} className="card-lift rounded-xl border bg-card p-5">
              <h3 className="mb-3 font-mono text-sm text-primary">{s.label}</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {s.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-accent">▸</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ),
    });
  }
  if (cs.solutions) {
    list.push({
      title: "解決方案",
      body: (
        <div className="grid gap-4 sm:grid-cols-2">
          {cs.solutions.map((s) => (
            <div key={s.label} className="card-lift rounded-xl border bg-card p-5">
              <h3 className="font-mono text-sm text-primary">{s.label}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
            </div>
          ))}
        </div>
      ),
    });
  }
  list.push({
    title: "成果",
    body: Array.isArray(cs.result) ? (
      <div className="rounded-xl border-l-4 border-primary bg-muted p-5">
        <ul className="space-y-2">
          {cs.result.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="text-primary">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    ) : (
      <p className="rounded-xl border-l-4 border-primary bg-muted p-5 text-lg">{cs.result}</p>
    ),
  });
  return list;
}

export default async function ProjectPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  if (!p) notFound();
  const cs = p.caseStudy;
  const isExternal = p.href?.startsWith("http");

  return (
    <main className="mx-auto max-w-4xl px-5 py-12">
      <Link href="/projects" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary">
        <ArrowLeft className="size-4" />
        返回作品
      </Link>
      <div className="animate-in fade-in slide-in-from-bottom-4 mt-6 duration-700">
        <p className="font-mono text-xs uppercase tracking-widest text-primary">{categoryLabel[p.category]}</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight md:text-5xl">{p.title}</h1>
        <p className="mt-3 text-lg text-muted-foreground">{p.info}</p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {p.tags.map((tag) => (
            <span key={tag} className="rounded bg-secondary px-2 py-0.5 font-mono text-xs">
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          {p.href && (
            <a
              href={p.href}
              target="_blank"
              rel={isExternal ? "noopener noreferrer" : undefined}
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              <ExternalLink className="size-4" />
              Live demo
            </a>
          )}
          {p.github && (
            <a
              href={p.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-sm hover:border-primary hover:text-primary"
            >
              <GithubIcon className="size-4" />
              GitHub
            </a>
          )}
        </div>
        <Image
          src={p.image.src}
          alt={p.title}
          width={p.image.width}
          height={p.image.height}
          sizes="(min-width: 896px) 856px, 100vw"
          priority
          className="mt-10 w-full rounded-xl border"
        />
      </div>

      {cs ? (
        <div className="mt-16 space-y-14">
          {sections(cs).map((section, i) => (
            <Reveal key={section.title}>
              <Heading n={String(i + 1).padStart(2, "0")}>{section.title}</Heading>
              {section.body}
            </Reveal>
          ))}
        </div>
      ) : (
        <div className="mt-16">
          <Reveal>
            <Heading n="01">專案貢獻</Heading>
            <p className="rounded-xl border-l-4 border-primary bg-muted p-5 text-lg leading-relaxed">{p.info}</p>
          </Reveal>
        </div>
      )}
    </main>
  );
}
