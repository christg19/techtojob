# TechToJob — mapa de textos

Los 189 textos de la landing, en orden de aparición, con su clave en `messages/es.json`.

Cada nodo de texto del maquetado lleva un `data-i18n-key` con la ruta exacta de esta tabla, así que el paso a `next-intl` es mecánico:

```html
<h2 data-i18n-key="talent.title">Tu nivel no decide lo que puedes aportar.</h2>
```
```jsx
<h2>{t('talent.title')}</h2>
```

`messages/en.json` tiene el mismo árbol con los valores vacíos, listo para traducir.

---

## Cabecera del documento

| Clave | Texto |
| --- | --- |
| `meta.title` | TechToJob — Comunidad de desarrolladores y empresas tech en español |
| `meta.description` | Un Discord donde participas, construyes y te conocen antes de que exista la vacante. Para devs junior y empresas que quieren ver trabajar a alguien antes de contratarlo. |
| `a11y.skip` | Saltar al contenido |

## Cabecera

| Clave | Texto |
| --- | --- |
| `brand.logoAlt` | TechToJob |
| `nav.cta` | Entrar al Discord |

## 1 · Hero

| Clave | Texto |
| --- | --- |
| `hero.eyebrow` | Comunidad de desarrolladores y empresas tech en español |
| `hero.titleA` | Aquí no mandas el CV. |
| `hero.titleB` | Aquí te ven |
| `hero.titleBMark` | trabajar. |
| `hero.lead` | TechToJob es un Discord donde participas, construyes y te conocen antes de que exista la vacante. Si eres junior, no tienes que esperar a tener experiencia para que alguien te vea. |
| `hero.cta` | Entrar al Discord |
| `hero.ctaNote` | Es un Discord. Entras, te presentas y eliges tus canales. |
| `hero.loop.label` | Cómo pasa |
| `hero.loop.beats.0` | Publicas lo que haces. |
| `hero.loop.beats.1` | La gente de tu canal ve cómo trabajas. |
| `hero.loop.beats.2` | Cuando buscan a alguien, ya saben |
| `hero.loop.beatsMark` | quién eres. |
| `hero.loop.note` | Sin formulario y sin cola detrás de cuarenta candidaturas sin respuesta. |
| `hero.devsLabel` | Si eres dev |
| `hero.devs` | Estás cansado de aplicar y que nadie responda. |
| `hero.devsLink` | Ver cómo funciona para ti → |
| `hero.companiesLabel` | Si eres empresa |
| `hero.companies` | Estás cansado de decidir con un PDF delante. |
| `hero.companiesLink` | Ver cómo funciona para ti → |

## Franja de torneo (condicional)

| Clave | Texto |
| --- | --- |
| `tournament.stripLead` | Torneo #2 — entregas abiertas hasta el |
| `tournament.stripCta` | Entrar al Discord |

## 2 · Cómo funciona

| Clave | Texto |
| --- | --- |
| `how.eyebrow` | Cómo funciona |
| `how.title` | Del primer clic a que alguien te escriba |
| `how.lead` | Cuatro pasos. Ninguno te pide años de experiencia. |
| `how.steps.0.title` | Entras |
| `how.steps.0.text` | Te presentas en #presentaciones y eliges tus canales por área. Cinco minutos. |
| `how.steps.1.title` | Publicas lo que haces |
| `how.steps.1.text` | Tu perfil, tus proyectos, tus dudas. No rellenas un formulario: escribes en un canal, y nadie revisa antes si eres lo bastante senior. |
| `how.steps.2.title` | Te conocen trabajando |
| `how.steps.2.text` | Comentas, ayudas y recibes crítica. Con el tiempo la gente de tu canal sabe cómo trabajas. Si quieres acelerarlo, entregas en un torneo. |
| `how.steps.3.title` | Te escriben |
| `how.steps.3.text` | Las empresas están en los mismos canales, leyendo lo mismo que tú. No hacen una búsqueda: ya te han leído. |
| `how.steps.3.link` | Ver a quién ya le ha pasado |

## 3 · Talento

| Clave | Texto |
| --- | --- |
| `talent.eyebrow` | Ofrécete como talento |
| `talent.title` | Tu nivel no decide lo que puedes aportar. |
| `talent.lead` | Publicas tu stack, tu nivel y cuándo puedes empezar. Ningún formulario te descarta por años de experiencia antes de que te lea una persona. |
| `talent.cards.0.title` | Sin mínimo de experiencia |
| `talent.cards.0.text` | Lo que cuenta es lo que enseñas, no cuántos años llevas. Y para enseñar algo no hace falta que sea grande. |
| `talent.cards.1.title` | Tú escribes tu perfil |
| `talent.cards.1.text` | No hay campos obligatorios ni plantilla. Lo que enseñas es lo que decides enseñar. |
| `talent.cards.2.title` | Las empresas lo leen |
| `talent.cards.2.text` | Están en los mismos canales y consultan los perfiles cuando buscan a alguien. Terminas algo, lo cuentas, y tu perfil no se queda viejo en un cajón. |
| `talent.cards.3.title` | Feedback antes que rechazo |
| `talent.cards.3.text` | Preguntas en abierto y alguien con más camino te contesta. |
| `talent.projects.title` | Lo que ya se publica |
| `talent.projects.lead` | Proyectos que la gente ha contado en su canal, con su repo y la crítica que recibieron. |
| `talent.projects.items.0.title` | Buscador de pisos con filtros compartibles |
| `talent.projects.items.0.built` | Los filtros viven en la URL, así que una búsqueda se manda por mensaje y llega igual. React y TanStack Query. |
| `talent.projects.items.0.handle` | marta.dev |
| `talent.projects.items.0.channel` | #frontend |
| `talent.projects.items.1.title` | Repaso semanal automático |
| `talent.projects.items.1.built` | Ordena mis apuntes por tema y me dice qué toca repasar el domingo. Python y embeddings. |
| `talent.projects.items.1.handle` | kevinq |
| `talent.projects.items.1.channel` | #data-ia |
| `talent.projects.items.2.title` | Portfolio rehecho desde cero |
| `talent.projects.items.2.built` | Dejé de esconder que soy junior y empecé a contar qué aprendí en cada proyecto. |
| `talent.projects.items.2.handle` | sofi.builds |
| `talent.projects.items.2.channel` | #primer-empleo |
| `talent.answers.title` | Sin letra pequeña |
| `talent.answers.items.0.q` | ¿Cuesta algo? |
| `talent.answers.items.0.a` | No. Ni para entrar, ni para publicar tu perfil, ni para que una empresa cuente lo que busca. |
| `talent.answers.items.1.q` | Ya soy senior, ¿esto es para juniors? |
| `talent.answers.items.1.a` | Los canales están por área, no por seniority. Si llevas años, aquí es donde te encuentra quien monta equipo, y donde tu nombre circula sin pasar por un reclutador. |
| `talent.cta` | Presentarme en el Discord |
| `talent.ctaNote` | Te presentas en #presentaciones y eliges tus canales. Entrar y publicar tu perfil no cuesta nada. |

## 4 · Empresas

| Clave | Texto |
| --- | --- |
| `companies.eyebrow` | Publica como empresa |
| `companies.title` | Conoce a la persona antes de reducirla a un CV. |
| `companies.lead` | Cuentas lo que buscas en los canales donde ya está la gente. Y ves proyectos reales, publicados por quien los hizo, antes de hablar con nadie. |
| `companies.cards.0.title` | Ves el trabajo, no el formato |
| `companies.cards.0.text` | Repos, deploys y decisiones explicadas por quien las tomó. No una plantilla bien maquetada. |
| `companies.cards.1.title` | Hablas antes de abrir proceso |
| `companies.cards.1.text` | Un mensaje en un canal llega más lejos que una oferta publicada. |
| `companies.cards.2.title` | Contexto antes de la criba |
| `companies.cards.2.text` | Lees cómo alguien discute una decisión técnica. Eso no cabe en un PDF de dos páginas. |
| `companies.contact.postedLabel` | Publicó |
| `companies.contact.title` | Buscador de pisos con filtros compartibles |
| `companies.contact.handle` | marta.dev |
| `companies.contact.channel` | #frontend |
| `companies.contact.repliedLabel` | Le escribieron |
| `companies.contact.replied` | «Vimos tu buscador de pisos. Preferimos ver cómo trabaja alguien antes de abrir un proceso. ¿Hablamos?» |
| `companies.contact.company` | Una empresa del canal #empresas |
| `companies.contact.delay` | Seis días después de publicarlo |
| `companies.cta` | Contar lo que busco en el Discord |
| `companies.ctaNote` | Lo cuentas en #empresas, delante de la gente del área. Publicarlo no cuesta nada. |

## 5 · Torneos

| Clave | Texto |
| --- | --- |
| `tournaments.eyebrow` | Torneos |
| `tournaments.title` | Construyes algo de verdad. Y te lo critican delante de todos. |
| `tournaments.lead` | Un reto con fecha, entregas en abierto y un jurado que publica sus criterios antes de empezar. |
| `tournaments.cards.0.title` | El reto |
| `tournaments.cards.0.text` | Un enunciado y una fecha de cierre. El mismo para todos. |
| `tournaments.cards.1.title` | Las entregas |
| `tournaments.cards.1.text` | Se publican, no se esconden. Repo, deploy y las decisiones que tomaste, a la vista de cualquiera. |
| `tournaments.cards.2.title` | El jurado |
| `tournaments.cards.2.text` | Gente del sector. Los criterios se publican antes de que abran las entregas, así sabes cómo te van a mirar. |
| `tournaments.cards.3.title` | Lo que se gana |
| `tournaments.cards.3.text` | El trabajo ganador se usa de verdad. Esta página es una entrega del Torneo #2. |
| `tournaments.payoff.title` | ¿Y si no ganas? |
| `tournaments.payoff.text` | Sales con un proyecto terminado, con crítica de gente que sabe y con tu nombre en la cabeza de quien lo leyó. Eso lo puedes enseñar en una entrevista. Un certificado, no. |
| `tournaments.answers.0.q` | ¿Es obligatorio entregar? |
| `tournaments.answers.0.a` | No. Es la vía más rápida para que te vean, pero puedes estar solo en los canales de tu área. |
| `tournaments.answers.1.q` | ¿Y si entrego algo malo? |
| `tournaments.answers.1.a` | Recibes crítica en abierto, que es justo lo que no te da un portal. Nadie descalifica a nadie por el nivel. |
| `tournaments.cta` | Ver el torneo abierto |
| `tournaments.ctaNote` | Se anuncian en el servidor antes de abrir entregas. Entrar no te obliga a entregar. |

## 6 · Networking

| Clave | Texto |
| --- | --- |
| `networking.eyebrow` | Networking |
| `networking.title` | Las ofertas llegan por contacto, no por buscar |
| `networking.lead` | Los trabajos buenos no se buscan, te enteras de ellos. Aquí no hay buscador: hay canales por área y gente hablando dentro. Cuando alguien necesita a alguien, lo pregunta donde tú ya estás. |
| `networking.channels.0` | #frontend |
| `networking.channels.1` | #backend |
| `networking.channels.2` | #mobile |
| `networking.channels.3` | #data-ia |
| `networking.channels.4` | #devops-cloud |
| `networking.channels.5` | #qa-testing |
| `networking.channels.6` | #diseno-ux |
| `networking.channels.7` | #producto |
| `networking.channels.8` | #ciberseguridad |
| `networking.channels.9` | #primer-empleo |
| `networking.channels.10` | #empresas |
| `networking.points.0.title` | Por área, no por seniority |
| `networking.points.0.text` | Preguntas en el canal de tu área y en minutos responde quien ya pasó por ahí. |
| `networking.points.1.title` | Las ofertas llegan por cadena |
| `networking.points.1.text` | Alguien conoce a quien contrata y lo comparte en el canal. Empieza en público y sigue por privado cuando hay algo concreto. |
| `networking.cta` | Entrar y elegir mis canales |
| `networking.ctaNote` | Eliges por área al entrar. Puedes cambiarlos cuando quieras. |

## 7 · Noticias

| Clave | Texto |
| --- | --- |
| `news.eyebrow` | Noticias |
| `news.title` | Lo que pasa en la comunidad |
| `news.lead` | Torneos que abren, canales que se mueven y lo que va saliendo del servidor. |
| `news.items.0.category` | Torneos |
| `news.items.0.date` | 10 sep 2026 |
| `news.items.0.title` | Abiertas las entregas del Torneo #2 |
| `news.items.0.summary` | El reto es la web de la comunidad. Las entregas se publican en abierto y el jurado explica sus criterios antes de puntuar. |
| `news.items.1.category` | Comunidad |
| `news.items.1.date` | 02 sep 2026 |
| `news.items.1.title` | Canal nuevo para quien empieza |
| `news.items.1.summary` | Separamos #primer-empleo del resto. Las dudas de entrada se perdían entre hilos de gente con años encima. |
| `news.items.2.category` | Empresas |
| `news.items.2.date` | 26 ago 2026 |
| `news.items.2.title` | Cómo contar lo que buscas sin escribir una oferta |
| `news.items.2.summary` | Qué construye el equipo, qué problema hay encima de la mesa y con qué stack. Tres líneas y ya. |
| `news.all` | Ver todas las entradas |

## 8 · Newsletter

| Clave | Texto |
| --- | --- |
| `newsletter.eyebrow` | Newsletter |
| `newsletter.titleA` | Un correo cada dos semanas. |
| `newsletter.titleMark` | Nada más. |
| `newsletter.lead` | Si no te apetece entrar a diario, esto es lo mínimo para no perderte nada. |
| `newsletter.items.0` | El torneo abierto y cómo entrar. |
| `newsletter.items.1` | Dos o tres proyectos que merecen que los mires. |
| `newsletter.items.2` | Lo que buscan las empresas que están dentro. |
| `newsletter.successTitle` | Apuntado. |
| `newsletter.successNote` | Te llega en el próximo envío. Te das de baja desde cualquier correo. |
| `newsletter.reset` | Reiniciar |
| `newsletter.label` | Tu correo |
| `newsletter.cta` | Quiero recibirlo |
| `newsletter.note` | Te das de baja en un clic. No compartimos tu correo con nadie. |

## 9 · Cierre

| Clave | Texto |
| --- | --- |
| `closing.eyebrow` | Último aviso |
| `closing.title` | La próxima vacante, que te la cuenten dentro. |
| `closing.notFor` | No es para quien quiera mandar el CV y esperar: si no vas a publicar nada, no te va a servir. |
| `closing.lead` | Aquí se te ve porque participas. Entra, preséntate, cuenta lo que construyes y échale un ojo a lo que publican los demás. |
| `closing.cta` | Entrar al Discord |

## Footer

| Clave | Texto |
| --- | --- |
| `footer.tagline` | Comunidad de desarrolladores y empresas tech en español. |
| `footer.groups.0.title` | Talento |
| `footer.groups.0.links.0` | Presentarme en el Discord |
| `footer.groups.0.links.1` | Cómo funciona |
| `footer.groups.0.links.2` | Canales por área |
| `footer.groups.1.title` | Empresas |
| `footer.groups.1.links.0` | Contar lo que busco |
| `footer.groups.1.links.1` | Ver proyectos |
| `footer.groups.1.links.2` | Noticias para empresas |
| `footer.groups.2.title` | Comunidad |
| `footer.groups.2.links.0` | Entrar al Discord |
| `footer.groups.2.links.1` | Torneos |
| `footer.groups.2.links.2` | Noticias |
| `footer.groups.2.links.3` | Newsletter |
| `footer.groups.3.title` | Legal |
| `footer.groups.3.links.0` | Aviso legal |
| `footer.groups.3.links.1` | Privacidad |
| `footer.groups.3.links.2` | Cookies |
| `footer.socials.0` | Discord |
| `footer.socials.1` | X |
| `footer.socials.2` | LinkedIn |
| `footer.socials.3` | Instagram |
| `footer.langLabel` | Idioma |
| `footer.langEs` | Español |
| `footer.langEn` | English |
| `footer.legalNotice` | TechToJob no es un portal de empleo ni una agencia de colocación. No intermediamos en contrataciones ni gestionamos procesos de selección. |
| `footer.copyright` | © 2026 TechToJob |

---

## Contenido de muestra

Inventado para la maqueta. Se sustituye editando **solo** `messages/es.json`, sin tocar el maquetado:

| Clave | Qué es |
| --- | --- |
| `hero.conversation.*` | el canal de ejemplo del hero — lleva su propio aviso de simulación visible |
| `talent.projects.items` | los tres proyectos |
| `companies.contact` | el caso de contacto empresa ↔ dev |
| `news.items` | las tres noticias |
| `networking.channels` | los canales por área |

## Integridad

- Claves renderizadas: **189**
- Claves en `es.json` sin usar: **0**
- Claves usadas que faltan en `es.json`: **0**

## No traducible

| Clave | Valor |
| --- | --- |
| `links.discord` | https://discord.gg/h9FFgKdkRd |
| `links.linkedin` | https://www.linkedin.com/company/techtojob/ |
| `links.x` | https://x.com/techtojob |
| `links.instagram` | https://www.instagram.com/techtojob |
