// src/components/Dashboard.tsx - Versión actualizada
"use client";

import { useState } from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious 
} from "@/components/ui/pagination";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Mock data expandida para coincidir con el wireframe
const mockProjects = [
  { id: "1", title: "Title One", timestamp: "12'" },
  { id: "2", title: "Title Two", timestamp: "18'" },
  { id: "3", title: "Title Three", timestamp: "94'" },
  { id: "4", title: "Title Four", timestamp: "120'" },
  { id: "5", title: "Title Five", timestamp: "44'" },
  { id: "6", title: "Title Six", timestamp: "80'" },
];

export function Dashboard() {
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;
  const totalPages = Math.ceil(mockProjects.length / projectsPerPage);
  
  const startIndex = (currentPage - 1) * projectsPerPage;
  const currentProjects = mockProjects.slice(startIndex, startIndex + projectsPerPage);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-8">
        {/* Welcome Title */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-foreground">
            Welcome to NeoScriptor "UserName"
          </h1>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {currentProjects.map((project) => (
            <Link key={project.id} href={`/project/${project.id}`}>
              <Card className="group cursor-pointer hover:shadow-lg transition-all duration-200 h-full">
                <CardContent className="p-0">
                  {/* Preview Area */}
                  <div className="relative bg-muted rounded-t-xl h-48 flex items-center justify-center">
                    {/* Timestamp in top right corner */}
                    <div className="absolute top-3 right-3 text-xs text-muted-foreground bg-background/80 px-2 py-1 rounded">
                      {project.timestamp}
                    </div>
                    {/* Placeholder content area */}
                    <div className="w-full h-full bg-muted rounded-t-xl"></div>
                  </div>
                  
                  {/* Project Title */}
                  <div className="p-4">
                    <h3 className="font-medium text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className="gap-1"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
              </PaginationItem>
              
              <PaginationItem>
                <span className="px-4 py-2 text-sm">
                  {currentPage}/{totalPages}
                </span>
              </PaginationItem>
              
              <PaginationItem>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                  className="gap-1"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </div>
  );
}