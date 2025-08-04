# 📤 Exportar a CapCut

## 🎯 Propósito

La exportación a CapCut permite a los usuarios de NeoScriptor llevar sus proyectos a una plataforma de edición móvil popular, facilitando la colaboración y el acceso desde dispositivos móviles. Esta función exporta todos los elementos necesarios en un archivo ZIP estructurado que puede importarse directamente en CapCut.

## 📦 Estructura de Exportación

### Formato ZIP

La exportación a CapCut genera un archivo ZIP con la siguiente estructura:

```
proyecto-capcut-export.zip
├── clips/
│   ├── scene_001.mp4
│   ├── scene_002.mp4
│   └── scene_003.mp4
├── audio/
│   ├── voz_001.mp3
│   ├── musica.mp3
│   └── efectos/
│       ├── sonido1.wav
│       └── sonido2.wav
├── images/
│   ├── storyboard_001.jpg
│   └── referencias/
│       ├── ref1.jpg
│       └── ref2.png
├── timeline.json
├── proyecto.json
└── README.md
```

### Archivo timeline.json

El archivo `timeline.json` contiene la estructura temporal del proyecto:

```json
{
  "version": "1.0",
  "duration": 540,
  "tracks": [
    {
      "type": "video",
      "clips": [
        {
          "id": "clip_001",
          "file": "clips/scene_001.mp4",
          "start": 0,
          "duration": 120,
          "position": { "x": 0, "y": 0 },
          "scale": 1.0
        }
      ]
    },
    {
      "type": "audio",
      "clips": [
        {
          "id": "audio_001",
          "file": "audio/voces/voces_001.mp3",
          "start": 0,
          "duration": 120
        }
      ]
    }
  ]
}
```

## ⚙️ Implementación Técnica

### Componente de Exportación

```tsx
// components/export/CapCutExport.tsx
import { Button } from '@/components/ui/button';
import { useProject } from '@/hooks/useProject';

export default function CapCutExport({ projectId }: { projectId: string }) {
  const { project } = useProject(projectId);
  const [isExporting, setIsExporting] = useState(false);
  
  const handleExport = async () => {
    setIsExporting(true);
    
    try {
      // Generar datos para exportación
      const exportData = await prepareCapCutExport(projectId);
      
      // Crear archivo ZIP
      const zipBlob = await createCapCutZip(exportData);
      
      // Descargar archivo
      downloadBlob(zipBlob, `${project.title}-capcut-export.zip`);
      
      // Registrar exportación
      logExportAction(projectId, 'capcut');
    } catch (error) {
      console.error('Error exporting to CapCut:', error);
    } finally {
      setIsExporting(false);
    }
  };
  
  return (
    <div className="capcut-export p-4 border rounded">
      <h3 className="font-bold mb-2">Exportar a CapCut</h3>
      <p className="text-sm text-gray-600 mb-4">
        Exporta tu proyecto con todos los clips, audio y estructura de timeline 
        para importar directamente en CapCut.
      </p>
      
      <Button 
        onClick={handleExport}
        disabled={isExporting}
        className="bg-purple-600 hover:bg-purple-700"
      >
        {isExporting ? 'Exportando...' : '📤 Exportar a CapCut'}
      </Button>
      
      <div className="mt-4 text-xs text-gray-500">
        <p>• Incluye todos los clips de video</p>
        <p>• Incluye pistas de audio</p>
        <p>• Mantiene la estructura de timeline</p>
        <p>• Compatible con CapCut móvil y desktop</p>
      </div>
    </div>
  );
}
```

### Preparación de Datos

```typescript
// lib/capcutExport.ts
export async function prepareCapCutExport(projectId: string) {
  // Obtener datos del proyecto
  const project = await getProject(projectId);
  
  // Obtener clips de video
  const clips = await getProjectClips(projectId);
  
  // Obtener pistas de audio
  const audioTracks = await getProjectAudio(projectId);
  
  // Obtener imágenes de storyboard
  const storyboards = await getProjectStoryboards(projectId);
  
  // Crear estructura de timeline
  const timeline = createTimelineStructure(clips, audioTracks);
  
  // Preparar metadatos del proyecto
  const projectMetadata = {
    id: project.id,
    title: project.title,
    format: project.format,
    duration: calculateProjectDuration(clips),
    createdAt: new Date().toISOString()
  };
  
  return {
    project: projectMetadata,
    clips,
    audio: audioTracks,
    storyboards,
    timeline
  };
}
```

### Generación del ZIP

```typescript
// lib/zipGenerator.ts
import JSZip from 'jszip';

export async function createCapCutZip(exportData: any): Promise<Blob> {
  const zip = new JSZip();
  
  // Crear directorios
  const clipsFolder = zip.folder('clips');
  const audioFolder = zip.folder('audio');
  const imagesFolder = zip.folder('images');
  
  // Agregar clips de video
  for (const clip of exportData.clips) {
    const blob = await fetch(clip.url).then(r => r.blob());
    clipsFolder?.file(clip.filename, blob);
  }
  
  // Agregar pistas de audio
  for (const audio of exportData.audio) {
    const blob = await fetch(audio.url).then(r => r.blob());
    audioFolder?.file(audio.filename, blob);
  }
  
  // Agregar imágenes
  for (const image of exportData.storyboards) {
    const blob = await fetch(image.url).then(r => r.blob());
    imagesFolder?.file(image.filename, blob);
  }
  
  // Agregar archivos de estructura
  zip.file('timeline.json', JSON.stringify(exportData.timeline, null, 2));
  zip.file('proyecto.json', JSON.stringify(exportData.project, null, 2));
  zip.file('README.md', generateReadme(exportData.project));
  
  // Generar ZIP
  return await zip.generateAsync({ type: 'blob' });
}
```

## 🎨 Integración con la Interfaz

### Panel de Exportación

```tsx
// components/export/ExportPanel.tsx
export default function ExportPanel({ projectId }: { projectId: string }) {
  return (
    <div className="export-panel space-y-4">
      <h2 className="text-xl font-bold">Exportar Proyecto</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <CapCutExport projectId={projectId} />
        <PDFExport projectId={projectId} />
        <VideoExport projectId={projectId} />
        <FinalCutExport projectId={projectId} />
      </div>
    </div>
  );
}
```

### Opciones Avanzadas

```tsx
// components/export/CapCutAdvancedOptions.tsx
export default function CapCutAdvancedOptions({ 
  options, 
  onChange 
}: { 
  options: CapCutExportOptions; 
  onChange: (options: CapCutExportOptions) => void; 
}) {
  return (
    <div className="advanced-options mt-4 p-4 border rounded">
      <h4 className="font-bold mb-2">Opciones Avanzadas</h4>
      
      <div className="space-y-2">
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={options.includeStoryboards}
            onChange={(e) => onChange({
              ...options,
              includeStoryboards: e.target.checked
            })}
            className="mr-2"
          />
          Incluir imágenes de storyboard
        </label>
        
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={options.includeReferences}
            onChange={(e) => onChange({
              ...options,
              includeReferences: e.target.checked
            })}
            className="mr-2"
          />
          Incluir material de referencia
        </label>
        
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={options.optimizeForMobile}
            onChange={(e) => onChange({
              ...options,
              optimizeForMobile: e.target.checked
            })}
            className="mr-2"
          />
          Optimizar para dispositivos móviles
        </label>
      </div>
    </div>
  );
}
```

## 📈 Beneficios

### Sin Coste de FFmpeg

1. **Procesamiento en el cliente** - No requiere servidores de procesamiento costosos
2. **Exportación instantánea** - Los usuarios pueden exportar inmediatamente
3. **Privacidad** - Los archivos no salen del dispositivo del usuario
4. **Escalabilidad** - No hay límites de procesamiento en el servidor

### Acceso Rápido

1. **Integración móvil** - CapCut es una de las apps de edición más populares en móviles
2. **Flujo de trabajo continuo** - Los usuarios pueden continuar trabajando en sus proyectos en cualquier dispositivo
3. **Colaboración** - Fácil compartir proyectos con otros usuarios de CapCut
4. **Publicación directa** - Publicar directamente desde CapCut a redes sociales

## 🛠 Consideraciones Técnicas

### Limitaciones de Formato

```typescript
// utils/capcutFormatValidator.ts
export function validateCapCutCompatibility(project: any) {
  const issues = [];
  
  // Verificar resolución de video
  if (project.videoResolution.width > 3840) {
    issues.push('La resolución de video excede el máximo recomendado para CapCut (4K)');
  }
  
  // Verificar duración
  if (project.duration > 3600) { // 1 hora
    issues.push('Proyectos muy largos pueden tener problemas de rendimiento en CapCut');
  }
  
  // Verificar número de clips
  if (project.clips.length > 1000) {
    issues.push('Demasiados clips pueden causar problemas de importación');
  }
  
  return issues;
}
```

### Optimización

```typescript
// utils/capcutOptimizer.ts
export async function optimizeForCapCut(projectData: any) {
  // Optimizar clips para dispositivos móviles
  const optimizedClips = await Promise.all(
    projectData.clips.map(clip => optimizeClipForMobile(clip))
  );
  
  // Reducir resolución si es necesario
  const optimizedResolution = adjustResolutionForMobile(
    projectData.videoResolution
  );
  
  // Comprimir audio si es necesario
  const optimizedAudio = await Promise.all(
    projectData.audio.map(audio => compressAudioForMobile(audio))
  );
  
  return {
    ...projectData,
    clips: optimizedClips,
    videoResolution: optimizedResolution,
    audio: optimizedAudio
  };
}
```

## 🧪 Pruebas y Validación

### Pruebas de Importación

```typescript
// __tests__/capcutExport.test.ts
describe('CapCut Export', () => {
  it('should generate valid ZIP structure', async () => {
    const exportData = await prepareCapCutExport('test-project');
    const zipBlob = await createCapCutZip(exportData);
    
    // Verificar que el ZIP se genera correctamente
    expect(zipBlob).toBeInstanceOf(Blob);
    expect(zipBlob.size).toBeGreaterThan(0);
  });
  
  it('should include required files', async () => {
    // Verificar que todos los archivos requeridos están presentes
  });
  
  it('should maintain timeline structure', async () => {
    // Verificar que la estructura de timeline es válida
  });
});
```

## 🚀 Futuras Mejoras

1. **Plantillas de CapCut** - Generar plantillas personalizadas para CapCut
2. **Sincronización en la nube** - Integración directa con la cuenta de CapCut
3. **Efectos preconfigurados** - Exportar efectos y transiciones compatibles
4. **Actualización automática** - Sincronizar cambios del proyecto con CapCut
5. **Comentarios y revisiones** - Exportar notas de feedback al equipo

La exportación a CapCut proporciona una puerta de enlace versátil entre el entorno profesional de NeoScriptor y la facilidad de uso de una aplicación móvil popular, permitiendo a los creadores continuar su trabajo en cualquier dispositivo.