import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import 'dotenv/config';

const IS_GITHUB = process.env.CI;
const IS_JENKINS = process.env.JENKINS;
const GITHUB_SITE = 'https://uwhealth.github.io';
const GITHUB_BASE = '/tech-wall';
const JENKINS_SITE = process.env.JENKINS_SITE || 'https://dev.uconnect.wisc.edu';
const JENKINS_BASE = process.env.JENKINS_BASE || '/apps/tech-wall/university-hospital/';

// const IS_PRD = process.env.CI || process.env.JENKINS ? true : false;

const site = (IS_JENKINS && JENKINS_SITE) || (IS_GITHUB && GITHUB_SITE) || undefined;
const base = (IS_JENKINS && JENKINS_BASE) || (IS_GITHUB && GITHUB_BASE) || undefined;

export default defineConfig({
	integrations: [svelte()],
  output: 'static',
  build: {
    format: 'file' // forces the use of a single file instead of nested folders
  },
  site,
  base
});
