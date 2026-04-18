import { readFileSync, writeFileSync } from "fs";
import path from "path";
import type { Project } from "@/data/projects";

const DATA_PATH = path.join(process.cwd(), "data", "projects.json");

export function readProjectsSync(): Project[] {
  const raw = readFileSync(DATA_PATH, "utf-8");
  return JSON.parse(raw) as Project[];
}

export function writeProjectsSync(projects: Project[]): void {
  writeFileSync(DATA_PATH, JSON.stringify(projects, null, 2), "utf-8");
}
