"use client";

import { Card, CardContent } from "@/components/ui/card";
import { ProjectCardData } from "@/lib/dashboardMockData";

interface ProjectCardProps {
  project: ProjectCardData;
  onClick?: () => void;
}

export function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <Card 
      className="cursor-pointer hover:shadow-lg transition-shadow duration-200 bg-card border border-border"
      onClick={onClick}
    >
      <CardContent className="p-0">
        {/* Placeholder area */}
        <div className="h-48 bg-muted rounded-t-lg"></div>
        
        {/* Content area */}
        <div className="p-4">
          <div className="flex justify-between items-center">
            <h3 className="font-medium text-foreground">{project.title}</h3>
            <span className="text-sm text-muted-foreground">{project.lastModified}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}