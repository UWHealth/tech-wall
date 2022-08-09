<script>
  export let columns = 3;
  export let gap = '3rem';
  let classes = '';
  export { classes as class };
</script>

<div class={`${classes||''}`} style={`--columns: ${columns}; --gap: ${gap}`}>
  <slot></slot>
</div>

<style>
  div {
    display: grid;
    grid-template-columns: repeat(var(--columns, 3), 1fr);
    grid-auto-columns: 1fr;
    gap: var(--gap, 0);
  }
</style>
