import path from 'path';
import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  resolve: {
    alias: {
      "$": `${path.resolve('./src')}` ,
      "$styles": `${path.resolve('./src/styles')}`,
      "$assets": `${path.resolve('./src/assets')}`,
      "$lib": `${path.resolve('./src/lib')}`,
    }
  }
})
