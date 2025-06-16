import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// BRIDGES UNESCO 3.0 - Created by Tarruck Wheeler (tarruck@stanford.edu)
// UNESCO Intercultural Leadership Program - South Florida Community Integration

export default defineConfig({
  plugins: [react()],
  base: '/bridges-unesco-3.0/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          icons: ['lucide-react']
        }
      }
    }
  },
  server: {
    port: 3000,
    open: true,
    host: true
  },
  preview: {
    port: 4173,
    host: true
  },
  define: {
    __APP_VERSION__: JSON.stringify(process.env.npm_package_version),
    __CREATOR__: JSON.stringify('Tarruck Wheeler'),
    __CREATOR_EMAIL__: JSON.stringify('tarruck@stanford.edu')
  }
})