# Fase 6 — Calidad, deploy y transición final

## 1) Calidad mínima antes de release

- [ ] `npm run lint`
- [ ] `npm run typecheck`
- [ ] `npm run build`
- [ ] Verificar rutas críticas: `/`, `/about`, `/projects`, `/projects/[slug]`, `/contact`
- [ ] Probar envío de formulario de contacto y respuestas de error

## 2) Deploy recomendado (Vercel)

1. Importar el repositorio en Vercel.
2. Configurar **Root Directory** = `app-next`.
3. Build command: `npm run build`.
4. Output: `.next` (automático en Next.js).
5. Añadir variables de entorno cuando se integre proveedor de email/DB.

## 3) Transición desde sitio estático

- Mantener el sitio estático activo durante pruebas en preview.
- Validar redirecciones legacy en `next.config.ts`:
  - `/index.html` -> `/`
  - `/pages/about.html` -> `/about`
  - `/pages/project.html` -> `/projects`
  - `/pages/contact.html` -> `/contact`
  - `/proyect_description/*.html` -> `/projects/[slug]`
- Activar producción en Next.js cuando la paridad visual/funcional esté validada.

## 4) Post-deploy

- Revisar Search Console (sitemap/robots).
- Ejecutar Lighthouse en páginas críticas.
- Monitorear formulario de contacto (ratio de éxito/error y rate limit).
