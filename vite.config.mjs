import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import jsconfigPaths from 'vite-jsconfig-paths';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const BASE_URL = env.VITE_APP_BASE_NAME || '/'; // fallback к '/'
  const PORT = 3000;

  return {
    server: {
      open: true,
      port: PORT,
      host: true
    },
    build: {
      outDir: 'dist', // убедимся, что сборка в dist
      chunkSizeWarningLimit: 1600
    },
    preview: {
      open: true,
      host: true,
      port: PORT
    },
    define: {
      global: 'window'
    },
    resolve: {
      alias: {
        '@tabler/icons-react': '@tabler/icons-react/dist/esm/icons/index.mjs'
      }
    },
    base: BASE_URL, // ← теперь корректно
    plugins: [react(), jsconfigPaths()]
  };
});