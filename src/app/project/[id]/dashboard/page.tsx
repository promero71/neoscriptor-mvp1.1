// src/app/project/[id]/dashboard/page.tsx
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function ProjectDashboard() {
  return (
    <div className="space-y-6">
      {/* Encabezado */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Echoes of Nebula</h1>
        <Badge variant="outline">Largometraje / Thriller</Badge>
      </div>

      {/* KPIs Visuales */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {/* Biblia */}
        <Card>
          <CardHeader>
            <CardTitle>Biblia</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">60%</div>
            <Badge variant="default" className="bg-green-500">Listo</Badge>
          </CardContent>
        </Card>

        {/* Guion */}
        <Card>
          <CardHeader>
            <CardTitle>Guion</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">30%</div>
            <Badge variant="default" className="bg-yellow-500 text-black">En progreso</Badge>
          </CardContent>
        </Card>

        {/* Storyboard */}
        <Card>
          <CardHeader>
            <CardTitle>Storyboard</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">0%</div>
            <Badge variant="outline">Pendiente</Badge>
          </CardContent>
        </Card>

        {/* Animática */}
        <Card>
          <CardHeader>
            <CardTitle>Animática</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">0%</div>
            <Badge variant="outline">No iniciado</Badge>
          </CardContent>
        </Card>

        {/* Producción */}
        <Card>
          <CardHeader>
            <CardTitle>Producción</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">0%</div>
            <Badge variant="outline">No iniciado</Badge>
          </CardContent>
        </Card>
      </div>

      {/* Barra de Progreso Global */}
      <Card>
        <CardHeader>
          <CardTitle>Progreso del Proyecto</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="w-full bg-gray-600 rounded-full h-3">
            <div className="bg-yellow-500 h-3 rounded-full" style={{ width: "45%" }}></div>
          </div>
          <p className="text-sm text-gray-400 mt-1">45% completado</p>
        </CardContent>
      </Card>

      {/* Acciones rápidas */}
      <div className="flex space-x-4">
        <Button className="bg-yellow-500 text-black hover:bg-yellow-600">
          🤖 Sugerir ADN con IA
        </Button>
        <Button variant="outline">Exportar Guion</Button>
      </div>
    </div>
  );
}