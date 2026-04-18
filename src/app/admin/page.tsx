import { getProjects } from "@/data/projects";
import { AdminDashboard } from "./AdminDashboard";

export const dynamic = "force-dynamic";

export default function AdminPage() {
  const projects = getProjects();
  return <AdminDashboard initialProjects={projects} />;
}
