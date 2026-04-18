"use client";

import { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";

export function FloatingSettings() {
  const [open, setOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  return (
    <>
      <button
        className="fsb"
        onClick={() => setOpen((v) => !v)}
        aria-label={t.settings.title}
        aria-expanded={open}
      >
        <span className="fsb__icon">JB</span>
      </button>

      {open && (
        <>
          <div className="fsb-backdrop" onClick={() => setOpen(false)} />
          <div className="fsb-panel" role="dialog" aria-label={t.settings.title}>
            <div className="fsb-panel__header">
              <span className="fsb-panel__dot" aria-hidden="true" />
              <span className="fsb-panel__title">{t.settings.title}</span>
            </div>

            <div className="fsb-panel__section">
              <p className="fsb-panel__label">{t.settings.language}</p>
              <div className="fsb-lang-toggle">
                <button
                  className={`fsb-lang-btn${lang === "es" ? " fsb-lang-btn--active" : ""}`}
                  onClick={() => setLang("es")}
                >
                  ES
                </button>
                <button
                  className={`fsb-lang-btn${lang === "en" ? " fsb-lang-btn--active" : ""}`}
                  onClick={() => setLang("en")}
                >
                  EN
                </button>
              </div>
            </div>

            <div className="fsb-panel__divider" />

            <div className="fsb-panel__section">
              <p className="fsb-panel__label">{t.settings.adminTitle}</p>
              <Link
                href="/admin"
                className="fsb-admin-link"
                onClick={() => setOpen(false)}
              >
                <div>
                  <p className="fsb-admin-link__title">{t.settings.adminTitle}</p>
                  <p className="fsb-admin-link__desc">{t.settings.adminDesc}</p>
                </div>
                <span className="fsb-admin-link__arrow" aria-hidden="true">›</span>
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  );
}
