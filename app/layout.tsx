import type { Metadata, Viewport } from "next";
import { Lexend } from "next/font/google";
import type { ReactNode } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { GoTop } from "@/components/GoTop";
import { Backdrop } from "@/components/Backdrop";
import { site } from "@/lib/content";
import "./globals.css";

const lexend = Lexend({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-lexend", display: "swap" });

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
    <html lang="zh-Hant" className={lexend.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;500;700&display=swap" />
      </head>
      <body>
        <Backdrop />
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
