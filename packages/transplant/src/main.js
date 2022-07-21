import './app.scss'
import App from '/src/App.svelte';

const pageProps = document.getElementById('_props_').innerHTML;
const props = pageProps ? JSON.parse(pageProps) : {};

const app = new App({
  target: document.getElementById('app'),
  props,
})

export default app
