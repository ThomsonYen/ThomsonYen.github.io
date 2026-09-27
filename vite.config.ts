import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Relative base so the build works both at a user-site root and under a repo subpath.
export default defineConfig({
  base: './',
  plugins: [react()],
  build: {
    // Each extra page is its own folder with an index.html.
    rollupOptions: { input: ['index.html', 'quantum/index.html', 'secret/index.html'] },
  },
})
