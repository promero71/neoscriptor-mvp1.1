import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useRouter } from 'next/router';

const projects = [
  { id: '1', title: 'Title One', number: 12 },
  { id: '2', title: 'Title Two', number: 18 },
  { id: '3', title: 'Title Three', number: 94 },
  { id: '4', title: 'Title Four', number: 120 },
  { id: '5', title: 'Title Five', number: 44 },
  { id: '6', title: 'Title Six', number: 80 },
];

const WelcomePage: React.FC = () => {
  const router = useRouter();

  const handleProjectClick = (projectId) => {
    router.push(`/project/${projectId}`);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-8">Welcome to NeoScriptor "UserName"</h1>
      <div className="grid grid-cols-3 gap-4">
        {projects.map((project) => (
          <Card key={project.id} onClick={() => handleProjectClick(project.id)} className="cursor-pointer">
            <CardContent className="flex flex-col items-center justify-center">
              <div className="w-full h-24 bg-gray-200 mb-2"></div>
              <CardTitle>{project.title}</CardTitle>
              <p className="text-sm text-muted-foreground">◎{project.number}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default WelcomePage;