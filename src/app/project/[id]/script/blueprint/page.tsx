// src/app/project/[id]/script/blueprint/page.tsx
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";

export default function ScriptBlueprint() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Blueprint & Beats</h1>
        <Button>Guardar Cambios</Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Configuración del Blueprint</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="template">Plantilla Estructural</Label>
              <Select defaultValue="3-actos">
                <SelectTrigger>
                  <SelectValue placeholder="Selecciona una plantilla" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="3-actos">3 Actos</SelectItem>
                  <SelectItem value="hero-journey">Hero's Journey</SelectItem>
                  <SelectItem value="save-the-cat">Save the Cat</SelectItem>
                  <SelectItem value="linear">Linear</SelectItem>
                  <SelectItem value="noir">Noir</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <Label htmlFor="targetPages">Longitud Objetivo (páginas)</Label>
              <Select defaultValue="90">
                <SelectTrigger>
                  <SelectValue placeholder="Selecciona longitud" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="30">30 (Corto)</SelectItem>
                  <SelectItem value="60">60 (Medio)</SelectItem>
                  <SelectItem value="90">90 (Largometraje)</SelectItem>
                  <SelectItem value="120">120 (Épico)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Beats del Guion</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-gray-800 rounded">
              <div>
                <h3 className="font-medium">Opening Image</h3>
                <p className="text-sm text-gray-400">Página 1</p>
              </div>
              <Button variant="outline" size="sm">Editar</Button>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-gray-800 rounded">
              <div>
                <h3 className="font-medium">Theme Stated</h3>
                <p className="text-sm text-gray-400">Página 5</p>
              </div>
              <Button variant="outline" size="sm">Editar</Button>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-gray-800 rounded">
              <div>
                <h3 className="font-medium">Inciting Incident</h3>
                <p className="text-sm text-gray-400">Página 10</p>
              </div>
              <Button variant="outline" size="sm">Editar</Button>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-gray-800 rounded">
              <div>
                <h3 className="font-medium">Plot Point 1</h3>
                <p className="text-sm text-gray-400">Página 25</p>
              </div>
              <Button variant="outline" size="sm">Editar</Button>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-gray-800 rounded">
              <div>
                <h3 className="font-medium">Midpoint</h3>
                <p className="text-sm text-gray-400">Página 45</p>
              </div>
              <Button variant="outline" size="sm">Editar</Button>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-gray-800 rounded">
              <div>
                <h3 className="font-medium">Plot Point 2</h3>
                <p className="text-sm text-gray-400">Página 75</p>
              </div>
              <Button variant="outline" size="sm">Editar</Button>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-gray-800 rounded">
              <div>
                <h3 className="font-medium">Final Image</h3>
                <p className="text-sm text-gray-400">Página 90</p>
              </div>
              <Button variant="outline" size="sm">Editar</Button>
            </div>
          </div>
          
          <div className="flex space-x-4 mt-6">
            <Button className="bg-purple-600 hover:bg-purple-700">
              🤖 Auto-Beats
            </Button>
            <Button variant="outline">
              ➕ Añadir Beat
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}