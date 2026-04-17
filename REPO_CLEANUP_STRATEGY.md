# Estrategia para evitar conflictos tras la limpieza del repo

Este repositorio ya quedó orientado a **una sola runtime**: `app-next/`.

## Objetivo

Permitir iteraciones visuales rápidas en local sin mezclar archivos del sitio estático viejo.

## Reglas de trabajo

1. **Fuente de verdad única:** todo cambio de UI va en `app-next/src/**`.
2. **No reintroducir legacy:** no crear de nuevo carpetas `css/`, `js/`, `pages/`, `proyect_description/` ni `index.html` en la raíz.
3. **Comandos desde raíz:** usar scripts de `package.json` raíz para evitar cambios inconsistentes por carpeta.
4. **Cambios pequeños y temáticos:** una feature visual por PR para minimizar solapamientos.
5. **Archivar, no mezclar:** si se necesita consultar el sitio viejo, hacerlo en una rama separada (ejemplo: `archive/static-site`) sin merge de vuelta.

## Flujo recomendado (bajo conflicto)

```bash
npm run install:app
npm run dev
```

Para validar antes de abrir PR:

```bash
npm run check
```

## Convención de ramas sugerida

- `visual/<seccion>-<cambio>` para ajustes de UI.
- `infra/<tema>` para pipeline, tooling o estructura.

Esto separa cambios visuales de cambios estructurales y reduce conflictos al integrar.
