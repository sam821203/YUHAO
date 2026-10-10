import type { Metadata } from "next";
import { ProjectsSection } from "@/components/sections";
import { site } from "@/lib/content";

export const metadata: Metadata = { title: `作品 · ${site.name}` };

export default function Page() {
  return (
    <main>
      <ProjectsSection />
    </main>
  );
}
