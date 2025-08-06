"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export function ADN() {
  const [projectData, setProjectData] = useState({
    title: "Echoes of Nebula",
    genre: "Thriller",
    format: "Largometraje",
    themes: ["Redención", "Traición", "Poder"],
    toneVisual: "Oscuro",
    inspirations: "Inception, Interstellar, Blade Runner 2049",
    logline: "Un padre soltero enfrenta su pasado criminal para proteger a su hija."
  });

  const handleInputChange = (field: string, value: string) => {
    setProjectData(prev => ({ ...prev, [field]: value }));
  };

  const handleSelectChange = (field: string, value: string) => {
    setProjectData(prev => ({ ...prev, [field]: value }));
  };

  const handleGenerateADN = () => {
    // Simulación de generación de ADN con IA
    console.log("Generando ADN con IA...");
  };

  const handleGenerateLogline = () => {
    // Simulación de generación de logline con IA
    const newLogline = "Un hombre huye de su pasado, pero debe enfrentarlo para salvar a su hija.";
    setProjectData(prev => ({ ...prev, logline: newLogline }));
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">ADN del Proyecto</h1>
        <p className="text-muted-foreground">Define la esencia narrativa de tu proyecto</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Información Básica</CardTitle>
          <CardDescription>Configura los elementos fundamentales de tu proyecto</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Título del Proyecto</Label>
            <Input 
              id="title" 
              value={projectData.title} 
              onChange={(e) => handleInputChange("title", e.target.value)} 
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="genre">Género</Label>
              <Select value={projectData.genre} onValueChange={(value) => handleSelectChange("genre", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecciona un género" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Drama">Drama</SelectItem>
                  <SelectItem value="Thriller">Thriller</SelectItem>
                  <SelectItem value="Comedia">Comedia</SelectItem>
                  <SelectItem value="Acción">Acción</SelectItem>
                  <SelectItem value="Ciencia Ficción">Ciencia Ficción</SelectItem>
                  <SelectItem value="Fantasía">Fantasía</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="format">Formato</Label>
              <Select value={projectData.format} onValueChange={(value) => handleSelectChange("format", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecciona un formato" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Largometraje">Largometraje</SelectItem>
                  <SelectItem value="Serie">Serie</SelectItem>
                  <SelectItem value="Corto">Corto</SelectItem>
                  <SelectItem value="Limited Series">Limited Series</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="toneVisual">Tono Visual</Label>
            <Select value={projectData.toneVisual} onValueChange={(value) => handleSelectChange("toneVisual", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Selecciona un tono visual" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Oscuro">Oscuro</SelectItem>
                <SelectItem value="Luminoso">Luminoso</SelectItem>
                <SelectItem value="Crudo">Crudo</SelectItem>
                <SelectItem value="Onírico">Onírico</SelectItem>
                <SelectItem value="Minimalista">Minimalista</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="inspirations">Inspiraciones</Label>
            <Textarea 
              id="inspirations"
              value={projectData.inspirations} 
              onChange={(e) => handleInputChange("inspirations", e.target.value)}
              placeholder="Lista de películas, libros o referencias visuales..."
              className="min-h-[120px]"
            />
          </div>
        </CardContent>
      </Card>

      <div className="flex flex-wrap gap-4">
        <Button 
          onClick={handleGenerateADN}
          className="bg-yellow-500 text-black hover:bg-yellow-600"
        >
          🤖 Sugerir ADN con IA
        </Button>
        <Button 
          onClick={handleGenerateLogline}
          variant="outline"
        >
          Generar Logline
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Resumen del ADN</CardTitle>
          <CardDescription>Elementos clave de tu proyecto</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h3 className="font-semibold">Género</h3>
              <p className="text-sm text-muted-foreground">🎭 {projectData.genre}</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold">Formato</h3>
              <p className="text-sm text-muted-foreground">📼 {projectData.format}</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold">Tono Visual</h3>
              <p className="text-sm text-muted-foreground">🎨 {projectData.toneVisual}</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold">Temas</h3>
              <div className="flex flex-wrap gap-2">
                {projectData.themes.map((theme, index) => (
                  <span key={index} className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-full">
                    {theme}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Logline</CardTitle>
          <CardDescription>La esencia de tu historia en una frase</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Textarea 
              value={projectData.logline} 
              onChange={(e) => handleInputChange("logline", e.target.value)}
              className="min-h-[100px]"
            />
            <Button 
              onClick={handleGenerateLogline}
              variant="outline"
              size="sm"
            >
              Refinar con IA
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
