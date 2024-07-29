import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
  server: {
    open: true,
  },
  build: {
    outDir: 'build',
    sourcemap: true,
  },
  define: {
    'process.env': {},
  },
  test: {
    globals: true,
    coverage: {
      provider: 'v8',
      include: [
        'src/*'
      ]
    },
    environment: 'jsdom',
    setupFiles: 'src/setupTests',
    mockReset: true,
  },
})
