import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Bind to all interfaces
    port: 5173, // Ensuring we specify the port
    hmr: {
      host: 'fac411c3-0349-485e-a025-a9ff48f2106a-00-2nef313eyubgk.kirk.replit.dev', // Use your Replit URL here
      port: 5173 // Ensure this is aligned with the main server port
    },
    allowedHosts: [
      'fac411c3-0349-485e-a025-a9ff48f2106a-00-2nef313eyubgk.kirk.replit.dev' // Add your Replit URL here
    ],
  }
});