<script>
  import streakImg from '$assets/streaks.avif';

  export let topColor = "blue";
  export let bottomColor = "green";

  let classes ='';
  export {classes as class};
</script>

<!-- <svelte:options tag='streaks-bg' /> -->

<section class={`container ${classes}`} style:--bottom-color={bottomColor} style:--top-color={topColor}>
  <div class="bg">

    <div class="content">
      <slot/>
    </div>

    <img alt="" class="streak-img streak-img--underlay" src={streakImg}>
    <img alt="" class="streak-img" src={streakImg}>

    <img alt="" class="streak-img streak-img--duplicate" src={streakImg}>
    <img alt="" class="streak-img streak-img--faint" src={streakImg}>
    <img alt="" class="streak-img streak-img--faint" src={streakImg}>
  </div>

</section>

<style lang="scss">
  .container {
    --top-color: black;
    --bottom-color: black;
    width: 100%;
    overflow: hidden;
  }

  .content {
    padding: 0 25%;
    grid-row: 1/1;
    grid-column: 1/1;
    display: flex;
    place-content: center;
    place-items: center;
  }

  .bg {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    height: 100%;
    width: 100%;
    filter: saturate(.9);

    background-image:
      radial-gradient(farthest-side, transparent 50%, var(--top-color) 70%, transparent),
      radial-gradient(closest-side, transparent 60%, var(--bottom-color) 80%, transparent),
      linear-gradient(to bottom, var(--top-color), var(--bottom-color)),
      radial-gradient(farthest-side, rgba(white, .2), rgba(black, .3))
    ;

    background-position: 50% 0, 50% 55%, 0;
    background-size: 200% 60%, 100% 50%, 100%;

    animation: bg-size 90s ease-out both alternate infinite;
    transition: background 100ms ease-out;
  }

  .bg:after {
    content: '';
    position: relative;
    z-index: 3;
    mix-blend-mode: hard-light;
    grid-row: 1/1;
    grid-column: 1/1;
    display: block;
    height: 100%;
    background-image: radial-gradient(circle at center,
        rgba(255, 255, 255, 0.05) 25%,
        rgba(255,255,255,.5) 40%,
        rgba(17, 17, 50, 0.9)
    );
    filter: brightness(0.5);
  }

  .streak-img {
    object-fit: fill;
    object-position: 50%;
    grid-row: 1/1;
    grid-column: 1/1;
    filter: brightness(0.9) contrast(80%) saturate(0.5) opacity(.9);
    mix-blend-mode: overlay;
    width: 100%;
    transform-origin: 50%;
    height: 100%;
    animation: grow-return linear 30s both infinite normal,
        fade-return ease 30s both infinite normal;
    animation-timing-function: ease-out, ease;
    animation-direction: normal, normal;
    animation-name: grow-return, fade-return;
    animation-duration: 30s, 30s;
  }

  .streak-img--duplicate {
    animation-delay: 15s, 15s;
  }

  .streak-img--faint {
    animation-duration: 12s, 12s;
    animation-delay: 6s, 6s;
    filter: brightness(0.7) contrast(400%) saturate(.9) opacity(7%);
  }

  .streak-img--faint + .streak-img--faint {
    animation-delay: 0s, 0s;
  }

  .streak-img--underlay {
    mix-blend-mode: hard-light;
    animation-duration: 15s, 15s;
    animation-timing-function: linear, linear;
    animation-delay: 0, 0;
    filter: brightness(0.7) contrast(400%) saturate(12) opacity(5%);
  }

  @keyframes bg-size {
    0% {
      background-size:     150% 150%,  200%  050%  , 100%;
      background-position: 050% 000%, -100%  050%  , 0;
    }
    100% {
      background-size:      450%  500%,  800%  200% , 100%;
      background-position: -050% -050%,  050% -100% , 0;
    }
  }
</style>
