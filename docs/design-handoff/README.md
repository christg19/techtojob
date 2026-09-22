# Handoff: TechToJob — landing de comunidad

## Overview

Landing de una sola página para **TechToJob**, una comunidad de desarrolladores y empresas tech en español que vive en Discord. Un único objetivo de conversión: que quien la lee entre al servidor.

No es un portal de empleo, y el diseño está construido para que eso se entienda en los primeros tres segundos. Todos los CTA de la página apuntan al mismo destino (`https://discord.gg/h9FFgKdkRd`). No hay backend, registro ni segunda página. El formulario de newsletter es solo UI.

**Destino:** Next.js (App Router) + next-intl. No hay repositorio previo — se empieza de cero.

## About the Design Files

Los archivos de este paquete son **referencias de diseño hechas en HTML**: prototipos que muestran el aspecto y el comportamiento buscados, no código de producción para copiar.

El trabajo es **recrear estos diseños en Next.js** usando los patrones del proyecto destino. El HTML de referencia lleva estilos inline en cada elemento porque el entorno donde se creó lo exige; en Next.js eso debe convertirse en lo que use el proyecto — CSS Modules, Tailwind, styled-components — sin arrastrar los inline.

**No copies el HTML al repo.** Úsalo como especificación visual: los valores exactos están en este documento y los textos en `messages/es.json`.

Para abrir la referencia: `TechToJob Landing.html` funciona con doble clic, sin servidor ni conexión. `TechToJob Landing.dc.html` es la fuente y necesita `support.js` al lado.

## Fidelity

**Alta fidelidad.** Colores, tipografía, escalas, espaciado e interacciones son definitivos. Tres restricciones de marca que no son negociables:

1. Solo tres colores: `#2f3436`, `#84c0bf`, `#ffffff`. Nada más, salvo los dos grises derivados de la tabla de tokens.
2. `#84c0bf` **nunca** en texto de párrafo ni en texto pequeño. Solo fondos de botón, badges, subrayados y trazos de doodle.
3. Sora en toda la jerarquía, sin mezclar con otra familia.

Y una del sistema visual: **cero `border-radius` en toda la página.** Es la decisión que sostiene el neo-brutalismo; un solo radio lo rompe.

## Arquitectura

Mobile-first. Nueve secciones más el footer, con un ritmo de bandas que alterna y nunca repite fondo consecutivo:

| # | `id` | Sección | Fondo | Texto |
|---|------|---------|-------|-------|
| — | — | Cabecera (sticky) | `#2f3436` | `#ffffff` |
| 1 | `top` | Hero | `#2f3436` | `#ffffff` |
| — | — | Franja de torneo (condicional) | `#c2492c` | `#ffffff` |
| 2 | `how` | Cómo funciona | `#84c0bf` | `#2f3436` |
| 3 | `talent` | Ofrécete como talento | `#ffffff` | `#2f3436` |
| 4 | `companies` | Publica como empresa | `#2f3436` | `#ffffff` |
| 5 | `tournaments` | Torneos | `#84c0bf` | `#2f3436` |
| 6 | `networking` | Networking | `#ffffff` | `#2f3436` |
| 7 | `news` | Noticias | `#2f3436` | `#ffffff` |
| 8 | `newsletter` | Newsletter | `#84c0bf` | `#2f3436` |
| 9 | `join` | Cierre | `#2f3436` | `#ffffff` |
| — | — | Footer | `#2f3436` | `#ffffff` |

Cada `<section>` lleva `data-screen-label` con su nombre humano. Las nueve van dentro de un `<main>`; cabecera y footer quedan fuera.

### Contenedor común

```
section  padding: clamp(72px, 13vw, 132px) 0
  div    width: 100%; max-width: 1160px; margin: 0 auto
         padding: 0 clamp(20px, 5vw, 48px)
```

Excepciones: Hero `clamp(44px,10vw,88px)` arriba y `clamp(56px,12vw,104px)` abajo; Cierre `clamp(76px,14vw,140px)`; Footer `0 0 clamp(32px,7vw,48px)`.

### Cabecera de sección (patrón repetido en las nueve)

```
div   border-top: 2px solid <rule>; padding-top: 14px
  span  eyebrow — 10.5px / 700 / letter-spacing .16em / uppercase
div   margin-top: clamp(24px,5.5vw,36px)
      display: flex; flex-wrap: wrap; align-items: flex-end
      gap: clamp(18px,4vw,48px)
  h2    flex: 1 1 360px; clamp(28px,7.4vw,54px) / 800 / lh 1.02 / ls -.03em
        text-wrap: balance
  p     flex: 1 1 300px; max-width: 46ch
        clamp(15px,3.9vw,18px) / 400 / lh 1.6
```

Titular y bajada **lado a lado en escritorio, apilados en móvil**. Es deliberado: con el h2 solo, las cabeceras dejaban media página vacía.

Color de regla y eyebrow según banda:

| Banda | Regla | Eyebrow |
|---|---|---|
| blanca | `#2f3436` | `#5a6163` |
| charcoal | `#ffffff` | `#84c0bf` |
| teal | `#2f3436` | `#2f3436` |

## Secciones

### Cabecera (sticky)

`position: sticky; top: 0; z-index: 60`, fondo `#2f3436`, `border-bottom: 2px solid #84c0bf`, `padding: 12px clamp(20px,5vw,48px)`. Logo horizontal a `height: clamp(21px,5.6vw,26px)` y CTA compacto a la derecha.

**No hay navegación de secciones.** Un solo CTA, deliberadamente: la página tiene una sola acción y un menú ofrecería alternativas a ella.

### 1 · Hero (`#top`)

Resolver la categoría en tres segundos y dar el único CTA.

Dos columnas en `flex-wrap: wrap`, `gap: clamp(32px,6vw,56px)`, `align-items: flex-start`. Texto `flex: 1.2 1 320px`; mockup `flex: 1 1 290px; max-width: 460px`. Se apilan por debajo de ~735px de ventana.

- **Eyebrow** — `display: block` sobre `#84c0bf`, texto `#2f3436`, 10.5px/700, ls .14em, uppercase, `padding: 6px 11px`. Es `block` a propósito: como `inline` el fondo se rompía al partir en dos líneas.
- **H1** — `clamp(34px,7.2vw,50px)` / 800 / lh 1.04 / ls -.035em, `text-wrap: balance`, `#ffffff`. Dos frases; la última palabra lleva subrayado doodle y `white-space: nowrap` para que el trazo no quede suelto.
- **Bucle de tres beats** — tres frases de `clamp(17px,4.3vw,21px)`/700 separadas por flechas doodle verticales de 22×32px. Es el producto entero explicado sin una sola palabra de folleto; no lo sustituyas por una lista de features.
- **CTA primario** — fondo `#84c0bf`, texto `#2f3436`, borde `2px solid #84c0bf`, `clamp(15px,4vw,18px)`/700, `padding: 15px 22px`, `box-shadow: 5px 5px 0 #ffffff`.
- **Mockup de canal** — tarjeta `#ffffff` con borde `2px solid #ffffff` y `box-shadow: 6px 6px 0 #84c0bf`. Cabecera con cinco chips de canal, tres mensajes con avatar cuadrado de 32px (el tercero con badge «Empresa»), y pie con la frase de cierre más el aviso de simulación en 11px.
- **Dos tarjetas de dolor** — enlaces a `#talent` y `#companies`. Fondo `#2f3436`, borde `2px solid #ffffff`, sombra `5px 5px 0 #84c0bf`. Rejilla `minmax(272px,1fr)`.

### 2 · Cómo funciona (`#how`)

Columna única, `max-width: 720px`. Cada paso es un flex con `gap: clamp(14px,3.5vw,22px)`.

- **Número** — cuadrado de `clamp(44px,11vw,56px)`, fondo `#ffffff`, borde `2px solid #2f3436`, cifra `clamp(17px,4.4vw,22px)`/800. El paso 04 invierte a fondo `#2f3436` y cifra `#ffffff` para marcar el final.
- **Flechas doodle entre pasos** — SVG `viewBox="0 0 26 46"`, 26×44px, `margin: 6px 0 6px clamp(9px,2.6vw,15px)` para caer alineadas con el centro del número. Cada una tiene una curva ligeramente distinta: están dibujadas a mano, no clonadas.
- El paso 04 enlaza a `#companies`.

### 3 · Ofrécete como talento (`#talent`)

La sección más larga: promesa, prueba y objeciones.

- **Cuatro tarjetas de promesa** — `#ffffff`, borde `2px solid #2f3436`, sombra `5px 5px 0 #2f3436`. Rejilla `minmax(340px,1fr)` → **2×2 fijo**.
- **Bloque «Lo que ya se publica»** — separado por `border-top: 2px solid #2f3436`. Tres tarjetas **charcoal** (fondo `#2f3436`, sombra `5px 5px 0 #84c0bf`) para que no compitan con las cuatro blancas. Cada una: título del proyecto `clamp(17px,4.4vw,21px)`/800, una línea en `#dfe3e3`, y pie con handle y canal separado por `border-top: 2px solid #84c0bf`. Rejilla `minmax(240px,1fr)`.
- **Bloque «Sin letra pequeña»** — pares pregunta/respuesta en rejilla `minmax(300px,1fr)`, sin tarjeta: h4 a `clamp(15px,4vw,17px)`/700 y respuesta en `#5a6163`. Las objeciones van donde nacen, no en una FAQ enterrada al final.

### 4 · Publica como empresa (`#companies`)

- **Tres tarjetas** — borde `2px solid #ffffff`, sombra `5px 5px 0 #84c0bf`, sin fondo propio. Rejilla `minmax(240px,1fr)`.
- **Caso de contacto** — bloque a dos mitades en `flex-wrap: wrap`. Izquierda (`flex 1 1 260px`) sobre blanco: qué publicó. Derecha (`flex 1 1 320px`) sobre `#84c0bf`: el mensaje que recibió, como `<blockquote>` en `clamp(17px,4.3vw,22px)`/700 y color `#2f3436`. El corte de color marca los dos tiempos sin necesidad de flechas. Es el bloque que mejor demuestra el posicionamiento de toda la página.

### 5 · Torneos (`#tournaments`)

- **Cuatro tarjetas** blancas con sombra `5px 5px 0 #2f3436`, rejilla `minmax(340px,1fr)` → **2×2 fijo**.
- **Bloque «¿Y si no ganas?»** — ancho completo, fondo `#2f3436`, sombra `5px 5px 0 #ffffff`. Es la recompensa que no depende de ganar ni de que te contraten; sin él la sección solo habla al que gana.
- La cuarta tarjeta lleva el único dato verificable de la página: «Esta página es una entrega del Torneo #2.»

### 6 · Networking (`#networking`)

- **Chips de canal** — `<ul>` con `aria-label`, `flex-wrap: wrap`, `gap: 10px`. Borde `2px solid #2f3436`, `clamp(13px,3.5vw,15px)`/600, `padding: 8px 13px`. Dos destacados: `#primer-empleo` con fondo teal, `#empresas` con fondo charcoal.
- **Dos tarjetas** blancas con sombra `5px 5px 0 #2f3436`, rejilla `minmax(268px,1fr)`.
- Cierra con CTA propio: es el punto de mayor intención de la página.

### 7 · Noticias (`#news`)

Lista vertical, no rejilla. Cada entrada es un `<a>` con `border-top: 2px solid #84c0bf` y `padding: clamp(20px,4.5vw,28px) 0`; la última añade `border-bottom`.

- **Badge de categoría** — fondo `#84c0bf`, texto `#2f3436`, 9.5px/700, ls .14em, uppercase.
- **Título** — `clamp(19px,5vw,28px)`/700/ls -.025em, `max-width: 26ch`.
- **Hover de fila** — `background: rgba(255,255,255,.06)`.

### 8 · Newsletter (`#newsletter`)

Tarjeta blanca `max-width: 720px` con borde `2px solid #2f3436`, sombra `5px 5px 0 #2f3436`, sobre banda teal.

- **H2 en dos líneas**, la segunda con subrayado doodle y `white-space: nowrap`.
- **Tres bullets** — cuadrado de 10px en `#84c0bf` con borde `2px solid #2f3436`, `margin-top: 7px` para alinear con la primera línea.
- **Input** — borde `2px solid #2f3436`, `padding: 13px 14px`, `outline: none`; focus `box-shadow: 4px 4px 0 #84c0bf`.
- **Botón** — dice lo que recibes, no «Suscribirse».
- **Estado de éxito** — bloque `#2f3436` con `role="status" aria-live="polite"`.

### 9 · Cierre (`#join`)

H2 `clamp(36px,10.6vw,86px)` / 800 / lh .93 / ls -.04em / `max-width: 16ch` — el mayor de la página. Antes de la bajada va la línea de a quién **no** le sirve esto, con `border-left: 2px solid #84c0bf`. CTA idéntico al del hero pero con `box-shadow: 6px 6px 0 #ffffff`.

### Footer

`<nav aria-label="Enlaces del sitio">` en rejilla `minmax(168px,1fr)`, `gap: clamp(24px,5vw,36px)`. El bloque de marca ocupa `grid-column: 1/-1` con el logo apilado a `height: clamp(64px,15vw,82px)`. Cuatro grupos: Talento, Empresas, Comunidad, Legal.

Debajo, separado por `border-top: 2px solid rgba(255,255,255,.18)`: cuatro redes (Discord con borde sólido blanco, el resto `rgba(255,255,255,.35)`) y el selector de idioma. Cierra el aviso legal en 12px `#dfe3e3`, `max-width: 72ch`.

## Interactions & Behavior

| Elemento | Comportamiento |
|---|---|
| Botones y tarjetas-enlace | `transform: translate(3px,3px)` + sombra a la mitad, `transition: .12s ease`. La tarjeta se «hunde» hacia su sombra. |
| Botones pequeños | Igual con `translate(2px,2px)`. |
| Enlaces de texto | `border-bottom: 2px solid #84c0bf` que cambia de color en hover. Nunca `text-decoration` por defecto. |
| Enlaces del footer | Sin subrayado; en hover subrayado teal de 2px con `underline-offset: 3px`. |
| Filas de noticias | `background: rgba(255,255,255,.06)`. |
| Input | `box-shadow: 4px 4px 0 #84c0bf` en focus. |
| Navegación interna | Anclas nativas con `scroll-behavior: smooth`. |
| Enlaces externos | `target="_blank" rel="noopener"`. |

**Sin animaciones de entrada, sin parallax, sin reveal al hacer scroll.** El movimiento es solo respuesta directa al puntero.

## State Management

Dos piezas de estado, ambas locales:

```
email: string        // input de la newsletter
subscribed: boolean  // alterna el formulario por el bloque de éxito
```

El submit hace `preventDefault()` y solo cambia `subscribed` si `email.trim()` no está vacío. **No hay petición de red.** En producción: conectar a un proveedor de correo o quitar la sección.

Una prop controla un condicional:

- `tournamentDate: string` — si no está vacío, aparece la franja de aviso entre Hero y «Cómo funciona».

## Design Tokens

### Color

| Token | Hex | Uso |
|---|---|---|
| charcoal | `#2f3436` | fondo de banda ancla, texto sobre claro, bordes |
| teal | `#84c0bf` | fondo de banda, botones, badges, subrayados, trazos |
| white | `#ffffff` | fondo de banda, texto sobre oscuro |
| gris sobre blanco | `#5a6163` | texto secundario — 6.1:1 sobre blanco |
| gris sobre oscuro | `#dfe3e3` | texto secundario — 9.4:1 sobre charcoal |
| borde tenue | `rgba(255,255,255,.18)` | solo separadores del footer |
| hover de fila | `rgba(255,255,255,.06)` | solo filas de noticias |
| franja de aviso | `#c2492c` | **solo** la franja condicional del torneo |

Sobre `#84c0bf` el texto va **siempre** en `#2f3436` a opacidad plena. Nunca blanco: da 2.1:1.

### Tipografía

Sora, pesos 400 / 500 / 600 / 700 / 800.

| Rol | Tamaño | Peso | lh | ls |
|---|---|---|---|---|
| H1 | `clamp(34px,7.2vw,50px)` | 800 | 1.04 | -.035em |
| H2 cierre | `clamp(36px,10.6vw,86px)` | 800 | .93 | -.04em |
| H2 sección | `clamp(28px,7.4vw,54px)` | 800 | 1.02 | -.03em |
| H2 newsletter | `clamp(25px,6.6vw,42px)` | 800 | 1.05 | -.03em |
| Beat del hero | `clamp(17px,4.3vw,21px)` | 700 | 1.35 | -.015em |
| Título de noticia | `clamp(19px,5vw,28px)` | 700 | 1.15 | -.025em |
| H3 paso / destacado | `clamp(18px,4.7vw,24px)` | 700–800 | 1.2 | -.02em |
| H3 bloque interno | `clamp(20px,5.2vw,30px)` | 800 | 1.15 | -.025em |
| H4 proyecto | `clamp(17px,4.4vw,21px)` | 800 | 1.18 | -.025em |
| H3 tarjeta | `clamp(16px,4.2vw,19px)` | 700 | 1.25 | -.015em |
| H4 pregunta | `clamp(15px,4vw,17px)` | 700 | 1.3 | -.015em |
| Bajada | `clamp(15px,3.9vw,18px)` | 400 | 1.6 | — |
| Cuerpo de tarjeta | `clamp(14px,3.7vw,15.5px)` | 400 | 1.6 | — |
| Nota de CTA | 13.5px | 500 | 1.5 | — |
| Eyebrow | 10.5px | 700 | — | .16em |
| Badge | 9.5–10px | 700 | — | .14em |

Mínimo absoluto: 11px, y solo en el aviso de simulación del mockup.

### Espaciado

- Padding de sección: `clamp(72px,13vw,132px)` vertical
- Padding lateral: `clamp(20px,5vw,48px)`
- Ancho máximo: 1160px
- Gap de rejilla: `clamp(16px,3.5vw,24px)`
- Padding de tarjeta: `clamp(18px,4vw,24px)`, o `clamp(20px,4.5vw,30px)` en destacados

### Bordes y sombras

- **Cero `border-radius`.**
- Borde `2px solid`, en `#2f3436` o `#ffffff` según banda
- Sombra dura estándar `5px 5px 0`, sin difuminado
- Mockup del hero y CTA de cierre `6px 6px 0`
- Botón pequeño `3px 3px 0` o `4px 4px 0`
- **Nunca** blur, alpha en la sombra, gradientes ni glass

### Suelos de rejilla

El suelo decide cuántas columnas caben y si queda una tarjeta huérfana. Con 1064px de contenido y `gap: 24px`:

| Tarjetas | Suelo | Resultado |
|---|---|---|
| 4 | `minmax(340px,1fr)` | 2×2 fijo |
| 3 | `minmax(240px,1fr)` | 3 en una fila |
| 2 | `minmax(268px,1fr)` | 2 en una fila |
| pares Q/A | `minmax(300px,1fr)` | 2 columnas |

⚠️ Una rejilla de tres tiene una franja entre ~560 y ~856px donde pasa a dos columnas y deja una huérfana. El prototipo no podía usar media queries; **en Next.js resuélvelo con una**, saltando de 3 columnas a 1.

## Doodles

Dos primitivas, nada más:

1. **Subrayado ondulado** — bajo palabras clave del H1, del H2 de newsletter y del paso 04.
2. **Flecha recta con punta** — entre los beats del hero y entre los pasos de «Cómo funciona».

No hay asteriscos, ni círculos, ni flechas curvas decorativas.

Reglas invariables: `stroke-width: 2.5` siempre (6 en la OG, que va a otra escala), `stroke-linecap: round`, `vector-effect: non-scaling-stroke`, color `#84c0bf` — o `#2f3436` sobre banda teal — y **siempre pegado a lo que señala**. El padre necesita `position: relative`. Todos llevan `aria-hidden="true"`.

## Accesibilidad

Implementado y verificado — **mantenlo al portar**:

- `<main>`, `<nav aria-label>`, `<header>`, `<footer>` como landmarks.
- **Enlace de salto** al contenido, oculto hasta recibir foco.
- **Anillo de foco por banda.** Ningún color único llega a 3:1 contra las tres bandas, así que el color depende de la sección:
  ```css
  :focus-visible { outline: 3px solid #2f3436; outline-offset: 3px; }
  header :focus-visible, #top :focus-visible, #companies :focus-visible,
  #news :focus-visible, #join :focus-visible, footer :focus-visible { outline-color: #ffffff; }
  ```
  Medido sobre los 39 elementos enfocables: mínimo 5.9:1, el resto 12.6:1. **No lo sustituyas por un halo con `box-shadow`** — las tarjetas llevan sombra dura propia y se la comen.
- `prefers-reduced-motion` desactiva transiciones y scroll suave.
- Jerarquía h1 → h2 → h3 → h4 sin saltos, un solo h1.
- Iniciales de avatar y todos los SVG con `aria-hidden="true"`.
- Estado de suscripción con `role="status" aria-live="polite"`.
- `<label>` real en el input; `alt` en los logos.

## SEO

En el `<head>`: `title`, `description`, `canonical`, tres `hreflang` (es / en / x-default), Open Graph completo con `og:image` 1200×630 más `width`/`height`/`alt`, Twitter Card y `theme-color`.

En Next.js esto va en el `export const metadata` de `app/[locale]/layout.tsx`, no en el cuerpo.

⚠️ **El dominio `techtojob.es` es un marcador.** Aparece en `canonical`, `og:url` y los tres `hreflang`. Cámbialo por el real antes de publicar: un canonical apuntando a un dominio que no controlas hace más daño que no ponerlo.

Nota sobre `hreflang`: `es` y `x-default` deben apuntar a la misma URL que el canonical. En el prototipo se inyectan por JS porque el motor de plantillas deduplicaba enlaces con href idéntico; en Next.js van estáticos en `metadata.alternates`.

## Internacionalización

Ningún texto está incrustado en el maquetado. Todo vive en `messages/es.json` (193 cadenas), y cada nodo de texto lleva un `data-i18n-key` con su ruta exacta:

```html
<h2 data-i18n-key="talent.title">Tu nivel no decide lo que puedes aportar.</h2>
```
```jsx
<h2>{t('talent.title')}</h2>
```

`Textos-mapa-completo.md` lista las 189 cadenas por sección, en orden de aparición. Úsalo como checklist al portar.

`messages/en.json` tiene el mismo árbol con los valores vacíos. La clave `links` está duplicada tal cual en ambos: son URL, no texto traducible.

```
app/[locale]/layout.tsx
app/[locale]/page.tsx
messages/es.json
messages/en.json
```

`generateStaticParams()` devuelve `['es','en']`. El selector de idioma del footer ya es un `<a href="/en/" hreflang="en">` real, no JavaScript — **mantenlo así**.

## Assets

En `brand/`, todos SVG salvo la OG:

| Archivo | Uso |
|---|---|
| `logo-h-teal.svg` | cabecera, sobre charcoal |
| `logo-h-charcoal.svg` | sobre fondos claros |
| `logo-h-white.svg` | sobre teal |
| `logo-stacked-teal.svg` | footer |
| `logo-stacked-charcoal.svg` | apilado sobre claro |
| `symbol-teal.svg` | favicon |
| `symbol-charcoal.svg`, `symbol-white.svg` | variantes del símbolo |
| `og.png` | tarjeta social 1200×630 |

Los SVG llevan el relleno en atributo `fill` y el wordmark en curvas, así que se recolorean cambiando un valor. Tipografía: Sora desde Google Fonts, pesos 400;500;600;700;800.

Cero librerías de iconos, cero imágenes de contenido.

## Contenido de muestra

Inventado para la maqueta. Se sustituye editando **solo** `messages/es.json`:

| Clave | Qué es |
|---|---|
| `hero.conversation.*` | el canal de ejemplo del hero — lleva su propio aviso de simulación visible |
| `talent.projects.items` | los tres proyectos |
| `companies.contact` | el caso de contacto empresa ↔ dev |
| `news.items` | las tres noticias |
| `networking.channels` | los canales por área |

**Cero cifras de miembros, empresas o plazos en toda la página.** Es deliberado y no debe añadirse ninguna sin dato real: una web con datos inflados se cae sola en cuanto alguien entra al servidor.

## Pendiente

1. **Dominio real** — sustituir `techtojob.es` en canonical, `og:url` y hreflang.
2. **Newsletter** — conectar a un proveedor de correo o eliminar la sección.
3. **Páginas legales** — los tres enlaces del footer apuntan a `#`.
4. **Fecha del Torneo #2** — al rellenar `tournamentDate` aparece la franja de aviso.
5. **Media query** para la franja de tablet en las rejillas de tres tarjetas.
6. **Canales reales** — los `#frontend`, `#backend`… son una lista provisional; sustituir por los del servidor.

## Files

| Archivo | Qué es |
|---|---|
| `TechToJob Landing.html` | la referencia. Doble clic, funciona sin conexión |
| `TechToJob Landing.dc.html` | la fuente; necesita `support.js` al lado |
| `Textos-mapa-completo.md` | las 193 cadenas por sección, en orden |
| `messages/es.json` | los textos |
| `messages/en.json` | el mismo árbol, vacío |
| `brand/` | logos, favicon y tarjeta social |
