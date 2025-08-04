### 🎨 Estilo y Convenciones

- **Usa Tailwind CSS en todos los componentes**.
- **Usa componentes de shadcn/ui** (`Button`, `Input`, `Card`, `DropdownMenu`, `Sidebar`, etc.).
- **No uses `div` y `button` HTML crudos**.
- **El color principal es amarillo (`bg-yellow-500`, `text-yellow-500`)**.
- **Mantén la coherencia visual**:
  - Botones de IA: `bg-yellow-500`, texto negro.
  - Botón Export: `bg-purple-600`.
  - Sidebar derecho: inspector de IA con fondo blanco/oscuro.
  - Tipografía: `font-sans`, monoespaciada para guion.

---

### 🚫 No hagas
- No generes código en los archivos `.md`.
- No modifiques la estructura de carpetas.
- No uses estilos en línea (`style={}`).
- No uses `shadcn/ui` incorrectamente (ej: sin `cn`, sin `variant`).

---

### ✅ Sí haz
- Usa rutas absolutas: `@/components/ui/button`.
- Usa `cn()` para combinar clases.
- Asegúrate de que todos los componentes sean accesibles.
- Documenta cómo mantener la coherencia visual.