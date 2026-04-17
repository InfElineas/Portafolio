import Link from "next/link";

const quickLinks = [
  { href: "/about", label: "Sobre mí" },
  { href: "/projects", label: "Proyectos" },
  { href: "/contact", label: "Contacto" },
];

const socialLinks = [
  {
    href: "https://github.com/JasanBadell",
    label: "GitHub",
    icon: "https://s2.svgbox.net/social.svg?ic=github&color=ab9c9c",
  },
  {
    href: "https://www.linkedin.com/in/jasanbadelldev/",
    label: "LinkedIn",
    icon: "https://s2.svgbox.net/social.svg?ic=linkedin&color=ab9c9c",
  },
  {
    href: "mailto:jasanbadelldev@gmail.com",
    label: "Email",
    icon: "https://s2.svgbox.net/social.svg?ic=telegram&color=ab9c9c",
  },
];

export default function HomePage() {
  return (
    <section className="next-home">
      <article className="next-home__hero panel">
        <p className="next-home__eyebrow">Frontend Engineer · UX · Performance</p>
        <h1 className="next-home__title">Jasan Badell</h1>
        <p className="next-home__description">
          Diseño y desarrollo interfaces web modernas, rápidas y accesibles para
          productos digitales con impacto real.
        </p>
        <p className="next-home__availability">
          Disponible para oportunidades remotas y colaboraciones por proyecto.
        </p>

        <nav className="next-home__actions" aria-label="Acciones principales">
          {quickLinks.map((item) => (
            <Link key={item.href} href={item.href} className="next-home__btn">
              {item.label}
            </Link>
          ))}
        </nav>
      </article>

      <aside className="next-home__side panel" aria-label="Enlaces sociales">
        <p className="next-home__side-title">Conecta conmigo</p>
        <div className="next-home__socials">
          {socialLinks.map((item) => (
            <a key={item.label} href={item.href} target="_blank" rel="noreferrer" aria-label={item.label}>
              <img src={item.icon} alt={item.label} width={28} height={28} />
            </a>
          ))}
        </div>
      </aside>
    </section>
  );
}
