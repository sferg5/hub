import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // Relative base so the build works under any path,
  // e.g. GitHub Pages at username.github.io/repo-name/
  base: './',
  plugins: [react()],
  // Emit a flat build (no assets/ subfolder) so the whole site is loose
  // files you can drop straight into a repo root.
  build: {
    assetsDir: '',
    rollupOptions: {
      output: {
        // name outputs after the page so they can drop into an existing
        // site without colliding with its own index.js / index.css
        entryFileNames: 'holocloth.js',
        chunkFileNames: 'holocloth-[name].js',
        assetFileNames: 'holocloth[extname]',
      },
    },
  },
  server: {
    port: Number(process.env.PORT) || 5199,
  },
});
