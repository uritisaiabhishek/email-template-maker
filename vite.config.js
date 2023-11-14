import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import svgrPlugin from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [react(), svgrPlugin({ svgrOptions: { icon: true } })],
  server: {
    port: 3000,
    open: 'http://localhost:3000',
  },
});
