import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Space_Grotesk } from "next/font/google";
import type { ReactNode } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { GoTop } from "@/components/GoTop";
import { site } from "@/lib/content";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk", display: "swap" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "600"], variable: "--font-jetbrains-mono", display: "swap" });

export const metadata: Metadata = {
  title: `${site.brand} · ${site.name}`,
  description: `Hi! My name is ${site.name}. I'm a ${site.role} actively working to enhance my knowledge in the field of Web Development.`,
  authors: [{ name: site.name }],
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#efe7db" },
    { media: "(prefers-color-scheme: dark)", color: "#111a1b" },
  ],
};

const themeScript = `try{var d=localStorage.getItem("dark");document.documentElement.classList.toggle("dark",d===null||d==="1")}catch(e){}`;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="zh-Hant" className={`dark ${spaceGrotesk.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;500;700&display=swap" />
      </head>
      <body>
        <SiteHeader />
        {children}
        <footer className="border-t py-8 text-center font-mono text-xs text-muted-foreground">
          © {new Date().getFullYear()} {site.name} · {site.brand}
        </footer>
        <GoTop />
      </body>
    </html>
  );
}
