import { Mail } from "lucide-react";
import { ContactForm } from "./ContactForm";
import { GithubIcon } from "./GithubIcon";
import { ProjectGrid } from "./ProjectGrid";
import { Reveal } from "./Reveal";
import { SectionTitle } from "./SectionTitle";
import { iconBtn } from "./styles";
import { about, experience, site, skills } from "@/lib/content";

export function AboutSection() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 md:py-24">
      <SectionTitle k="about">About Me</SectionTitle>
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
  );
}

export function ExperienceSection() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-24">
        <SectionTitle k="experience">Experience</SectionTitle>
        <ol className="relative ml-2 border-l">
          {experience.map((e, i) => (
            <li key={e.title} className="mb-10 ml-6 last:mb-0">
              <Reveal delay={i * 50}>
                <span className="absolute -left-[5px] mt-1 size-2.5 rounded-full bg-primary ring-4 ring-background" />
                {(e.company || e.period) && (
                  <p className="font-mono text-xs tracking-wider text-muted-foreground">
                    {e.period}
                    {e.company && e.period && " · "}
                    {e.company && <span className="text-primary">{e.company}</span>}
                  </p>
                )}
                <h3 className="mt-1 text-lg font-semibold">{e.title}</h3>
                <p className="mt-1 text-muted-foreground">{e.desc}</p>
                <div className="mt-2 flex flex-wrap gap-1.5">
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
  );
}

export function ProjectsSection() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 md:py-24">
      <SectionTitle k="projects">Projects</SectionTitle>
      <ProjectGrid />
    </section>
  );
}

export function ContactSection() {
  return (
    <section>
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-2 md:py-24">
        <div>
          <SectionTitle k="contact">Let&apos;s Work Together</SectionTitle>
          <Reveal>
            <p className="text-muted-foreground">Have a project, a role or an idea? Feel free to reach out.</p>
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
  );
}
