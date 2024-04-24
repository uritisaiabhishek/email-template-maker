import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import svgrPlugin from 'vite-plugin-svgr';

export default defineConfig({
  base: '/email-template-maker/',
  plugins: [react(), svgrPlugin({ svgrOptions: { icon: true } })],
  server: {
    port: 8000,
    open: 'http://localhost:8000',
  },
});
