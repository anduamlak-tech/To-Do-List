import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  preview: {
    port: process.env.PORT ? parseInt(process.env.PORT) : 5173,
    host: true,
    allowedHosts: [
      'to-do-list-ig90.onrender.com'
    ],
  },
})
