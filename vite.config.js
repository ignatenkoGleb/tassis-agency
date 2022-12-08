import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import { VitePluginFonts } from 'vite-plugin-fonts';

export default defineConfig({
  server: {
    host: true,
  },
  plugins: [
    svgr(),
    react(),
    VitePluginFonts({
      custom: {
        families: [
          {
            name: 'Mazzard H',
            local: 'Mazzard H',
            src: './src/app/fonts/*.woff',
          },
        ],
        display: 'auto',
        preload: true,
        prefetch: false,
        injectTo: 'head-prepend',
      },
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
