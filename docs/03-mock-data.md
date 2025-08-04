# 🧪 Datos Simulados (Mock Data)

## 📁 Archivo `mock-data.ts`

El archivo `src/lib/mock-data.ts` contiene datos simulados que se utilizan durante el desarrollo y prototipo de la aplicación. Estos datos permiten:

- Desarrollar la interfaz sin dependencia de servicios backend
- Probar componentes con datos realistas
- Demostrar funcionalidades sin conexión a base de datos
- Mantener consistencia en las pruebas durante el desarrollo

## 📊 Estructura de Datos

### Proyecto (`mockProject`)
Representa un proyecto de contenido audiovisual completo:

```typescript
export const mockProject = {
  id: "proj_001",
  title: "Echoes of Nebula",
  format: "Largometraje",
  genre: "Thriller",
  currentPhase: "bible" as const,
}
```

### Biblia (`mockBible`)
Datos relacionados con la fase de desarrollo de la "biblia" del proyecto:

```typescript
export const mockBible = {
  title: "Echoes of Nebula",
  genre: "Thriller",
  themes: ["Redención", "Traición", "Poder"],
  toneVisual: "Oscuro",
  logline: "Un padre soltero enfrenta su pasado criminal para proteger a su hija.",
  controllingIdea: "Un hombre huye de su pasado, pero debe enfrentarlo para salvar a su hija.",
  characters: [...],
  world: {...}
}
```

### Personajes (`characters`)
Colección de personajes con perfiles detallados:

```typescript
characters: [
  {
    id: "char_001",
    name: "Carlos",
    role: "Protagonista",
    archetype: "Héroe",
    age: 42,
    motivation: "Proteger a su hija",
    wound: "Culpa por un crimen no resuelto",
    arc: "De la huida al enfrentamiento",
    portraitUrl: "/images/carlos.jpg",
  },
  // Más personajes...
]
```

### Mundo (`world`)
Configuración del mundo y ambientación del proyecto:

```typescript
world: {
  rules: ["No se puede mentir sin consecuencias físicas"],
  palette: ["#2A1B3D", "#E63946", "#F1FAEE"],
  moodboardUrls: ["/images/mood1.jpg", "/images/mood2.jpg"],
}
```

## 📦 Cómo Usar los Datos Simulados

### Importación en Componentes

```typescript
import { mockProject, mockBible } from "@/lib/mock-data";
```

### Uso en Componentes React

```typescript
export default function BibleDNA() {
  return (
    <div>
      <h1>{mockBible.title}</h1>
      <p>Género: {mockBible.genre}</p>
      <p>Logline: {mockBible.logline}</p>
    </div>
  );
}
```

### Uso en Listas

```typescript
export default function BibleCharacters() {
  return (
    <div>
      {mockBible.characters.map((character) => (
        <div key={character.id}>
          <h2>{character.name}</h2>
          <p>Rol: {character.role}</p>
          <p>Arquetipo: {character.archetype}</p>
        </div>
      ))}
    </div>
  );
}
```

## 🔄 Estrategia de Reemplazo

Cuando se conecte con servicios reales (Firebase), los datos simulados se reemplazarán siguiendo este patrón:

1. **Mantener la misma estructura de datos** - Las interfaces TypeScript aseguran compatibilidad
2. **Reemplazar importaciones** - Cambiar de mock data a llamadas a la API
3. **Mantener componentes UI** - La interfaz no cambia, solo la fuente de datos

### Ejemplo de Transición

```typescript
// Antes (mock data)
import { mockBible } from "@/lib/mock-data";

// Después (Firebase)
import { useBible } from "@/hooks/useBible";
const { bible } = useBible(projectId);
```

## 🛠 Mantenimiento

Para mantener los datos simulados útiles y realistas:

1. **Actualizar según evolucione el modelo de datos**
2. **Mantener consistencia entre diferentes entidades**
3. **Incluir casos de prueba variados** (proyectos de diferentes géneros, personajes con diferentes arcos, etc.)
4. **Documentar la estructura en los tipos TypeScript**

Los datos simulados son una herramienta fundamental durante la fase de prototipo visual, permitiendo desarrollar una interfaz completa y coherente antes de conectar con servicios backend.