import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  // Base relativa: permite abrir el build desde cualquier ruta (raíz o subcarpeta)
  base: './',
  plugins: [react()],
  build: {
    rollupOptions: {
      // El demo (app React) es la única entrada que vite compila.
      // La landing (index.html) y la FAQ (faq.html) son estáticas y viven
      // en public/, así que vite las copia tal cual al dist.
      input: {
        demo: resolve(__dirname, 'demo.html'),
      }
    }
  }
})
