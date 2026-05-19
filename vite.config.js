import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          redux: ['redux', 'react-redux', '@reduxjs/toolkit'],
          icons: ['react-icons', '@mdi/react', '@mdi/js'],
        }
      }
    }
  }
})
