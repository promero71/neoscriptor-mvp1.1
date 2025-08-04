# 📁 Estructura del Proyecto

## 📂 Organización General

NeoScriptor sigue la estructura estándar de Next.js App Router, organizando el código en directorios que representan rutas, componentes reutilizables y utilidades compartidas.

```
neoscriptor-mvp1.1/
├── src/
│   ├── app/                 # Rutas y páginas de la aplicación
│   ├── components/          # Componentes reutilizables
│   ├── lib/                 # Utilidades y tipos compartidos
│   └── hooks/               # Hooks personalizados
├── public/                  # Archivos estáticos
├── docs/                    # Documentación del proyecto
├── tailwind.config.ts       # Configuración de Tailwind CSS
├── postcss.config.mjs       # Configuración de PostCSS
└── package.json             # Dependencias y scripts
```

## 📁 Directorio `src/app/` (App Router)

El directorio `app/` contiene toda la estructura de rutas de la aplicación siguiendo el patrón de Next.js App Router:

- `layout.tsx` - Layout raíz que envuelve toda la aplicación
- `page.tsx` - Página principal (landing page)
- `[module]/` - Directorios para cada módulo principal (bible, script, storyboard, etc.)
- `project/[id]/` - Rutas específicas de proyectos con ID dinámico

Cada subdirectorio puede contener:
- `page.tsx` - La página en sí
- `layout.tsx` - Layout específico para esa sección
- `[submodule]/` - Submódulos o secciones adicionales

## 📁 Directorio `src/components/`

Los componentes se organizan por funcionalidad:

- `ui/` - Componentes de la biblioteca shadcn/ui
- `Layout/` - Componentes de estructura general (Header, ContentArea)
- `Sidebar/` - Componentes relacionados con la barra lateral
- `[module]/` - Componentes específicos de cada módulo (bible, script, etc.)

Esta organización permite una fácil navegación y mantenimiento del código de la interfaz de usuario.

## 📁 Directorio `src/lib/`

Contiene utilidades compartidas:

- `types.ts` - Definiciones de tipos TypeScript para toda la aplicación
- `mock-data.ts` - Datos simulados para desarrollo y pruebas
- `ai.ts` - Funciones simuladas de inteligencia artificial
- `utils.ts` - Funciones auxiliares generales

## 📁 Directorio `src/hooks/`

Contiene hooks personalizados de React para funcionalidades específicas de la aplicación.

## 🌐 Rutas Dinámicas

NeoScriptor utiliza rutas dinámicas de Next.js para manejar proyectos individuales:

- `project/[id]/` - Ruta base para un proyecto específico
- `project/[id]/[module]/` - Módulos dentro de un proyecto
- `project/[id]/[module]/[submodule]/` - Submódulos

Esta estructura permite URLs limpias y semánticas como:
- `/project/proj_001/bible/dna`
- `/project/proj_001/script/scenes`

## 🎨 Sistema de Estilos

- `globals.css` - Estilos globales y directivas de Tailwind
- Componentes con clases de Tailwind CSS para estilos locales
- Variables CSS para tema claro/oscuro y colores consistentes

## ⚙️ Configuración

- `tailwind.config.ts` - Configuración extendida de Tailwind CSS
- `postcss.config.mjs` - Configuración de PostCSS con plugins
- `tsconfig.json` - Configuración de TypeScript
- `next.config.ts` - Configuración de Next.js

Esta estructura modular facilita el mantenimiento, la escalabilidad y la colaboración en el desarrollo de la aplicación.