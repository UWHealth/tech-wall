import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import urlResolve from 'rollup-plugin-url-resolve';
import mdx from "@astrojs/mdx";
import 'dotenv/config';

const IS_GITHUB = process.env.GITHUB_ACTIONS;
const IS_JENKINS = process.env.JENKINS;
const GITHUB_SITE = 'https://uwhealth.github.io';
const GITHUB_BASE = '/tech-wall';
const JENKINS_SITE = process.env.JENKINS_SITE || 'https://dev.uconnect.wisc.edu';
const JENKINS_BASE = process.env.JENKINS_BASE || '/apps/tech-wall/university-hospital/'; // const IS_PRD = process.env.CI || process.env.JENKINS ? true : false;

const site = IS_JENKINS && JENKINS_SITE || IS_GITHUB && GITHUB_SITE || undefined;
const base = IS_JENKINS && JENKINS_BASE || IS_GITHUB && GITHUB_BASE || undefined;

// https://astro.build/config
export default defineConfig({
  integrations: [svelte(), mdx()],
  output: 'static',
  build: {
    format: 'file' // forces the use of a single file instead of nested folders
  },
  scopedStyleStrategy: 'class',
  site,
  base,
  vite: {
    plugins: [
      {
        enforce: 'pre',
        ...urlResolve({
          // Caches the results of all fetch operations
          // in a local directory named ".cache"
          cacheManager: '.cache'
        })
      }
    ]
  }
});
