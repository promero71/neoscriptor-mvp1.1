# 📄 Exportar a PDF

## 🎯 Propósito

La exportación a PDF en NeoScriptor permite generar documentos profesionales de alta calidad para compartir, imprimir o archivar. Esta funcionalidad es esencial para crear entregables como guiones formateados, desgloses técnicos, hojas de llamada y otros documentos de producción.

## 📋 Tipos de Documentos

### 1. Guion Formateado
- Guion cinematográfico con formato estándar de la industria
- Numeración de páginas y escenas
- Fuentes y espaciado profesionales

### 2. Desglose Técnico
- Lista de elementos necesarios para la producción
- Clasificación por categorías (personajes, locaciones, accesorios, etc.)
- Estimaciones de costos

### 3. Hoja de Llamada (Call Sheet)
- Información del día de rodaje
- Horarios y ubicaciones
- Personal y equipo requerido
- Condiciones climáticas y logísticas

### 4. Presupuesto
- Desglose detallado de costos
- Gráficos y tablas
- Resúmenes ejecutivos

## ⚙️ Implementación Técnica

### Librerías Utilizadas

NeoScriptor utiliza una combinación de tecnologías para la exportación a PDF:

1. **html2pdf.js** - Para convertir contenido HTML a PDF
2. **jsPDF** - Para generación directa de PDFs
3. **PDFKit** - Para PDFs más complejos con gráficos

### Componente Base de Exportación

```tsx
// components/export/PDFExportButton.tsx
import { Button } from '@/components/ui/button';
import { generatePDF } from '@/lib/pdfGenerator';

export default function PDFExportButton({ 
  content, 
  filename,
  options 
}: { 
  content: any; 
  filename: string;
  options?: PDFOptions;
}) {
  const [isExporting, setIsExporting] = useState(false);
  
  const handleExport = async () => {
    setIsExporting(true);
    
    try {
      await generatePDF(content, filename, options);
    } catch (error) {
      console.error('Error generating PDF:', error);
    } finally {
      setIsExporting(false);
    }
  };
  
  return (
    <Button 
      onClick={handleExport}
      disabled={isExporting}
      className="bg-purple-600 hover:bg-purple-700"
    >
      {isExporting ? 'Generando PDF...' : '📄 Exportar a PDF'}
    </Button>
  );
}
```

### Generador de PDF con html2pdf.js

```typescript
// lib/pdfGenerator.ts
import html2pdf from 'html2pdf.js';

export async function generatePDF(
  content: HTMLElement | string, 
  filename: string, 
  options?: PDFOptions
): Promise<void> {
  const defaultOptions = {
    margin: 10,
    filename: filename,
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    ...options
  };
  
  if (typeof content === 'string') {
    // Contenido es HTML string
    await html2pdf().set(defaultOptions).from(content).save();
  } else {
    // Contenido es elemento HTML
    await html2pdf().set(defaultOptions).from(content).save();
  }
}
```

## 🎨 Formatos Específicos

### Guion Cinematográfico

```tsx
// components/export/ScreenplayPDF.tsx
export default function ScreenplayPDF({ script }: { script: any }) {
  return (
    <div id="screenplay-pdf" className="screenplay-pdf font-courier text-xs leading-normal">
      <div className="text-center mb-12">
        <h1 className="text-lg font-bold">{script.title}</h1>
        <p className="mt-2">Por {script.author}</p>
      </div>
      
      {script.scenes.map((scene: any, index: number) => (
        <div key={index} className="mb-6">
          <div className="font-bold uppercase mb-2">
            {scene.slugline}
          </div>
          
          <div className="mb-2">
            {scene.action}
          </div>
          
          {scene.dialogues.map((dialogue: any, dIndex: number) => (
            <div key={dIndex} className="ml-20">
              <div className="font-bold mb-1">{dialogue.character}</div>
              <div className="ml-4">{dialogue.lines}</div>
              {dialogue.parenthetical && (
                <div className="ml-2 italic">{dialogue.parenthetical}</div>
              )}
            </div>
          ))}
        </div>
      ))}
      
      <div className="text-center mt-12 text-xs">
        {script.pageNumber}
      </div>
    </div>
  );
}
```

### Desglose Técnico

```tsx
// components/export/BreakdownPDF.tsx
export default function BreakdownPDF({ breakdown }: { breakdown: any }) {
  return (
    <div id="breakdown-pdf" className="breakdown-pdf font-sans">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold">Desglose Técnico</h1>
        <h2 className="text-xl">{breakdown.projectTitle}</h2>
        <p className="mt-2">Fecha: {new Date().toLocaleDateString()}</p>
      </div>
      
      {Object.entries(breakdown.categories).map(([category, items]) => (
        <div key={category} className="mb-6">
          <h3 className="text-lg font-bold border-b pb-1 mb-3">{category}</h3>
          
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="text-left p-2">Elemento</th>
                <th className="text-left p-2">Cantidad</th>
                <th className="text-left p-2">Ubicación</th>
                <th className="text-left p-2">Notas</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item: any, index: number) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="p-2 border">{item.name}</td>
                  <td className="p-2 border">{item.quantity}</td>
                  <td className="p-2 border">{item.location}</td>
                  <td className="p-2 border">{item.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
}
```

## 🛠 Opciones de Personalización

### Configuración de Exportación

```typescript
// types/pdf.ts
interface PDFOptions {
  // Formato de página
  format: 'a4' | 'letter' | 'legal' | 'a3';
  orientation: 'portrait' | 'landscape';
  
  // Márgenes
  margin: {
    top: number;
    right: number;
    bottom: number;
    left: number;
  };
  
  // Estilos
  fontFamily: string;
  fontSize: number;
  lineHeight: number;
  
  // Numeración
  pageNumbering: boolean;
  pageNumberPosition: 'header' | 'footer';
  
  // Encabezados y pies de página
  header?: string;
  footer?: string;
  
  // Protección
  password?: string;
  permissions?: {
    printing: boolean;
    modifying: boolean;
    copying: boolean;
    annotating: boolean;
  };
}
```

### Selector de Opciones

```tsx
// components/export/PDFOptionsSelector.tsx
export default function PDFOptionsSelector({ 
  options, 
  onChange 
}: { 
  options: PDFOptions; 
  onChange: (options: PDFOptions) => void; 
}) {
  return (
    <div className="pdf-options p-4 border rounded">
      <h3 className="font-bold mb-3">Opciones de PDF</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">Formato</label>
          <select
            value={options.format}
            onChange={(e) => onChange({...options, format: e.target.value as any})}
            className="w-full p-2 border rounded"
          >
            <option value="a4">A4</option>
            <option value="letter">Carta</option>
            <option value="legal">Oficio</option>
            <option value="a3">A3</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1">Orientación</label>
          <select
            value={options.orientation}
            onChange={(e) => onChange({...options, orientation: e.target.value as any})}
            className="w-full p-2 border rounded"
          >
            <option value="portrait">Vertical</option>
            <option value="landscape">Horizontal</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1">Fuente</label>
          <select
            value={options.fontFamily}
            onChange={(e) => onChange({...options, fontFamily: e.target.value})}
            className="w-full p-2 border rounded"
          >
            <option value="Times New Roman">Times New Roman</option>
            <option value="Courier New">Courier New</option>
            <option value="Arial">Arial</option>
            <option value="Helvetica">Helvetica</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1">Tamaño de fuente</label>
          <input
            type="number"
            value={options.fontSize}
            onChange={(e) => onChange({...options, fontSize: parseInt(e.target.value)})}
            className="w-full p-2 border rounded"
            min="8"
            max="24"
          />
        </div>
      </div>
      
      <div className="mt-4">
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={options.pageNumbering}
            onChange={(e) => onChange({...options, pageNumbering: e.target.checked})}
            className="mr-2"
          />
          Incluir numeración de páginas
        </label>
      </div>
    </div>
  );
}
```

## 🖨 Impresión Directa

### Funcionalidad de Impresión

```typescript
// lib/printUtils.ts
export function printDocument(content: HTMLElement | string) {
  if (typeof content === 'string') {
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(`
        <html>
          <head>
            <title>Documento</title>
            <style>
              body { font-family: Arial, sans-serif; }
              @media print {
                body { margin: 0; }
              }
            </style>
          </head>
          <body>
            ${content}
          </body>
        </html>
      `);
      printWindow.document.close();
      printWindow.print();
    }
  } else {
    const printContent = content.innerHTML;
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(`
        <html>
          <head>
            <title>Documento</title>
            <style>
              body { font-family: Arial, sans-serif; }
              @media print {
                body { margin: 0; }
              }
            </style>
          </head>
          <body>
            ${printContent}
          </body>
        </html>
      `);
      printWindow.document.close();
      printWindow.print();
    }
  }
}
```

## 🧪 Pruebas y Validación

### Pruebas de Formato

```typescript
// __tests__/pdfExport.test.ts
describe('PDF Export', () => {
  it('should generate screenplay with correct formatting', async () => {
    const script = mockScriptData;
    const pdfBlob = await generateScreenplayPDF(script);
    
    // Verificar que el PDF se genera
    expect(pdfBlob).toBeInstanceOf(Blob);
    expect(pdfBlob.type).toBe('application/pdf');
  });
  
  it('should maintain proper margins and layout', async () => {
    // Verificar márgenes y formato
  });
  
  it('should include all required elements', async () => {
    // Verificar que todos los elementos necesarios están incluidos
  });
  
  it('should handle special characters correctly', async () => {
    // Verificar manejo de caracteres especiales
  });
});
```

## 🚀 Futuras Mejoras

1. **Plantillas profesionales** - Diseños predefinidos para diferentes tipos de documentos
2. **Firmas digitales** - Integración con servicios de firma electrónica
3. **Exportación por secciones** - Exportar partes específicas de documentos largos
4. **Compatibilidad con múltiples idiomas** - Soporte para diferentes sistemas de escritura
5. **Integración con servicios en la nube** - Guardar directamente en Google Drive, Dropbox, etc.
6. **Generación de índices** - Tablas de contenido automáticas para documentos largos

La exportación a PDF proporciona una forma confiable y profesional de compartir y archivar documentos importantes del proceso de creación audiovisual, manteniendo el formato y la calidad necesarios para la industria.