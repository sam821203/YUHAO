import Image from "next/image";
import { ArrowRight, Mail } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionTitle } from "@/components/SectionTitle";
import { ProjectGrid } from "@/components/ProjectGrid";
import { CampaignVideo } from "@/components/CampaignVideo";
import { GithubIcon } from "@/components/GithubIcon";
import { btnGhost, btnPrimary, iconBtn } from "@/components/styles";
import { campaignVideos, site } from "@/lib/content";

export default function Home() {
  return (
    <main id="top">
      <section className="bg-grid relative overflow-hidden">
        <div className="glow-orb pointer-events-none absolute -top-40 right-0 size-[600px]" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 md:grid-cols-[1.4fr_1fr] md:py-32">
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            <p className="font-mono text-sm text-muted-foreground">
              <span className="text-primary">&lt;</span>
              {site.brand}
              <span className="text-primary">/&gt;</span>
            </p>
            <h1 className="mt-4 text-5xl font-bold tracking-tight md:text-7xl">{site.name}</h1>
            <p className="mt-5 font-mono text-lg text-primary">{site.role}</p>
            <p className="mt-4 max-w-xl text-lg text-muted-foreground">
              Hi! My name is {site.name}. I&apos;m a <strong className="font-semibold text-foreground">{site.role}</strong>{" "}
              actively working to enhance my knowledge in the field of Web Development.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className={btnPrimary}>
                Projects <ArrowRight className="size-4" />
              </a>
              <a href={`mailto:${site.email}`} className={btnGhost}>
                Contact
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
          <div className="animate-in fade-in zoom-in-95 mx-auto w-56 duration-1000 md:w-full md:max-w-sm">
            <div className="relative">
              <div className="absolute -inset-3 rounded-3xl border border-primary/30" />
              <div className="relative flex aspect-square items-center justify-center rounded-2xl border bg-card">
                <Image src="/logo.png" alt={`${site.brand} logo`} width={923} height={923} priority sizes="(min-width: 768px) 384px, 224px" className="w-3/4" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl scroll-mt-16 px-5 py-24">
        <SectionTitle k="01 / projects">Projects</SectionTitle>
        <ProjectGrid />
      </section>

      <section id="campaigns" className="scroll-mt-16 border-y bg-muted/40">
        <div className="mx-auto max-w-6xl px-5 py-24">
          <SectionTitle k="02 / campaigns">東森購物</SectionTitle>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {campaignVideos.map((name, i) => (
              <Reveal key={name} delay={(i % 3) * 80}>
                <figure className="card-lift overflow-hidden rounded-xl border bg-card">
                  <CampaignVideo name={name} />
                  <figcaption className="px-4 py-3 font-mono text-xs text-muted-foreground">#{name}</figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl scroll-mt-16 px-5 py-24">
        <SectionTitle k="03 / contact">Contact</SectionTitle>
        <Reveal>
          <a href={`mailto:${site.email}`} className="inline-flex items-center gap-2 font-mono text-primary hover:underline">
            <Mail className="size-4" />
            {site.email}
          </a>
          <div className="mt-6 flex gap-2">
            <a href={site.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className={iconBtn}>
              <GithubIcon className="size-4" />
            </a>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
