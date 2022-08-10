<script>
  import defaultImage from '$assets/icon-512.png';
  import defaultIcon from '$assets/icon_translate.svg?raw';
  import arrowIcon from '$assets/gfx_arrow.svg?raw';

  export let title = "Need a helper?";
  export let subhead = "";
  export let action = "See me for help";
  export let image = defaultImage;
  export let icon = defaultIcon;
</script>

<article>
  <figure class="frame">
    <img alt="card" src={image}>
  </figure>

  <div class="body">
    <div class="icon-wrap">
      {@html icon}
    </div>

    <h2>
      <slot name="title">{title}</slot>
    </h2>
    <div class="subhead">
      <slot name="subhead">{subhead}</slot>
    </div>
    <div class="action">
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
    background-color: white;
    padding: 0;
    display: flex;
    flex-direction: column;
    border-radius: 2px;
    overflow: hidden;
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
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-grow: 1;
    color: var(--color-blue-60);
    font-size: type(2);
  }

  .frame {
    margin: 0;
    aspect-ratio: 12/9;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  .frame::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-image: linear-gradient(
      45deg,
      rgba(34, 37, 61, 0.1),
      rgba(0,0,0,0%)
    );
    mix-blend-mode: multiply;
  }

  .frame > img {
    inline-size: 100%;
    block-size: 100%;
    object-fit: cover;
  }

  .icon-wrap {
    position: relative;
    width: space(15);
    height: space(15);
    padding: space(3);
    border-radius: 100%;
    margin-top: space(-13);
    margin-bottom: space(-4);
    margin-left: space(-3);
    background-image: url('/src/assets/gfx_icon-container.svg#white');
    background-size: contain;
  }

  .icon-wrap :global(svg) {
    fill: var(--color-blue-60);
  }
</style>
