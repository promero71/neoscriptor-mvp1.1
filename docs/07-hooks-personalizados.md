# 🪝 Hooks Personalizados

## 🎯 Propósito

Los hooks personalizados en NeoScriptor proporcionan una capa de abstracción entre la interfaz de usuario y los servicios backend (Firebase). Estos hooks manejan:

- La obtención y actualización de datos
- El manejo de estados de carga y errores
- La lógica de negocio específica de cada entidad
- La sincronización en tiempo real

## 📁 Estructura de Hooks

Los hooks se organizan en el directorio `src/hooks/`:

```
src/hooks/
├── useProject.ts        # Hook para proyectos
├── useBible.ts          # Hook para datos de Biblia
├── useScript.ts         # Hook para guiones
├── useCharacters.ts     # Hook para personajes
├── useScenes.ts         # Hook para escenas
├── useStoryboards.ts    # Hook para storyboards
├── useAnimatics.ts      # Hook para animáticas
├── useAuth.ts           # Hook para autenticación
└── useUser.ts           # Hook para datos de usuario
```

## 🪝 Hooks Principales

### useProject

Hook para manejar datos de proyectos:

```typescript
// hooks/useProject.ts
import { useState, useEffect } from 'react';
import { doc, getDoc, setDoc, onSnapshot } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { Project } from '@/lib/types';

export function useProject(projectId: string) {
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  
  useEffect(() => {
    if (!projectId) return;
    
    const unsubscribe = onSnapshot(
      doc(db, 'projects', projectId),
      (docSnap) => {
        if (docSnap.exists()) {
          setProject({ id: docSnap.id, ...docSnap.data() } as Project);
        } else {
          setError(new Error('Project not found'));
        }
        setLoading(false);
      },
      (err) => {
        setError(err);
        setLoading(false);
      }
    );
    
    return () => unsubscribe();
  }, [projectId]);
  
  const updateProject = async (data: Partial<Project>) => {
    if (!projectId) return;
    
    try {
      const docRef = doc(db, 'projects', projectId);
      await setDoc(docRef, data, { merge: true });
    } catch (err) {
      setError(err as Error);
    }
  };
  
  return { project, loading, error, updateProject };
}
```

### useBible

Hook para manejar datos de la Biblia de un proyecto:

```typescript
// hooks/useBible.ts
import { useState, useEffect } from 'react';
import { collection, getDocs, doc, setDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { Bible } from '@/lib/types';

export function useBible(projectId: string) {
  const [bible, setBible] = useState<Bible | null>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchBible = async () => {
      try {
        const bibleCollection = collection(db, 'projects', projectId, 'bibles');
        const bibleSnapshot = await getDocs(bibleCollection);
        
        if (!bibleSnapshot.empty) {
          const bibleDoc = bibleSnapshot.docs[0];
          setBible({ id: bibleDoc.id, ...bibleDoc.data() } as Bible);
        }
      } catch (err) {
        console.error('Error fetching bible:', err);
      } finally {
        setLoading(false);
      }
    };
    
    if (projectId) {
      fetchBible();
    }
  }, [projectId]);
  
  const updateBible = async (data: Partial<Bible>) => {
    if (!bible) return;
    
    try {
      const docRef = doc(db, 'projects', projectId, 'bibles', bible.id);
      await setDoc(docRef, data, { merge: true });
    } catch (err) {
      console.error('Error updating bible:', err);
    }
  };
  
  return { bible, loading, updateBible };
}
```

### useCharacters

Hook para manejar personajes de la Biblia:

```typescript
// hooks/useCharacters.ts
import { useState, useEffect } from 'react';
import { collection, getDocs, addDoc, deleteDoc, doc } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { Character } from '@/lib/types';

export function useCharacters(projectId: string, bibleId: string) {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const charactersCollection = collection(
          db, 
          'projects', 
          projectId, 
          'bibles', 
          bibleId, 
          'characters'
        );
        const charactersSnapshot = await getDocs(charactersCollection);
        
        const charactersData = charactersSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as Character[];
        
        setCharacters(charactersData);
      } catch (err) {
        console.error('Error fetching characters:', err);
      } finally {
        setLoading(false);
      }
    };
    
    if (projectId && bibleId) {
      fetchCharacters();
    }
  }, [projectId, bibleId]);
  
  const addCharacter = async (character: Omit<Character, 'id'>) => {
    try {
      const charactersCollection = collection(
        db, 
        'projects', 
        projectId, 
        'bibles', 
        bibleId, 
        'characters'
      );
      
      const docRef = await addDoc(charactersCollection, character);
      setCharacters([...characters, { id: docRef.id, ...character } as Character]);
    } catch (err) {
      console.error('Error adding character:', err);
    }
  };
  
  const removeCharacter = async (characterId: string) => {
    try {
      const docRef = doc(
        db, 
        'projects', 
        projectId, 
        'bibles', 
        bibleId, 
        'characters', 
        characterId
      );
      
      await deleteDoc(docRef);
      setCharacters(characters.filter(c => c.id !== characterId));
    } catch (err) {
      console.error('Error removing character:', err);
    }
  };
  
  return { characters, loading, addCharacter, removeCharacter };
}
```

### useScript

Hook para manejar datos del guion:

```typescript
// hooks/useScript.ts
import { useState, useEffect } from 'react';
import { collection, getDocs, doc, setDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { Script } from '@/lib/types';

export function useScript(projectId: string) {
  const [script, setScript] = useState<Script | null>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchScript = async () => {
      try {
        const scriptsCollection = collection(db, 'projects', projectId, 'scripts');
        const scriptsSnapshot = await getDocs(scriptsCollection);
        
        if (!scriptsSnapshot.empty) {
          const scriptDoc = scriptsSnapshot.docs[0];
          setScript({ id: scriptDoc.id, ...scriptDoc.data() } as Script);
        }
      } catch (err) {
        console.error('Error fetching script:', err);
      } finally {
        setLoading(false);
      }
    };
    
    if (projectId) {
      fetchScript();
    }
  }, [projectId]);
  
  const updateScript = async (data: Partial<Script>) => {
    if (!script) return;
    
    try {
      const docRef = doc(db, 'projects', projectId, 'scripts', script.id);
      await setDoc(docRef, data, { merge: true });
    } catch (err) {
      console.error('Error updating script:', err);
    }
  };
  
  return { script, loading, updateScript };
}
```

### useAuth

Hook para manejar autenticación:

```typescript
// hooks/useAuth.ts
import { useState, useEffect } from 'react';
import { onAuthStateChanged, User } from 'firebase/auth';
import { auth } from '@/lib/firebase';

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    
    return () => unsubscribe();
  }, []);
  
  return { user, loading };
}
```

## 🔄 Conexión UI con Firebase

### Ejemplo de Uso en Componentes

```tsx
// components/bible/BibleDNA.tsx
import { useProject } from '@/hooks/useProject';
import { useBible } from '@/hooks/useBible';

export default function BibleDNA({ projectId }: { projectId: string }) {
  const { project, loading: projectLoading } = useProject(projectId);
  const { bible, loading: bibleLoading, updateBible } = useBible(projectId);
  
  if (projectLoading || bibleLoading) {
    return <div>Cargando...</div>;
  }
  
  const handleSave = async (data: Partial<Bible>) => {
    await updateBible(data);
  };
  
  return (
    <div>
      <h1>{project?.title}</h1>
      <Input 
        defaultValue={bible?.title} 
        onBlur={(e) => handleSave({ title: e.target.value })}
      />
      {/* Resto del formulario */}
    </div>
  );
}
```

## 🧪 Manejo de Estados

### Loading States

Todos los hooks manejan estados de carga:

```typescript
const { data, loading, error } = useProject(projectId);

if (loading) return <Spinner />;
if (error) return <ErrorMessage error={error} />;
return <ProjectView project={data} />;
```

### Optimistic Updates

Para mejor experiencia de usuario, se implementan actualizaciones optimistas:

```typescript
const updateProjectOptimistic = async (data: Partial<Project>) => {
  // Actualización optimista
  const previousProject = project;
  setProject({ ...project, ...data } as Project);
  
  try {
    // Actualización real
    await updateProject(data);
  } catch (err) {
    // Revertir en caso de error
    setProject(previousProject);
    console.error('Error updating project:', err);
  }
};
```

## 🛠 Buenas Prácticas

1. **Un hook por entidad principal** - Cada hook se enfoca en una entidad específica
2. **Manejo de errores** - Todos los hooks deben manejar errores apropiadamente
3. **Tipado fuerte** - Utilizar interfaces TypeScript para definir estructuras de datos
4. **Sincronización en tiempo real** - Usar `onSnapshot` para datos que cambian frecuentemente
5. **Limpieza de suscripciones** - Siempre limpiar observadores en `useEffect`
6. **Reutilización** - Diseñar hooks para ser reutilizables en múltiples componentes

## 🚀 Futuras Mejoras

1. **Caching** - Implementar caching para mejorar el rendimiento
2. **Paginación** - Para colecciones grandes
3. **Debounce** - Para evitar actualizaciones innecesarias
4. **Prefetching** - Cargar datos antes de que se necesiten
5. **Suspense** - Integración con React Suspense para mejor manejo de loading states

Los hooks personalizados proporcionan una interfaz limpia y consistente entre la UI y los servicios backend, facilitando el mantenimiento y la evolución de la aplicación.