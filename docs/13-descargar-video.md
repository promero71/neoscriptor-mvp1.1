# 🎥 Descargar Video

## 🎯 Propósito

La funcionalidad de descarga de video en NeoScriptor permite a los usuarios exportar y descargar diferentes versiones de sus proyectos, desde tomas individuales hasta la película completa. Esta característica es esencial para revisiones, presentaciones y distribución preliminar.

## 📦 Opciones de Descarga

### 1. Toma Individual (Shot)
- Descargar una toma específica de una escena
- Múltiples formatos y calidades disponibles
- Opciones de recorte y edición básica

### 2. Escena Completa
- Descargar una escena completa con todas sus tomas
- Opciones de transiciones y efectos
- Audio sincronizado

### 3. Proyecto Completo (All Movie)
- Descargar la película completa renderizada
- Múltiples opciones de calidad y formato
- Incluye todas las pistas de audio

## ⚙️ Implementación Técnica

### Componente de Descarga

```tsx
// components/video/VideoDownloadButton.tsx
import { Button } from '@/components/ui/button';
import { downloadVideo } from '@/lib/videoDownloader';

export default function VideoDownloadButton({ 
  projectId, 
  type,
  options 
}: { 
  projectId: string;
  type: 'shot' | 'scene' | 'movie';
  options?: VideoDownloadOptions;
}) {
  const [isDownloading, setIsDownloading] = useState(false);
  const [progress, setProgress] = useState(0);
  
  const handleDownload = async () => {
    setIsDownloading(true);
    setProgress(0);
    
    try {
      await downloadVideo(projectId, type, options, (progress) => {
        setProgress(progress);
      });
    } catch (error) {
      console.error('Error downloading video:', error);
    } finally {
      setIsDownloading(false);
    }
  };
  
  return (
    <div className="video-download">
      <Button 
        onClick={handleDownload}
        disabled={isDownloading}
        className="bg-purple-600 hover:bg-purple-700"
      >
        {isDownloading ? `Descargando... ${progress}%` : '🎥 Descargar Video'}
      </Button>
      
      {isDownloading && (
        <div className="mt-2">
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-purple-600 h-2 rounded-full" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      )}
    </div>
  );
}
```

### Sistema de Descarga

```typescript
// lib/videoDownloader.ts
export async function downloadVideo(
  projectId: string,
  type: 'shot' | 'scene' | 'movie',
  options: VideoDownloadOptions,
  onProgress: (progress: number) => void
): Promise<void> {
  try {
    // 1. Preparar contenido para descarga
    onProgress(10);
    const videoData = await prepareVideoData(projectId, type, options);
    
    // 2. Renderizar si es necesario
    onProgress(30);
    const renderedVideo = await renderVideo(videoData, options);
    
    // 3. Comprimir si es necesario
    onProgress(70);
    const compressedVideo = await compressVideo(renderedVideo, options);
    
    // 4. Descargar
    onProgress(90);
    await downloadBlob(compressedVideo, generateFilename(projectId, type, options));
    
    onProgress(100);
  } catch (error) {
    console.error('Video download failed:', error);
    throw error;
  }
}
```

## 🎨 Interfaz de Usuario

### Panel de Descarga

```tsx
// components/video/DownloadPanel.tsx
export default function DownloadPanel({ projectId }: { projectId: string }) {
  const [downloadType, setDownloadType] = useState<'shot' | 'scene' | 'movie'>('movie');
  const [options, setOptions] = useState<VideoDownloadOptions>({
    quality: 'hd',
    format: 'mp4',
    includeAudio: true,
    includeSubtitles: false
  });
  
  return (
    <div className="download-panel p-6 border rounded">
      <h2 className="text-xl font-bold mb-4">Descargar Video</h2>
      
      <div className="mb-6">
        <h3 className="font-medium mb-2">Tipo de descarga</h3>
        <div className="grid grid-cols-3 gap-2">
          <button
            onClick={() => setDownloadType('shot')}
            className={`p-3 border rounded ${downloadType === 'shot' ? 'bg-purple-100 border-purple-500' : ''}`}
          >
            <div className="font-medium">Toma</div>
            <div className="text-sm text-gray-600">Individual</div>
          </button>
          
          <button
            onClick={() => setDownloadType('scene')}
            className={`p-3 border rounded ${downloadType === 'scene' ? 'bg-purple-100 border-purple-500' : ''}`}
          >
            <div className="font-medium">Escena</div>
            <div className="text-sm text-gray-600">Completa</div>
          </button>
          
          <button
            onClick={() => setDownloadType('movie')}
            className={`p-3 border rounded ${downloadType === 'movie' ? 'bg-purple-100 border-purple-500' : ''}`}
          >
            <div className="font-medium">Película</div>
            <div className="text-sm text-gray-600">Completa</div>
          </button>
        </div>
      </div>
      
      <VideoDownloadOptions 
        type={downloadType}
        options={options}
        onChange={setOptions}
      />
      
      <div className="mt-6">
        <VideoDownloadButton 
          projectId={projectId}
          type={downloadType}
          options={options}
        />
      </div>
    </div>
  );
}
```

### Opciones de Descarga

```tsx
// components/video/VideoDownloadOptions.tsx
export default function VideoDownloadOptions({ 
  type,
  options,
  onChange
}: {
  type: 'shot' | 'scene' | 'movie';
  options: VideoDownloadOptions;
  onChange: (options: VideoDownloadOptions) => void;
}) {
  return (
    <div className="video-download-options space-y-4">
      <div>
        <h3 className="font-medium mb-2">Calidad</h3>
        <div className="grid grid-cols-4 gap-2">
          {[
            { value: 'preview', label: 'Vista previa', resolution: '480p' },
            { value: 'sd', label: 'SD', resolution: '720p' },
            { value: 'hd', label: 'HD', resolution: '1080p' },
            { value: 'fullhd', label: 'Full HD', resolution: '1080p' },
            { value: '2k', label: '2K', resolution: '1440p' },
            { value: '4k', label: '4K', resolution: '2160p' }
          ].map((quality) => (
            <button
              key={quality.value}
              onClick={() => onChange({ ...options, quality: quality.value as any })}
              className={`p-2 border rounded text-sm ${options.quality === quality.value ? 'bg-purple-100 border-purple-500' : ''}`}
            >
              <div className="font-medium">{quality.label}</div>
              <div className="text-xs text-gray-600">{quality.resolution}</div>
            </button>
          ))}
        </div>
      </div>
      
      <div>
        <h3 className="font-medium mb-2">Formato</h3>
        <div className="flex space-x-2">
          {['mp4', 'mov', 'avi', 'mkv'].map((format) => (
            <button
              key={format}
              onClick={() => onChange({ ...options, format: format as any })}
              className={`px-3 py-1 border rounded ${options.format === format ? 'bg-purple-100 border-purple-500' : ''}`}
            >
              {format.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
      
      <div className="space-y-2">
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={options.includeAudio}
            onChange={(e) => onChange({ ...options, includeAudio: e.target.checked })}
            className="mr-2"
          />
          Incluir audio
        </label>
        
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={options.includeSubtitles}
            onChange={(e) => onChange({ ...options, includeSubtitles: e.target.checked })}
            className="mr-2"
          />
          Incluir subtítulos
        </label>
        
        {type === 'movie' && (
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={options.includeBehindTheScenes}
              onChange={(e) => onChange({ ...options, includeBehindTheScenes: e.target.checked })}
              className="mr-2"
            />
            Incluir material detrás de cámaras
          </label>
        )}
      </div>
    </div>
  );
}
```

## ⚡ Generación de Proxies

### Sistema de Proxies

Para proyectos largos, se generan versiones de proxy para acelerar las descargas:

```typescript
// lib/proxyGenerator.ts
export async function generateProxy(videoFile: File, quality: 'low' | 'medium' | 'high'): Promise<Blob> {
  // Crear versión de menor calidad para descargas rápidas
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  
  // Configurar calidad según el parámetro
  const qualitySettings = {
    low: { width: 640, height: 360, bitrate: 1000000 },
    medium: { width: 1280, height: 720, bitrate: 5000000 },
    high: { width: 1920, height: 1080, bitrate: 10000000 }
  };
  
  const settings = qualitySettings[quality];
  
  // Procesar video para crear proxy
  // ... implementación de generación de proxy
  
  return new Blob([], { type: 'video/mp4' });
}
```

### Gestión de Proxies

```typescript
// lib/proxyManager.ts
class ProxyManager {
  private proxies: Map<string, string> = new Map();
  
  async getOrCreateProxy(videoId: string, quality: 'low' | 'medium' | 'high'): Promise<string> {
    const proxyKey = `${videoId}-${quality}`;
    
    if (this.proxies.has(proxyKey)) {
      return this.proxies.get(proxyKey)!;
    }
    
    // Generar nuevo proxy
    const videoFile = await getVideoFile(videoId);
    const proxyBlob = await generateProxy(videoFile, quality);
    const proxyUrl = URL.createObjectURL(proxyBlob);
    
    this.proxies.set(proxyKey, proxyUrl);
    return proxyUrl;
  }
  
  cleanup() {
    // Liberar URLs de objetos
    this.proxies.forEach(proxyUrl => URL.revokeObjectURL(proxyUrl));
    this.proxies.clear();
  }
}

export const proxyManager = new ProxyManager();
```

## 🚀 Optimización de Descargas

### Descargas en Paralelo

```typescript
// lib/parallelDownloader.ts
export async function downloadMultipleVideos(
  videoIds: string[],
  options: VideoDownloadOptions
): Promise<void> {
  const maxConcurrentDownloads = 3;
  const downloadQueue = [...videoIds];
  
  async function processQueue() {
    while (downloadQueue.length > 0) {
      const videoId = downloadQueue.shift();
      if (videoId) {
        await downloadVideo(videoId, 'shot', options, () => {});
      }
    }
  }
  
  // Procesar hasta maxConcurrentDownloads en paralelo
  const workers = Array(Math.min(maxConcurrentDownloads, videoIds.length))
    .fill(0)
    .map(() => processQueue());
  
  await Promise.all(workers);
}
```

### Compresión Inteligente

```typescript
// lib/videoCompressor.ts
export async function compressVideo(
  videoBlob: Blob, 
  targetSizeMB: number
): Promise<Blob> {
  // Calcular factor de compresión necesario
  const currentSizeMB = videoBlob.size / (1024 * 1024);
  const compressionRatio = targetSizeMB / currentSizeMB;
  
  if (compressionRatio >= 1) {
    // No necesita compresión
    return videoBlob;
  }
  
  // Aplicar compresión
  // ... implementación de compresión
  
  return compressedBlob;
}
```

## 🧪 Pruebas y Validación

### Pruebas de Descarga

```typescript
// __tests__/videoDownload.test.ts
describe('Video Download', () => {
  it('should download shot with correct format', async () => {
    const videoBlob = await downloadVideo('project-123', 'shot', {
      quality: 'hd',
      format: 'mp4'
    });
    
    expect(videoBlob).toBeInstanceOf(Blob);
    expect(videoBlob.type).toBe('video/mp4');
  });
  
  it('should maintain video quality', async () => {
    // Verificar que la calidad se mantiene según las opciones
  });
  
  it('should handle large files', async () => {
    // Verificar manejo de archivos grandes
  });
  
  it('should show progress correctly', async () => {
    // Verificar que el progreso se reporta correctamente
  });
});
```

## 🔒 Consideraciones de Seguridad

### Protección de Contenido

```typescript
// lib/videoSecurity.ts
export async function protectVideoDownload(
  videoId: string,
  userId: string
): Promise<boolean> {
  // Verificar permisos del usuario
  const hasPermission = await checkUserPermission(userId, videoId);
  if (!hasPermission) {
    throw new Error('Unauthorized access to video');
  }
  
  // Registrar intento de descarga
  await logDownloadAttempt(videoId, userId);
  
  // Verificar límites de descarga
  const downloadCount = await getUserDownloadCount(userId);
  if (downloadCount > MAX_DOWNLOADS_PER_DAY) {
    throw new Error('Daily download limit exceeded');
  }
  
  return true;
}
```

## 🚀 Futuras Mejoras

1. **Streaming adaptativo** - Descargar diferentes calidades según el ancho de banda
2. **Descargas programadas** - Programar descargas para horas de menor uso
3. **Integración con servicios en la nube** - Guardar directamente en Google Drive, Dropbox, etc.
4. **Descargas torrent** - Para archivos muy grandes
5. **Sincronización entre dispositivos** - Continuar descargas en diferentes dispositivos
6. **Notificaciones push** - Avisar cuando las descargas se completen
7. **Compresión inteligente** - Ajustar compresión según el contenido del video

La funcionalidad de descarga de video proporciona a los usuarios múltiples opciones para exportar y compartir su trabajo, desde versiones rápidas de baja calidad hasta renders completos de alta definición, adaptándose a diferentes necesidades y contextos de uso.