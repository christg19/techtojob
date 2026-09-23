# TechToJob

Landing de la comunidad de TechToJob, hecha para la Torneo #2. Sitio en vivo: https://techtojob.christopherozuna.com

No es un job board. Es la página del servidor de Discord: developers publican lo que construyen, las empresas leen los canales antes de hablar con nadie, y el matching pasa por ahí en vez de por un formulario.

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

## Notas sobre el diseño

El sistema de diseño viene de un handoff cerrado: tres colores (`#2f3436`, `#84c0bf`, `#ffffff`), cero `border-radius`, una sola tipografía (Sora), sombras duras en vez de blur. Está implementado literal, sin desviaciones — lo que ves en el Figma es lo que hay en el CSS.

Bilingüe no era requisito, lo agregué porque el anuncio del torneo lo menciona como plus y next-intl con App Router lo deja limpio de implementar sin duplicar componentes.
