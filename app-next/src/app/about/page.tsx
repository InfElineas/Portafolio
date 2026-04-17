const profileHighlights = [
  "JavaScript moderno (ESNext)",
  "React + UI systems",
  "Accesibilidad WCAG",
  "Core Web Vitals",
  "SEO técnico",
  "IA aplicada a producto",
];

const skillSet = ["HTML5", "CSS3", "JavaScript", "React", "PHP", "Bootstrap", "OJS"];

export default function AboutPage() {
  return (
    <section className="panel page-stack">
      <p className="page-eyebrow">Sobre mí</p>
      <h1 className="page-title">Perfil actualizado</h1>

      <p className="page-copy">
        Soy Jasan Badell, Ingeniero en Ciencias Informáticas y Frontend Engineer.
        Construyo interfaces modernas centradas en el usuario, con una fuerte base
        en accesibilidad, rendimiento web y diseño responsive.
      </p>

      <p className="page-copy">
        He desarrollado plataformas editoriales y sitios de alto contenido sobre
        Open Journal Systems (OJS), optimizando tiempos de carga, arquitectura de
        información y consistencia visual para equipos internos y externos.
      </p>

      <p className="page-copy">
        Actualmente combino buenas prácticas de desarrollo moderno con apoyo de
        herramientas de IA para entregar soluciones más rápidas, escalables y
        fáciles de mantener.
      </p>

      <div>
        <h2 className="section-title">Stack & enfoque 2026</h2>
        <div className="chip-list">
          {profileHighlights.map((item) => (
            <span key={item} className="chip-item">
              {item}
            </span>
          ))}
        </div>
      </div>

      <div>
        <h2 className="section-title">Skills</h2>
        <div className="chip-list">
          {skillSet.map((item) => (
            <span key={item} className="chip-item chip-item--accent">
              {item}
            </span>
          ))}
        </div>
      </div>

      <p>
        <a href="/files/jasan-badell-cv.pdf" className="next-home__btn" target="_blank" rel="noreferrer">
          Ver CV (PDF)
        </a>
      </p>
    </section>
  );
}
