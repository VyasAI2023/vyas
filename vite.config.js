import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': 'http://localhost:3002'
    }
  },
  build: {
    rollupOptions: {
      external: ['firebase/auth', 'firebase/app'], // Add firebase/auth and other Firebase modules as external
    },
  },
});
