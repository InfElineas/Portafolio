# Portafolio — Jasan Badell

Sitio web personal de portafolio desarrollado con HTML, CSS y JavaScript.

## Tecnologías actuales usadas

- HTML5 semántico
- CSS3 (layout responsive + animaciones)
- JavaScript moderno (sin jQuery)
- Typed.js para texto dinámico
- yall.js para lazy loading de imágenes
- Google Analytics 4 (GA4)

## Cómo correr localmente

### Opción rápida (recomendada)

Con cualquier servidor estático.

Ejemplos:

```bash
# Python 3
python3 -m http.server 8080

# Node (si tienes npx)
npx serve .
```

Luego abre en tu navegador:

- `http://localhost:8080` (Python)
- o la URL que muestre `serve`

> Nota: evita abrir `index.html` directamente con `file://` para que rutas absolutas como `/css/style.css` funcionen correctamente.

## Estructura de carpetas

```text
.
├── index.html
├── README.md
├── css/
│   └── style.css
├── js/
│   ├── main.js
│   ├── configuration.typed.js
│   └── yall.min.js
├── pages/
│   ├── about.html
│   ├── contact.html
│   └── project.html
├── proyect_description/
│   ├── scholeia.html
│   ├── hitmeup.html
│   └── foundme.html
└── img/
    └── ...assets visuales, logos y CV...
```

## Checklist SEO / Performance

### SEO

- [ ] Definir `<title>` y `<meta description>` únicos por página.
- [ ] Agregar Open Graph (`og:title`, `og:description`, `og:image`, `og:url`).
- [ ] Agregar Twitter Cards.
- [ ] Validar jerarquía de encabezados (`h1`, `h2`, etc.) por página.
- [ ] Añadir `sitemap.xml` y `robots.txt`.
- [ ] Añadir `canonical` en páginas principales.

### Performance

- [ ] Comprimir y servir imágenes WebP/AVIF donde aplique.
- [ ] Activar caché estática agresiva para CSS/JS/imágenes.
- [ ] Minificar CSS y JS en despliegue.
- [ ] Cargar scripts con `defer`/`async` (ya aplicado en scripts de UI/analytics).
- [ ] Medir Lighthouse y corregir oportunidades de Core Web Vitals.

### Accesibilidad

- [ ] Completar atributos `alt` descriptivos en imágenes relevantes.
- [ ] Verificar contraste de color mínimo AA.
- [ ] Confirmar foco visible para navegación por teclado.

## Estrategia de deploy

### Recomendación: GitHub Pages (simple y gratis)

1. Subir cambios a la rama principal (`main` o `master`).
2. Ir a **Settings → Pages** en GitHub.
3. Seleccionar fuente: rama principal y carpeta raíz (`/root`).
4. Guardar y esperar publicación.
5. (Opcional) Configurar dominio personalizado en `CNAME`.

### Alternativas

- **Netlify**: deploy continuo desde GitHub, previews por pull request.
- **Vercel**: muy buena DX para frontends estáticos.

## Configuración de Analytics (GA4)

El proyecto ya está preparado para GA4. Debes reemplazar el Measurement ID placeholder:

- Buscar `G-XXXXXXXXXX`
- Reemplazar por tu ID real de GA4, por ejemplo: `G-ABC123XYZ9`

## Mantenimiento sugerido

- Revisar enlaces externos trimestralmente.
- Actualizar librerías de terceros (Typed.js/yall.js) periódicamente.
- Pasar Lighthouse antes de cada release.

## Documento de contexto para actualizar tu CV con ChatGPT

Se añadió el archivo `CV_CHATGPT_CONTEXT.md` con:

- perfil profesional actualizado,
- stack y fortalezas,
- proyectos actuales con enlaces,
- prompt recomendado para generar CV y resumen de LinkedIn,
- checklist de datos faltantes para cerrar versión final.

Úsalo como base al pedirle a ChatGPT una versión ATS-friendly de tu currículum.


## Migración a Next.js (Paso 1)

Se inicializó una base de aplicación en `app-next/` con:

- Next.js (App Router)
- TypeScript
- ESLint
- Layout global con Header/Footer
- Rutas iniciales: `/`, `/about`, `/projects`, `/contact`

Para ejecutar cuando tengas dependencias instaladas:

```bash
cd app-next
npm install
npm run dev
```


## Migración a Next.js (Paso 2)

La home de Next (`app-next/src/app/page.tsx`) ya está migrada con:

- hero principal con copy actualizado,
- CTAs de navegación,
- bloque de enlaces sociales,
- estilos responsive específicos en `app-next/src/app/globals.css`.


## Migración a Next.js (Fase 3)

Se migraron las vistas principales en `app-next/src/app`:

- `/about` con perfil, stack y skills,
- `/projects` con cards y enlaces por proyecto,
- `/contact` con copy de colaboración y canales de contacto.

Además, se añadieron estilos reutilizables para estas secciones en `app-next/src/app/globals.css`.


## Migración a Next.js (Fase 4)

Se convirtió la sección de proyectos a modelo **data-driven**:

- Fuente única en `app-next/src/data/projects.ts`.
- Listado dinámico en `app-next/src/app/projects/page.tsx`.
- Rutas dinámicas de detalle en `app-next/src/app/projects/[slug]/page.tsx`.

Esto deja la base lista para conectar CMS/API sin reescribir componentes.


## Migración a Next.js (Fase 5)

Se añadió la base para funcionalidades futuras:

- API route de contacto en `app-next/src/app/api/contact/route.ts` con validación y rate limiting básico.
- Formulario de contacto cliente en `app-next/src/components/contact/contact-form.tsx` conectado a `/api/contact`.
- Capa de validación reutilizable en `app-next/src/lib/contact-validation.ts`.
- Preparación auth-ready con `app-next/src/middleware.ts` (rutas protegibles `/admin` y `/dashboard`).


## Migración a Next.js (Fase 6)

Se añadió la capa de cierre para calidad, deploy y transición:

- `app-next/next.config.ts` con redirecciones legacy -> rutas Next.
- `app-next/src/app/robots.ts` y `app-next/src/app/sitemap.ts` para SEO técnico.
- `app-next/src/app/not-found.tsx` para fallback de rutas no válidas.
- Workflow CI en `.github/workflows/next-quality.yml` para lint, typecheck y build.
- Checklist operativo en `DEPLOY_PHASE6_CHECKLIST.md`.
