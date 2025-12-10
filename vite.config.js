import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      external: [
        'react',
        'react-dom/client',
        'react/jsx-runtime',
        'lucide-react'
      ]
    }
  }
});