# 🔄 Gestión del Estado

## 🎯 Enfoque Actual

NeoScriptor está actualmente en fase de prototipo visual, por lo que utiliza datos simulados en lugar de una gestión de estado completa. Sin embargo, la arquitectura está preparada para implementar una gestión de estado robusta cuando se conecte con servicios backend.

## 📦 Estado Local con React

Durante la fase de prototipo, el estado se maneja principalmente con los hooks básicos de React:

### useState
Para manejar estado local en componentes:

```tsx
import { useState } from 'react';

export default function BibleDNA() {
  const [title, setTitle] = useState("Echoes of Nebula");
  
  return (
    <Input 
      value={title} 
      onChange={(e) => setTitle(e.target.value)} 
    />
  );
}
```

### useContext
Para compartir estado entre componentes relacionados:

```tsx
import { createContext, useContext, useState } from 'react';

const ProjectContext = createContext();

export function ProjectProvider({ children }) {
  const [currentProject, setCurrentProject] = useState(mockProject);
  
  return (
    <ProjectContext.Provider value={{ currentProject, setCurrentProject }}>
      {children}
    </ProjectContext.Provider>
  );
}

export function useProject() {
  return useContext(ProjectContext);
}
```

## 🚀 Planificación para Gestión de Estado Avanzada

### Zustand (Recomendado)
Para una gestión de estado más avanzada, se planea implementar [Zustand](https://github.com/pmndrs/zustand):

#### Ventajas:
- API simple y ligera
- No requiere envolver la aplicación en providers
- Facilidad para acceder al estado desde cualquier parte
- Buen rendimiento con selectors

#### Ejemplo de implementación futura:

```ts
// stores/projectStore.ts
import { create } from 'zustand';

type ProjectState = {
  currentProject: Project | null;
  currentPhase: ModuleType;
  setCurrentProject: (project: Project) => void;
  setCurrentPhase: (phase: ModuleType) => void;
};

export const useProjectStore = create<ProjectState>((set) => ({
  currentProject: null,
  currentPhase: 'bible',
  setCurrentProject: (project) => set({ currentProject: project }),
  setCurrentPhase: (phase) => set({ currentPhase: phase }),
}));
```

### Redux Toolkit (Alternativa)
Si se requiere una solución más robusta:

#### Ventajas:
- Ecosistema maduro
- Herramientas de desarrollo excelentes
- Prediccible con patrón Flux

#### Consideraciones:
- Más boilerplate
- Mayor complejidad inicial

## 📊 Estado de la Aplicación

### Entidades Principales

1. **currentProject** - Proyecto actualmente seleccionado
2. **currentPhase** - Fase actual del proyecto (bible, script, etc.)
3. **userPreferences** - Preferencias del usuario (tema, idioma, etc.)
4. **uiState** - Estado de componentes UI (sidebar abierto/cerrado, etc.)

### Ejemplo de Estructura de Estado

```ts
type AppState = {
  // Proyecto actual
  currentProject: {
    id: string;
    title: string;
    format: string;
    genre: string;
    currentPhase: ModuleType;
  } | null;
  
  // Fase actual
  currentPhase: ModuleType; // 'bible' | 'script' | 'storyboard' | 'animatic' | 'production'
  
  // Preferencias del usuario
  userPreferences: {
    theme: 'light' | 'dark' | 'system';
    language: string;
  };
  
  // Estado de UI
  ui: {
    sidebarOpen: boolean;
    inspectorOpen: boolean;
  };
};
```

## 🔌 Conexión con Componentes

### Uso en Componentes de UI

```tsx
// En un componente funcional
import { useProjectStore } from '@/stores/projectStore';

export default function ProjectHeader() {
  const { currentProject, setCurrentProject } = useProjectStore();
  
  return (
    <header>
      <h1>{currentProject?.title}</h1>
      {/* Otros elementos del header */}
    </header>
  );
}
```

### Manejo de Formularios

```tsx
export default function BibleForm() {
  const { currentProject, updateProject } = useProjectStore();
  const [formData, setFormData] = useState({
    title: currentProject?.title || '',
    genre: currentProject?.genre || '',
  });
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateProject(currentProject!.id, formData);
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <Input 
        value={formData.title}
        onChange={(e) => setFormData({...formData, title: e.target.value})}
      />
      {/* Otros campos */}
      <Button type="submit">Guardar</Button>
    </form>
  );
}
```

## 🌐 Estado Global vs Local

### Estado Local
- Datos temporales de formularios
- Estado de componentes UI (abierto/cerrado)
- Selecciones temporales

### Estado Global
- Proyecto actual
- Fase actual del proyecto
- Preferencias del usuario
- Datos de navegación

## 🧪 Pruebas de Estado

Durante la fase de prototipo, se utilizan datos simulados para probar el comportamiento del estado:

```ts
// Simulación de estado para pruebas
const mockState = {
  currentProject: mockProject,
  currentPhase: 'bible' as ModuleType,
  userPreferences: {
    theme: 'dark',
    language: 'es',
  },
  ui: {
    sidebarOpen: true,
    inspectorOpen: true,
  },
};
```

## 🔄 Sincronización con Backend

Cuando se implemente Firebase, el estado se sincronizará:

1. **Carga inicial**: Obtener estado del backend al cargar la aplicación
2. **Actualizaciones**: Enviar cambios al backend cuando el estado local cambie
3. **Sincronización en tiempo real**: Escuchar cambios del backend y actualizar el estado local

```ts
// Ejemplo conceptual de sincronización futura
useEffect(() => {
  const unsubscribe = firestore
    .collection('projects')
    .doc(projectId)
    .onSnapshot((doc) => {
      if (doc.exists) {
        setCurrentProject(doc.data());
      }
    });
    
  return () => unsubscribe();
}, [projectId]);
```

## 🛠 Buenas Prácticas

1. **Mantener el estado lo más plano posible** para facilitar la gestión
2. **Normalizar datos relacionales** para evitar duplicados
3. **Usar selectores para acceder a partes específicas del estado**
4. **Separar lógica de negocio del estado puro**
5. **Implementar carga y manejo de errores apropiado**
6. **Considerar el rendimiento** en actualizaciones frecuentes

La gestión del estado en NeoScriptor está diseñada para escalar desde un prototipo simple hasta una aplicación compleja con múltiples fuentes de datos y sincronización en tiempo real.