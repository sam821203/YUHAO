import type { Metadata } from "next";
import { ProjectsSection } from "@/components/sections";
import { site } from "@/lib/content";

export const metadata: Metadata = { title: `Projects · ${site.name}` };

export default function Page() {
  return (
    <main>
      <ProjectsSection />
    </main>
  );
}
