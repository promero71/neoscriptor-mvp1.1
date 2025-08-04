// src/app/project/[id]/bible/characters/page.tsx
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function BibleCharacters() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Personajes</h1>
        <Button>➕ Añadir Personaje</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Character Card 1 */}
        <Card>
          <CardHeader>
            <CardTitle>Carlos</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="role">Rol</Label>
              <Input id="role" defaultValue="Protagonista" />
            </div>
            
            <div>
              <Label htmlFor="archetype">Arquetipo</Label>
              <Input id="archetype" defaultValue="Héroe" />
            </div>
            
            <div>
              <Label htmlFor="age">Edad</Label>
              <Input id="age" type="number" defaultValue="42" />
            </div>
            
            <div>
              <Label htmlFor="motivation">Motivación</Label>
              <Textarea id="motivation" defaultValue="Proteger a su hija" />
            </div>
            
            <div>
              <Label htmlFor="wound">Herida</Label>
              <Textarea id="wound" defaultValue="Culpa por un crimen no resuelto" />
            </div>
            
            <div>
              <Label htmlFor="arc">Arco</Label>
              <Textarea id="arc" defaultValue="De la huida al enfrentamiento" />
            </div>
            
            <Button className="w-full">Guardar Cambios</Button>
          </CardContent>
        </Card>

        {/* Character Card 2 */}
        <Card>
          <CardHeader>
            <CardTitle>Sofía</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="role2">Rol</Label>
              <Input id="role2" defaultValue="Objeto de deseo" />
            </div>
            
            <div>
              <Label htmlFor="archetype2">Arquetipo</Label>
              <Input id="archetype2" defaultValue="Musa" />
            </div>
            
            <div>
              <Label htmlFor="age2">Edad</Label>
              <Input id="age2" type="number" defaultValue="35" />
            </div>
            
            <div>
              <Label htmlFor="motivation2">Motivación</Label>
              <Textarea id="motivation2" defaultValue="Buscar la verdad" />
            </div>
            
            <div>
              <Label htmlFor="wound2">Herida</Label>
              <Textarea id="wound2" defaultValue="Desconfianza en los hombres" />
            </div>
            
            <div>
              <Label htmlFor="arc2">Arco</Label>
              <Textarea id="arc2" defaultValue="De la desconfianza al amor" />
            </div>
            
            <Button className="w-full">Guardar Cambios</Button>
          </CardContent>
        </Card>
      </div>

      <div className="flex space-x-4">
        <Button className="bg-purple-600 hover:bg-purple-700">
          🤖 Completar Perfil con IA
        </Button>
        <Button variant="outline">
          🖼️ Retrato IA
        </Button>
      </div>
    </div>
  );
}