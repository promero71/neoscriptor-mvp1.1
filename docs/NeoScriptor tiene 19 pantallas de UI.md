NeoScriptor tiene 19 pantallas de UI:

---

 1. Dashboard (1)
- Project Dashboard

 2. Biblia (4)
- ADN del Proyecto  
- Personajes  
- Sinopsis & Logline  
- Mundo / Ambientación  

 3. Guion (4)
- Blueprint & Beats  
- Escenas  
- Screenplay Editor  
- Shot List (inspector lateral)

 4. Storyboard (4)
- Dashboard Storyboard  
- Scene Navigator  
- ShotLab (edición individual de frame)  
- Review Board  

 5. Animática (4)
- Dashboard Animática  
- Frame Navigator  
- ShotLab (timeline con Twick)  
- Video Editor (Preview & Export)  

 6. Producción (5)
- Dashboard Producción  
- Breakdown Hub  
- Budget Planner  
- Shoot Scheduler  
- Production Review  

---

✅ Total: 19 pantallas  
Cada una con inputs, botones IA y outputs claramente definidos, listas para maquetar y desarrollar.

Perfecto. Basado en los tres documentos (UI 9.0, WireFrame 1.0 y FireStore 9.0), el Dashboard del Proyecto en NeoScriptor debe ser un resumen visual claro y accionable del estado global del proyecto. Aquí tienes una lista detallada de elementos que debe incluir:

---

 🏠 Dashboard del Proyecto – Elementos clave

 1. Encabezado
- Nombre del proyecto (grande, destacado)
- Formato y género (ej: Largometraje / Thriller)
- Fase actual (`currentPhase`: Biblia, Guion, Storyboard, Animática, Producción)
- Selector de versión (por módulo, si aplica)

 2. KPIs Visuales (Tarjetas de progreso)
Una fila de 4–5 tarjetas con iconos y porcentajes:
- Biblia completada: `bibles[bibleId].progress` (%)
- Guion avanzado: `scripts[scriptId].beatsCompletePct` y comparación de páginas
- Storyboard listo: `% de frames con status "ok"`
- Animática lista: `% de clips generados + VO/BGM`
- Producción: `productionStats.budgetUsedPct`, `delayDays`, `breakdownCompletePct`

> Cada tarjeta con semáforo de estado: 🟢 listo, 🟠 en progreso, 🔴 pendiente

 3. Barra de Progreso Global
- Progreso total del proyecto (0–100%) → `projects/{id}.progress`
- Segmentada por módulos (color diferenciado por fase)
- Click en cada segmento → navega al módulo correspondiente

 4. Acciones Rápidas (Botones principales)
- + Nueva versión (según módulo actual: Biblia, Guion, Storyboard, Presupuesto)
- Continuar en [módulo pendiente] (ej: “Ir a Storyboard” si Guion está listo)
- Exportar guion / PDF / Call Sheet (según estado)

 5. Resumen por Módulo (acordeón o pestañas opcionales)
Mini-dashboard de cada sección:
- Biblia: ADN, personajes, sinopsis → progreso por capítulo
- Guion: nº de escenas, páginas, beats completados
- Storyboard: frames pendientes/aprobados
- Animática: estado de clips, VO, música
- Producción: coste vs. presupuesto, días de rodaje, alertas

 6. Alertas y Notificaciones
- Mensajes tipo:
  - “Tienes 3 escenas sin slugline”
  - “El presupuesto supera un 15% en props”
  - “Falta voz en 4 clips de animática”
- Icono de campana con contador

 7. Acceso Rápido a Módulos (Sidebar fijo o grid)
Iconos grandes o lista con:
- Biblia
- Guion
- Storyboard
- Animática
- Producción
- Exportar

> Estado visual en cada ícono: ✅ listo, 🟡 en progreso, 🔴 bloqueado

 8. Información Técnica (opcional, en modo avanzado)
- ID del proyecto
- Última actualización
- Miembros del equipo (fotos o emails)
- Enlace a carpeta de assets (Storage)

---

✅ Conclusión:  
El Dashboard debe funcionar como un "centro de mando" donde el usuario vea, en un vistazo, dónde está, qué falta y qué hacer después, con acceso directo a cada módulo y retroalimentación clara del progreso.

¿Quieres que te dé ahora un mockup textual o el componente en JSX/Tailwind?

El Dashboard de la Biblia en NeoScriptor debe mostrar el estado, progreso y acciones clave de la fase de desarrollo del universo del proyecto. Basado en los documentos, aquí está lo que debe contener:

---

 📚 Dashboard de la Biblia – Elementos principales

 1. Selector de versión
- Dropdown con todas las versiones guardadas: `bibles/{bibleId}`
- Opción: "Nueva versión" (crea copia o desde cero)

 2. Progreso general
- Barra de progreso (%) basada en:
  - Setup (ADN) ✅
  - Personajes (≥1 personaje completo) ✅
  - Sinopsis & Logline ✅
  - Mundo / Ambientación (opcional) ✅
- Fórmula: promedio ponderado (Mundo pesa menos si es opcional)

 3. Tarjetas de estado por capítulo
Grid de 4 tarjetas clickeables:
1. ADN del Proyecto  
   - Campos: Título, Género, Formato, Temas, Tono visual  
   - Badge: 🟢 listo / 🟠 incompleto / 🔴 vacío
2. Personajes  
   - Nº de personajes creados  
   - Progreso de perfiles (motivo, herida, arco)  
   - Badge según completitud
3. Sinopsis & Logline  
   - Contador de palabras (sinopsis)  
   - Vista previa del logline generado
4. Mundo / Ambientación (opcional)  
   - Reglas del mundo  
   - Paleta de color + moodboard IA  
   - Badge solo si activo

 4. Acciones rápidas (IA)
- "Sugerir ADN" → rellena temas y tono visual con IA
- "Generar Logline" → crea logline desde sinopsis o idea controladora
- "Completar Perfil" (en Personajes) → IA sugiere motivo, herida, arco
- "Retrato IA" → genera imagen PNG para un personaje
- "Sugerir Reglas IA" / "Generar Moodboard" → solo si Mundo está activo

 5. Resumen visual
- Mostrar logline final debajo del título del proyecto
- Mini-panel con: Género | Formato | Tono visual
- Ícono de estado global: 🟢 (listo), 🟠 (en progreso), 🔴 (incompleto)

 6. Navegación rápida
- Sidebar fijo con enlaces:
  - ADN del Proyecto
  - Personajes
  - Sinopsis & Logline
  - Mundo / Ambientación
- Estado visual en cada ítem: ✓ / • / !

---

✅ Conclusión:  
El Dashboard de la Biblia es el centro de inicio creativo, donde el usuario ve qué falta completar, usa IA para acelerar el desarrollo y avanza con un solo clic hacia cada módulo.

¿Siguiente? ¿Quieres el diseño de la pantalla ADN del Proyecto o Personajes?

Perfecto. Basado en los tres documentos (UI 9.0, WireFrame 1.0 y FireStore 9.0), esta es la lista detallada y definitiva de elementos para la pantalla ADN del Proyecto:

---

🧬 ADN del Proyecto – Elementos de UI

 1. Encabezado
- Nombre del proyecto (editable, vinculado a `projects/{id}.title`)
- Fase actual: `currentPhase` (solo lectura: "Biblia")
- Selector de versión (dropdown: `bibles/{bibleId}.version` – ej: v1.0, v1.1)

 2. Inputs principales (formulario)
- Título (`text input`) → `bibles/{bibleId}.title`
- Género (`select`) → `genre` (del proyecto) + opciones: Drama, Thriller, Comedia, etc.
- Formato (`select`) → `format`: Largometraje, Serie, Corto, Limited Series
- Temas (`chips multiselect`) → `themes[]`: Amor, Redención, Poder, Identidad, etc.
- Tono visual (`select`) → `toneVisual`: Oscuro, Luminoso, Crudo, Onírico, Minimalista
- Inspiraciones (`textarea`) → `inspirations` (campo opcional, no en BD aún, pero útil)

 3. Botones de IA
- "Sugerir ADN"  
  → Usa Gemini para rellenar: `themes`, `toneVisual` y `inspirations` a partir de un input inicial o género.
- "Generar Logline"  
  → Lanza IA con `controllingIdea` o sinopsis → genera `logline` (se guarda en `bibles/{bibleId}.logline`)

 4. Salidas visibles (outputs)
- Panel de ADN resumen (debajo del formulario):  
  Muestra tarjetas con:
  - Género: 🎭 Thriller
  - Formato: 📼 Largometraje
  - Temas: 🔥 Redención, Traición
  - Tono visual: 🌑 Oscuro
- Logline generado (en recuadro destacado):  
  Texto dinámico actualizado tras usar "Generar Logline", vinculado a `bible.logline`

 5. Estado y navegación
- Badge de progreso (semáforo):  
  🟢 listo (todos los campos clave completos) / 🟠 incompleto / 🔴 vacío
- Barra de navegación lateral fija (como en wireframe):  
  - Biblia → ADN → Personajes → Sinopsis → Mundo  
  - Íconos de estado: ✓ / • / !

 6. Acciones rápidas
- Guardar cambios (auto o manual)
- Ir a Personajes (botón flotante o en pie de página)

---

✅ Conexión con Firestore:
- Colección: `/projects/{id}/bibles/{bibleId}`
- Campos usados: `title`, `themes[]`, `toneVisual`, `logline`, `controllingIdea`

---

Esta pantalla es la base creativa del proyecto. Con IA integrada, guía al usuario a definir la esencia narrativa con claridad y velocidad.

¿Siguiente? ¿Quieres ahora la pantalla Personajes o Sinopsis & Logline?

Perfecto. Basado en los tres documentos (UI 9.0, WireFrame 1.0 y FireStore 9.0), esta es la pantalla Mundo / Ambientación del módulo Biblia, con todos sus elementos clave:

---

 🌍 Mundo / Ambientación – Elementos de UI

 1. Encabezado
- Título de la pantalla: “Mundo / Ambientación”
- Selector de versión (dropdown): `bibles/{bibleId}` → permite cambiar entre versiones de la Biblia
- Badge de estado: 🟢 listo / 🟠 incompleto / 🔴 vacío

 2. Inputs principales
- Reglas del mundo (`textarea`)  
  → `world.rules` (ej: “No se puede mentir sin consecuencias físicas”)  
  - Soporta múltiples reglas, una por línea

- Paleta de color (`color-picker múltiple`)  
  → `world.palette[]` (array de hex: `2A1B3D`, `E63946`, etc.)  
  - Mínimo 3 colores sugeridos  
  - Visualización como strip horizontal

- Moodboard (`galería de imágenes`)  
  → `world.moodboardUrls[]`  
  - Imágenes subidas manualmente o generadas por IA  
  - Grid de thumbnails (3–6 imágenes)

 3. Botones de IA
- “Sugerir Reglas IA”  
  → Usa Gemini para proponer 3 reglas coherentes con el género, tono y temas del proyecto.  
  → Selecciona y se guarda en `world.rules`

- “Generar Moodboard”  
  → IA crea 4 imágenes (PNG) basadas en el ADN del proyecto.  
  → Se adjuntan a `moodboardUrls[]` en Firestore y Storage

 4. Outputs visibles
- Tarjetas de reglas (debajo del input):  
  Muestra cada regla en un recuadro con estilo de “ley narrativa”

- Strip de imágenes (moodboard):  
  Scroll horizontal con las imágenes + badge “IA” si fueron generadas por IA

- Preview visual del mundo:  
  Fondo de pantalla con gradiente de la paleta + texto superpuesto:  
  “Tono: Oscuro | Género: Fantasía oscura | Regla clave: La magia corrompe el tiempo”

 5. Estado y navegación
- Progreso global en Biblia:  
  Esta sección es opcional, pero si se completa, aporta al % total de progreso

- Sidebar fijo:
  - ADN del Proyecto  
  - Personajes  
  - Sinopsis & Logline  
  - Mundo / Ambientación (activo)  
  → Cada ítem con badge: ✓ / • / !

 6. Acciones rápidas
- Guardar cambios (manual o automático)
- Ir a Guion (si la Biblia está completa)
- Omitir y continuar (si no se quiere definir mundo)

---

✅ Conexión con Firestore:
- Documento: `/projects/{id}/bibles/{bibleId}/world`
- Campos: `rules` (string), `palette[]` (array), `moodboardUrls[]` (array de URLs)

---

Esta pantalla permite definir la identidad visual y mágica del universo narrativo, con IA que ayuda a generar coherencia estilística y conceptual. Es clave para proyectos de género (fantasía, sci-fi, distopía).

¿Siguiente? ¿Quieres ahora el Dashboard del Guion?

📝 Sinopsis & Logline – Elementos de UI

 1. Encabezado
- Título de la pantalla: “Sinopsis & Logline”
- Selector de versión (dropdown): `bibles/{bibleId}` → permite cambiar entre versiones de la Biblia

 2. Inputs principales
- Sinopsis breve (`textarea`)  
  → `bibles/{bibleId}.controllingIdea` o campo temporal para desarrollo  
  - Contador de palabras (ej: “85/100 palabras”)  
  - Límite sugerido: 1–2 párrafos (ideal: 100–150 palabras)

- Idea controladora (`textarea`)  
  → `controllingIdea` (campo clave en Firestore)  
  - Texto que define: “Quién + qué deseo + qué conflicto”  
  - Ej: “Un padre soltero debe enfrentar su pasado criminal para proteger a su hija.”

 3. Botones de IA
- “Expandir a 2 párrafos”  
  → Usa Gemini para desarrollar la sinopsis a partir del `controllingIdea`.  
  → Guarda resultado en `synopsisExpanded` (campo opcional).

- “Refinar Logline”  
  → IA genera 3 versiones de logline basadas en la sinopsis o idea controladora.  
  → Selecciona una → se guarda en `bibles/{bibleId}.logline`

 4. Outputs visibles
- Vista previa del Logline (en recuadro destacado)  
  → Muestra el `logline` actual (editable manualmente)  
  → Estilo: cursiva, fuente tipo cine (Courier o serif)

- Badge de estado (semáforo):  
  🟢 Listo (logline guardado y > 1 personaje completo)  
  🟠 Incompleto (falta logline o idea controladora vacía)  
  🔴 Vacío

 5. Estado y navegación
- Progreso en Dashboard:  
  Considera completada esta sección cuando `logline` tiene texto y ≥1 personaje al 100%

- Sidebar fijo con navegación:  
  - ADN del Proyecto  
  - Personajes  
  - Sinopsis & Logline (activo)  
  - Mundo / Ambientación  
  → Cada ítem con badge: ✓ / • / !

 6. Acciones rápidas
- Guardar cambios (manual o automático)
- Ir a Mundo / Ambientación (si está activo)
- Continuar a Guion (si Biblia está completa)

---

✅ Conexión con Firestore:
- Colección: `/projects/{id}/bibles/{bibleId}`
- Campos usados: `controllingIdea`, `logline`, `synopsisExpanded` (opcional)

---

Esta pantalla cierra la fase creativa de la Biblia, transformando la idea en un relato claro y comercial, con IA que ayuda a pulir el mensaje central del proyecto.

¿Siguiente? ¿Quieres ahora la pantalla Mundo / Ambientación?
Perfecto. Basado en los tres documentos (UI 9.0, WireFrame 1.0 y FireStore 9.0), esta es la lista detallada y definitiva de elementos para el Dashboard del Guion:

---

 ✍️ Dashboard del Guion – Elementos de UI

 1. Encabezado
- Nombre del proyecto (grande, vinculado a `projects/{id}.title`)
- Fase actual: `currentPhase` → "Guion"
- Selector de versión (dropdown): `scripts/{scriptId}` → muestra `version` (v1, v2...)

 2. Botones principales
- "Nuevo borrador"  
  → Crea nueva versión del guion (`scriptId` nuevo)  
  → Copia opcional desde versión anterior

 3. Tabla de versiones (Data-grid)
- Muestra todas las versiones de `/scripts`
- Columnas:
  - Versión (v1.0, v1.1)
  - Fecha (`createdAt`)
  - Páginas (`pages`)
  - Diff% (`changesPct` vs. versión anterior) → color: verde (≤10%), ámbar (11-20%), rojo (>20%)
  - Estado → badge: ✓ (completa), • (incompleta)

 4. KPIs Visuales (Tarjetas de progreso)
- Blueprint & Beats  
  → `beatsCompletePct` + barra de progreso  
  → Badge: 🟢 / 🟠 / 🔴
- Escenas creadas  
  → Nº de escenas con `slugline` definida  
  → % sobre total esperado (vs. `targetPages`)
- Progreso del guion  
  → `pages / targetPages` → comparación visual
- Estado IA  
  → Última acción de IA (ej: “Auto-Beats generado”) o “Listo para edición”

 5. Acciones rápidas con IA
- "Auto-Beats"  
  → Usa `controllingIdea` o sinopsis para generar estructura de beats.
- "Desglosar IA"  
  → Convierte beats en escenas con `slugline`, `personajes`, `synopsis`.

 6. Navegación lateral fija
- Barra de progreso del módulo Guion:
  - Script → Blueprint & Beats → Escenas → Screenplay Editor
- Íconos de estado por paso: ✓ / • / !

 7. Acciones de navegación
- "Ir a Blueprint & Beats" (si no hay beats)
- "Editar guion" (abre Screenplay Editor si ya hay escenas)
- "Comparar versiones" (opcional, futuro)

---

✅ Conexión con Firestore:
- Colección: `/projects/{id}/scripts/{scriptId}`
- Campos clave: `version`, `pages`, `targetPages`, `beatsCompletePct`, `changesPct`, `createdAt`

---

Este Dashboard es el centro de control del guion, donde el usuario gestiona versiones, mide cambios y usa IA para estructurar el relato antes de escribir.

¿Siguiente? ¿Quieres ahora la pantalla Blueprint & Beats?


Perfecto. Basado en los tres documentos (UI 9.0, WireFrame 1.0 y FireStore 9.0), esta es la pantalla Blueprint & Beats, núcleo estructural del guion:

---

 🧱 Blueprint & Beats – Elementos de UI

 1. Encabezado
- Título de la pantalla: “Blueprint & Beats”
- Selector de versión (dropdown): `scripts/{scriptId}` → permite cambiar entre borradores
- Badge de progreso: 🟢 / 🟠 / 🔴 según `beatsCompletePct`

 2. Inputs principales
- Plantilla estructural (`select`) → `template`:  
  Opciones: 3 Actos, Hero’s Journey, Save the Cat, Linear, Noir
- Longitud objetivo (`input numérico`) → `targetPages` (ej: 90 páginas)
- Lista de Beats (`drag & drop list`)  
  Cada beat incluye:
  - `label` (ej: “Inciting Incident”)
  - `targetPage` (editable)
  - `order` (para reordenar)

 3. Botones de IA
- “Auto-Beats”  
  → Usa Gemini con `controllingIdea` o sinopsis para generar una estructura completa de beats según la plantilla seleccionada.
- “Re-balanceo IA”  
  → IA redistribuye `targetPage` de los beats para ajustar ritmo (ej: acelerar Acto I si está muy largo).

 4. Outputs visibles
- Mapa visual de beats (timeline horizontal o vertical)  
  - Coloreado por acto: Acto I (🟦), Acto II (🟥), Acto III (🟩)
  - Línea de progreso por páginas (comparado con `targetPages`)
- Barra de ritmo  
  → Indicador visual: verde (ritmo equilibrado), ámbar (lento/rápido), rojo (desequilibrado)
- Contador de beats completos: `beatsCompletePct` en porcentaje

 5. Navegación lateral fija
- Sidebar del módulo Guion:
  - Script → Blueprint & Beats (activo) → Escenas → Screenplay Editor
- Íconos de estado: ✓ / • / !

 6. Acciones rápidas
- Guardar cambios (manual o automático)
- Ir a Escenas (si hay ≥1 beat)
- Duplicar versión (crear variante con otro template)

---

✅ Conexión con Firestore:
- Colección: `/projects/{id}/scripts/{scriptId}/beats/{beatId}`
- Campos: `label`, `order`, `targetPage`, `template`, `beatsCompletePct`

---

Esta pantalla es el esqueleto narrativo del proyecto, donde el usuario define la estructura antes de escribir, con IA que ayuda a construir y ajustar el ritmo.

¿Siguiente? ¿Quieres ahora la pantalla Escenas?

Perfecto. Basado en los tres documentos (UI 9.0, WireFrame 1.0 y FireStore 9.0), esta es la pantalla Escenas del módulo Guion, con todos sus elementos clave:

---

 📋 Escenas – Elementos de UI

 1. Encabezado
- Título de la pantalla: “Escenas”
- Selector de versión (dropdown): `scripts/{scriptId}` → permite cambiar entre borradores
- Badge de progreso: 🟢 / 🟠 / 🔴 según `% de escenas con slugline`

 2. Botones principales
- “Añadir escena” (botón flotante o en barra superior)  
  → Crea nuevo `sceneId` en `/scenes`

 3. Tabla de escenas (Data-grid)
- Cada fila representa una escena (`/scenes/{sceneId}`)
- Columnas:
  - Orden (nº, draggable para reordenar)
  - Slugline (`input editable`: INT./EXT. DÍA/NOCTURNO – LOCALIZACIÓN)
  - Vinculado a Beat (`dropdown` → `beatId`)
  - Personajes (chips: `characters[]` involucrados)
  - Sinopsis (`textarea` corto: qué ocurre en la escena)
  - Palabras de diálogo (∑ `wordCount` → actualizado al escribir en el editor)
  - Estado → semáforo: ✅ slugline completa / 🔴 vacía

 4. Botones de IA
- “Desglosar IA”  
  → Usa Gemini para convertir los beats en una lista completa de escenas con slugline, personajes y sinopsis.  
  → Guarda en `/scenes`
- “Autocompletar slugline”  
  → IA sugiere slugline correcta basada en acción y ubicación.

 5. Outputs visibles
- Contador de escenas (ej: “12/15 escenas con slugline”)
- Barra de progreso → `% basado en escenas con slugline vs. total esperado`
- Advertencias (warnings):  
  - “Escena sin beat vinculado”  
  - “Slugline duplicada”  
  - “Escena sin personajes”

 6. Navegación lateral fija
- Sidebar del módulo Guion:
  - Script → Blueprint & Beats → Escenas (activo) → Screenplay Editor
- Íconos de estado: ✓ / • / !

 7. Acciones rápidas
- Guardar cambios (manual o automático)
- Ir al Screenplay Editor (si hay ≥1 escena)
- Duplicar escena (útil para variantes)

---

✅ Conexión con Firestore:
- Colección: `/projects/{id}/scripts/{scriptId}/scenes/{sceneId}`
- Campos: `order`, `slugline`, `beatId`, `synopsis`, `wordCount`, `characterIds[]`

---

Esta pantalla es el puente entre estructura y escritura, donde el usuario define cada escena antes de desarrollarla en el editor de guion.

¿Siguiente? ¿Quieres ahora el Screenplay Editor?

Perfecto. Basado en los documentos proporcionados y las capturas de pantalla, voy a detallar todos los elementos clave para la pantalla Screenplay Editor. Esta es una de las pantallas más complejas del módulo Guion, ya que debe permitir escribir, formatear y gestionar el guion con precisión, alineada con las convenciones cinematográficas.

---

 📝 Screenplay Editor – Elementos de UI

 1. Encabezado
- Nombre del proyecto (grande): Echoes of Nebula  
- Versión actual: `scripts/{scriptId}.version` (ej: v1.0)
- Botón de navegación:  
  - Ir a Escenas (para editar sluglines o estructura)  
  - Ir a Blueprint & Beats (si no hay beats completos)

 2. Editor principal (Tiptap)  
- Tipo de fuente: Courier New, 12pt  
- Estilo predefinido: Formato estándar de guion cinematográfico
- Reglas de formato automático:  
  - Alineación a 36 espacios (7.5 pulgadas).  
  - Márgenes automáticos: izquierda = 1.5", derecha = 3".  
  - Números de página centrados arriba.  

 3. Barra de herramientas flotante
Ubicada debajo del editor:
- Formatos de texto:
  - Scene Heading (`INT./EXT.`) → Ctrl + 1  
  - Action → Ctrl + 2  
  - Character → Ctrl + 3  
  - Parenthetical → Ctrl + 4  
  - Dialogue → Ctrl + 5  
  - Shot → Ctrl + 6  
  - Transition → Ctrl + 7  
- Botones rápidos:
  - @Menciones (`@personaje`, `@localización`, `@prop`)  
  - Formateo automático (ajusta márgenes, sangrías, etc.)  
  - Insertar página nueva  

 4. Panel lateral Shot List
- Lista de planos por escena:
  - Tipo de plano (`CU`, `PG`, `MS`, etc.)
  - Duración estimada (segundos)
  - Descripción breve
- Acciones:
  - Añadir/eliminar plano  
  - Marcar como "Convertir a Frame" (para Storyboard)  
- Botones IA:
  - “Sugerir plano IA” → basado en acción seleccionada  
  - “Convertir a Frame” → marca el shot para Storyboard

 5. Botones de IA
- Dentro del editor:
  - “Sugerir Diálogo” (al seleccionar un personaje)  
    → Gemini genera línea coherente según contexto  
  - “Mejorar Acción” (al seleccionar texto de acción)  
    → IA reescribe descripción para mayor impacto visual  
  - “Formateo Automático” → ajusta sangrías, mayúsculas, etc.
- En el panel lateral:
  - “Sugerir plano IA” → sugiere tipo de plano y duración según acción

 6. Contador de páginas y advertencias
- Pie de página:
  - Contador de páginas (`currentPage / totalPages`)  
  - Estimación de palabras totales (`wordCount`)
- Advertencias (en tiempo real):
  - Slugline duplicada  
  - Escena sin beat vinculado  
  - Personajes sin perfil completo  
  - Líneas de diálogo > 34 caracteres

 7. Navegación lateral fija
- Sidebar del módulo Guion:
  - Script → Blueprint & Beats → Escenas → Screenplay Editor (activo)
- Íconos de estado: ✓ / • / !

 8. Acciones rápidas
- Guardar cambios (automático o manual)
- Ir a Animática (si hay ≥1 escena completa)
- Exportar guion a PDF/Fountain/FDX (botón flotante)

---

 📚 Estructura del guion en Firestore
Cada elemento del guion se guarda en `/scenes/{sceneId}`:
- Slugline → `slugline`
- Descripción de acción → `synopsis`
- Diálogos → almacenados como bloques separados (opcional)
- Planos → `/scenes/{sceneId}/shots`

---

 🌟 Interacción clave
- Al escribir slugline:  
  Se valida automáticamente si coincide con formato (`INT./EXT.`).
- Al insertar diálogos:  
  El editor detecta automáticamente nombres de personajes y aplica mayúsculas.
- Al cambiar formato:  
  Las reglas de estilo se aplican automáticamente (sangría, mayúsculas, etc.).

---

✅ Conexión con Firestore:
- Colección: `/projects/{id}/scripts/{scriptId}`
- Subcolecciones:
  - `/scenes/{sceneId}` → contiene `slugline`, `synopsis`, `shots[]`
  - `/shots/{shotId}` → detalles del plano

---

Esta pantalla es el corazón creativo del guion, donde el usuario escribe, formatea y gestiona cada escena con ayuda de IA y herramientas específicas de guionismo.

¿Quieres ahora la pantalla Animática Dashboard?

Sí, es el orden lógico.

Tras completar el Guion, el flujo natural de NeoScriptor va hacia Storyboard.

Vamos al Storyboard Dashboard con todo lo necesario para maquetar y desarrollar.

---

 🎞️ Storyboard Dashboard – Elementos de UI

 1. Encabezado
- Nombre del proyecto (grande)
- Fase actual: `currentPhase` → "Storyboard"
- Selector de versión (dropdown): `storyboards/{sbId}.version` (ej: v1.0)

 2. Botones principales
- "Nueva versión"  
  → Crea nuevo documento en `/storyboards/{sbId}`  
  → Copia opcional desde versión anterior

 3. Tarjetas de resumen (KPIs visuales)
- Actos completados  
  → % de actos con todas las escenas en storyboard  
- Escenas procesadas  
  → `scenesWithFrames / totalScenes`  
- Nº frames listos  
  → `frames.status === "ok"` / total esperados  
- Progreso global  
  → Barra de progreso basada en `storyboards/{sbId}.progress` (0–100%)

 4. Acciones rápidas con IA
- "Generar Storyboard de Escena"  
  → Usa Gemini + Imagen para generar todos los frames de la escena seleccionada.  
  → Crea documentos en `/frames` con `status: "pending"` → luego `"ok"` o `"redo"`

 5. Navegación lateral fija
- Sidebar del módulo Storyboard:
  - Storyboard → Scene Navigator → ShotLab → Review Board
- Íconos de estado por paso: ✓ / • / !

 6. Badges de estado
- Cada tarjeta o escena muestra:
  - 🟢 OK (listo)
  - 🟠 Pendiente (en cola)
  - 🔴 Re-draw (rechazado o por corregir)

 7. Acciones de navegación
- Ir a Scene Navigator (si hay escenas con slugline)
- Exportar PDF (botón deshabilitado si no está 100% aprobado)

---

✅ Conexión con Firestore:
- Colección: `/projects/{id}/storyboards/{sbId}`
- Campos: `version`, `progress`, `status`, `createdAt`
- Subcolección: `/frames/{frameId}` → `sceneId`, `shotId`, `imgUrl`, `status`, `prompt`

---

Este Dashboard es el centro de control del storyboard, donde el usuario gestiona versiones, supervisa el progreso y lanza la generación masiva de frames con IA.

¿Siguiente? ¿Quieres ahora la pantalla Scene Navigator?

Perfecto. Basado en los tres documentos (UI 9.0, WireFrame 1.0, FireStore Esquema 9.0) y tu corrección clave —que Scene Navigator es de filtrado y gestión, no de generación detallada—, aquí tienes la pantalla definitiva de Scene Navigator:

---


 🖼️ Scene Navigator – Pantalla de filtrado y gestión de frames

 1. Encabezado
- Nombre del proyecto (grande)
- Fase actual: “Storyboard > Scene Navigator”
- Selector de versión (dropdown):  
  → `storyboards/{sbId}.version` (ej: v1.0, v1.1)

 2. Barra de filtros superior
- Acto (`select`) → filtra por `actId` (I, II, III)
- Escena (`select dependiente`) → lista solo escenas con `slugline` y `shots[]`
- Estado del frame (`chips`) → filtra por `status`:  
  🟠 Pendiente / 🟢 OK / 🔴 Re-draw
- Búsqueda rápida → por:
  - `@personaje`
  - `@localización`
  - `@shotType` (PG, CU, etc.)

 3. Grid de visualización (virtual scroll)
- Vista tipo masonry (thumbnails apilados, responsive)
- Cada tarjeta muestra:
  - Miniatura del frame (`imgUrl`) o placeholder si no generado
  - Slugline (recortado: `INT. CASA – DÍA`)
  - Tipo de plano (`shotType`: PG, CU, MS, etc.)
  - Duración estimada (`durationSec` en segundos)
  - Badge de estado: 🟠 / 🟢 / 🔴
  - Toggle “🎬 clip IA” → verde si ya tiene video en `/shots/{shotId}.videoUrl`

 4. Acciones rápidas (en cada tarjeta)
- Clic en tarjeta → navega a ShotLab para editar ese frame
- Botón flotante “+” → añade un nuevo shot manual (raro, pero posible)
- “Generar Frame IA” → solo si `status === "pending"`  
  → Llama a IA, pero no edita prompt aquí (solo dispara generación con datos existentes)

 5. Acciones masivas (arriba del grid)
- “Bulk Scene IA”  
  → Genera todos los frames pendientes de la escena seleccionada  
  → Usa datos ya existentes en `/shots` (tipo de plano, duración, etc.)
- “Captions IA” (opcional)  
  → Añade subtítulo corto (≤7 palabras) a cada frame basado en la acción

 6. Navegación lateral fija (sidebar)
- Flujo del módulo Storyboard:
  - Storyboard → Scene Navigator (activo) → ShotLab → Review Board
- Íconos de estado por paso: ✓ / • / !

 7. Indicadores visuales
- Contador global: `X/Y frames listos` (según `status === "ok"`)
- Barra de progreso → `storyboards/{sbId}.progress` (0–100%)
- Badge de estado general: 🟢 listo / 🟠 en progreso / 🔴 vacío

---

✅ Conexión con Firestore:
- Colección: `/storyboards/{sbId}/frames/{frameId}`
- Campos usados: `imgUrl`, `status`, `sceneId`, `shotId`, `shotType`, `durationSec`
- Índice clave: `(status ASC, sceneId ASC)` → para cargar rápido los pendientes por escena

---

🎯 Conclusión:
Esta pantalla es el centro de visión y control del storyboard, diseñada para:
- Filtrar rápidamente por escena, acto o estado.
- Ver el progreso visual de los frames.
- Lanzar generación masiva con IA, pero sin editar detalles.
- Navegar a ShotLab para el trabajo profundo de cada plano.

¿Siguiente? ¿Quieres ahora la pantalla ShotLab (edición individual del frame)?

Perfecto. Basado en los tres documentos (UI 9.0, WireFrame 1.0, FireStore Esquema 9.0) y tu flujo de trabajo, aquí está la pantalla ShotLab, el corazón de edición individual del frame en el módulo Storyboard.

---

 🎯 ShotLab – Edición detallada de un plano (Shot)

 1. Encabezado
- Nombre del proyecto + `slugline` grande (ej: `INT. CASA – DÍA`)
- Fase actual: `Storyboard > ShotLab`
- Selector de versión (dropdown): `storyboards/{sbId}.version`

 2. Vista principal (Preview)
- Preview grande del frame  
  → Muestra `imgUrl` (imagen del frame) o placeholder si no generado  
  → Overlay de metadatos:  
    - `shotType` (ej: PG)  
    - `durationSec` (ej: 4.2s)  
    - `status` (🟠 Pendiente / 🟢 OK / 🔴 Re-draw)

 3. Panel lateral (Inspector del plano)
- Tipo de plano (`select`) → `shotType`: PG, CU, MS, Plano Secuencia, etc.
- Duración estimada (`input numérico`) → `durationSec` (en segundos)
- Descripción (`textarea`) → `description` del plano (opcional, para contexto)
- Prompt IA (`textarea readonly`) → `prompt` usado para generar el frame  
  → Botón “Editar” → permite modificar y regenerar
- StylePreset (`dropdown`) → `stylePreset`: Sketch, ColorBoard, Realista, Noir
- Seed (`input numérico`) → `seed` para reproducibilidad

 4. Botones de IA (en el panel)
- “Regenerar”  
  → Usa el `prompt` actual + `seed` para crear una nueva imagen.  
  → Actualiza `imgUrl` y `status: "pending"` → luego `"ok"` o `"redo"`
- “Variar ×4”  
  → Genera 4 variaciones del mismo frame (mismo encuadre, distinta ejecución).  
  → Permite seleccionar una y descartar otras.
- “Cambiar Mood”  
  → Abre dropdown: `mood` (Tensión, Melancolía, Acción, Humor)  
  → IA regenera el frame con el nuevo tono emocional.
- “Sugerir plano IA” (si campos vacíos)  
  → A partir de la acción del guion, sugiere `shotType`, `durationSec`, `prompt`.

 5. Acciones de estado
- “Aprobar”  
  → Cambia `status: "ok"` en `/frames/{frameId}`  
  → Actualiza progreso en `storyboards/{sbId}.progress`
- “Rechazar”  
  → Cambia `status: "redo"`  
  → Habilita botones de regeneración

 6. Navegación lateral fija
- Sidebar del módulo Storyboard:
  - Storyboard → Scene Navigator → ShotLab (activo) → Review Board
- Íconos de estado: ✓ / • / !

 7. Badges y advertencias
- Advertencias visuales:
  - “Prompt modificado: regenerar” (si cambia sin regenerar)
  - “Duración fuera de rango” (si >10s sin justificación)
- Badge de estado: 🟢 / 🟠 / 🔴

---

✅ Conexión con Firestore:
- Documento: `/storyboards/{sbId}/frames/{frameId}`
- Campos: `imgUrl`, `prompt`, `stylePreset`, `seed`, `status`, `shotType`, `durationSec`

✅ Prompt base IA:
> “Genera frame storyboard. Acto[act], Escena[scene]. Slugline:[slugline]. Acción:[action]. Personaje foco:[char]. Plano:[shotType]. Estilo: [stylePreset]. Seed:[seed].”

---

🎯 Conclusión:
ShotLab es el taller del director visual, donde se define, ajusta y aprueba cada plano con precisión. Aquí vive la IA de generación avanzada, con controles para variar, regenerar y aprobar frames con criterio narrativo y técnico.

¿Siguiente? ¿Quieres ahora Review Board?

Perfecto. Basado en los tres documentos (UI 9.0, WireFrame 1.0, FireStore Esquema 9.0), aquí tienes la pantalla Review Board, la última etapa del módulo Storyboard.

---

 ✅ Review Board – Aprobación masiva de frames

 1. Encabezado
- Nombre del proyecto + `storyboards/{sbId}.version`
- Fase actual: `Storyboard > Review Board`
- Selector de versión (dropdown): `storyboards/{sbId}`

 2. Barra de filtros superior
- Estado del frame (`chips`) → filtra por:
  - 🟢 Aprobados
  - 🟠 Pendientes
  - 🔴 Por revisar
- Vista (`toggle`):
  - Secuencia (orden cronológico por escena)
  - Cuadrícula (muestra todos los thumbnails en grid)

 3. Strip lineal de frames (scroll horizontal)
- Vista principal: Strip continuo de thumbnails (como una cinta de película)
- Cada frame muestra:
  - Miniatura (`imgUrl`)
  - Overlay de metadatos: `shotType`, `durationSec`
  - ✅ Tick verde si `status === "ok"`
  - 🔴 Badge si `status === "redo"`

 4. Acciones masivas (barra superior)
- “Aprobar lote”  
  → Cambia `status: "ok"` para todos los seleccionados
- “Rechazar lote”  
  → Cambia `status: "redo"` y habilita regeneración en ShotLab
- “Exportar PDF/PNG”  
  → Genera un PDF con todos los frames aprobados (una página por frame)
  → Opción: incluir slugline, tipo de plano y duración

 5. Navegación lateral fija
- Sidebar del módulo Storyboard:
  - Storyboard → Scene Navigator → ShotLab → Review Board (activo)
- Íconos de estado: ✓ / • / !

 6. Indicadores visuales
- Contador global: `X/Y frames aprobados`
- Barra de progreso: `storyboards/{sbId}.progress` (0–100%)
- Badge de estado: 🟢 listo / 🟠 incompleto

 7. Comportamiento de selección
- Clic en frame → selecciona individual
- Shift + clic → selecciona rango
- Ctrl + clic → añade/remueve de selección
- Al seleccionar varios, aparece barra de acciones rápidas

---

✅ Conexión con Firestore:
- Colección: `/storyboards/{sbId}/frames/{frameId}`
- Campos clave: `status`, `imgUrl`, `shotType`, `durationSec`
- Índice: `(status ASC, sceneId ASC)` → para cargar rápido los pendientes

---

🎯 Conclusión:
El Review Board es el centro de aprobación final del storyboard, diseñado para revisar, aprobar/rechazar en masa y exportar el resultado. Es visual, rápido y preciso.

¿Siguiente? ¿Quieres ahora el Animática Dashboard?


Perfecto. Basado en los tres documentos (UI 9.0, WireFrame 1.0, FireStore Esquema 9.0), aquí tienes la pantalla Animática Dashboard, el punto de partida del módulo Animática:

---

 🎬 Animática Dashboard – Elementos de UI

 1. Encabezado
- Nombre del proyecto (grande)
- Fase actual: `currentPhase` → "Animática"
- Selector de versión (dropdown): `animatics/{animId}.version` (ej: v1.0)

 2. Botones principales
- "Crear nueva versión"  
  → Crea nuevo documento en `/animatics/{animId}` con `status: "queued"`
- "Generar todos los clips IA"  
  → Lanza Cloud Function que procesa todos los frames con `videoUrl` pendiente

 3. Indicador de progreso global
- Progress-bar (bajo el título)  
  → Calculado como:  
    `progreso = (clips listos × 0.5) + (VO listos × 0.3) + (BGM añadida × 0.2)`
- Badge de estado: 🟢 listo / 🟠 en progreso / 🔴 vacío

 4. Tabla de versiones (Data-grid)
- Muestra todas las animáticas generadas
- Columnas:
  - Versión (`version`)
  - Fecha (`createdAt`)
  - Duración total (`durationSec` → HH:MM:SS)
  - Estado → badge: 🔵 queued / 🟠 rendering / ✅ listo
  - Acciones → "Editar", "Duplicar", "Comparar"

 5. Acciones rápidas
- "Recalcular IA"  
  → Relee el estado de `/shots` y actualiza el progreso del dashboard
- "Comparar" (en fila de versión)  
  → Muestra diferencias de duración o clips entre versiones

 6. Navegación lateral fija
- Sidebar del módulo Animática:
  - Animática → Frame Navigator → ShotLab → Video Editor (activo)
- Íconos de estado: ✓ / • / !

 7. Badges y alertas
- Advertencias:
  - “Hay 3 clips sin generar”
  - “Falta música de fondo”
  - “VO no sincronizada”

---

✅ Conexión con Firestore:
- Colección: `/projects/{id}/animatics/{animId}`
- Campos: `version`, `config`, `videoUrl`, `status`, `fps`, `durationSec`, `createdAt`
- Subcolección: `/comments` → para feedback por timecode

---

🎯 Conclusión:
Este Dashboard es el centro de control de la animática, donde el usuario gestiona versiones, supervisa el progreso de generación de clips y lanza procesos masivos con IA.

¿Siguiente? ¿Quieres ahora la pantalla Frame Navigator?

Perfecto. Basado en los tres documentos (UI 9.0, WireFrame 1.0, FireStore Esquema 9.0), aquí tienes la pantalla Frame Navigator del módulo Animática:

---

 🖼️ Frame Navigator – Gestión de clips por frame

 1. Encabezado
- Nombre del proyecto + `animatics/{animId}.version`
- Fase actual: `Animática > Frame Navigator`
- Selector de versión (dropdown): `animatics/{animId}`

 2. Barra de filtros superior
- Acto (`select`) → filtra por `actId`
- Escena (`select dependiente`) → lista escenas con `slugline`
- Estado del clip (`chips`) → filtra por:
  - 🔴 Sin clip IA
  - 🟠 Generando
  - 🟢 Listo

 3. Grid de frames (Masonry thumbnails)
- Vista principal: Grid virtualizado de thumbnails
- Cada tarjeta muestra:
  - Miniatura del frame (`imgUrl` del storyboard)
  - Duración actual (`durationSec` en segundos)
  - Toggle “🎬 clip IA” → verde si `videoUrl` existe
  - Badge de estado:
    - 🔴 “Generar”
    - 🟠 “⏲ rendering…”
    - 🟢 “Listo”

 4. Acciones por tarjeta
- Botón “Generar Clip IA”  
  → Llama a `/api/ai/generateClip`  
  → Usa Twick + Gemini para renderizar clip basado en `shotId` y `durationSec`
- Clic en tarjeta → navega a ShotLab para edición avanzada

 5. Acciones masivas
- “Generar Todos los Clips” (arriba del grid)  
  → Lanza Cloud Function que procesa todos los clips pendientes  
  → Actualiza `status` en `/shots` y `animatics/{animId}.status`

 6. Navegación lateral fija
- Sidebar del módulo Animática:
  - Animática → Frame Navigator (activo) → ShotLab → Video Editor
- Íconos de estado: ✓ / • / !

 7. Indicadores visuales
- Contador global: `X/Y clips generados`
- Progreso del dashboard:  
  `(clips listos / total) × 0.5 + (VO listos / total) × 0.3 + (BGM añadida? 0.2 : 0)`
- Badge de estado general: 🟢 / 🟠 / 🔴

---

✅ Conexión con Firestore:
- Colección: `/projects/{id}/shots/{shotId}`
- Campos clave: `videoUrl`, `durationSec`, `status`, `sceneId`, `actId`
- Índice: `(status ASC, sceneId ASC)` → para cargar rápido los pendientes

---

🎯 Conclusión:
El Frame Navigator es el centro de gestión de clips de animática, donde el usuario ve el estado de cada plano, lanza la generación de video con IA y navega al editor para ajustes.

¿Siguiente? ¿Quieres ahora ShotLab (Animática)?

Perfecto, gracias por la aclaración. Ahora entiendo exactamente tu flujo:

- Frame Navigator: solo para filtrar, navegar y lanzar generación.
- ShotLab: el taller profundo donde se genera el clip con IA (image-to-video), se añade voz (TTS) y se controla el prompt detallado.
- Video Editor: el ensamblaje final y exportación.

---

 🎛️ ShotLab (Animática) – Taller de generación de clips con IA

 1. Encabezado
- Nombre del proyecto + `slugline` (ej: `INT. CASA – DÍA`)
- Fase actual: `Animática > ShotLab`
- Selector de versión (dropdown): `animatics/{animId}.version`

---

 2. Preview del frame (izquierda)
- Imagen del storyboard (`imgUrl`) → origen para image-to-video
- Overlay de metadatos: `shotType`, `durationSec`, `status`
- Mini-reproductor (play/pause) → preview del clip generado (`videoUrl`)

---

 3. Panel lateral (derecha) – Controles de generación

 🔹 Generación de video (Image-to-Video)
- Duración (`input numérico`) → `durationSec` (ej: 5.0s)
- Prompt detallado (`textarea`) → editable y guardado en `prompt`
  - Valor por defecto: IA genera desde acción del guion
  - Ej: "Plano general, cámara lenta, polvo flotando, tensión emocional, personaje mira hacia la puerta con miedo."
- StylePreset (`dropdown`) → `stylePreset`: Realista, Noir, Sketch, ColorBoard, Cinematic
- Seed (`input numérico`) → `seed` para reproducibilidad
- Botones IA:
  - “Regenerar Clip” → lanza `/api/ai/image-to-video` con el frame y prompt
  - “Variar ×4” → genera 4 versiones visuales del mismo plano
  - “Cambiar Mood” → ajusta prompt a: Tensión, Melancolía, Acción, Humor

 🔹 Generación de audio (Text-to-Speech)
- Diálogo o narración (`textarea`) → texto a convertir en voz
  - Detecta automáticamente si es diálogo (`@personaje`) o narrador
- Voz (`dropdown`) → `voiceId` (ej: “Carlos - Deep Spanish”, “Elena - Warm Female”)
  - Usa ElevenLabs o Gemini Audio
- Emoción (`chips`) → `emotion`: Neutral, Tensión, Tristeza, Ira
- Botones IA:
  - “Generar VO” → crea archivo `.wav` y guarda `voiceUrl`
  - “Auto-Sincronizar” → ajusta duración del clip al audio generado
- Waveform preview → muestra audio generado + control de `offset`

 🔹 Música de fondo (BGM)
- Sugerir BGM IA → IA propone tema según `mood` y `actId`
- Select de biblioteca → música libre de derechos
- Volumen (slider) → ajuste independiente para BGM

---

 4. Timeline integrado (Twick)
- Pistas:
  1. Video → clip generado (`videoUrl`)
  2. VO → audio generado (`voiceUrl`)
  3. BGM → música de fondo
- Preview en tiempo real → reproduce el clip con todos los elementos
- Auto-Timing IA → ajusta `durationSec` basado en diálogo o acción

---

 5. Acciones de estado
- “Aprobar” → cambia `status: "ok"` en `/shots/{shotId}`
- “Guardar como plantilla” → guarda `prompt`, `voice`, `stylePreset` para reusar
- “Convertir a Storyboard Frame” → si viene de guion, marca `storyboardFrameId`

---

 6. Navegación lateral fija
- Sidebar del módulo Animática:
  - Animática → Frame Navigator → ShotLab (activo) → Video Editor
- Íconos de estado: ✓ / • / !

---

 7. Conexión con Firestore
- Colección: `/projects/{id}/shots/{shotId}`
  - Campos: `imgUrl`, `videoUrl`, `voiceUrl`, `durationSec`, `prompt`, `stylePreset`, `seed`, `status`
- Subcolección: `/comments` (opcional, para feedback)

---

🎯 Conclusión  
ShotLab es el laboratorio creativo completo, donde el usuario:
- Genera video desde imagen (image-to-video IA)
- Controla el prompt con detalle narrativo
- Añade voz con TTS (diálogo o narrador)
- Sincroniza audio y video
- Previsualiza y aprueba

Es aquí donde el creador tiene el máximo control creativo antes de ir al Video Editor para el montaje final.

¿Siguiente? ¿Quieres ahora la pantalla Video Editor (Preview & Export)?

Perfecto. Basado en los tres documentos (UI 9.0, WireFrame 1.0, FireStore Esquema 9.0) y tu enfoque claro, aquí está la pantalla Video Editor (Preview & Export), donde Twick es el centro absoluto de la experiencia, con controles mínimos pero poderosos para hacer que importar y ensamblar materiales sea sencillo.

---

 🎬 Video Editor – Previsualización y Exportación final

 1. Encabezado
- Nombre del proyecto + `animatics/{animId}.version`
- Fase actual: `Animática > Video Editor`
- Selector de versión (dropdown): `animatics/{animId}`

 2. Twick como centro de la UI
- Editor de línea de tiempo integrado (iframe o componente React de Twick)
  - Pistas cargadas por defecto:
    1. Video: clips generados (`videoUrl` de `/shots`)
    2. Voice Over: pistas de voz (`voiceUrl`)
    3. Música de fondo: archivo `.mp3` o stream
    4. Transiciones: efectos automáticos entre clips
  - Soporta:
    - Drag & drop de nuevos clips o audios
    - Cortar, dividir, mover clips
    - Ajuste de volumen por clip
    - Previsualización en tiempo real

 3. Panel lateral (importación rápida)
- “Importar material” (botón grande)
  - Permite arrastrar o seleccionar:
    - Archivos de video (MP4, MOV)
    - Audios (WAV, MP3)
    - Imágenes (para interludios)
  - Al subir:
    - Se guarda en Firebase Storage
    - Se añade automáticamente a la pista correspondiente en Twick
- “Cargar desde Storyboard”
  - Importa todos los clips generados (`status: "ok"`) directamente a la timeline
- “Cargar VO/BGM”
  - Añade todas las pistas de voz y música ya generadas

 4. Controles de renderizado (inferior derecho)
- FPS (`select`): 12, 24, 30 (guardado en `animatics/{animId}.fps`)
- Volumen global (sliders duales):
  - VO (ajusta pista de voz)
  - BGM (ajusta música de fondo)
  - ✅ “Normalizar IA” → ajusta niveles para equilibrio profesional
- Botón principal: “Exportar MP4”
  - Llama a `/api/animatic/export`
  - Usa Twick para renderizar el proyecto completo
  - Al finalizar:
    - Guarda `videoUrl` en `/animatics/{animId}`
    - Cambia `status: "done"`
    - Muestra link de descarga + miniatura del video

 5. Player de previsualización
- Pantalla grande con:
  - Reproducción completa del timeline
  - Controles: play/pause, seek, zoom de timeline
  - Botón “Previsualizar 5s” (desde el cursor)

 6. Comentarios por timecode
- Lista lateral de comentarios
  - Cada comentario tiene:
    - `timecode` (ej: 01:23)
    - `text` (ej: “Este plano dura demasiado”)
    - `userId` + avatar
  - Botón “+ Comentar” → añade comentario al timecode actual

 7. Navegación lateral fija
- Sidebar del módulo Animática:
  - Animática → Frame Navigator → ShotLab → Video Editor (activo)
- Íconos de estado: ✓ / • / !

---

✅ Conexión con Firestore
- Documento: `/animatics/{animId}`
  - Campos: `config` (JSON de Twick), `videoUrl`, `status`, `fps`, `durationSec`
- Subcolección: `/comments`
  - Campos: `userId`, `timecode`, `text`, `createdAt`

✅ Reglas de Storage
- Todos los archivos pesados (video, audio) se suben a Firebase Storage
- Las URLs se guardan en `videoUrl`, `voiceUrl`, etc.

---

🎯 Conclusión
El Video Editor es el último paso creativo, donde todo converge:
- Twick es el núcleo, con una UI limpia y centrada en el editor.
- La importación es sencilla: arrastrar y soltar, o cargar desde el Storyboard.
- El renderizado final es directo, con un solo clic.

Es aquí donde el creador cierra la animática y la entrega lista para producción.

¿Siguiente? ¿Quieres ahora la sección Producción?
Perfecto. Basado en los tres documentos (UI 9.0, WireFrame 1.0, FireStore Esquema 9.0), aquí tienes la pantalla Producción Dashboard, el centro de mando de la fase de producción:

---

 🏗️ Producción Dashboard – Elementos de UI

 1. Encabezado
- Nombre del proyecto (grande)
- Fase actual: `currentPhase` → "Producción"
- Selector de versión (dropdown): `budgets/{budgetId}.version` (ej: v1.0)
- Selector de semana (dropdown): `shootDays` → filtra por semana de rodaje

 2. KPIs Visuales (Tarjetas resumen)
- % Desglose aprobado  
  → `productionStats.breakdownCompletePct`  
  → Badge: 🟢 >90% / 🟠 50-89% / 🔴 <50%
- % Presupuesto gastado  
  → `productionStats.budgetUsedPct`  
  → Barra de progreso con comparación vs. `budgets/{budgetId}.total`
- Retraso (días)  
  → `productionStats.delayDays`  
  → Rojo si >0, verde si 0
- Variación de coste  
  → `productionStats.overspendPct`  
  → ↑ +12% (rojo) / ↓ -5% (verde)

 3. Barra de progreso global
- Progreso de producción (0–100%)  
  → Calculado como:  
    `(breakdownCompletePct × 0.3) + (budgetUsedPct × 0.3) + (scenesShotPct × 0.4)`
- Color progresivo: verde → amarillo → rojo

 4. Navegación lateral fija
- Sidebar del módulo Producción:
  - Producción → Breakdown Hub → Budget Planner → Shoot Scheduler → Production Review
- Íconos de estado: ✓ / • / !

 5. Acciones rápidas
- “Crear reporte PDF”  
  → Genera un PDF con todos los KPIs, alertas y resumen del periodo
- “Ir a Breakdown Hub” (si hay escenas sin desglose)
- “Generar Call-Sheet” (si hay día planificado)

 6. Alertas y notificaciones
- Panel lateral con:
  - “3 partidas de presupuesto >10% sobre lo previsto”
  - “Escena 12 no tiene locación asignada”
  - “Actor principal con solape en día 5”

---

✅ Conexión con Firestore:
- Documento: `/projects/{id}/productionStats`
  - Campos: `breakdownCompletePct`, `budgetUsedPct`, `delayDays`, `overspendPct`
- Colección: `/budgets/{budgetId}`
  - `total`, `lines[]`, `version`
- Colección: `/shootDays`
  - `status`, `date`, `scenes[]`

---

🎯 Conclusión  
El Dashboard de Producción es el centro de control ejecutivo, donde el usuario ve, en un vistazo, el estado financiero, logístico y de cronograma del proyecto. Todo basado en datos reales y actualizados por Cloud Functions.

¿Siguiente? ¿Quieres ahora la pantalla Breakdown Hub?


Perfecto. Basado en los tres documentos (UI 9.0, WireFrame 1.0, FireStore Esquema 9.0), aquí tienes la pantalla Breakdown Hub, el corazón del desglose técnico de cada escena:

---

 🧩 Breakdown Hub – Desglose técnico por escena

 1. Encabezado
- Nombre del proyecto + `currentPhase: "Producción"`
- Selector de versión (dropdown): `budgets/{budgetId}.version`
- Filtro de escena (`select`): lista todas las escenas con `slugline`

 2. Árbol de categorías
- Estructura jerárquica:
  - Escena → `slugline` (ej: `INT. CASA – DÍA`)
  - Categorías:
    - 🎭 Cast (elenco)
    - 🛋️ Props (objetos)
    - 🏚️ Locaciones (interiores, exteriores)
    - 👕 Vestuario
    - 🎨 Maquillaje
    - 💥 VFX / SFX
    - 🎵 Sonido / Música
    - 🎥 Cámara / Movimiento
    - 🌞 Iluminación
    - 🧑‍💼 Extras

 3. Tabla de ítems (principal)
- Por cada categoría, una tabla con:
  - Descripción (`textarea`) → nombre del ítem (ej: “Revolver antiguo”)
  - Cantidad (`input numérico`) → `qty`
  - Coste unitario (`input numérico`) → `unitCost`
  - Estado (`select`) → `status`: 🟠 Pendiente / 🟢 Aprobado
  - Notas (`textarea`) → `notes` (opcional)

 4. Botones de IA
- “Autodesglosar IA”  
  → Usa Gemini para analizar la acción de la escena y generar automáticamente todos los ítems por categoría.
- “Sugerir coste IA”  
  → Para cada ítem, IA propone `unitCost` basado en mercado local (ej: “Revolver antiguo – alquiler 2 días: $120”).

 5. Totales y resumen
- Por categoría:  
  → `totalCost = qty × unitCost` → suma automática
- Total global:  
  → `∑ totalCost` de todos los ítems aprobados
- Badge de progreso:  
  → `% breakdownCompletePct` → usado en `productionStats`

 6. Acciones rápidas
- “Aprobar todo” (por categoría o global)
- “Exportar PDF” → genera lista de desglose por escena
- “Enviar a Presupuesto” → copia ítems a `/budgets/{budgetId}.lines`

 7. Navegación lateral fija
- Sidebar del módulo Producción:
  - Producción → Breakdown Hub (activo) → Budget Planner → Shoot Scheduler → Production Review
- Íconos de estado: ✓ / • / !

---

✅ Conexión con Firestore:
- Colección: `/projects/{id}/breakdown/{itemId}`
- Campos: `sceneId`, `category`, `itemName`, `qty`, `unitCost`, `status`, `notes`
- Índice: `(sceneId ASC, category ASC)` → para cargar rápido por escena y tipo

---

🎯 Conclusión  
El Breakdown Hub es el centro de planificación técnica, donde se detalla todo lo necesario para rodar cada escena. Con IA que ayuda a generar y costear ítems, acelera el proceso y reduce errores.

¿Siguiente? ¿Quieres ahora la pantalla Budget Planner?

Perfecto. Basado en los tres documentos (UI 9.0, WireFrame 1.0, FireStore Esquema 9.0), aquí tienes la pantalla Budget Planner, el centro de gestión financiera del proyecto:

---

 💰 Budget Planner – Planificador de presupuesto

 1. Encabezado
- Nombre del proyecto + `format` y `genre`
- Selector de versión (dropdown): `budgets/{budgetId}.version` (ej: v1.0, v1.1)
- Botón: “Crear nueva versión” → copia desde anterior o desde cero

 2. Hoja de presupuesto (Data-grid principal)
- Tabla con columnas:
  - Descripción (`text input`) → nombre del ítem (ej: “Alquiler de cámara”)
  - Cantidad (`number`) → `qty`
  - Coste unitario (`number`) → `unitCost`
  - Categoría (`select`) → `category`: Cast, Props, Location, VFX, Wardrobe, Camera, Lighting, etc.
  - Subtotal → `qty × unitCost` (calculado automáticamente)
- Fila final: TOTAL → `budgets/{budgetId}.total`

 3. Acciones rápidas
- “Importar desde Breakdown”  
  → Carga todos los ítems con `status: "approved"` del Breakdown Hub  
  → Los añade como líneas de presupuesto
- “Añadir partida manual” → agrega una nueva fila

 4. Botones de IA
- “Predecir sobrecoste IA”  
  → Compara con versiones anteriores y marca en rojo las partidas que superan un 10% de aumento.  
  → Muestra alerta: “Props +18% vs. v1.0”
- “Optimizar IA”  
  → Sugiere 3 formas de reducir coste:  
    - “Alquilar cámara en vez de comprar”  
    - “Fusionar días de rodaje en misma locación”  
    - “Usar extras locales”

 5. Visualización gráfica
- Donut chart: gasto por categoría (`lines.category`)
- Barra de burn-rate:  
  → `budgetUsedPct` vs. `delayDays` → si se gasta rápido y hay retraso, se pone roja
- Diff vs. versión anterior:  
  → ↑ +12% (rojo) / ↓ -5% (verde)

 6. Navegación lateral fija
- Sidebar del módulo Producción:
  - Producción → Breakdown Hub → Budget Planner (activo) → Shoot Scheduler → Production Review
- Íconos de estado: ✓ / • / !

 7. Acciones de exportación
- “Exportar PDF” → genera presupuesto formal con logo, versión, fecha
- “Descargar CSV” → para importar en Excel o Sheets

---

✅ Conexión con Firestore:
- Colección: `/projects/{id}/budgets/{budgetId}`
  - Campos: `version`, `total`, `lines[]`, `createdAt`
- `lines[]`: array de objetos con `description`, `qty`, `unitCost`, `category`

---

🎯 Conclusión  
El Budget Planner es el centro financiero del proyecto, donde se define, ajusta y optimiza el presupuesto. Con IA que ayuda a predecir sobrecostes y sugerir ahorros, mantiene el proyecto viable.

¿Siguiente? ¿Quieres ahora la pantalla Shoot Scheduler?

Perfecto. Basado en los tres documentos (UI 9.0, WireFrame 1.0, FireStore Esquema 9.0), aquí tienes la pantalla Shoot Scheduler, el centro de planificación del rodaje:

---

 🗓️ Shoot Scheduler – Planificador de rodaje

 1. Encabezado
- Nombre del proyecto + `format` y `genre`
- Selector de semana (dropdown): `shootDays` → filtra por rango de fechas
- Selector de versión (dropdown): `budgets/{budgetId}.version` (para sincronizar costes)

 2. Calendario tipo Stripboard (principal)
- Vista horizontal estilo “stripboard” (como en los wireframes)
- Eje X: días de rodaje (`date`)
- Cada día es una columna donde se arrastran las escenas (`scenes[]`)
- Cada escena como tarjeta con:
  - `slugline` (recortado)
  - `durationSec` estimado
  - `actId`
  - `location` (icono: 🏚️ interior / 🌳 exterior)
  - `night` (🌙 si es nocturna)

 3. Filtros laterales
- Filtro por locación → agrupa escenas por lugar
- Filtro por actor → muestra solo escenas con ese personaje
- Filtro por clima → escenas exteriores (`EXT.`) en días con previsión de lluvia

 4. Panel de día seleccionado
- Al hacer clic en un día:
  - Horario: `Start` / `End` (ej: 06:00 – 18:00)
  - Escenas planificadas: lista con `slugline`, `duración`, `personajes`
  - Clima esperado: icono + temperatura (integración futura con API)
  - Advertencias:
    - “Actor principal en 2 locaciones el mismo día”
    - “Escena nocturna sin equipo de iluminación”

 5. Botones de IA
- “Autoplanificar IA”  
  → Optimiza el calendario: agrupa por locación, evita solapes de actores, minimiza desplazamientos.
- “Resolver conflictos IA”  
  → Reordena escenas para corregir solapes de actor o problemas logísticos.
- “Generar Call-Sheet”  
  → Crea un PDF con: elenco, horario, locación, clima, lista de escenas.  
  → Guarda `callSheetUrl` en `/shootDays/{dayId}`

 6. Indicadores visuales
- Badge de estado por día:
  - 🟢 Verde: sin conflictos
  - 🟠 Ámbar: advertencias
  - 🔴 Rojo: conflictos críticos
- Barra de progreso: `scenesShotPct` vs. total

 7. Navegación lateral fija
- Sidebar del módulo Producción:
  - Producción → Breakdown Hub → Budget Planner → Shoot Scheduler (activo) → Production Review
- Íconos de estado: ✓ / • / !

---

✅ Conexión con Firestore:
- Colección: `/projects/{id}/shootDays/{dayId}`
  - Campos: `date`, `scenes[]`, `location`, `status`, `callSheetUrl?`
- Índice: `(date ASC, status ASC)` → para cargar agenda por fecha

---

🎯 Conclusión  
El Shoot Scheduler es el centro logístico del rodaje, donde se planifica el orden de escenas con inteligencia. Con IA que ayuda a optimizar y resolver conflictos, garantiza un rodaje eficiente y realista.

¿Siguiente? ¿Quieres ahora la pantalla Production Review?
Perfecto. Basado en los tres documentos (UI 9.0, WireFrame 1.0, FireStore Esquema 9.0), aquí tienes la pantalla Production Review, la última etapa del módulo Producción:

---

 📊 Production Review – Revisión y reporte final

 1. Encabezado
- Nombre del proyecto + `format` y `genre`
- Selector de período (dropdown):  
  → “Semana 1”, “Semana 2”, “Fase de rodaje”, “Todo el proyecto”
- Selector de versión (opcional): `budgets/{budgetId}.version`

 2. Widgets de KPIs (Grid principal)
- Línea de gasto real vs. planificado  
  → Gráfico de líneas: `budgetUsedPct` vs. `plannedPct` por semana
- Escenas rodadas vs. planificadas  
  → Gráfico de barras: `scenesShotPct` vs. `scheduleProgress`
- Retraso acumulado  
  → `delayDays` (en días) + comparación con semanas anteriores
- Variación de coste  
  → `overspendPct` con flecha roja (↑) o verde (↓)

 3. Lista de alertas críticas
- Panel lateral con:
  - “Actor principal con 3 días de retraso”
  - “Presupuesto de VFX supera un 25%”
  - “Locación no disponible para escena 24”
  - “Falta aprobación de 5 partidas de props”

 4. Historial de snapshots
- Tabla de versiones:
  - Fecha
  - `% desglose`
  - `% presupuesto gastado`
  - `días de retraso`
- Permite comparar el estado actual con versiones anteriores

 5. Botones de IA
- “Crear reporte PDF”  
  → Genera un PDF profesional con:
    - KPIs gráficos
    - Lista de escenas rodadas
    - Alertas críticas
    - Resumen financiero
- “Resumen IA”  
  → IA genera un texto ejecutivo:  
    “La producción lleva +12% de sobrecoste, principalmente en VFX. Se recomienda reprogramar 2 días para recuperar tiempo.”

 6. Navegación lateral fija
- Sidebar del módulo Producción:
  - Producción → Breakdown Hub → Budget Planner → Shoot Scheduler → Production Review (activo)
- Íconos de estado: ✓ / • / !

---

✅ Conexión con Firestore:
- Documento único: `/projects/{id}/productionStats`
  - Campos: `breakdownCompletePct`, `budgetUsedPct`, `delayDays`, `overspendPct`
- Colección: `/shootDays` → para calcular `scenesShotPct`
- Colección: `/budgets` → para comparar versiones y calcular `overspendPct`

---

🎯 Conclusión  
El Production Review es el centro de reporte ejecutivo, donde el usuario ve el rendimiento global de la producción, genera informes y toma decisiones basadas en datos.

---

✅ Resumen del flujo completo de NeoScriptor:
1. Biblia → ADN, Personajes, Sinopsis, Mundo
2. Guion → Blueprint, Escenas, Screenplay Editor
3. Storyboard → Scene Navigator, ShotLab, Review Board
4. Animática → Frame Navigator, ShotLab, Video Editor
5. Producción → Breakdown Hub, Budget Planner, Shoot Scheduler, Production Review

Todas las pantallas están ahora definidas, alineadas con los documentos y listas para maquetar.

¿Quieres que te entregue el componente React + Tailwind de alguna pantalla específica?


