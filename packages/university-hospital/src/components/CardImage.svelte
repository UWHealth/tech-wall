<script>
  import defaultImage from '$assets/icon-512.png';
  /**
   * @type {String|String[]}
   */
  export let images = defaultImage;
  export let overflow = true;

  const imageArray = Array.isArray(images) ? images : [images];
  const multipleImages = imageArray.length > 1;
</script>

<figure class="frame" class:frame--frame-break={overflow} class:frame--multiple={multipleImages}>
  {#each imageArray as image, index}
    <img class={`image-${index}`} alt="card" src={image.src}>
  {/each}
</figure>

<style lang="scss">
  .frame {
    margin: 0;
    aspect-ratio: 12/9;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  .frame--multiple {
    display: grid;
    width: 100%;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    place-content: center;
    place-items: center;

    & img {
      grid-row: 1;
      grid-column: 1;
    }
  }

  .frame img {
    min-inline-size: 100%;
    min-block-size: 100%;
    object-fit: cover;
  }

  .frame--frame-break {
    overflow: visible;
    max-height: 27rem;
  }

  .frame--frame-break img {
    block-size: auto;
    max-inline-size: 107%;
    object-fit: fill;
  }

  .frame--multiple {
    .image-0 {
      animation: wiggle 35s ease-in-out 0s infinite alternate-reverse both;
    }
    .image-1 {
      rotate: 0 0 0 0deg;
      z-index: 1;
    }
  }

  @keyframes wiggle {
    0% {
      rotate: 0 0 0 0deg;
      scale: 1 1 1;
    }
    25% {
      rotate: 80 45 1 21deg;
      scale: 1.1 1.1 1;
    }
    75% {
      rotate: 50 25 0 1deg;
      scale: 1.02 1.01 1;
    }
    100% {
      rotate: 10 15 1 -11deg;
      scale: .98 .99 1;
    }
  }
</style>
