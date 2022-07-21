<script>
  export let page = 'StreaksCircle';
  let component;

  import(`./lib/${page}.svelte`).then(c => {
    console.log(c);
    component = c.default;
  });
</script>

<!-- <svelte:options tag='app-wrapper' /> -->

<main>
  <svelte:component this={component} />
</main>

<style>
  main {
    max-width: 1080px;
    text-align: center;
    margin: 0 auto;
    display: flex;
    width: 100%;
    place-items: center;
    place-content: center;
  }
</style>
