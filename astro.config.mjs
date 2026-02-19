// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import AstroPWA from '@vite-pwa/astro';

// https://astro.build/config
export default defineConfig({
  site: 'https://jkwlsn.dev',
  integrations: [
    sitemap(),
    AstroPWA({
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      workbox: {
        globPatterns: ['**.*.{js,css,ico,svg,avif,woff2}'],
        runtimeCaching: [
          {
            urlPattern: ({ request }) => request.mode === 'navigate',
            handler: 'NetworkFirst',
            options: { cacheName: 'html-cache' },
          },
        ],
      },
      devOptions: { enabled: true, navigateFallbackAllowlist: [/^\/$/] },
    }),
  ],
  markdown: {
    syntaxHighlight: false,
  },
});
