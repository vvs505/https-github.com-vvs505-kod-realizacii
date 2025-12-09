import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react()],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      },
      // ВАЖНО для GitHub Pages:
      base: process.env.NODE_ENV === 'production' && process.env.GITHUB_ACTIONS 
      ? '/https-github.com-vvs505-kod-realizacii/'
      : '/',
      build: {
        outDir: 'dist',
        sourcemap: false,
        emptyOutDir: true
      }
    };
});
// Trigger deployment
