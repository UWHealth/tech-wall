<script>
  import Grid from '$components/Grid.svelte';
  import map from '$assets/map-v1.svg?raw';
  let classes = '';
  export {classes as class};
</script>

<section class={classes}>
  <div class="section-bg"></div>
  <div class="content">
    <Grid class="self-service-grid" columns={3} gap="4rem">
        <div class="checklist">
          <p>content content</p>
        </div>
        <div class="map-column">
          <h2>Self-service<br>information</h2>

          <div class="map-grid">
            <div class="map">
              {@html map}
            </div>
            <div class="map-legend">
              information
            </div>
          </div>
        </div>
    </Grid>
  </div>
</section>


<style lang="scss">
  @import '../styles/functions';

  section {
    position: relative;
    height: 100%;
    color: white;
  }

  .content {
    position: relative;
  }

  :global(.self-service-grid) {
    padding-left: 18%;
  }

  h2 {
    font-family: 'bennet-banner';
    font-weight: 900;
    font-size: type(9);
    line-height: space(10);
    color: white;
    min-height: space(18);
    padding-top: space(11);
  }

  .map-column {
    grid-column-end: span 2;
  }

  .map :global(svg) {
    background-color: white;
  }

  .map-grid {
    display: grid;
    grid-template-columns: 5fr 1fr;
    gap: space(4);
    padding: space(6) space(4) 0 0;
  }

  .section-bg,
  .section-bg:before {
    content: '';
    background-color: var(--color-blue-80);
    mix-blend-mode: overlay;
    filter: brightness(.95);
    opacity: .9;
    position: absolute;
    top: 0;
    width: 200%;
    bottom: 0;
    transform-origin: 50% 0;
    transform: skew(-30deg) translateX(12%);
  }

  .section-bg:before {
    opacity: .35;
    transform: skew(0);
    background-image: linear-gradient(170deg, var(--color-aqua-10), var(--color-blue-80));
  }
</style>
