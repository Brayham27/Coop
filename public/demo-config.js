/* ───────────────────────────────────────────────────────────
   URL del DEMO COMPLETO
   ─────────────────────────────────────────────────────────── */
window.COOP_DEMO_URL = '/demo';

(function () {
  document.querySelectorAll('[data-demo-link]').forEach(function (a) {
    a.href = window.COOP_DEMO_URL;
    a.removeAttribute('target');
    a.removeAttribute('rel');
  });
})();
