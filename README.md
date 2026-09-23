# TechToJob

Landing de la comunidad de TechToJob, hecha para la Torneo #2. Sitio en vivo: https://techtojob.christopherozuna.com

## Stack

- Next.js 16 (App Router), TypeScript
- CSS Modules, sin Tailwind
- next-intl para es/en, con `app/[locale]/` y rutas prerenderizadas para los dos idiomas
- Deploy en Docker (`output: standalone`) detrás de nginx, TLS con Let's Encrypt

## Correrlo local

```bash
npm install
npm run dev
```

Abre en `http://localhost:3000`, redirige a `/es` por default.

```bash
npm run build   # build de producción
npm run lint
```

## Estructura

- `app/[locale]/` — layout y metadata por idioma (generateStaticParams para es/en)
- `components/sections/` — cada sección de la landing, una por archivo
- `messages/es.json` / `messages/en.json` — todo el copy, nada hardcodeado en los componentes
- `deploy/` — Dockerfile y compose para el VPS
