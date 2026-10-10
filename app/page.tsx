import Link from "next/link";
import { ArrowRight, ArrowUpRight, Mail, MapPin } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionTitle } from "@/components/SectionTitle";
import { ProjectGrid } from "@/components/ProjectGrid";
import { GithubIcon } from "@/components/GithubIcon";
import { ContactForm } from "@/components/ContactForm";
import { HeroOrbit } from "@/components/HeroOrbit";
import { btnGhost, btnPrimary, iconBtn } from "@/components/styles";
import { about, experience, site, skills } from "@/lib/content";

export default function Home() {
  return (
    <main id="top">
      <section className="bg-grid relative overflow-hidden">
        <div className="glow-orb pointer-events-none absolute -top-40 right-0 size-[600px]" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 md:grid-cols-[1.4fr_1fr] md:py-32">
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            <p className="flex items-center gap-2 font-mono text-sm text-muted-foreground">
              <MapPin className="size-4 text-primary" /> 台灣
            </p>
            <h1 className="mt-4 text-5xl font-bold tracking-tight md:text-7xl">
              黃宇浩
              <span className="mt-2 block text-2xl font-medium text-muted-foreground md:text-3xl">{site.name}</span>
            </h1>
            <p className="mt-5 font-mono text-lg text-primary">{site.role}</p>
            <p className="mt-4 max-w-xl text-lg text-muted-foreground">
              Hi! My name is {site.name}. I&apos;m a <strong className="font-semibold text-foreground">{site.role}</strong>{" "}
              actively working to enhance my knowledge in the field of Web Development.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className={btnPrimary}>
                查看作品 <ArrowRight className="size-4" />
              </a>
              <a href="#contact" className={btnGhost}>
                聯絡我
              </a>
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

      <section id="about" className="mx-auto max-w-6xl scroll-mt-16 px-5 py-24">
        <SectionTitle k="01 / about">關於我</SectionTitle>
        <div className="grid gap-12 md:grid-cols-[1fr_1.3fr]">
          <Reveal>
            <p className="text-lg leading-relaxed text-muted-foreground">{about}</p>
          </Reveal>
          <div className="space-y-6">
            {skills.map((s, i) => (
              <Reveal key={s.category} delay={i * 60}>
                <h3 className="mb-2 font-mono text-xs uppercase tracking-wider text-muted-foreground">{s.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {s.items.map((item) => (
                    <span key={item} className="rounded-md border bg-card px-3 py-1 text-sm transition-colors hover:border-primary hover:text-primary">
                      {item}
                    </span>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="scroll-mt-16 border-y bg-muted/40">
        <div className="mx-auto max-w-6xl px-5 py-24">
          <SectionTitle k="02 / experience">工作經歷</SectionTitle>
          <ol className="relative ml-2 border-l">
            {experience.map((e, i) => (
              <li key={e.company} className="mb-14 ml-6 last:mb-0">
                <Reveal delay={i * 50}>
                  <span className="absolute -left-[5px] mt-1.5 size-2.5 rounded-full bg-primary ring-4 ring-background" />
                  <p className="font-mono text-xs tracking-wider text-primary">{e.period}</p>
                  <h3 className="mt-1 text-xl font-semibold">
                    {e.title}
                    <span className="text-muted-foreground"> · {e.company}</span>
                  </h3>
                  <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {e.projects.map((proj) => (
                      <div key={proj.name} className="rounded-lg border bg-card p-5">
                        <h4 className="font-semibold">
                          {proj.slug ? (
                            <Link href={`/projects/${proj.slug}`} className="inline-flex items-center gap-1 hover:text-primary">
                              {proj.name}
                              <ArrowUpRight className="size-4 text-muted-foreground" />
                            </Link>
                          ) : (
                            proj.name
                          )}
                        </h4>
                        <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                          {proj.points.slice(0, 3).map((point) => (
                            <li key={point} className="flex gap-2">
                              <span className="text-accent">▸</span>
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                        {proj.points.length > 3 && (
                          <details className="group mt-1.5 text-sm text-muted-foreground">
                            <summary className="cursor-pointer list-none font-mono [&::-webkit-details-marker]:hidden text-xs text-primary hover:underline">
                              <span className="group-open:hidden">+ 再看 {proj.points.length - 3} 項</span>
                              <span className="hidden group-open:inline">− 收合</span>
                            </summary>
                            <ul className="mt-1.5 space-y-1.5">
                              {proj.points.slice(3).map((point) => (
                                <li key={point} className="flex gap-2">
                                  <span className="text-accent">▸</span>
                                  <span>{point}</span>
                                </li>
                              ))}
                            </ul>
                          </details>
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 flex flex-wrap gap-x-2 gap-y-1">
                    {e.tags.map((tag) => (
                      <span key={tag} className="font-mono text-xs text-primary">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl scroll-mt-16 px-5 py-24">
        <SectionTitle k="03 / projects">精選作品</SectionTitle>
        <ProjectGrid />
      </section>

      <section id="contact" className="scroll-mt-16 border-t bg-muted/40">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-24 md:grid-cols-2">
          <div>
            <SectionTitle k="04 / contact">一起合作</SectionTitle>
            <Reveal>
              <p className="text-muted-foreground">有專案、職缺或想法？歡迎來信。</p>
              <a href={`mailto:${site.email}`} className="mt-6 inline-flex items-center gap-2 font-mono text-primary hover:underline">
                <Mail className="size-4" />
                {site.email}
              </a>
              <div className="mt-6 flex gap-2">
                <a href={site.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className={iconBtn}>
                  <GithubIcon className="size-4" />
                </a>
              </div>
            </Reveal>
          </div>
          <Reveal>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </main>
  );
}
