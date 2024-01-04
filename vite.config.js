import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/sg_health_access/',
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        nested1: resolve(__dirname, 'interactive/flowmapgl_radiation_clinic.html'),
        nested2: resolve(__dirname, 'interactive/keplergl_accessibility_clinic.html'),
        nested3: resolve(__dirname, 'interactive/holoviews_sankey_pln_flow.html'),
        nested4: resolve(__dirname, 'interactive/holoviews_histogram_distance.html')
      },
    },
  },
}) 
