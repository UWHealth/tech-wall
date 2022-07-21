<script>
  export let highlighted = 'Hello.';
  export let greeting = "How can we help you?";
  let animate = true;


</script>

<h1 class="welcome">
  <div class="highlight" style={`--animation-length: 2s;`}>

    <div class={`highlight__bg-wrap`} class:enter={animate}>
      <div class="highlight__bg" class:enter={animate}>{highlighted}</div>
    </div>

    <div class="highlight__first-word" class:enter={animate}>
      {highlighted}
    </div>

  </div>

  <span class="greeting">{greeting}</span>
</h1>

<style>
  h1 {
    display: flex;
    user-select: none;
    align-self: center;
    color: white;
    font-family: 'bennet-banner';
    font-weight: 900;
    padding-bottom: 5rem;
    padding-left: 3rem;
    padding-right: 1rem;
    grid-column: span 2;
    flex-direction: column;
    font-size: 7rem;
    line-height: 6.5rem;
    text-shadow: 1px 2px 2px rgba(0,0,0,0.05);
    -webkit-font-smoothing: antialiased;
  }

  .highlight {
    display: grid;
    margin-bottom: .25rem;
  }

  .highlight__first-word {
    transform: translateX(.5rem);
  }

  .highlight__first-word.animation {
    animation: var(--animation-length, 2s) ease-out first-word;
    animation-fill-mode: both;
    animation-delay: 1s;
  }

  .highlight__bg-wrap {
    display: block;
    position: absolute;
    align-self: center;
    transform-origin: 100%;
  }

  .highlight__bg {
    display: inline-block;
    transform-origin: bottom left;
    color: transparent;
    background-color: var(--color-blue-70);
    opacity: .8;
    mix-blend-mode: difference;
    will-change: transform;
    padding: .5rem 1rem;
  }

  .highlight__bg.animation {
    animation: highlight var(--animation-length) ease-out;
    animation-fill-mode: both;
    animation-direction: alternate;
    animation-delay: 1s;
  }

  .highlight,
  .greeting {
    position: relative;
    z-index: 1;
  }

  @keyframes float-up {
    40% {
      transform: translateY(0);
    }
    75% {
      transform: translateY(16rem);
    }
  }

  @keyframes first-word {
    0% {
      opacity: 0;
      transform: translateY(1rem) translateX(.5rem);
    }
    40% {
      opacity: 0;
      transform: translateY(.5rem) translateX(.5rem);
    }
    60% {
      opacity: .2;
    }
    75% {
      opacity: 1;
      transform: translateY(.1rem) translateX(.5rem);
    }
  }

  @keyframes highlight {
    0% {
      transform: scaleX(0) scaleY(.05);
      margin-bottom: 0;
    }
    20% {
      transform: scaleX(1) scaleY(.05);
    }
    25% {
      transform: scaleX(1) scaleY(.05);
    }
    80% {
      transform: scaleX(1) scaleY(1);
    }
  }
</style>
