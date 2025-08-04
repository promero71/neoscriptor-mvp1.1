// src/app/project/[id]/bible/world/page.tsx
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function BibleWorld() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Mundo / Ambientación</h1>
        <Button>Guardar Cambios</Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Reglas del Mundo</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="rules">Reglas fundamentales del universo</Label>
            <Textarea 
              id="rules" 
              className="min-h-[120px]"
              defaultValue="No se puede mentir sin consecuencias físicas&#10;El tiempo fluye de manera diferente en ciertas zonas&#10;Los recuerdos pueden ser extraídos y transferidos"
            />
          </div>
          
          <Button variant="outline">➕ Añadir Regla</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Paleta de Colores</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex space-x-2">
            <div className="w-12 h-12 rounded bg-purple-900 border border-gray-600"></div>
            <div className="w-12 h-12 rounded bg-red-500 border border-gray-600"></div>
            <div className="w-12 h-12 rounded bg-blue-100 border border-gray-600"></div>
            <div className="w-12 h-12 rounded bg-gray-800 border border-gray-600"></div>
            <div className="w-12 h-12 rounded bg-amber-900 border border-gray-600"></div>
          </div>
          
          <div>
            <Label htmlFor="colors">Códigos de color (hex)</Label>
            <Textarea 
              id="colors" 
              defaultValue="#2A1B3D&#10;#E63946&#10;#F1FAEE&#10;#1D3557&#10;#A8430A"
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Moodboard</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-3 gap-4">
            <div className="aspect-video bg-gray-700 rounded flex items-center justify-center">
              Imagen 1
            </div>
            <div className="aspect-video bg-gray-700 rounded flex items-center justify-center">
              Imagen 2
            </div>
            <div className="aspect-video bg-gray-700 rounded flex items-center justify-center">
              Imagen 3
            </div>
          </div>
          
          <div className="flex space-x-4">
            <Button variant="outline">📤 Subir Imágenes</Button>
            <Button className="bg-purple-600 hover:bg-purple-700">
              🤖 Generar Moodboard
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}