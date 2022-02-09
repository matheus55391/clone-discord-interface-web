import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'https://matheus55391.github.io/Discord-Clone/',
  server: {
    host: true
  }
})
