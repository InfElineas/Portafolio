import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "400", "800"],
});

export const metadata: Metadata = {
  title: "Jasan Badell | Frontend Engineer",
  description:
    "Migración a Next.js del portafolio de Jasan Badell para escalar funcionalidades.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${jetBrainsMono.className} site-shell`}>
        <SiteHeader />
        <main className="container page-section">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
