"use client";

import Link from "next/link";
import { useNavHistory } from "@/lib/NavHistoryContext";
import { useLanguage } from "@/lib/LanguageContext";

const PATH_LABELS: Record<string, { es: string; en: string }> = {
  "/": { es: "Inicio", en: "Home" },
  "/about": { es: "Sobre mí", en: "About" },
  "/projects": { es: "Proyectos", en: "Projects" },
  "/contact": { es: "Contacto", en: "Contact" },
};

function getLabel(path: string, lang: "es" | "en"): string {
  if (PATH_LABELS[path]) return PATH_LABELS[path][lang];
  const segments = path.split("/").filter(Boolean);
  if (segments[0] === "projects" && segments[1]) {
    return segments[1].charAt(0).toUpperCase() + segments[1].slice(1);
  }
  return segments[segments.length - 1] ?? path;
}

export function Breadcrumbs() {
  const history = useNavHistory();
  const { lang } = useLanguage();

  if (history.length < 2) return null;

  const current = history[history.length - 1];
  const trail = history.slice(0, -1);

  return (
    <nav className="breadcrumbs" aria-label="breadcrumb">
      {trail.map((path, i) => (
        <span key={path} className="breadcrumbs__item">
          {i > 0 && <span className="breadcrumbs__sep">›</span>}
          <Link href={path} className="breadcrumbs__link">
            {getLabel(path, lang)}
          </Link>
        </span>
      ))}
      <span className="breadcrumbs__sep">›</span>
      <span className="breadcrumbs__current">{getLabel(current, lang)}</span>
    </nav>
  );
}
