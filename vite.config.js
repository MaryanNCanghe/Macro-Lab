import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Macro-Lab/', // Base URL for GitHub Pages
  build: {
    outDir: 'dist',
  },
});
