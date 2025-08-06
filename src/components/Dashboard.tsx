"use client";

import { useState } from "react";
import { WelcomeSection } from "./dashboard/WelcomeSection";
import { ProjectsGrid } from "./dashboard/ProjectsGrid";
import { DashboardPagination } from "./dashboard/DashboardPagination";
import { mockRootProps } from "@/lib/dashboardMockData";

export function Dashboard() {
  const [currentPage, setCurrentPage] = useState(mockRootProps.currentPage);
  
  const handleProjectClick = (projectId: string) => {
    console.log("Project clicked:", projectId);
    // TODO: Navigate to project details
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // TODO: Fetch projects for the new page
  };

  return (
    <div className="min-h-screen bg-background">
      <WelcomeSection userName={mockRootProps.userName} />
      
      <ProjectsGrid 
        projects={mockRootProps.projects}
        onProjectClick={handleProjectClick}
      />
      
      <DashboardPagination
        currentPage={currentPage}
        totalPages={mockRootProps.totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}