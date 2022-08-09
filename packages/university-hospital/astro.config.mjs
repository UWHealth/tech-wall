import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import 'dotenv/config';

// Set by github
const IS_PRD = process.env.CI ? true : false;

export default defineConfig({
	// Enable Svelte to support Svelte components.
	integrations: [svelte()],
  output: 'static',
  build: {
    format: 'file'
  },
  site: IS_PRD ? 'https://uwhealth.github.io' : 'http://localhost',
  base: IS_PRD ? '/tech-wall' : ''
});
