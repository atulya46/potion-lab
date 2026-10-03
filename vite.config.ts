import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Potion Lab',
        short_name: 'Potion Lab',
        description: 'A tactile, atmospheric potion brewing experience.',
        theme_color: '#090a0f',
        background_color: '#090a0f',
        display: 'standalone',
        icons: [{ src: 'icon.svg', sizes: 'any', type: 'image/svg+xml', purpose: 'any' }]
      }
    })
  ]
})
