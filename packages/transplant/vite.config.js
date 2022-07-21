import path from 'path';
import { defineConfig } from 'vite';
import { fileURLToPath } from 'url';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { globbySync } from 'globby';
import mpa from 'vite-plugin-mpa';
import htmlTemplate from 'vite-plugin-html-template';

const pages = globbySync(['./src/pages/**/*.html', './index.html'], {cwd: __dirname}).map((file) => {
  const name = path.basename(file, '.html');
  const entry = path.basename(path.dirname(file)) + name === 'index' ? '' : name;

  return [
    entry,
    fileURLToPath(new URL(file, import.meta.url))
  ];
});

console.log(pages);
// https://vitejs.dev/config/
export default defineConfig(
  {
    plugins: [
      svelte(),
      mpa(),
      htmlTemplate()
    ],
    appType: 'mpa',
    resolve: {
      alias: {
        "$": `${path.resolve('./src')}` ,
        "$styles": `${path.resolve('./src/styles')}`,
        "$assets": `${path.resolve('./src/assets')}`,
        "$lib": `${path.resolve('./src/lib')}`,
      }
    },
    // build: {
    //   // ssr: true,
    //   rollupOptions: {
    //     input: pages ? Object.fromEntries(pages) : {},

    //     // input: {
    //     //   appSchoool: fileURLToPath(new URL('./resources/school/index.html', import.meta.url)),
    //     //   appStudent: fileURLToPath(new URL('./resources/student/index.html', import.meta.url)),
    //     //   appAuth: fileURLToPath(new URL('./resources/auth/index.html', import.meta.url)),
    //     // }
    //   }
    }
  }
);
