// src/app/project/[id]/script/scenes/page.tsx
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function ScriptScenes() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Escenas</h1>
        <Button>➕ Añadir Escena</Button>
      </div>

      <div className="space-y-4">
        {/* Scene 1 */}
        <Card>
          <CardHeader>
            <CardTitle className="flex justify-between items-center">
              <span>Escena 1: INT. CASA CARLOS - DÍA</span>
              <Button variant="outline" size="sm">Editar</Button>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="slugline1">Slugline</Label>
              <Input 
                id="slugline1" 
                defaultValue="INT. CASA CARLOS - DÍA"
              />
            </div>
            
            <div>
              <Label htmlFor="beat1">Vinculado a Beat</Label>
              <Input 
                id="beat1" 
                defaultValue="Opening Image"
              />
            </div>
            
            <div>
              <Label htmlFor="characters1">Personajes</Label>
              <Input 
                id="characters1" 
                defaultValue="CARLOS, SOFÍA"
              />
            </div>
            
            <div>
              <Label htmlFor="synopsis1">Sinopsis</Label>
              <Textarea 
                id="synopsis1" 
                className="min-h-[80px]"
                defaultValue="Carlos prepara el desayuno mientras Sofía baja las escaleras. La normalidad de la escena contrasta con la tensión en el rostro de Carlos, quien revisa constantemente el periódico en busca de noticias."
              />
            </div>
          </CardContent>
        </Card>

        {/* Scene 2 */}
        <Card>
          <CardHeader>
            <CardTitle className="flex justify-between items-center">
              <span>Escena 2: EXT. CALLE PRINCIPAL - DÍA</span>
              <Button variant="outline" size="sm">Editar</Button>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="slugline2">Slugline</Label>
              <Input 
                id="slugline2" 
                defaultValue="EXT. CALLE PRINCIPAL - DÍA"
              />
            </div>
            
            <div>
              <Label htmlFor="beat2">Vinculado a Beat</Label>
              <Input 
                id="beat2" 
                defaultValue="Inciting Incident"
              />
            </div>
            
            <div>
              <Label htmlFor="characters2">Personajes</Label>
              <Input 
                id="characters2" 
                defaultValue="CARLOS, DETECTIVE VARGAS"
              />
            </div>
            
            <div>
              <Label htmlFor="synopsis2">Sinopsis</Label>
              <Textarea 
                id="synopsis2" 
                className="min-h-[80px]"
                defaultValue="Carlos reconoce a su antiguo compañero de crimen, ahora detective, caminando por la calle principal. Debe tomar una decisión rápida para evitar ser visto."
              />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex space-x-4">
        <Button className="bg-purple-600 hover:bg-purple-700">
          🤖 Desglosar IA
        </Button>
        <Button variant="outline">
          📝 Ir al Screenplay Editor
        </Button>
      </div>
    </div>
  );
}