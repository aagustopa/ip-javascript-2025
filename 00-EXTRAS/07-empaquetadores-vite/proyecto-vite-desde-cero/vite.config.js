import { defineConfig } from 'vite';
import { ViteImageOptimizer }  from 'vite-plugin-image-optimizer';

export default defineConfig({
  plugins: [ViteImageOptimizer({
    includePublic: false,
    jpeg: { quality: 50 },
    jpg: { quality: 50 },
  })]
});

