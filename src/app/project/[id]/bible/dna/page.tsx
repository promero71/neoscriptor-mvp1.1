// src/app/project/[id]/bible/dna/page.tsx
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";

export default function BibleDNA() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">ADN del Proyecto</h1>
        <Button>Guardar Cambios</Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Información Básica</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="title">Título del Proyecto</Label>
            <Input id="title" defaultValue="Echoes of Nebula" />
          </div>

          <div>
            <Label htmlFor="genre">Género</Label>
            <Select defaultValue="Thriller">
              <SelectTrigger>
                <SelectValue placeholder="Selecciona un género" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Drama">Drama</SelectItem>
                <SelectItem value="Thriller">Thriller</SelectItem>
                <SelectItem value="Comedia">Comedia</SelectItem>
                <SelectItem value="Ciencia Ficción">Ciencia Ficción</SelectItem>
                <SelectItem value="Fantasía">Fantasía</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="format">Formato</Label>
            <Select defaultValue="Largometraje">
              <SelectTrigger>
                <SelectValue placeholder="Selecciona un formato" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Largometraje">Largometraje</SelectItem>
                <SelectItem value="Serie">Serie</SelectItem>
                <SelectItem value="Corto">Corto</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="themes">Temas</Label>
            <Input id="themes" defaultValue="Redención, Traición, Poder" />
          </div>

          <div>
            <Label htmlFor="tone">Tono Visual</Label>
            <Select defaultValue="Oscuro">
              <SelectTrigger>
                <SelectValue placeholder="Selecciona un tono" />
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
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Inspiraciones</CardTitle>
        </CardHeader>
        <CardContent>
          <Textarea 
            placeholder="Lista de películas, libros o referencias visuales que inspiran este proyecto..." 
            className="min-h-[120px]"
          />
        </CardContent>
      </Card>

      <div className="flex space-x-4">
        <Button className="bg-purple-600 hover:bg-purple-700">
          🤖 Sugerir ADN con IA
        </Button>
        <Button variant="outline">
          🧬 Generar Logline
        </Button>
      </div>
    </div>
  );
}