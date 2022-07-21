import preprocess from 'svelte-preprocess';

const config = {
	/** @type {import('svelte/types').preprocess} */
	preprocess: preprocess(),
  /** @type {import('svelte/types').compilerOptions} */
  compilerOptions: {
    // customElement: true,
    // generate: 'ssr'
  }
};

export default config;
