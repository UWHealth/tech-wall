<script>
  export let qrCodes = [];
</script>

<div class="root">
  <h3>
    Self-service links
  </h3>
  <div class="body">
    {#each qrCodes as [title, url], i}
      <div class="qr-container">
        <div class="icon-wrap"><img alt="" src={import.meta.env.BASE_URL + 'qr-codes/' + title + '.png'}/></div>
        {title}
      </div>
    {/each}
  </div>
</div>

<style lang="scss">
  @import '../styles/functions';

  .root {
    border: .5px solid rgba(white, .8);
    padding: space(2);
  }

  h3 {
    font-family: 'bennet-banner';
    font-weight: 900;
    font-size: type(9);
    line-height: space(9.25);
    font-size: type(3);
    line-height: space(3.5);
    padding-bottom: space(1);
    border-bottom: .5px solid rgba(white, .8);
  }

  .body {
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: 1fr;
    gap: space(4);
    text-align: center;
    padding-top: space(2);
  }

  .icon-wrap {
    background-image: url('/src/assets/gfx_icon-container.svg#white');
    background-size: fill;
    padding: space(1.5);
    aspect-ratio: 1/1;
    margin-bottom: space(1);
  }

  .qr-container {
    font-size: type(-1);
    line-height: space(1.25);
    letter-spacing: .1em;
  }

  img {
    display: block;
    max-width: 100%;
    object-position: center;
  }

</style>
