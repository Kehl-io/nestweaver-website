import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://nestweaver.kehl.io',
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
});
