# Johan Alegria — Portafolio Web
## Cómo usar este sitio

### Estructura de carpetas
```
johan_alegria/
├── index.html          ← Archivo principal del sitio
├── img/                ← Carpeta para TODAS tus imágenes
│   ├── hero.jpg        ← Foto/video de fondo del hero (horizontal, alta resolución)
│   ├── about.jpg       ← Tu foto "detrás de cámara" (vertical ideal)
│   ├── story-photo.jpg ← Foto impactante para sección "Una Foto, Una Historia"
│   ├── cover.jpg       ← Imagen para redes sociales / compartir
│   ├── favicon.png     ← Ícono pequeño del navegador (32x32px)
│   ├── port-sprint.jpg     ← Portafolio: atletismo
│   ├── port-chalk.jpg      ← Portafolio: entrenamiento
│   ├── port-highjump.jpg   ← Portafolio: salto de altura
│   ├── port-mil-tambores.jpg  ← Portafolio: cultura
│   ├── port-wedding.jpg    ← Portafolio: boda
│   ├── port-football.jpg   ← Portafolio: fútbol
│   └── port-cycling.jpg    ← Portafolio: ciclismo
└── README.md           ← Este archivo
```

---

### Cómo agregar tus fotos reales

Busca en el HTML los comentarios que dicen `<!-- INSTRUCCIONES: reemplaza... -->`.

**Hero (foto de fondo):**
```html
<!-- Reemplaza esto: -->
<div class="hero-media-fallback"></div>

<!-- Por esto (foto): -->
<img src="img/hero.jpg" alt="Johan Alegria fotografía deportiva" loading="eager">

<!-- O esto (video): -->
<video autoplay loop muted playsinline poster="img/hero.jpg">
  <source src="video/reel.mp4" type="video/mp4">
</video>
```

**Foto Sobre Mí:**
```html
<!-- Reemplaza la línea comentada: -->
<!--<img src="img/about.jpg" alt="Johan Alegria fotografiando" loading="lazy">-->
<!-- Por: -->
<img src="img/about.jpg" alt="Johan Alegria fotografiando en cancha" loading="lazy">
```

**Portafolio (cada item):**
```html
<!-- Dentro de cada .portfolio-item, descomenta la línea: -->
<!--<img src="img/port-sprint.jpg" alt="..." loading="lazy">-->
```

---

### Cómo publicarlo

**Opción 1 — Netlify Drop (más fácil, gratis):**
1. Ve a https://app.netlify.com/drop
2. Arrastra la carpeta `johan_alegria` completa
3. ¡Listo! Te da una URL pública en segundos

**Opción 2 — GitHub Pages (gratis):**
1. Crea cuenta en github.com
2. Nuevo repositorio → sube los archivos
3. Settings → Pages → Branch: main
4. Tu sitio queda en `tuusuario.github.io/nombre-repo`

**Opción 3 — Hosting propio (johanalegria.cl):**
1. Compra dominio .cl en NIC Chile (~$5.000/año)
2. Hosting básico en SiteGround, HostGator CL o similar
3. Sube los archivos por FTP o panel cPanel

---

### Personalización rápida

| Qué cambiar | Dónde está en el HTML |
|-------------|----------------------|
| Nombre en nav | `<a href="#" class="nav-logo">Johan Alegria</a>` |
| Subtítulo hero | `"Capturo la intensidad del deporte..."` |
| Texto "Sobre mí" | Sección `<section class="about">` |
| Historia de foto | Sección `<section class="story">` |
| FAQs | Bloques `.faq-item` |
| Estadísticas | `.hero-stat-num` y `.stat-num` |
| Colores | Variables CSS al inicio: `--gold`, `--red`, etc. |
| Teléfono | Busca `56953235494` y reemplaza (aparece 4 veces) |
| Email | Busca `Johan.alegriarengifo@gmail.com` |

---

### Recomendaciones de imágenes

- **Hero:** Mínimo 1920x1080px, máximo 2MB. Formato .jpg o .webp.
- **Portafolio:** Mínimo 800x600px. Puedes comprimir en https://squoosh.app
- **Vertical (story):** Ideal 900x1200px (formato retrato)
- Siempre guarda copias de tus originales fuera de este proyecto

---

### Contacto y soporte

Instagram: @johan_alegria  
WhatsApp: +56 9 5323 5494  
Email: Johan.alegriarengifo@gmail.com
