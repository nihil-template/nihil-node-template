import { defineConfig } from 'vite';

export default defineConfig(({ mode, command, }) => ({
  server: {
    port: 3000,
  },
}));
