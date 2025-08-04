# 🎨 Prototipo Visual y Enfoque UI First

## 🎯 Prioridad: UI First

NeoScriptor sigue un enfoque "UI First" que prioriza la creación de una interfaz de usuario sólida y coherente antes de conectar con servicios backend. Este enfoque permite:

- Validar rápidamente el flujo de trabajo y la experiencia de usuario
- Iterar rápidamente en el diseño sin depender de servicios backend
- Desarrollar una interfaz consistente y predecible
- Facilitar la colaboración entre diseñadores y desarrolladores
- Reducir el tiempo de desarrollo mediante prototipado rápido

## 🧪 Uso de Datos Simulados (Mock Data)

Durante la fase de prototipo visual, la aplicación utiliza datos simulados definidos en `src/lib/mock-data.ts`. Esta estrategia permite:

### Ventajas:
- Desarrollo independiente del backend
- Pruebas consistentes sin datos variables
- Demostración de la interfaz sin necesidad de conexión a servicios
- Velocidad en el desarrollo de componentes UI

### Implementación:
```typescript
// Ejemplo de uso de mock data
import { mockProject, mockBible } from "@/lib/mock-data";

export default function BibleDNA() {
  return (
    <div>
      <h1>{mockProject.title}</h1>
      <p>{mockBible.logline}</p>
    </div>
  );
}
```

## 🔄 Flujo de Navegación

El flujo de navegación en NeoScriptor está diseñado para ser intuitivo y eficiente:

### Navegación Principal:
1. **Dashboard** - Vista general del proyecto
2. **Biblia** - Desarrollo del concepto fundamental
3. **Guion** - Escritura y estructuración del guion
4. **Storyboard** - Visualización de escenas
5. **Animática** - Versión animada básica
6. **Producción** - Planificación y gestión

### Navegación por Módulos:
Cada módulo contiene subsecciones específicas:
- **Biblia**: ADN, Personajes, Sinopsis, Mundo
- **Guion**: Blueprint, Escenas, Editor
- **Producción**: Presupuesto, Calendario, Desglose

### Componentes de Navegación:
- **Header** - Menús desplegables para cada módulo
- **Sidebar** - Inspector de IA y propiedades rápidas
- **Breadcrumbs** - Navegación jerárquica clara

## 🎨 Consistencia Visual

Para mantener una experiencia de usuario coherente:

### Componentes UI:
- Uso exclusivo de componentes shadcn/ui
- Estilos consistentes con Tailwind CSS
- Paleta de colores definida en `tailwind.config.ts`

### Colores Principales:
- **Acciones de IA**: `bg-yellow-500` con texto negro
- **Exportación**: `bg-purple-600`
- **Sidebar**: Fondo blanco en modo claro, oscuro en modo oscuro
- **Botones primarios**: Amarillo para acciones principales

### Tipografía:
- Fuente sans-serif para la interfaz general
- Fuente monoespaciada para el editor de guion
- Jerarquía tipográfica clara con tamaños y pesos consistentes

## 🧱 Componentes Base

Los componentes base siguen principios de diseño consistentes:

1. **Cards** - Contenedores de información con encabezados y contenido
2. **Forms** - Entradas de datos con etiquetas y validación
3. **Buttons** - Acciones con variantes claras (primario, secundario, IA)
4. **Navigation** - Menús y enlaces con estados activos claros

Este enfoque UI First asegura que la interfaz esté completamente definida y probada antes de integrar servicios backend, resultando en una experiencia de usuario más pulida y coherente.