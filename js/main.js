/* ---- CURSOR ---- */
(function(){
  const c = document.getElementById('cursor');
  const r = document.getElementById('cursorRing');
  if (!c || !r) return;
  let mx=0,my=0,rx=0,ry=0;
  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    c.style.transform = `translate(${mx-4}px,${my-4}px)`;
  });
  (function tick(){
    rx += (mx-rx)*0.1; ry += (my-ry)*0.1;
    r.style.transform = `translate(${rx-16}px,${ry-16}px)`;
    requestAnimationFrame(tick);
  })();
  document.querySelectorAll('a,button,.portfolio-item').forEach(el=>{
    el.addEventListener('mouseenter',()=>{r.style.width='46px';r.style.height='46px';r.style.borderColor='rgba(212,168,67,.8)';});
    el.addEventListener('mouseleave',()=>{r.style.width='32px';r.style.height='32px';r.style.borderColor='rgba(212,168,67,.45)';});
  });
})();

/* ---- NAV SCROLL ---- */
const nav = document.getElementById('mainNav');
window.addEventListener('scroll', ()=>{
  nav.classList.toggle('scrolled', window.scrollY > 60);
}, {passive:true});

/* ---- MOBILE NAV ---- */
const burger = document.getElementById('burgerBtn');
const drawer = document.getElementById('navDrawer');
const closeBtn = document.getElementById('navClose');
burger.addEventListener('click',()=>drawer.classList.add('open'));
closeBtn.addEventListener('click',()=>drawer.classList.remove('open'));
document.querySelectorAll('.drawer-link').forEach(a=>{
  a.addEventListener('click',()=>drawer.classList.remove('open'));
});

/* ---- SCROLL REVEAL ---- */
const revealEls = document.querySelectorAll('.reveal');
const ro = new IntersectionObserver(entries=>{
  entries.forEach(e=>{ if(e.isIntersecting) e.target.classList.add('visible'); });
},{threshold:0.12});
revealEls.forEach(el=>ro.observe(el));

/* ---- PORTFOLIO FILTER ---- */
document.querySelectorAll('.filter-btn').forEach(btn=>{
  btn.addEventListener('click', function(){
    document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));
    this.classList.add('active');
    const cat = this.dataset.cat;
    document.querySelectorAll('.portfolio-item').forEach(item=>{
      const match = cat==='all' || item.dataset.cat===cat;
      item.classList.toggle('hidden', !match);
    });
  });
});

/* ---- FAQ ACCORDION ---- */
document.querySelectorAll('.faq-q').forEach(btn=>{
  btn.addEventListener('click',function(){
    const answer = this.nextElementSibling;
    const isOpen = this.classList.contains('open');
    // close all
    document.querySelectorAll('.faq-q').forEach(q=>{
      q.classList.remove('open');
      q.setAttribute('aria-expanded','false');
      q.nextElementSibling.classList.remove('open');
    });
    if(!isOpen){
      this.classList.add('open');
      this.setAttribute('aria-expanded','true');
      answer.classList.add('open');
    }
  });
});

/* ---- WHATSAPP FORM ---- */
document.getElementById('contactForm').addEventListener('submit', function(e){
  e.preventDefault();
  const nombre     = document.getElementById('nombre').value.trim();
  const email      = document.getElementById('email').value.trim();
  const servicio   = document.getElementById('servicio').value;
  const presupuesto= document.getElementById('presupuesto').value;
  const mensaje    = document.getElementById('mensaje').value.trim();

  if(!nombre || !servicio || !presupuesto){
    alert('Por favor completa los campos obligatorios: nombre, servicio y presupuesto.');
    return;
  }

  const texto = [
    `Hola Johan, vi tu portafolio y me interesa cotizar.`,
    ``,
    `*Nombre:* ${nombre}`,
    email ? `*Email:* ${email}` : null,
    `*Servicio:* ${servicio}`,
    `*Presupuesto:* ${presupuesto}`,
    mensaje ? `\n*Detalle:* ${mensaje}` : null,
  ].filter(Boolean).join('\n');

  const url = `https://wa.me/56953235494?text=${encodeURIComponent(texto)}`;

  // Button feedback
  const btn = document.getElementById('formSubmit');
  btn.classList.add('success');
  btn.textContent = '✓ Abriendo WhatsApp…';
  
  setTimeout(()=>{ window.open(url,'_blank'); },300);

  setTimeout(()=>{
    btn.classList.remove('success');
    btn.innerHTML = '<span class="whatsapp-icon">💬</span> Enviar por WhatsApp';
    this.reset();
  }, 3500);
});

/* ---- COUNTER ANIMATION ---- */
function animateCount(el, target, suffix=''){
  let start = 0;
  const step = target / 40;
  const timer = setInterval(()=>{
    start += step;
    if(start >= target){ start = target; clearInterval(timer); }
    el.textContent = Math.floor(start) + suffix;
  }, 40);
}
// Trigger on hero-stat numbers when visible
const statNums = document.querySelectorAll('.hero-stat-num');
const statObs = new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      const text = e.target.textContent;
      const num = parseInt(text);
      const suffix = text.replace(/[0-9]/g,'');
      animateCount(e.target, num, suffix);
      statObs.unobserve(e.target);
    }
  });
},{threshold:0.5});
statNums.forEach(el=>{
  // store original
  el.dataset.original = el.textContent;
  statObs.observe(el);
});

/* ---- TRUST BAR: aparece al scrollear fuera del hero ---- */
(function () {
  var bar = document.getElementById('trustBar');
  if (!bar) return;

  var heroSection = document.querySelector('.hero');
  var threshold = heroSection ? heroSection.offsetHeight * 0.6 : window.innerHeight;

  /* padding-bottom al body para que el footer no quede tapado */
  document.body.style.paddingBottom = '46px';

  function onScroll() {
    if (window.pageYOffset > threshold) {
      bar.classList.add('visible');
    } else {
      bar.classList.remove('visible');
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); /* check on load in case page is already scrolled */
}());
