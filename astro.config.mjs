import { defineConfig } from 'astro/config';
import sanity from '@sanity/astro';
import react from '@astrojs/react';

export default defineConfig({
  integrations: [
    sanity({
      projectId: process.env.PUBLIC_SANITY_PROJECT_ID,
      dataset: process.env.PUBLIC_SANITY_DATASET || 'production',
      apiVersion: '2026-11-01',
      useCdn: false,
      studioBasePath: '/studio',
      studioRouterHistory: 'hash',
    }),
    react(),
  ],
});
