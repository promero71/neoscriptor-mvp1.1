"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export function BibleDashboard() {
  // Datos simulados para el dashboard
  const projectData = {
    title: "Echoes of Nebula",
    genre: "Thriller",
    format: "Largometraje",
    toneVisual: "Oscuro",
    logline: "Un padre soltero enfrenta su pasado criminal para proteger a su hija.",
    progress: 75,
  };

  const sections = [
    {
      title: "ADN del Proyecto",
      description: "Configura los elementos fundamentales de tu proyecto",
      progress: 100,
      status: "completed",
      link: "/bible/dna",
    },
    {
      title: "Personajes",
      description: "Desarrolla los personajes de tu proyecto",
      progress: 100,
      status: "completed",
      link: "/bible/characters",
    },
    {
      title: "Sinopsis & Logline",
      description: "Define la sinopsis y logline de tu proyecto",
      progress: 50,
      status: "in-progress",
      link: "/bible/synopsis",
    },
    {
      title: "Mundo / Ambientación",
      description: "Crea el mundo y la ambientación de tu proyecto",
      progress: 0,
      status: "pending",
      link: "/bible/world",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed": return "bg-green-500";
      case "in-progress": return "bg-yellow-500";
      case "pending": return "bg-red-500";
      default: return "bg-gray-500";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "completed": return "Completado";
      case "in-progress": return "En progreso";
      case "pending": return "Pendiente";
      default: return "Desconocido";
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Dashboard de la Biblia</h1>
        <p className="text-muted-foreground">Resumen del desarrollo de la fase de Biblia</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Proyecto: {projectData.title}</CardTitle>
          <CardDescription>{projectData.genre} - {projectData.format}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Progreso general</span>
            <span className="text-sm font-medium">{projectData.progress}%</span>
          </div>
          <Progress value={projectData.progress} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
            <div className="space-y-1">
              <p className="text-sm font-medium">Género</p>
              <p className="text-sm text-muted-foreground">🎭 {projectData.genre}</p>
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium">Formato</p>
              <p className="text-sm text-muted-foreground">📼 {projectData.format}</p>
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium">Tono Visual</p>
              <p className="text-sm text-muted-foreground">🎨 {projectData.toneVisual}</p>
            </div>
          </div>
          <div className="space-y-1">
            <p className="text-sm font-medium">Logline</p>
            <p className="text-sm text-muted-foreground italic">"{projectData.logline}"</p>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {sections.map((section, index) => (
          <Card key={index} className="flex flex-col">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>{section.title}</CardTitle>
                  <CardDescription>{section.description}</CardDescription>
                </div>
                <Badge className={getStatusColor(section.status)}>
                  {getStatusText(section.status)}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="flex-grow space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Progreso</span>
                  <span>{section.progress}%</span>
                </div>
                <Progress value={section.progress} />
              </div>
              <Button asChild className="w-full">
                <Link href={section.link}>Ir a {section.title}</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex justify-end">
        <Button 
          className="bg-yellow-500 text-black hover:bg-yellow-600"
          asChild
        >
          <Link href="/script/blueprint">Continuar al Guion</Link>
        </Button>
      </div>
    </div>
  );
}
