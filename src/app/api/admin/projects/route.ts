import { NextRequest, NextResponse } from "next/server";
import { isAuthenticated } from "@/lib/auth";
import { readProjectsSync, writeProjectsSync } from "@/lib/projects-store";
import type { Project } from "@/data/projects";

export async function GET() {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: "No autorizado." }, { status: 401 });
  }
  return NextResponse.json({ projects: readProjectsSync() });
}

export async function POST(req: NextRequest) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: "No autorizado." }, { status: 401 });
  }

  const project = (await req.json()) as Project;
  const projects = readProjectsSync();

  if (projects.find((p) => p.slug === project.slug)) {
    return NextResponse.json({ error: "Ya existe un proyecto con ese slug." }, { status: 400 });
  }

  projects.push(project);
  writeProjectsSync(projects);
  return NextResponse.json({ ok: true, project });
}
