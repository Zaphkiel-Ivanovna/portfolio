import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { VerticalNav } from "@/components/layout/vertical-nav";
import { MouseEffect } from "@/components/layout/mouse-effect";
import { LanguageSwitcher } from "@/components/layout/language-switcher";
import "../lib/i18n/config";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Your Portfolio",
  description: "Personal portfolio showcasing my work and experience",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={inter.className}>
        <VerticalNav />
        <MouseEffect />
        <LanguageSwitcher />
        {children}
      </body>
    </html>
  );
}