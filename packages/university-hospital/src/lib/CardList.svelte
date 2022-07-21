<script>
  import Grid from './Grid.svelte';
  let classes = '';
  export { classes as class };
</script>

<Grid class={`grid ${ classes ||'' }`} columns={3} gap="2rem">
  <slot></slot>
</Grid>

<style>
  :global(.grid) {
    padding: 5rem 3rem;
  }
</style>
