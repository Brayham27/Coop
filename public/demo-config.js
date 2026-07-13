/* ───────────────────────────────────────────────────────────
   URL del DEMO COMPLETO (la app del catálogo).
   Cambia SOLO esta línea para actualizar todos los botones del
   sitio ("Demo completo" y "Probar la experiencia completa").
   'demo.html' es relativo: funciona tanto local (doble clic)
   como en producción (Vercel sirve /demo.html y /demo).
   ─────────────────────────────────────────────────────────── */
window.COOP_DEMO_URL = 'demo.html';

(function () {
  document.querySelectorAll('[data-demo-link]').forEach(function (a) {
    a.href = window.COOP_DEMO_URL;
    a.target = '_blank';
    a.rel = 'noopener';
  });
})();
