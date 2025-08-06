"use client";

import { ProjectCard } from "./ProjectCard";
import { ProjectCardData } from "@/lib/dashboardMockData";

interface ProjectsGridProps {
  projects: ProjectCardData[];
  onProjectClick?: (projectId: string) => void;
}

export function ProjectsGrid({ projects, onProjectClick }: ProjectsGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
          onClick={() => onProjectClick?.(project.id)}
        />
      ))}
    </div>
  );
}