# 🤖 Integración de Inteligencia Artificial

## 🎯 Propósito

La integración de IA en NeoScriptor tiene como objetivo asistir a los creadores en todo el proceso de desarrollo de proyectos audiovisuales, proporcionando sugerencias, generación de contenido y automatización de tareas repetitivas.

## 🧠 Proveedores de IA

### Gemini (Texto)
Para generación de texto y asistencia conceptual:
- Generación de loglines
- Desarrollo de personajes
- Creación de sinopsis
- Sugerencias de temas
- Desarrollo del mundo/ambientación

### ElevenLabs (Voz)
Para generación de voces sintéticas:
- Narración de escenas
- Audios para storyboards
- Previsualización de diálogos

## 🧪 Simulación de IA

Durante la fase de prototipo, se utilizan funciones simuladas en `src/lib/ai.ts`:

```typescript
// lib/ai.ts
export async function generateLogline(projectData: any): Promise<string> {
  // En implementación real, esto llamaría a la API de Gemini
  return "Un padre soltero enfrenta su pasado criminal para proteger a su hija.";
}
```

### Funciones Simuladas Disponibles

1. `generateLogline` - Genera un logline basado en datos del proyecto
2. `suggestThemes` - Sugiere temas basados en género y formato
3. `generateCharacterProfile` - Genera perfil de personaje
4. `generateWorldRules` - Genera reglas para el mundo del proyecto
5. `generateBeats` - Genera beats estructurales del guion
6. `generateScenes` - Genera escenas basadas en beats

## 🔌 Integración con Gemini

### Configuración

```typescript
// lib/gemini.ts
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
const model = genAI.getGenerativeModel({ model: "gemini-pro" });
```

### Ejemplo de Implementación

```typescript
// hooks/useAI.ts
import { model } from '@/lib/gemini';

export async function generateLoglineWithAI(projectData: any): Promise<string> {
  try {
    const prompt = `
      Genera un logline cinematográfico basado en la siguiente información:
      Título: ${projectData.title}
      Género: ${projectData.genre}
      Temas: ${projectData.themes.join(', ')}
      Idea controladora: ${projectData.controllingIdea}
      
      El logline debe ser conciso, atractivo y no exceder 25 palabras.
    `;
    
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Error generating logline with AI:', error);
    throw error;
  }
}
```

### Variables de Entorno

```env
# .env.local
GEMINI_API_KEY=tu_api_key_de_gemini
ELEVENLABS_API_KEY=tu_api_key_de_elevenlabs
```

## 🗣 Integración con ElevenLabs

### Configuración

```typescript
// lib/elevenlabs.ts
const ELEVENLABS_API_KEY = process.env.ELEVENLABS_API_KEY;
const ELEVENLABS_API_URL = 'https://api.elevenlabs.io/v1';
```

### Ejemplo de Implementación

```typescript
// hooks/useTextToSpeech.ts
export async function generateSpeech(text: string, voiceId: string = "default") {
  try {
    const response = await fetch(
      `${ELEVENLABS_API_URL}/text-to-speech/${voiceId}`,
      {
        method: 'POST',
        headers: {
          'Accept': 'audio/mpeg',
          'xi-api-key': process.env.ELEVENLABS_API_KEY!,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          text: text,
          model_id: "eleven_multilingual_v2",
          voice_settings: {
            stability: 0.5,
            similarity_boost: 0.5
          }
        })
      }
    );
    
    return response.blob();
  } catch (error) {
    console.error('Error generating speech:', error);
    throw error;
  }
}
```

## 🎨 Uso en la Interfaz

### Botones de IA

Los botones de IA tienen un estilo consistente en toda la aplicación:

```tsx
<Button className="bg-yellow-500 text-black hover:bg-yellow-600">
  🤖 Sugerir ADN con IA
</Button>
```

### Ubicaciones Comunes

1. **Formularios**: Para sugerir valores basados en entradas existentes
2. **Editores de texto**: Para expandir o refinar contenido
3. **Generadores**: Para crear contenido desde cero
4. **Inspectores**: Para sugerencias contextuales

### Ejemplo de Implementación en Componente

```tsx
// components/bible/BibleDNA.tsx
import { generateLoglineWithAI } from '@/hooks/useAI';
import { useBible } from '@/hooks/useBible';

export default function BibleDNA({ projectId }: { projectId: string }) {
  const { bible, updateBible } = useBible(projectId);
  const [isGenerating, setIsGenerating] = useState(false);
  
  const handleGenerateLogline = async () => {
    setIsGenerating(true);
    try {
      const logline = await generateLoglineWithAI(bible);
      await updateBible({ logline });
    } catch (error) {
      console.error('Error generating logline:', error);
    } finally {
      setIsGenerating(false);
    }
  };
  
  return (
    <div>
      <Textarea 
        value={bible?.logline || ''}
        onChange={(e) => updateBible({ logline: e.target.value })}
      />
      <Button 
        onClick={handleGenerateLogline} 
        disabled={isGenerating}
        className="bg-yellow-500 text-black hover:bg-yellow-600"
      >
        {isGenerating ? '_generando...' : '🤖 Generar Logline'}
      </Button>
    </div>
  );
}
```

## 🧠 Funcionalidades de IA por Módulo

### Biblia
- Generación de loglines
- Sugerencia de temas
- Desarrollo de personajes
- Creación de reglas del mundo
- Generación de paletas de colores

### Guion
- Generación de beats estructurales
- Desglose de escenas
- Sugerencias de diálogo
- Refinamiento de sluglines
- Expansión de sinopsis

### Storyboard
- Generación de prompts para imágenes
- Sugerencias de composición
- Descripciones de tomas
- Selección de ángulos de cámara

### Animática
- Generación de guiones para voz en off
- Sincronización de audio con imágenes
- Sugerencias de ritmo y tempo

### Producción
- Generación de desgloses técnicos
- Sugerencias de presupuesto
- Planificación de calendario

## 🛠 Gestión de Errores

### Manejo de Errores de IA

```typescript
// hooks/useAI.ts
export async function safeAICall<T>(
  aiFunction: () => Promise<T>, 
  fallback: T
): Promise<T> {
  try {
    return await aiFunction();
  } catch (error) {
    console.error('AI call failed:', error);
    // Registrar error en analytics o logging service
    return fallback;
  }
}
```

### Fallbacks

Cada función de IA tiene un fallback apropiado:

```typescript
// lib/ai.ts
export async function suggestThemes(genre: string, format: string): Promise<string[]> {
  try {
    // Llamada real a la API de IA
    return await callGeminiAPI(prompt);
  } catch (error) {
    // Fallback con datos simulados
    const themesMap: Record<string, string[]> = {
      "Thriller": ["Redención", "Traición", "Poder", "Venganza"],
      "Drama": ["Familia", "Perdón", "Crecimiento", "Sacrificio"],
      // ... más géneros
    };
    
    return themesMap[genre] || ["Tema 1", "Tema 2", "Tema 3"];
  }
}
```

## ⚙️ Configuración y Personalización

### Preferencias de Usuario

```typescript
// stores/userStore.ts
type UserPreferences = {
  ai: {
    enabled: boolean;
    autoSuggest: boolean;
    creativityLevel: 'low' | 'medium' | 'high';
    preferredVoice: string;
  };
};
```

### Control de Costos

Implementar límites y controles para evitar uso excesivo:

```typescript
// hooks/useAI.ts
const AI_CALL_LIMIT = 100; // Límite de llamadas por día
let aiCallCount = 0;

export async function rateLimitedAICall<T>(aiFunction: () => Promise<T>): Promise<T> {
  if (aiCallCount >= AI_CALL_LIMIT) {
    throw new Error('AI call limit reached for today');
  }
  
  aiCallCount++;
  return await aiFunction();
}
```

## 🧪 Pruebas y Desarrollo

### Mocking en Desarrollo

Durante el desarrollo, se utilizan las funciones simuladas:

```typescript
// En desarrollo
import { generateLogline } from '@/lib/ai'; // Función simulada

// En producción
import { generateLoglineWithAI } from '@/hooks/useAI'; // Función real
```

### Testing

Pruebas para funciones de IA:

```typescript
// __tests__/ai.test.ts
describe('AI Functions', () => {
  it('should generate a logline with appropriate length', async () => {
    const logline = await generateLogline(mockProjectData);
    expect(logline.split(' ').length).toBeLessThanOrEqual(25);
  });
  
  it('should suggest relevant themes', async () => {
    const themes = await suggestThemes('Thriller', 'Largometraje');
    expect(themes).toContain('Redención');
  });
});
```

## 🚀 Futuras Mejoras

1. **Fine-tuning**: Entrenar modelos específicos para dominio cinematográfico
2. **Multimodal**: Integrar generación de imágenes y video
3. **Personalización**: Adaptar respuestas al estilo del usuario
4. **Caching**: Almacenar resultados para evitar llamadas repetidas
5. **Feedback Loop**: Permitir a usuarios calificar sugerencias de IA

La integración de IA en NeoScriptor busca potenciar la creatividad de los usuarios sin reemplazar su visión artística, proporcionando herramientas inteligentes que aceleran el proceso de desarrollo sin comprometer la originalidad del proyecto.