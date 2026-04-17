const projects = [
  {
    title: "Scholeía",
    description:
      "Plataforma educativa orientada a formación online, con foco en experiencia de navegación y claridad de contenidos.",
    tags: ["UX writing", "Responsive UI", "SEO on-page"],
    links: [
      { href: "/proyect_description/scholeia.html", label: "Ver detalle" },
      { href: "https://xn--scholea-dza.com/", label: "Live Demo" },
    ],
  },
  {
    title: "HitMeUp",
    description:
      "App de mensajería en tiempo real con arquitectura cloud y enfoque en interacción simple para usuarios finales.",
    tags: ["React", "Real-time chat", "Cloud APIs"],
    links: [
      { href: "/proyect_description/hitmeup.html", label: "Ver detalle" },
      {
        href: "https://github.com/JasanBadell/ChatApp-HitMeUp/tree/main",
        label: "Código",
      },
      {
        href: "https://main--stupendous-dieffenbachia-0d305a.netlify.app/",
        label: "Live Demo",
      },
    ],
  },
];

export default function ProjectsPage() {
  return (
    <section className="page-stack">
      <p className="page-eyebrow">Portfolio</p>
      <h1 className="page-title">Proyectos destacados</h1>

      <div className="card-stack">
        {projects.map((project) => (
          <article key={project.title} className="panel project-card-next">
            <h2 className="section-title">{project.title}</h2>
            <p className="page-copy">{project.description}</p>

            <div className="chip-list">
              {project.tags.map((tag) => (
                <span key={tag} className="chip-item">
                  {tag}
                </span>
              ))}
            </div>

            <div className="link-row">
              {project.links.map((link) => (
                <a key={link.href} href={link.href} className="next-home__btn" target="_blank" rel="noreferrer">
                  {link.label}
                </a>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
