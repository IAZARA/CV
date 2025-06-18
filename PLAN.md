# Plan de Mejora para el Currículum Interactivo

Este plan está diseñado para ser robusto y escalable, asegurando que las mejoras no solo solucionen los problemas actuales, sino que también faciliten el mantenimiento futuro.

## Diagrama del Flujo de Trabajo

```mermaid
graph TD
    A[Inicio] --> B{Fase 1: Refactorización y Preparación};
    B --> C{Fase 2: Implementación de Mejoras};
    C --> D[Sub-tarea 2.1: Internacionalización (i18n) Completa];
    C --> E[Sub-tarea 2.2: Ajustes Visuales];
    E --> F[Quitar insignia "AI"];
    E --> G[Corregir título truncado];
    D & E --> H{Fase 3: Sugerencias y Próximos Pasos};
    H --> I[Recomendaciones de Contenido];
    I --> J[Fin del Plan];

    style B fill:#1e293b,stroke:#5eead4,stroke-width:2px
    style C fill:#1e293b,stroke:#5eead4,stroke-width:2px
    style H fill:#1e293b,stroke:#5eead4,stroke-width:2px
```

---

## Fase 1: Refactorización y Preparación (Base Sólida)

Antes de añadir nuevas funcionalidades, es una buena práctica organizar el código existente. Esto hará que el sitio sea mucho más fácil de mantener.

1.  **Externalizar CSS:**
    *   Crear un nuevo archivo llamado `style.css`.
    *   Mover todo el contenido que está dentro de las etiquetas `<style>` de `index.html` al nuevo archivo `style.css`.
    *   En `index.html`, reemplazar el bloque `<style>` con un enlace al nuevo archivo: `<link rel="stylesheet" href="style.css">`.

2.  **Externalizar JavaScript:**
    *   Crear un nuevo archivo llamado `script.js`.
    *   Mover todo el código que está dentro de las etiquetas `<script>` de `index.html` al nuevo archivo `script.js`.
    *   En `index.html`, reemplazar el bloque `<script>` con una referencia al nuevo archivo: `<script src="script.js"></script>`.

**Resultado de esta fase:** Un proyecto más limpio y organizado, con el HTML, CSS y JavaScript en archivos separados.

---

## Fase 2: Implementación de Mejoras

Aquí abordaremos tus solicitudes específicas.

### Sub-tarea 2.1: Internacionalización (i18n) Completa

El objetivo es que *todo* el texto del sitio pueda ser traducido.

1.  **Centralizar las Traducciones:** En lugar de guardar los textos en atributos `data-` en cada elemento HTML, crearemos un único objeto JSON dentro de `script.js`. Esto es mucho más limpio y fácil de gestionar.

2.  **Actualizar el HTML:** A cada elemento que contenga texto a traducir, le añadiremos un atributo `data-key` que corresponda a una clave en nuestro objeto de traducciones.

3.  **Modificar la Lógica de Traducción:** Actualizaremos la función en `script.js` para que lea las `data-key` y use el objeto de traducciones para poblar el texto.

### Sub-tarea 2.2: Ajustes Visuales

1.  **Eliminar la Insignia "AI":**
    *   En el archivo `index.html`, simplemente eliminaremos el bloque `div` que corresponde a la insignia.

2.  **Corregir el Título Truncado:**
    *   El problema es causado por la clase `typewriter`. Se eliminará esta clase para permitir que el texto se ajuste correctamente.

---

## Fase 3: Sugerencias y Próximos Pasos

Una vez implementados los cambios técnicos, se sugieren las siguientes mejoras de contenido:

1.  **Cuantificar Logros:** En la sección de experiencia, transformar responsabilidades en logros medibles.
2.  **Sección de "Proyectos Destacados":** Convertir la galería de imágenes en una sección de proyectos con descripciones.
3.  **Sincronizar con el PDF:** Añadir un botón de "Descargar CV en PDF" y alinear el contenido.