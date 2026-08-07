// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
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
  fonts: [
    {
      provider: fontProviders.local(),
      name: 'InstrumentSerif',
      cssVariable: '--font-instrument-serif',
      options: {
        variants: [
          {
            src: ['./src/assets/fonts/InstrumentSerif-Regular.woff2'],
            weight: 'normal',
            style: 'normal',
          },
        ],
      },
      fallbacks: ['serif'],
    },
    {
      provider: fontProviders.local(),
      name: 'IBMPlexMono-Regular',
      cssVariable: '--font-plex-mono-regular',
      options: {
        variants: [
          {
            src: ['./src/assets/fonts/IBMPlexMono-Regular.woff2'],
            weight: 'normal',
            style: 'normal',
          },
        ],
      },
      fallbacks: ['monospace'],
    },
  ],
});
