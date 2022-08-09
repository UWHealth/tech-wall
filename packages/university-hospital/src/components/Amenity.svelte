<script>
  export let title = 'Dining';
  export let body = 'Our full-service Four Lakes Café and “grab and go” Mendota Market are located down one floor.';
  export let element = 'li';
  let classes = '';
</script>

<svelte:element this={element} class={`${classes || ''} root`}>
  <div class="title"><slot name="title">{title}</slot></div>
  <div class="body"><slot>{body}</slot></div>
</svelte:element>

<style lang="scss">
  @import '../styles/functions';

  .root {
    color: white;
  }
  .title {
    font-weight: bold;
    font-size: type(1.25);
    line-height: space(2.25);
  }

  .body {
    line-height: space(2.25);
  }
</style>
