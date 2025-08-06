"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

export function Characters() {
  const [characters, setCharacters] = useState([
    {
      id: "1",
      name: "Carlos",
      role: "Protagonista",
      archetype: "Héroe",
      age: 42,
      motivation: "Proteger a su hija",
      wound: "Culpa por un crimen no resuelto",
      arc: "De la huida al enfrentamiento",
    },
  ]);

  const [newCharacter, setNewCharacter] = useState({
    name: "",
    role: "",
    archetype: "",
    age: 0,
    motivation: "",
    wound: "",
    arc: "",
  });

  const handleAddCharacter = () => {
    if (newCharacter.name) {
      const character = {
        ...newCharacter,
        id: (characters.length + 1).toString(),
        age: Number(newCharacter.age),
      };
      setCharacters([...characters, character]);
      setNewCharacter({
        name: "",
        role: "",
        archetype: "",
        age: 0,
        motivation: "",
        wound: "",
        arc: "",
      });
    }
  };

  const handleRemoveCharacter = (id: string) => {
    setCharacters(characters.filter((char) => char.id !== id));
  };

  const handleInputChange = (field: string, value: string | number) => {
    setNewCharacter(prev => ({ ...prev, [field]: value }));
  };

  const handleCompleteProfile = () => {
    // Simulación de completar perfil con IA
    console.log("Completando perfil con IA...");
  };

  const handleGeneratePortrait = () => {
    // Simulación de generación de retrato con IA
    console.log("Generando retrato con IA...");
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Personajes</h1>
        <p className="text-muted-foreground">Desarrolla los personajes de tu proyecto</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Añadir Nuevo Personaje</CardTitle>
          <CardDescription>Completa la información básica del personaje</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Nombre</Label>
              <Input
                id="name"
                value={newCharacter.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                placeholder="Nombre del personaje"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="role">Rol</Label>
              <Select value={newCharacter.role} onValueChange={(value) => handleInputChange("role", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecciona un rol" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Protagonista">Protagonista</SelectItem>
                  <SelectItem value="Antagonista">Antagonista</SelectItem>
                  <SelectItem value="Personaje Secundario">Personaje Secundario</SelectItem>
                  <SelectItem value="Personaje de Apoyo">Personaje de Apoyo</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="archetype">Arquetipo</Label>
              <Select value={newCharacter.archetype} onValueChange={(value) => handleInputChange("archetype", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecciona un arquetipo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Héroe">Héroe</SelectItem>
                  <SelectItem value="Villano">Villano</SelectItem>
                  <SelectItem value="Mentor">Mentor</SelectItem>
                  <SelectItem value="Aliado">Aliado</SelectItem>
                  <SelectItem value="Amigo">Amigo</SelectItem>
                  <SelectItem value="Amante">Amante</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="age">Edad</Label>
              <Input
                id="age"
                type="number"
                value={newCharacter.age || ""}
                onChange={(e) => handleInputChange("age", e.target.value)}
                placeholder="Edad del personaje"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="motivation">Motivación</Label>
            <Textarea
              id="motivation"
              value={newCharacter.motivation}
              onChange={(e) => handleInputChange("motivation", e.target.value)}
              placeholder="¿Qué impulsa a este personaje?"
              className="min-h-[80px]"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="wound">Herida</Label>
            <Textarea
              id="wound"
              value={newCharacter.wound}
              onChange={(e) => handleInputChange("wound", e.target.value)}
              placeholder="¿Qué trauma o dolor impulsa al personaje?"
              className="min-h-[80px]"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="arc">Arco del Personaje</Label>
            <Textarea
              id="arc"
              value={newCharacter.arc}
              onChange={(e) => handleInputChange("arc", e.target.value)}
              placeholder="¿Cómo evoluciona el personaje a lo largo de la historia?"
              className="min-h-[80px]"
            />
          </div>
          <Button onClick={handleAddCharacter}>Añadir Personaje</Button>
        </CardContent>
      </Card>

      <div className="flex flex-wrap gap-4">
        <Button 
          onClick={handleCompleteProfile}
          className="bg-yellow-500 text-black hover:bg-yellow-600"
        >
          🤖 Completar Perfil con IA
        </Button>
        <Button 
          onClick={handleGeneratePortrait}
          variant="outline"
        >
          🎨 Retrato IA
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {characters.map((character) => (
          <Card key={character.id} className="flex flex-col">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>{character.name}</CardTitle>
                  <CardDescription>{character.role} • {character.archetype}</CardDescription>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleRemoveCharacter(character.id)}
                >
                  Eliminar
                </Button>
              </div>
            </CardHeader>
            <CardContent className="flex-grow space-y-3">
              <div className="flex items-center justify-center bg-gray-200 dark:bg-gray-700 rounded-lg h-40">
                <span className="text-gray-500 dark:text-gray-400">Imagen del personaje</span>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Edad:</span>
                  <span>{character.age} años</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Motivación:</span>
                  <p>{character.motivation}</p>
                </div>
                <div>
                  <span className="text-muted-foreground">Herida:</span>
                  <p>{character.wound}</p>
                </div>
                <div>
                  <span className="text-muted-foreground">Arco:</span>
                  <p>{character.arc}</p>
                </div>
              </div>
            </CardContent>
            <div className="px-6 pb-6">
              <Badge variant="secondary">Progreso: 100%</Badge>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
