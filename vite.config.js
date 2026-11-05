import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) return
          if (/node_modules[\\/](react-icons|@mdi)[\\/]/.test(id)) return 'icons'
          if (/node_modules[\\/](redux|react-redux|@reduxjs)[\\/]/.test(id)) return 'redux'
          if (/node_modules[\\/](react|react-dom|react-router|react-router-dom|scheduler)[\\/]/.test(id)) return 'vendor'
        }
      }
    }
  }
})
