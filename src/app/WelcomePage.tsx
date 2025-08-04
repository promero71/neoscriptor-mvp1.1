"use client";

import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { useRouter } from 'next/navigation';

const projects = [
  { id: '1', title: 'Title One', number: 12 },
  { id: '2', title: 'Title Two', number: 18 },
  { id: '3', title: 'Title Three', number: 94 },
  { id: '4', title: 'Title Four', number: 120 },
  { id: '5', title: 'Title Five', number: 44 },
  { id: '6', title: 'Title Six', number: 80 },
];

export const WelcomePage: React.FC = () => {
  const router = useRouter();

  const handleProjectClick = (projectId: string) => {
    router.push(`/project/${projectId}`);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <h1 className="text-2xl font-bold mb-8">Welcome to NeoScriptor "UserName"</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-4xl">
        {projects.map((project) => (
          <Card 
            key={project.id} 
            onClick={() => handleProjectClick(project.id)} 
            className="cursor-pointer hover:shadow-lg transition-shadow"
          >
            <CardContent className="flex flex-col items-center justify-center p-6">
              <div className="w-full h-32 bg-gray-200 dark:bg-gray-700 mb-4 rounded flex items-center justify-center">
                <span className="text-gray-500 dark:text-gray-400">Project Image</span>
              </div>
              <h2 className="text-lg font-semibold">{project.title}</h2>
              <p className="text-sm text-muted-foreground mt-1">◎{project.number}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};