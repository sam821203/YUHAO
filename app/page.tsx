import Link from "next/link";
import { ArrowRight, Mail, MapPin } from "lucide-react";
import { GithubIcon } from "@/components/GithubIcon";
import { HeroOrbit } from "@/components/HeroOrbit";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import { SectionTitle } from "@/components/SectionTitle";
import { btnGhost, btnPrimary, iconBtn } from "@/components/styles";
import { projects, site } from "@/lib/content";

export default function Home() {
  const featured = projects.filter((p) => p.featured);

  return (
    <main>
      <section className="relative overflow-x-clip">
        <div className="glow-orb pointer-events-none absolute -top-40 right-0 size-[600px]" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 md:grid-cols-[1.4fr_1fr] md:py-32">
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            <p className="flex items-center gap-2 font-mono text-sm text-muted-foreground">
              <MapPin className="size-4 text-primary" /> Taiwan
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
              {site.name}
            </h1>
            <p className="mt-5 font-mono text-lg text-primary">{site.role}</p>
            <p className="mt-4 max-w-xl text-lg text-muted-foreground">
              Hi! My name is {site.name}. I&apos;m a <strong className="font-semibold text-foreground">{site.role}</strong>{" "}
              actively working to enhance my knowledge in the field of Web Development.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/projects" className={btnPrimary}>
                View Projects <ArrowRight className="size-4" />
              </Link>
              <Link href="/contact" className={btnGhost}>
                Contact Me
              </Link>
            </div>
            <div className="mt-8 flex gap-2">
              <a href={site.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className={iconBtn}>
                <GithubIcon className="size-4" />
              </a>
              <a href={`mailto:${site.email}`} aria-label="Email" className={iconBtn}>
                <Mail className="size-4" />
              </a>
            </div>
          </div>
          <HeroOrbit />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-24">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionTitle k="featured">Featured Projects</SectionTitle>
          <Link href="/projects" className="mb-10 inline-flex items-center gap-2 font-mono text-sm text-primary hover:underline">
            View All Projects <ArrowRight className="size-4" />
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 3) * 80} className="h-full">
              <ProjectCard p={p} />
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
