import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug, projects } from "@/data/projects";

type ProjectDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Proyecto no encontrado | Jasan Badell",
    };
  }

  return {
    title: `${project.title} | Jasan Badell`,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <section className="panel page-stack">
      <p className="page-eyebrow">Proyecto</p>
      <h1 className="page-title">{project.title}</h1>

      <p className="page-copy">{project.summary}</p>

      <div className="chip-list">
        {project.tags.map((tag) => (
          <span key={tag} className="chip-item">
            {tag}
          </span>
        ))}
      </div>

      <div className="page-stack">
        {project.description.map((paragraph) => (
          <p key={paragraph} className="page-copy">
            {paragraph}
          </p>
        ))}
      </div>

      <div className="link-row">
        {project.links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="next-home__btn"
            target={link.external ? "_blank" : undefined}
            rel={link.external ? "noreferrer" : undefined}
          >
            {link.label}
          </a>
        ))}
        <Link href="/projects" className="next-home__btn">
          Volver a proyectos
        </Link>
      </div>
    </section>
  );
}
