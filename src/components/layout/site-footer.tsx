"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";

const year = new Date().getFullYear();

export function SiteFooter() {
  const { t } = useLanguage();
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <p className="site-footer__copy">
          © {year} <b>Jasan Badell</b> — {t.footer.role}
        </p>
        <nav className="site-footer__links" aria-label="Footer links">
          <a href="https://github.com/JasanBadell" className="site-footer__link" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/jasanbadelldev/" className="site-footer__link" target="_blank" rel="noreferrer">LinkedIn</a>
          <Link href="/contact" className="site-footer__link">{t.nav.contact}</Link>
        </nav>
      </div>
    </footer>
  );
}
