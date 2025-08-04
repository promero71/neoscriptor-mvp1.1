# 🎨 Componentes UI y Estilos

## 🧩 Componentes shadcn/ui

NeoScriptor utiliza [shadcn/ui](https://ui.shadcn.com/) como biblioteca principal de componentes UI. Esta elección proporciona:

- Componentes accesibles y bien diseñados
- Fácil personalización mediante clases Tailwind
- Consistencia en la experiencia de usuario
- Mantenimiento comunitario activo

### Componentes Principales Utilizados

#### Button
Botones para acciones primarias, secundarias y de IA:

```tsx
import { Button } from "@/components/ui/button";

// Botón primario de IA
<Button className="bg-yellow-500 text-black hover:bg-yellow-600">
  🤖 Sugerir ADN con IA
</Button>

// Botón de exportación
<Button className="bg-purple-600 hover:bg-purple-700">
  Exportar
</Button>

// Botón secundario
<Button variant="outline">Cancelar</Button>
```

#### Card
Contenedores para agrupar información relacionada:

```tsx
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

<Card>
  <CardHeader>
    <CardTitle>Información Básica</CardTitle>
  </CardHeader>
  <CardContent>
    {/* Contenido de la tarjeta */}
  </CardContent>
</Card>
```

#### Input y Textarea
Campos de entrada de datos:

```tsx
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

<div>
  <Label htmlFor="title">Título del Proyecto</Label>
  <Input id="title" defaultValue="Echoes of Nebula" />
</div>

<Textarea 
  placeholder="Lista de películas, libros o referencias visuales..." 
  className="min-h-[120px]"
/>
```

#### Select
Menús desplegables para selección de opciones:

```tsx
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";

<Select defaultValue="Thriller">
  <SelectTrigger>
    <SelectValue placeholder="Selecciona un género" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="Drama">Drama</SelectItem>
    <SelectItem value="Thriller">Thriller</SelectItem>
  </SelectContent>
</Select>
```

#### DropdownMenu
Menús contextuales para navegación y acciones:

```tsx
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="ghost">Biblia</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent align="start" className="w-48">
    <DropdownMenuItem asChild>
      <Link href="/project/[id]/bible/dna">ADN del Proyecto</Link>
    </DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuItem asChild>
      <Link href="/project/[id]/bible/dashboard">Dashboard</Link>
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
```

#### Sidebar
Componente de barra lateral para navegación y herramientas:

```tsx
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader } from "@/components/ui/sidebar";

<Sidebar>
  <SidebarHeader>
    <h2 className="text-lg font-semibold">Inspector</h2>
  </SidebarHeader>
  <SidebarContent>
    {/* Contenido de la barra lateral */}
  </SidebarContent>
  <SidebarFooter>
    {/* Acciones del pie de la barra lateral */}
  </SidebarFooter>
</Sidebar>
```

## 🎨 Estilos Personalizados

### Paleta de Colores Principal

NeoScriptor utiliza una paleta de colores específica definida en `globals.css` y `tailwind.config.ts`:

- **Color principal de IA**: `bg-yellow-500` con texto negro
- **Color de exportación**: `bg-purple-600`
- **Colores del tema claro y oscuro**: Variables CSS personalizadas

### Variables CSS para Temas

Los temas claro y oscuro están definidos con variables CSS:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 220 0% 14%;
  /* Más variables para tema claro */
}

.dark {
  --background: 220 0% 14%;
  --foreground: 0 0% 98%;
  /* Más variables para tema oscuro */
}
```

### Clases Tailwind Personalizadas

Muchas clases Tailwind están extendidas en `tailwind.config.ts` para usar variables CSS:

```ts
theme: {
  extend: {
    colors: {
      background: "var(--background)",
      foreground: "var(--foreground)",
      // Más colores personalizados
    }
  }
}
```

## 🖌 Consistencia Visual

### Botones Especializados

1. **Botones de IA**: Siempre `bg-yellow-500` con texto negro
2. **Botones de Exportación**: Siempre `bg-purple-600`
3. **Botones Primarios**: Colores del tema con variantes
4. **Botones Secundarios**: Variantes outline o ghost

### Tipografía

- **Interfaz general**: Fuente sans-serif predeterminada
- **Editor de guion**: Fuente monoespaciada para formato cinematográfico
- **Jerarquía tipográfica**: Uso consistente de tamaños y pesos

### Espaciado y Layout

- **Grid system**: Uso de grid de Tailwind para layouts responsivos
- **Espaciado consistente**: Uso de clases de margin y padding estandarizadas
- **Componentes contenedores**: Cards y secciones con espaciado interno consistente

## 🧱 Componentes Personalizados

Además de los componentes shadcn/ui, NeoScriptor incluye componentes personalizados:

### Header
Componente de encabezado con navegación por módulos:

```tsx
// src/components/Layout/Header.tsx
<Header activeModule="Biblia" />
```

### AppSidebar
Barra lateral con inspector de IA:

```tsx
// src/components/Sidebar/AppSidebar.tsx
<AppSidebar />
```

### Componentes por Módulo
Cada módulo tiene sus propios componentes especializados en:
- `src/components/bible/`
- `src/components/script/`
- `src/components/storyboard/`
- `src/components/animatic/`
- `src/components/production/`

## 🎯 Buenas Prácticas

1. **Siempre usar componentes shadcn/ui** en lugar de elementos HTML crudos
2. **Mantener consistencia en colores** siguiendo la paleta definida
3. **Utilizar clases utilitarias de Tailwind** en lugar de estilos en línea
4. **Seguir patrones de diseño** establecidos en componentes existentes
5. **Mantener accesibilidad** usando las propiedades adecuadas en componentes

Esta combinación de shadcn/ui y personalización permite crear una interfaz coherente, accesible y visualmente atractiva que cumple con los objetivos de diseño de NeoScriptor.