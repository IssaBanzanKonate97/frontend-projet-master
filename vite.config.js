import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
    proxy: {
      '/api': {
        target: 'https://api-sandbox.swikly.com',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api\/v1_0/, '/v1_0'),
      },
    },
  },
});
