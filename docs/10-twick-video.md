# 🎬 Edición de Animática con Twick

## 🎯 Propósito

Twick es la herramienta de edición de video integrada en NeoScriptor que permite crear animáticas directamente en el navegador. Esta funcionalidad permite a los creadores visualizar el ritmo, la composición y la narrativa de sus proyectos antes de pasar a la producción final.

## 🧩 Integración con Twick

### Arquitectura

Twick se integra en NeoScriptor como un editor de video basado en web que permite:

1. **Edición de clips** - Organizar y cortar clips de video
2. **Añadir transiciones** - Efectos entre escenas
3. **Sincronización de audio** - Añadir música y efectos de sonido
4. **Texto y gráficos** - Superponer títulos y elementos visuales
5. **Exportación** - Generar archivos de video finales

### Componente Principal

```tsx
// components/animatic/TwickEditor.tsx
import { useState, useEffect } from 'react';

export default function TwickEditor({ projectId }: { projectId: string }) {
  const [project, setProject] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Cargar proyecto de animática
    loadAnimaticProject(projectId).then(setProject).finally(() => setIsLoading(false));
  }, [projectId]);
  
  if (isLoading) {
    return <div>Cargando editor de animática...</div>;
  }
  
  return (
    <div className="twick-editor-container">
      <TwickTimeline project={project} />
      <TwickPreview project={project} />
      <TwickToolbar project={project} />
    </div>
  );
}
```

## 🎨 Interfaz de Usuario

### Timeline

El timeline es el componente central para organizar clips:

```tsx
// components/animatic/TwickTimeline.tsx
export default function TwickTimeline({ project }: { project: any }) {
  return (
    <div className="twick-timeline bg-gray-900 p-4">
      <div className="timeline-tracks">
        {/* Pista de video */}
        <div className="track video-track">
          {project.clips.map((clip: any) => (
            <TwickClip key={clip.id} clip={clip} />
          ))}
        </div>
        
        {/* Pista de audio */}
        <div className="track audio-track">
          {project.audioTracks.map((track: any) => (
            <TwickAudioTrack key={track.id} track={track} />
          ))}
        </div>
      </div>
      
      <TwickPlayhead />
    </div>
  );
}
```

### Vista Previa

Componente para previsualizar la animática:

```tsx
// components/animatic/TwickPreview.tsx
export default function TwickPreview({ project }: { project: any }) {
  const [currentTime, setCurrentTime] = useState(0);
  
  return (
    <div className="twick-preview bg-black flex items-center justify-center">
      <video 
        src={project.previewUrl} 
        onTimeUpdate={(e) => setCurrentTime(e.currentTarget.currentTime)}
        className="max-w-full max-h-full"
      />
      <TwickControls 
        currentTime={currentTime} 
        duration={project.duration}
        onSeek={setCurrentTime}
      />
    </div>
  );
}
```

## 🎵 Clips Generados por IA

### Integración con IA

Twick puede utilizar clips generados por IA:

```tsx
// components/animatic/AIClipGenerator.tsx
import { Button } from '@/components/ui/button';
import { useAI } from '@/hooks/useAI';

export default function AIClipGenerator({ onClipGenerated }: { onClipGenerated: (clip: any) => void }) {
  const { generateVideoClip } = useAI();
  const [isGenerating, setIsGenerating] = useState(false);
  
  const handleGenerateClip = async (description: string) => {
    setIsGenerating(true);
    try {
      const clip = await generateVideoClip(description);
      onClipGenerated(clip);
    } catch (error) {
      console.error('Error generating video clip:', error);
    } finally {
      setIsGenerating(false);
    }
  };
  
  return (
    <div className="ai-clip-generator p-4 border rounded">
      <h3 className="font-bold mb-2">Generar Clip con IA</h3>
      <textarea 
        placeholder="Describe la escena que quieres generar..." 
        className="w-full p-2 border rounded"
      />
      <Button 
        onClick={() => handleGenerateClip('')}
        disabled={isGenerating}
        className="mt-2 bg-yellow-500 text-black hover:bg-yellow-600"
      >
        {isGenerating ? 'Generando...' : '🎬 Generar Clip'}
      </Button>
    </div>
  );
}
```

### Biblioteca de Clips

```tsx
// components/animatic/ClipLibrary.tsx
export default function ClipLibrary({ onClipSelect }: { onClipSelect: (clip: any) => void }) {
  const [clips, setClips] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  useEffect(() => {
    // Cargar clips de la biblioteca
    loadClipLibrary(selectedCategory).then(setClips);
  }, [selectedCategory]);
  
  return (
    <div className="clip-library">
      <div className="categories">
        <button 
          onClick={() => setSelectedCategory('all')}
          className={selectedCategory === 'all' ? 'active' : ''}
        >
          Todos
        </button>
        <button 
          onClick={() => setSelectedCategory('ai')}
          className={selectedCategory === 'ai' ? 'active' : ''}
        >
          Generados por IA
        </button>
        <button 
          onClick={() => setSelectedCategory('stock')}
          className={selectedCategory === 'stock' ? 'active' : ''}
        >
          Stock
        </button>
      </div>
      
      <div className="clips-grid">
        {clips.map((clip: any) => (
          <TwickClipThumbnail 
            key={clip.id} 
            clip={clip} 
            onClick={() => onClipSelect(clip)}
          />
        ))}
      </div>
    </div>
  );
}
```

## 🛠 Funcionalidades de Edición

### Cortar y Dividir Clips

```tsx
// components/animatic/ClipEditor.tsx
export default function ClipEditor({ clip, onChange }: { clip: any; onChange: (clip: any) => void }) {
  const handleTrim = (start: number, end: number) => {
    const trimmedClip = {
      ...clip,
      startTime: start,
      endTime: end,
      duration: end - start
    };
    onChange(trimmedClip);
  };
  
  return (
    <div className="clip-editor">
      <TwickTrimSlider 
        duration={clip.originalDuration}
        startTime={clip.startTime}
        endTime={clip.endTime}
        onTrim={handleTrim}
      />
      
      <div className="clip-properties">
        <label>
          Velocidad:
          <input 
            type="range" 
            min="0.1" 
            max="3" 
            step="0.1" 
            value={clip.speed}
            onChange={(e) => onChange({...clip, speed: parseFloat(e.target.value)})}
          />
        </label>
      </div>
    </div>
  );
}
```

### Transiciones

```tsx
// components/animatic/TransitionsPanel.tsx
export default function TransitionsPanel({ 
  selectedClip, 
  onTransitionApply 
}: { 
  selectedClip: any; 
  onTransitionApply: (transition: any) => void; 
}) {
  const transitions = [
    { id: 'fade', name: 'Desvanecer', icon: 'fadeOut' },
    { id: 'wipe', name: 'Barrido', icon: 'wipe' },
    { id: 'slide', name: 'Deslizar', icon: 'slide' },
    { id: 'zoom', name: 'Zoom', icon: 'zoom' },
  ];
  
  return (
    <div className="transitions-panel">
      <h3 className="font-bold mb-2">Transiciones</h3>
      <div className="grid grid-cols-2 gap-2">
        {transitions.map((transition) => (
          <button
            key={transition.id}
            onClick={() => onTransitionApply(transition)}
            className="p-2 border rounded hover:bg-gray-100"
          >
            {transition.name}
          </button>
        ))}
      </div>
    </div>
  );
}
```

## 📤 Exportación a MP4

### Proceso de Renderizado

```tsx
// components/animatic/ExportPanel.tsx
import { Button } from '@/components/ui/button';

export default function ExportPanel({ project }: { project: any }) {
  const [isRendering, setIsRendering] = useState(false);
  const [progress, setProgress] = useState(0);
  
  const handleExport = async () => {
    setIsRendering(true);
    setProgress(0);
    
    try {
      // Iniciar proceso de renderizado
      const renderId = await startRenderProcess(project);
      
      // Monitorear progreso
      const interval = setInterval(async () => {
        const status = await getRenderStatus(renderId);
        setProgress(status.progress);
        
        if (status.completed) {
          clearInterval(interval);
          setIsRendering(false);
          // Descargar archivo
          window.open(status.downloadUrl, '_blank');
        }
        
        if (status.error) {
          clearInterval(interval);
          setIsRendering(false);
          console.error('Render error:', status.error);
        }
      }, 1000);
    } catch (error) {
      setIsRendering(false);
      console.error('Export error:', error);
    }
  };
  
  return (
    <div className="export-panel p-4 border rounded">
      <h3 className="font-bold mb-2">Exportar Animática</h3>
      
      <div className="export-settings mb-4">
        <label>
          Resolución:
          <select className="ml-2 p-1 border rounded">
            <option>720p</option>
            <option>1080p</option>
            <option>4K</option>
          </select>
        </label>
        
        <label className="ml-4">
          Calidad:
          <select className="ml-2 p-1 border rounded">
            <option>Alta</option>
            <option>Media</option>
            <option>Baja</option>
          </select>
        </label>
      </div>
      
      <Button 
        onClick={handleExport}
        disabled={isRendering}
        className="bg-purple-600 hover:bg-purple-700"
      >
        {isRendering ? `Renderizando... ${progress}%` : '🎬 Exportar a MP4'}
      </Button>
    </div>
  );
}
```

### Gestión de Archivos

```typescript
// lib/twickExport.ts
export async function exportAnimatic(project: any, options: ExportOptions) {
  // Preparar proyecto para exportación
  const exportData = prepareExportData(project, options);
  
  // Subir a Firebase Storage
  const storageRef = ref(storage, `projects/${project.id}/animatics/${Date.now()}.mp4`);
  const uploadTask = uploadBytesResumable(storageRef, exportData);
  
  // Monitorear progreso
  uploadTask.on('state_changed', 
    (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log('Upload is ' + progress + '% done');
    },
    (error) => {
      console.error('Upload failed:', error);
    },
    () => {
      console.log('Upload completed');
    }
  );
  
  return getDownloadURL(storageRef);
}
```

## 🧪 Pruebas y Optimización

### Renderizado en Segundo Plano

```typescript
// workers/renderWorker.ts
export function renderFrame(frameData: any): Promise<Blob> {
  // Procesar frame individual
  return new Promise((resolve) => {
    // Operaciones de renderizado
    const canvas = document.createElement('canvas');
    // ... procesamiento de frame
    canvas.toBlob(resolve, 'image/png');
  });
}
```

### Proxy para Proyectos Largos

```typescript
// lib/proxyGenerator.ts
export async function generateProxy(videoFile: File): Promise<Blob> {
  // Generar versión de baja calidad para edición
  // Esto mejora el rendimiento durante la edición
  const video = document.createElement('video');
  video.src = URL.createObjectURL(videoFile);
  
  // Procesar y generar proxy
  // ... implementación de generación de proxy
}
```

## 🚀 Futuras Mejoras

1. **Colaboración en tiempo real** - Múltiples usuarios editando la misma animática
2. **Efectos avanzados** - Keying, máscaras, animaciones complejas
3. **Integración con otras herramientas** - Importación desde Blender, After Effects
4. **Plantillas** - Plantillas predefinidas para diferentes estilos
5. **Análisis de movimiento** - Seguimiento de objetos y estabilización
6. **Renderizado distribuido** - Utilizar múltiples workers para acelerar el proceso

Twick proporciona una solución de edición de video completa y accesible directamente en el navegador, permitiendo a los creadores generar animáticas profesionales sin necesidad de software externo.