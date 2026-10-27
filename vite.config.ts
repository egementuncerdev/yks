import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  /* /api için yerel Worker: npx wrangler dev --port 8787 */
  server: { proxy: { '/api': 'http://localhost:8787' } },
  resolve: { alias: { '@': new URL('./src', import.meta.url).pathname } },
  build: { target: 'es2022', sourcemap: false }
});
