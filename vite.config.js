import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      // Externalize deps that are loaded via CDN in index.html
      external: ['react', 'react-dom', 'react-dom/client', 'react/jsx-runtime', 'lucide-react'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'lucide-react': 'lucide'
        }
      }
    }
  }
});