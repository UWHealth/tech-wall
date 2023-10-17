<script>
  /** @type {String} */
  export let icon;
  export let width = 32;
  export let height = 32;
</script>

{#if icon}
  <svg {...$$props} {width} {height}>
    <use href="#{icon}"/>
  </svg>
{/if}
