# ✍️ Editor de Guion con Tiptap

## 🎯 Propósito

El editor de guion en NeoScriptor utiliza [Tiptap](https://tiptap.dev/), un editor de texto headless basado en ProseMirror, para proporcionar una experiencia de escritura profesional con formato cinematográfico estándar.

## 🧩 Integración de Tiptap

### Instalación

Tiptap ya está incluido en las dependencias del proyecto:

```json
// package.json
"dependencies": {
  "@tiptap/react": "^3.0.9",
  "@tiptap/starter-kit": "^3.0.9",
  "@tiptap/extension-mention": "^3.0.9"
}
```

### Configuración Básica

```typescript
// components/script/ScriptEditor.tsx
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

export default function ScriptEditor() {
  const editor = useEditor({
    extensions: [
      StarterKit,
    ],
    content: '<p>Hello World!</p>',
  });

  return (
    <div>
      <EditorContent editor={editor} />
    </div>
  );
}
```

## 🎬 Formato Cinematográfico

### Elementos Específicos

El editor de guion implementa elementos específicos del formato cinematográfico:

1. **Sluglines** - Identificación de escenas (INT./EXT., ubicación, tiempo)
2. **Acción** - Descripción de la acción en la escena
3. **Personajes** - Nombres de personajes que hablan
4. **Diálogos** - Líneas de diálogo
5. **Paréntesis** - Indicaciones de interpretación
6. **Transiciones** - Cambios entre escenas

### Extensiones Personalizadas

```typescript
// extensions/ScreenplayElements.ts
import { Node, mergeAttributes } from '@tiptap/core';

export const Slugline = Node.create({
  name: 'slugline',
  group: 'block',
  content: 'text*',
  defining: true,
  
  parseHTML() {
    return [
      {
        tag: 'div[data-type="slugline"]',
      },
    ];
  },
  
  renderHTML({ HTMLAttributes }) {
    return ['div', mergeAttributes(HTMLAttributes, { 
      'data-type': 'slugline',
      'class': 'font-bold uppercase my-4'
    }), 0];
  },
});

export const Character = Node.create({
  name: 'character',
  group: 'block',
  content: 'text*',
  defining: true,
  
  parseHTML() {
    return [
      {
        tag: 'div[data-type="character"]',
      },
    ];
  },
  
  renderHTML({ HTMLAttributes }) {
    return ['div', mergeAttributes(HTMLAttributes, { 
      'data-type': 'character',
      'class': 'ml-20 mt-4 uppercase'
    }), 0];
  },
});

export const Dialogue = Node.create({
  name: 'dialogue',
  group: 'block',
  content: 'text*',
  defining: true,
  
  parseHTML() {
    return [
      {
        tag: 'div[data-type="dialogue"]',
      },
    ];
  },
  
  renderHTML({ HTMLAttributes }) {
    return ['div', mergeAttributes(HTMLAttributes, { 
      'data-type': 'dialogue',
      'class': 'ml-24 mr-20'
    }), 0];
  },
});
```

## 🎨 Estilos y Maquetación

### Formato Estándar

```css
/* styles/screenplay.css */
.screenplay-editor {
  font-family: 'Courier New', monospace;
  font-size: 12pt;
  line-height: 1.5;
  max-width: 8.5in; /* Ancho estándar de página */
  margin: 0 auto;
  padding: 1in;
  background: white;
}

.slugline {
  font-weight: bold;
  text-transform: uppercase;
  margin: 1em 0;
}

.character {
  margin-left: 2in;
  margin-top: 1em;
  text-transform: uppercase;
}

.dialogue {
  margin-left: 2.5in;
  margin-right: 1.5in;
}

.action {
  margin: 1em 0;
}

.parenthetical {
  margin-left: 2.1in;
  margin-right: 1.9in;
}
```

### Implementación en Componente

```tsx
// components/script/ScreenplayEditor.tsx
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { Slugline, Character, Dialogue } from '@/extensions/ScreenplayElements';
import './screenplay.css';

export default function ScreenplayEditor() {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Slugline,
      Character,
      Dialogue,
    ],
    content: `
      <div data-type="slugline">INT. CASA CARLOS - DÍA</div>
      <div data-type="action">CARLOS prepara el desayuno mientras SOFÍA baja las escaleras.</div>
      <div data-type="character">CARLOS</div>
      <div data-type="dialogue">Buenos días, cielo. ¿Lista para la escuela?</div>
    `,
  });

  return (
    <div className="screenplay-editor">
      <EditorContent editor={editor} />
    </div>
  );
}
```

## 🛠 Barra de Herramientas

### Componente de Toolbar

```tsx
// components/script/EditorToolbar.tsx
import { Button } from '@/components/ui/button';

export default function EditorToolbar({ editor }: { editor: any }) {
  if (!editor) {
    return null;
  }

  return (
    <div className="flex space-x-2 p-2 border-b">
      <Button
        onClick={() => editor.chain().focus().setSlugline().run()}
        variant={editor.isActive('slugline') ? 'default' : 'outline'}
      >
        Slugline
      </Button>
      <Button
        onClick={() => editor.chain().focus().setCharacter().run()}
        variant={editor.isActive('character') ? 'default' : 'outline'}
      >
        Personaje
      </Button>
      <Button
        onClick={() => editor.chain().focus().setParagraph().run()}
        variant={editor.isActive('paragraph') ? 'default' : 'outline'}
      >
        Acción
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
      >
        <BoldIcon className="h-4 w-4" />
      </Button>
    </div>
  );
}
```

## 🤖 Integración con IA

### Generación de Contenido

```tsx
// components/script/AIWriterAssistant.tsx
import { Button } from '@/components/ui/button';
import { useAI } from '@/hooks/useAI';

export default function AIWriterAssistant({ editor }: { editor: any }) {
  const { generateSceneContent } = useAI();
  
  const handleExpandWithAI = async () => {
    const currentContent = editor.getText();
    const expandedContent = await generateSceneContent(currentContent);
    
    editor.commands.insertContent(expandedContent);
  };
  
  const handleRewriteWithAI = async () => {
    const currentContent = editor.getText();
    const rewrittenContent = await generateSceneContent(currentContent, {
      style: 'more descriptive'
    });
    
    editor.commands.setContent(rewrittenContent);
  };
  
  return (
    <div className="flex space-x-2 p-2 border-t">
      <Button 
        onClick={handleExpandWithAI}
        className="bg-yellow-500 text-black hover:bg-yellow-600"
      >
        🤖 Expandir
      </Button>
      <Button 
        onClick={handleRewriteWithAI}
        variant="outline"
      >
        🔄 Reescribir
      </Button>
    </div>
  );
}
```

### Sugerencias Contextuales

```tsx
// components/script/AISuggestions.tsx
import { useEffect, useState } from 'react';

export default function AISuggestions({ editor }: { editor: any }) {
  const [suggestions, setSuggestions] = useState<string[]>([]);
  
  useEffect(() => {
    const getSuggestions = async () => {
      // Obtener sugerencias basadas en el contenido actual
      const currentText = editor.getText();
      // Llamar a la IA para obtener sugerencias
      // const newSuggestions = await getAISuggestions(currentText);
      // setSuggestions(newSuggestions);
    };
    
    // Escuchar cambios en el editor
    editor.on('update', getSuggestions);
    
    return () => {
      editor.off('update', getSuggestions);
    };
  }, [editor]);
  
  return (
    <div className="border-l p-4 w-64">
      <h3 className="font-bold mb-2">Sugerencias de IA</h3>
      <ul className="space-y-2">
        {suggestions.map((suggestion, index) => (
          <li key={index} className="text-sm cursor-pointer hover:bg-gray-100 p-2 rounded">
            {suggestion}
          </li>
        ))}
      </ul>
    </div>
  );
}
```

## 📦 Gestión de Documentos

### Guardado Automático

```tsx
// components/script/ScriptDocument.tsx
import { useEffect } from 'react';
import { useScript } from '@/hooks/useScript';

export default function ScriptDocument({ projectId }: { projectId: string }) {
  const { script, updateScript } = useScript(projectId);
  const editor = useEditor({
    // Configuración del editor
  });
  
  // Guardado automático
  useEffect(() => {
    const saveInterval = setInterval(() => {
      if (editor) {
        const content = editor.getJSON();
        updateScript({ content });
      }
    }, 30000); // Guardar cada 30 segundos
    
    return () => clearInterval(saveInterval);
  }, [editor, updateScript]);
  
  // Cargar contenido existente
  useEffect(() => {
    if (script?.content && editor) {
      editor.commands.setContent(script.content);
    }
  }, [script, editor]);
  
  return (
    <div className="flex">
      <div className="flex-1">
        <EditorToolbar editor={editor} />
        <EditorContent editor={editor} />
        <AIWriterAssistant editor={editor} />
      </div>
      <AISuggestions editor={editor} />
    </div>
  );
}
```

## 🎯 Funcionalidades Avanzadas

### Numeración de Páginas

```tsx
// components/script/PageCounter.tsx
export default function PageCounter({ editor }: { editor: any }) {
  // Calcular páginas basadas en formato estándar
  // 1 página = ~55 líneas de guion
  const pageCount = Math.ceil(editor?.storage.characterCount.characters() / (55 * 60)) || 0;
  
  return (
    <div className="fixed bottom-4 right-4 bg-black text-white px-3 py-1 rounded">
      {pageCount} página{pageCount !== 1 ? 's' : ''}
    </div>
  );
}
```

### Vistas Especiales

```tsx
// components/script/ScriptViews.tsx
export function ScriptViewToggle({ view, setView }: { 
  view: 'full' | 'scenes' | 'characters'; 
  setView: (view: 'full' | 'scenes' | 'characters') => void;
}) {
  return (
    <div className="flex space-x-2 mb-4">
      <Button 
        variant={view === 'full' ? 'default' : 'outline'}
        onClick={() => setView('full')}
      >
        Vista Completa
      </Button>
      <Button 
        variant={view === 'scenes' ? 'default' : 'outline'}
        onClick={() => setView('scenes')}
      >
        Escenas
      </Button>
      <Button 
        variant={view === 'characters' ? 'default' : 'outline'}
        onClick={() => setView('characters')}
      >
        Personajes
      </Button>
    </div>
  );
}
```

## 🧪 Pruebas y Validación

### Validación de Formato

```typescript
// utils/scriptValidation.ts
export function validateScreenplayFormat(content: any) {
  const errors = [];
  
  // Verificar que las sluglines vengan antes de la acción
  // Verificar que los personajes vengan antes del diálogo
  // Verificar que no haya diálogos sin personajes
  
  return errors;
}
```

### Pruebas Unitarias

```typescript
// __tests__/screenplayEditor.test.tsx
describe('Screenplay Editor', () => {
  it('should format sluglines correctly', () => {
    // Pruebas para formato de sluglines
  });
  
  it('should maintain proper screenplay structure', () => {
    // Pruebas para estructura del guion
  });
  
  it('should integrate with AI functions', () => {
    // Pruebas para integración con IA
  });
});
```

## 🚀 Futuras Mejoras

1. **Colaboración en tiempo real** - Múltiples escritores trabajando simultáneamente
2. **Importación/Exportación** - Compatibilidad con formatos estándar de la industria
3. **Análisis de guion** - Métricas de estructura, personajes, diálogos
4. **Versionado** - Control de versiones y comparación de cambios
5. **Comentarios** - Sistema de comentarios y revisiones
6. **Plantillas** - Plantillas para diferentes géneros y formatos

El editor de guion con Tiptap proporciona una experiencia de escritura profesional que respeta los estándares de la industria cinematográfica mientras ofrece herramientas modernas de edición y asistencia mediante IA.