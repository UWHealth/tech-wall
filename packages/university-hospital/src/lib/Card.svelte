<script>
  import image from '../assets/icon-512.png';
  import defaultIcon from '../assets/icon_translate.svg';

  export let title = "Need a helper?";
  export let action = "See me for help";
  export let img = image;
  export let icon = defaultIcon;
</script>

<article>
  <figure class="frame">
    <img alt="card" src={img}>
  </figure>

  <div class="body">
    <div class="icon-wrap">
      <img src={icon} alt="">
    </div>

    <h2>
      <slot name="title">{title}</slot>
    </h2>

    <div class="action">
      <slot name="action">{action}</slot>
    </div>
  </div>
</article>

<style>
  article {
    background-color: white;
    padding: 0;
    display: flex;
    flex-direction: column;
    border-radius: 2px;
    overflow: hidden;
  }

  h2 {
    font-size: 3rem;
    line-height: 3.02rem;
    font-family: bennet-banner;
    font-weight: 900;
    color: var(--color-blue-70);
  }

  .body {
    padding: 2rem 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 3rem;
  }

  .frame {
    margin: 0;
    aspect-ratio: 12/9;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .frame > img {
    inline-size: 100%;
    block-size: 100%;
    object-fit: cover;
  }

  .icon-wrap {
    width: 7rem;
    height: 7rem;
    padding: 1.5rem;
    border-radius: 100%;
    margin-top: -7rem;
    margin-bottom: -3rem;
    margin-left: -1rem;
    background-image: url('$assets/gfx_icon-container.svg#white');
    background-size: contain;
  }
</style>
