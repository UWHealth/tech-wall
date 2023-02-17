<script>
  import CardImage from '$components/CardImage.svelte';

  import defaultImage from '$assets/icon-512.png';
  import defaultIcon from '$assets/icon_translate.svg?raw';
  import arrowIcon from '$assets/gfx_arrow.svg?raw';

  export let title = "Need a helper?";
  export let subhead = "";
  export let action = "See me for help";
  export let image = defaultImage;
  export let icon = defaultIcon;
  export let overflow = true;
</script>

<article class:card--frame-break={overflow}>

  <CardImage {overflow} images={image} />

  <div class="body">
    <h2>
      <slot name="title">{title}</slot>
    </h2>
    <div class="subhead">
      <slot name="subhead">{subhead}</slot>
    </div>
    <div class="action">
      <div class="icon-wrap">
        {@html icon}
      </div>
      <slot name="action">{action}</slot>
      <div class="arrow">
        {@html arrowIcon}
      </div>
    </div>
  </div>
</article>

<style lang="scss">
  @import '../styles/functions';

  article {
    background-image: linear-gradient(to bottom, var(--color-red-01) 25%, white);
    background-color: white;
    padding: 0;
    display: flex;
    flex-direction: column;
    border-radius: 2px;
    overflow: hidden;
  }

  .card--frame-break {
    overflow: visible;
  }

  h2 {
    font-size: type(6.5);
    line-height: space(5.5);
    margin-top: space(3);
    margin-bottom: space(2);
    font-family: bennet-banner;
    font-weight: 900;
    color: var(--color-blue-70);
    position: relative;
  }

  .action {
    margin-top: auto;
    display: flex;
    align-items: center;
  }

  .arrow {
    width: space(4);
    margin-left: auto;
    transform: rotate(90deg);
    fill: var(--color-blue-60);
  }

  .body {
    padding: space(4);
    padding-top: space(2);
    padding-bottom: space(3.5);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-grow: 1;
    color: var(--color-blue-60);
    font-size: type(2);
  }

  .icon-wrap {
    position: relative;
    width: space(11);
    padding: 0 space(2);
    margin-left: space(-3.5);
    margin-bottom: space(-1.5);
    margin-top: space(-1.5);
  }

  .icon-wrap :global(svg) {
    fill: var(--color-blue-60);
  }
</style>
