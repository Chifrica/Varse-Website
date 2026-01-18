import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/chifrica-varse-website/", // 👈 EXACT repo name
  plugins: [react()],
})