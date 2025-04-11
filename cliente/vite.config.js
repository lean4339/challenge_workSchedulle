import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: '0.0.0.0', // <- ¡la clave para abrirlo al mundo!
    port: 5173,
    watch: {
      usePolling: true // <- muy útil si estás en WSL, Docker Desktop, etc.
    }
  }
})
