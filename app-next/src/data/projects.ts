export type ProjectLink = {
  href: string;
  label: string;
  external?: boolean;
};

export type Project = {
  slug: string;
  title: string;
  summary: string;
  description: string[];
  tags: string[];
  links: ProjectLink[];
  status: "active" | "draft";
};

export const projects: Project[] = [
  {
    slug: "scholeia",
    title: "Scholeía",
    summary:
      "Plataforma educativa orientada a formación online, con foco en experiencia de navegación y claridad de contenidos.",
    description: [
      "Scholeía es una plataforma educativa en línea para cursos y programas formativos en distintas áreas.",
      "El enfoque del proyecto prioriza una experiencia de usuario clara, estructura de contenidos accesible y navegación intuitiva.",
      "El objetivo principal fue mejorar la comprensión del contenido y la retención del usuario durante el recorrido del aprendizaje.",
    ],
    tags: ["UX writing", "Responsive UI", "SEO on-page"],
    links: [
      { href: "https://xn--scholea-dza.com/", label: "Live Demo", external: true },
    ],
    status: "active",
  },
  {
    slug: "hitmeup",
    title: "HitMeUp",
    summary:
      "App de mensajería en tiempo real con arquitectura cloud y enfoque en interacción simple para usuarios finales.",
    description: [
      "HitMeUp es una aplicación de chat con intercambio de mensajes en tiempo real.",
      "La solución trabaja con servicios cloud para mantener disponibilidad y consistencia en distintos dispositivos.",
      "El producto se diseñó para ser intuitivo, rápido y fácil de usar en escenarios de comunicación diaria.",
    ],
    tags: ["React", "Real-time chat", "Cloud APIs"],
    links: [
      {
        href: "https://github.com/JasanBadell/ChatApp-HitMeUp/tree/main",
        label: "Código",
        external: true,
      },
      {
        href: "https://main--stupendous-dieffenbachia-0d305a.netlify.app/",
        label: "Live Demo",
        external: true,
      },
    ],
    status: "active",
  },
  {
    slug: "foundme",
    title: "FoundMe",
    summary: "Proyecto en revisión: estructura base disponible, enlaces y demo pendientes de actualización.",
    description: [
      "FoundMe está documentado en el repositorio como proyecto en revisión.",
      "Actualmente sirve como placeholder para mantener trazabilidad en el portafolio.",
      "Se recomienda completar enlaces de código/demo y evidencia visual en una siguiente iteración.",
    ],
    tags: ["In progress", "Portfolio", "Pending assets"],
    links: [
      { href: "/projects/foundme", label: "Versión estática actual", external: false },
    ],
    status: "draft",
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
