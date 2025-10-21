import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
      '@/src': path.resolve(__dirname, './src'),
      '@/components': path.resolve(__dirname, './components'),
      '@/data': path.resolve(__dirname, './src/data'),
    }
  },
  // Enable JSON imports
  assetsInclude: ['**/*.json'],
});
