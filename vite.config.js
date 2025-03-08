
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    hmr: {
      clientPort: 443,
      protocol: 'wss'
    },
    // Explicitly add your Replit domain to allowedHosts
    allowedHosts: [
      'fac411c3-0349-485e-a025-a9ff48f2106a-00-2nef313eyubgk.kirk.replit.dev'
    ]
  }
});
