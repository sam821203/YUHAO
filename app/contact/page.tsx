import type { Metadata } from "next";
import { ContactSection } from "@/components/sections";
import { site } from "@/lib/content";

export const metadata: Metadata = { title: `聯絡 · ${site.name}` };

export default function Page() {
  return (
    <main>
      <ContactSection />
    </main>
  );
}
