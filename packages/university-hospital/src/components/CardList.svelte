<script>
  import Grid from './Grid.svelte';
  let classes = '';
  export { classes as class };
</script>

<Grid class={`card-grid ${ classes ||'' }`} columns={3} gap="2rem">
  <slot></slot>
</Grid>

<style lang="scss">
  @import '../styles/functions';

  :global(.card-grid) {
    padding: space(22) 15% space(16) 0;
  }
</style>
