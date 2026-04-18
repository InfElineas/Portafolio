import { getProjects } from "@/data/projects";
import { ProjectsContent } from "@/components/ProjectsContent";

export const dynamic = "force-dynamic";

export default function ProjectsPage() {
  return <ProjectsContent projects={getProjects()} />;
}
