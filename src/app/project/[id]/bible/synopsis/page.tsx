// src/app/project/[id]/bible/synopsis/page.tsx
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function BibleSynopsis() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Sinopsis & Logline</h1>
        <Button>Guardar Cambios</Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Idea Controladora</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="controllingIdea">Idea principal del proyecto</Label>
            <Textarea 
              id="controllingIdea" 
              className="min-h-[100px]"
              defaultValue="Un hombre huye de su pasado, pero debe enfrentarlo para salvar a su hija."
            />
            <p className="text-sm text-gray-500 mt-1">85/100 palabras</p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Sinopsis Expandida</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="synopsis">Sinopsis en 2 párrafos</Label>
            <Textarea 
              id="synopsis" 
              className="min-h-[150px]"
              defaultValue="Carlos es un ex convicto que ha construido una nueva vida bajo una identidad falsa. Vive en una pequeña ciudad costera con su hija adolescente Sofía, a quien ha ocultado su pasado. Pero cuando su antiguo jefe del crimen descubre su paradero, Carlos debe decidir si seguir huyendo o enfrentar sus demonios para proteger a su hija."
            />
            <p className="text-sm text-gray-500 mt-1">142/200 palabras</p>
          </div>
          
          <Button variant="outline">➕ Expandir a 2 párrafos</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Logline</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="logline">Logline generado</Label>
            <Textarea 
              id="logline" 
              className="min-h-[80px] font-serif italic"
              defaultValue="Un padre soltero enfrenta su pasado criminal para proteger a su hija."
            />
          </div>
          
          <div className="flex space-x-4">
            <Button className="bg-purple-600 hover:bg-purple-700">
              🤖 Refinar Logline
            </Button>
            <Button variant="outline">
              💾 Guardar Logline
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}