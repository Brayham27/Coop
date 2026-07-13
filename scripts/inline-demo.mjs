/* ───────────────────────────────────────────────────────────
   Post-build: incrusta el JS y CSS del demo dentro de dist/demo.html
   para que sea un HTML autónomo y abra incluso con file:// (doble clic),
   sin archivos externos que el navegador bloquee.
   Se ejecuta automáticamente después de `vite build`.
   ─────────────────────────────────────────────────────────── */
import { readFileSync, writeFileSync, existsSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const dist = resolve(__dirname, '..', 'dist')
const htmlPath = resolve(dist, 'demo.html')

if (!existsSync(htmlPath)) {
  console.error('[inline-demo] No se encontró dist/demo.html — ¿corriste vite build?')
  process.exit(1)
}

let html = readFileSync(htmlPath, 'utf8')

// Incrustar el CSS: <link rel="stylesheet" ... href="./assets/xxx.css">
html = html.replace(
  /<link[^>]*rel="stylesheet"[^>]*href="(\.\/assets\/[^"]+\.css)"[^>]*>/g,
  (_m, href) => {
    const css = readFileSync(resolve(dist, href), 'utf8')
    return `<style>${css}</style>`
  }
)

// Incrustar el JS: <script type="module" ... src="./assets/xxx.js"></script>
html = html.replace(
  /<script[^>]*src="(\.\/assets\/[^"]+\.js)"[^>]*><\/script>/g,
  (_m, src) => {
    const js = readFileSync(resolve(dist, src), 'utf8')
    return `<script type="module">${js}</script>`
  }
)

writeFileSync(htmlPath, html)
console.log('[inline-demo] dist/demo.html quedó autónomo (JS + CSS incrustados).')
