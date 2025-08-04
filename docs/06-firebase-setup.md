# 🔥 Configuración de Firebase

## 🎯 Propósito

Firebase proporcionará el backend como servicio para NeoScriptor, incluyendo:
- Autenticación de usuarios
- Almacenamiento de datos estructurados (Firestore)
- Almacenamiento de archivos multimedia (Storage)
- Tiempo real y sincronización automática

## ⚙️ Configuración Inicial

### Instalación de Dependencias

```bash
npm install firebase
```

### Configuración del Proyecto

Crear archivo `lib/firebase.ts`:

```typescript
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Inicializar Firebase
export const app = initializeApp(firebaseConfig);

// Servicios de Firebase
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
```

### Variables de Entorno

Crear archivo `.env.local`:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=tu-api-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=tu-auth-domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=tu-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=tu-storage-bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=tu-messaging-sender-id
NEXT_PUBLIC_FIREBASE_APP_ID=tu-app-id
```

## 🗂 Estructura de Colecciones

### Proyectos (`projects`)

Colección raíz que contiene todos los proyectos de los usuarios:

```javascript
// Colección: projects
{
  id: "proj_001",
  title: "Echoes of Nebula",
  format: "Largometraje",
  genre: "Thriller",
  ownerId: "user_123", // UID del usuario propietario
  createdAt: Timestamp,
  updatedAt: Timestamp,
  currentPhase: "bible",
  collaborators: ["user_456", "user_789"], // UIDs de colaboradores
}
```

### Biblias (`bibles`)

Subcolección de proyectos para datos de la fase de Biblia:

```javascript
// Colección: projects/{projectId}/bibles
{
  id: "bible_001",
  projectId: "proj_001",
  title: "Echoes of Nebula",
  genre: "Thriller",
  themes: ["Redención", "Traición", "Poder"],
  toneVisual: "Oscuro",
  logline: "Un padre soltero enfrenta su pasado criminal...",
  controllingIdea: "Un hombre huye de su pasado...",
  createdAt: Timestamp,
  updatedAt: Timestamp,
}
```

### Personajes (`characters`)

Subcolección de biblias:

```javascript
// Colección: projects/{projectId}/bibles/{bibleId}/characters
{
  id: "char_001",
  bibleId: "bible_001",
  name: "Carlos",
  role: "Protagonista",
  archetype: "Héroe",
  age: 42,
  motivation: "Proteger a su hija",
  wound: "Culpa por un crimen no resuelto",
  arc: "De la huida al enfrentamiento",
  portraitUrl: "gs://bucket/images/carlos.jpg",
  createdAt: Timestamp,
  updatedAt: Timestamp,
}
```

### Guión (`scripts`)

Subcolección de proyectos:

```javascript
// Colección: projects/{projectId}/scripts
{
  id: "script_001",
  projectId: "proj_001",
  version: "1.0",
  title: "Echoes of Nebula",
  pages: 45,
  targetPages: 90,
  beatsCompletePct: 60,
  changesPct: 15,
  createdAt: Timestamp,
  updatedAt: Timestamp,
}
```

### Escenas (`scenes`)

Subcolección de guiones:

```javascript
// Colección: projects/{projectId}/scripts/{scriptId}/scenes
{
  id: "scene_001",
  scriptId: "script_001",
  order: 1,
  slugline: "INT. CASA CARLOS - DÍA",
  beatId: "beat_001",
  synopsis: "Carlos prepara el desayuno mientras Sofía baja...",
  wordCount: 250,
  characterIds: ["char_001", "char_002"],
  createdAt: Timestamp,
  updatedAt: Timestamp,
}
```

### Storyboard (`storyboards`)

Subcolección de proyectos:

```javascript
// Colección: projects/{projectId}/storyboards
{
  id: "storyboard_001",
  projectId: "proj_001",
  sceneId: "scene_001",
  imageUrl: "gs://bucket/storyboards/scene1.jpg",
  notes: "Mostrar tensión en el rostro de Carlos",
  createdAt: Timestamp,
  updatedAt: Timestamp,
}
```

### Usuarios (`users`)

Colección para datos adicionales de usuarios:

```javascript
// Colección: users
{
  id: "user_123", // Igual que el UID de Firebase Auth
  email: "user@example.com",
  displayName: "Nombre del Usuario",
  photoURL: "https://example.com/photo.jpg",
  createdAt: Timestamp,
  lastLogin: Timestamp,
  projects: ["proj_001", "proj_002"], // IDs de proyectos
}
```

## 🔐 Reglas de Seguridad

### Reglas Básicas de Firestore

```javascript
// firestore.rules
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Los usuarios deben estar autenticados
    match /users/{userId} {
      allow read, update: if request.auth != null && request.auth.uid == userId;
      allow create: if request.auth != null;
    }
    
    // Los proyectos son accesibles por el propietario y colaboradores
    match /projects/{projectId} {
      allow read, write: if request.auth != null && 
        (resource.data.ownerId == request.auth.uid ||
         request.auth.uid in resource.data.collaborators);
         
      // Subcolecciones heredan permisos
      match /bibles/{bibleId} {
        allow read, write: if request.auth != null && 
          (get(/databases/$(database)/documents/projects/$(projectId)).data.ownerId == request.auth.uid ||
           request.auth.uid in get(/databases/$(database)/documents/projects/$(projectId)).data.collaborators);
      }
      
      match /scripts/{scriptId} {
        allow read, write: if request.auth != null && 
          (get(/databases/$(database)/documents/projects/$(projectId)).data.ownerId == request.auth.uid ||
           request.auth.uid in get(/databases/$(database)/documents/projects/$(projectId)).data.collaborators);
      }
      
      // Repetir para otras subcolecciones...
    }
  }
}
```

## 📦 Firebase Storage

### Estructura de Almacenamiento

```
storage/
├── projects/
│   ├── {projectId}/
│   │   ├── images/
│   │   │   ├── moodboards/
│   │   │   ├── characters/
│   │   │   └── references/
│   │   ├── storyboards/
│   │   ├── animatics/
│   │   └── exports/
└── users/
    └── {userId}/
        └── avatars/
```

### Reglas de Seguridad para Storage

```javascript
// storage.rules
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /projects/{projectId}/{allPaths=**} {
      allow read, write: if request.auth != null && 
        (resource.metadata.ownerId == request.auth.uid ||
         request.auth.uid in resource.metadata.collaborators);
    }
    
    match /users/{userId}/{allPaths=**} {
      allow read: if request.auth != null;
      allow write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

## 🔄 Integración con la Aplicación

### Hooks Personalizados

Crear hooks para interactuar con Firebase:

```typescript
// hooks/useProject.ts
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';

export function useProject(projectId: string) {
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchProject = async () => {
      const docRef = doc(db, 'projects', projectId);
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists()) {
        setProject(docSnap.data() as Project);
      }
      setLoading(false);
    };
    
    fetchProject();
  }, [projectId]);
  
  const updateProject = async (data: Partial<Project>) => {
    const docRef = doc(db, 'projects', projectId);
    await setDoc(docRef, data, { merge: true });
  };
  
  return { project, loading, updateProject };
}
```

## 🧪 Desarrollo Local

### Emuladores de Firebase

Para desarrollo local sin afectar producción:

```bash
npm install -g firebase-tools
firebase init emulators
firebase emulators:start
```

Configurar la aplicación para usar emuladores en desarrollo:

```typescript
import { connectFirestoreEmulator } from 'firebase/firestore';
import { connectAuthEmulator } from 'firebase/auth';
import { connectStorageEmulator } from 'firebase/storage';

if (process.env.NODE_ENV === 'development') {
  connectFirestoreEmulator(db, 'localhost', 8080);
  connectAuthEmulator(auth, 'http://localhost:9099');
  connectStorageEmulator(storage, 'localhost', 9199);
}
```

## 🛠 Migración de Mock Data

Cuando se conecte Firebase, migrar de mock data a datos reales:

```typescript
// Antes (mock data)
import { mockProject } from '@/lib/mock-data';

// Después (Firebase)
import { useProject } from '@/hooks/useProject';

export default function ProjectDashboard({ projectId }) {
  const { project, loading } = useProject(projectId);
  
  if (loading) return <div>Cargando...</div>;
  
  return (
    <div>
      <h1>{project?.title}</h1>
      {/* Resto del componente */}
    </div>
  );
}
```

Esta configuración de Firebase proporcionará una base sólida para el backend de NeoScriptor, permitiendo almacenamiento seguro de datos, autenticación de usuarios y sincronización en tiempo real.