import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import type { ReactNode } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { GoTop } from "@/components/GoTop";
import { Starfield } from "@/components/Starfield";
import { site } from "@/lib/content";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"], variable: "--font-jakarta", display: "swap" });

export const metadata: Metadata = {
  title: `${site.brand} · ${site.name}`,
  description: `Hi! My name is ${site.name}. I'm a ${site.role} actively working to enhance my knowledge in the field of Web Development.`,
  authors: [{ name: site.name }],
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  colorScheme: "light",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="zh-Hant" className={jakarta.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;500;700&display=swap" />
      </head>
      <body>
        <Starfield />
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
