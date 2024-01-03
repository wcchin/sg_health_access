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
        nested1: resolve(__dirname, 'flowmapgl_radiation_clinic/index.html'),
        nested2: resolve(__dirname, 'keplergl-accessibility_clinic/index.html'),
        nested3: resolve(__dirname, 'holoviews-sankey/sankey_pln_flow.html')
      },
    },
  },
}) 
