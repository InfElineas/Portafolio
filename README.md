# Portafolio — Migración Next.js

Este repositorio ahora usa **Next.js + TypeScript** como base principal en `app-next/`.

## Requisitos

- Node.js 20+
- npm 10+

## Ejecutar en local

```bash
cd app-next
npm install
npm run dev
```

Luego abre: `http://localhost:3000`

## Scripts principales

Desde `app-next/`:

- `npm run dev` — desarrollo local.
- `npm run lint` — lint con reglas Next.
- `npm run typecheck` — chequeo de tipos TypeScript.
- `npm run build` — build de producción.
- `npm run check` — lint + typecheck + build.

## Estructura actual

```text
.
├── app-next/
│   ├── public/
│   │   └── files/
│   │       └── jasan-badell-cv.pdf
│   └── src/
│       ├── app/
│       ├── components/
│       ├── data/
│       └── lib/
├── .github/workflows/next-quality.yml
├── DEPLOY_PHASE6_CHECKLIST.md
└── CV_CHATGPT_CONTEXT.md
```

## Deploy

- Flujo recomendado: Vercel con Root Directory = `app-next`.
- Revisa checklist operativo en `DEPLOY_PHASE6_CHECKLIST.md`.

## CI

Se incluye workflow `next-quality` para ejecutar en PR/push:

- install
- lint
- typecheck
- build

## SEO técnico

Se incluyen:

- `app-next/src/app/robots.ts`
- `app-next/src/app/sitemap.ts`
- redirecciones legacy en `app-next/next.config.ts`

## Contexto para CV

`CV_CHATGPT_CONTEXT.md` contiene contexto + prompt para actualizar tu CV y perfil LinkedIn con tus proyectos actuales.
