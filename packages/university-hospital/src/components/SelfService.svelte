<script>
  import Grid from '$components/Grid.svelte';
  import Amenity from '$components/Amenity.svelte';
  import QrCodes from './QRCodes.svelte';
  import map from '$assets/map-v5.svg?raw';
  let classes = '';
  export {classes as class};

  export let qrCodes = [];
  export let amenities = [
    { title: 'Dining', body: 'Full-service Four Lakes Café and “grab and go” Mendota Market are located down one floor' },
    { title: 'Gift shop', body: 'Just a short walk from here, you’ll find gift options for patients of all ages' },
    { title: 'Free Wi-Fi', body: 'Look for “Free Wi-Fi UW Health” on your device' },
    { title: 'Healing gardens & patios', body: 'Relax with family and friends in a soothing outdoor setting' }
  ];
</script>

<section class={classes}>
  <div class="section-bg"></div>
  <div class="content">
    <Grid class="self-service-grid" columns={3} gap="3rem">
      <div class="content-column">
        <h3>University Hospital amenities</h3>
        <div class="highlights-content">
          <!-- <p>We want you to have the most comfortable visit possible at University Hospital. Ask Guest Services staff for more information about our amenities.</p> -->
          <ul class="ammenities">
            {#each amenities as {title, body}}
              <Amenity {title} class="ammenity">
                {body}
              </Amenity>
            {/each}
          </ul>
          <QrCodes {qrCodes}/>
        </div>
      </div>

      <div class="map-column">
        <h2>Self-service<br>information</h2>

        <div class="map-grid">

          <div class="map">
            {@html map}
          </div>

        </div>
      </div>
    </Grid>
  </div>
</section>


<style lang="scss">
  @import '../styles/functions';

  section {
    font-size: type(1.05);
    position: relative;
    height: 100%;
    color: white;
  }

  .content {
    position: relative;
  }

  :global(.self-service-grid) {
    padding-left: 16%;
  }

  h2, h3 {
    font-family: 'bennet-banner';
    font-weight: 900;
    font-size: type(8);
    line-height: space(8.25);
    color: white;
    padding-top: space(9);
  }

  h3 {
    font-size: type(3);
    line-height: space(3.5);
    padding-top: space(2);
    padding-bottom: space(1);
    border-bottom: .5px solid rgba(white, .8);
  }

  .content-column {
    padding-top: space(32);
    grid-column: 1/1;
  }

  .map-column {
    grid-column-end: span 2;
  }

  .map-grid {
    display: grid;
    padding: space(4) space(2) 0 0;
  }

  .section-bg,
  .section-bg:before {
    content: '';
    background-color: var(--color-blue-80);
    mix-blend-mode: overlay;
    filter: brightness(.95);
    opacity: .85;
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

  .highlights-content {
    margin-top: space(2);
  }

  .ammenities {
    list-style: none;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: space(3);
    padding-top: space(1);
    margin-bottom: space(5);
  }

  .ammenities :global(.amenity) {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
</style>
