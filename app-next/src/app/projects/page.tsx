import Link from "next/link";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <section className="page-stack">
      <p className="page-eyebrow">Portfolio</p>
      <h1 className="page-title">Proyectos destacados</h1>

      <div className="card-stack">
        {projects.map((project) => (
          <article key={project.slug} className="panel project-card-next">
            <div className="project-card-next__header">
              <h2 className="section-title">{project.title}</h2>
              <span className={`status-pill status-pill--${project.status}`}>
                {project.status === "active" ? "Activo" : "En revisión"}
              </span>
            </div>

            <p className="page-copy">{project.summary}</p>

            <div className="chip-list">
              {project.tags.map((tag) => (
                <span key={tag} className="chip-item">
                  {tag}
                </span>
              ))}
            </div>

            <div className="link-row">
              <Link href={`/projects/${project.slug}`} className="next-home__btn">
                Ver detalle
              </Link>
              {project.links
                .filter((link) => link.external)
                .map((link) => (
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
