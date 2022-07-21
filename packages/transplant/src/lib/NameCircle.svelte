<script>
  import glassImg from '$assets/glass-front-bw.webp';
  import streakImg from '$assets/streaks-small.jpg';
  export let lightColor = "#4572ab";
  export let fillColor = "#856fa2";
  export let firstName = "Christopher";
  export let lastName = "Hernandez";
  /**@type {String|Number|null} */
  export let year = "2022";

  let classes = '';

  export let textClass = '';
  export { classes as class };

  let lastNameLength = lastName?.length || 0;
  let twoLines = false;

  $: if (typeof lastName === "string") {
    // @ts-ignore
    lastName = lastName?.split(/[ -]/g) || lastName;
  }
  $: {
    lastNameLength = Array.isArray(lastName) ? lastName.reduce((c,v) => c + v.length, 0) : (lastName?.length || 0);
    lastNameLength = (lastNameLength * 9 > 200) ? 180 : lastNameLength * 9;
  }
  $: {
    twoLines = Array.isArray(lastName) && lastName?.length > 1;
  }

</script>

<!-- <svelte:options tag="name-circle" /> -->

<svg class={`graphic ${classes}`} xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100">
  <defs>
      <clipPath id="clippath"> <circle cx="50" cy="50" r="45" fill="none" /> </clipPath>

      <filter id="glass_filter">
        <feTurbulence type="fractalNoise" baseFrequency="0.04 0.04" numOctaves="14" seed="23" stitchTiles="stitch" x="0%" y="0%" width="100%" height="100%" result="turbulence" />
        <feMorphology operator="dilate" radius="3 3" x="0%" y="0%" width="100%" height="100%" in="turbulence" result="morphology" />
        <feDisplacementMap in="SourceGraphic" in2="morphology" scale="25" xChannelSelector="R" yChannelSelector="B" x="9%" y="10%" width="100%" height="100%" result="displacementMap" />
        <feGaussianBlur stdDeviation=".35 .35" x="0%" y="0%" width="300%" height="300%" in="displacementMap" edgeMode="duplicate" result="blur1" />
        <feSpecularLighting surfaceScale="4" specularConstant="1.4" specularExponent="72"  x="0%" y="0%"
          id="lighting-color"
          in="turbulence"
          lighting-color={lightColor}
          width="100%" height="100%"
          result="specularLighting1"
        >
          <fePointLight x="50" y="0" z="800" />
        </feSpecularLighting>
        <feGaussianBlur stdDeviation=".5" x="0%" y="0%" width="300%" height="300%" in="specularLighting1" edgeMode="duplicate" result="blur2" />
        <feFlood id="base-color"
            flood-color={fillColor}
            flood-opacity="1" x="0%" y="0%" width="100%" height="100%" result="flood" />
        <feBlend mode="hard-light" x="0%" y="0%" width="100%" height="100%" in="flood" in2="blur2" result="blend1" />
        <feBlend mode="color-dodge" x="0%" y="0%" width="100%" height="100%" in="blur1" in2="blend1" result="blend" />
    </filter>
  </defs>

  <circle class="circle-stroke" cx="50" cy="50" r="45.75" stroke="white" stroke-width="3" />

  <g clip-path="url(#clippath)" class="glass">
    <image clip-path="url(#clippath)" x="-90" y="-360" class="glass__bg" width="300" height="800" style="opacity: .9" xlink:href={streakImg} filter="url(#glass_filter)" />
    <image clip-path="url(#clippath)" x="-50" y="-50" class="glass__front" width="300" height="300" xlink:href={glassImg} />
  </g>

  <svg class={`text ${textClass}`} viewBox="0 0 100 100" width="80" height="80" x="10" y="11">
    <g class="text__wrapper" fill="white" width="100">
      <text x="50" y={twoLines ? 25 : 32} text-anchor="middle" class="text__first-name">{firstName}</text>
      {#if lastName}
        <text x="50" y={twoLines ? 32 : 41} textLength={lastNameLength} text-anchor="middle" class="text__last-name" lengthAdjust="spacing">
        {#each lastName as name}<tspan dy="18" x="50" text-anchor="middle">{name}</tspan>{/each}
        </text>
      {/if}
      <text dx="50" y={twoLines ? 85 : 78} textLength="35" text-anchor="middle" class="text__year">{year}</text>
    </g>
  </svg>
</svg>

<style lang="scss">
  .graphic {
    position: relative;
    z-index: 2;
    width: 100%;
    align-self: center;
    justify-self: center;
    margin: 0;
  }

  .text {
    filter: drop-shadow(0px .5px 5px var(--bottom-color));
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    will-change: transform;
    animation: fade-grow-in-fast 25s 1 both normal ease-out;
    animation-delay: 3s;
  }

  .text__wrapper {
    font-family: "Proxima Nova Extra Condensed", "proxima-nova-extra-condensed", sans-serif;
    fill: white;
    font-weight: 400;
    text-transform: uppercase;
    font-size: 10px;
  }

  .text__first-name {
    font-family: "Proxima Nova", "proxima-nova", sans-serif;
    font-weight: 900;
    font-size: 6px;
    letter-spacing: .5em;
  }

  .text__last-name {
    font-size: 24px;
  }

  .circle-stroke {
    stroke: var(--bottom-color, white);
    filter: brightness(265%);
    mix-blend-mode: screen;
  }

  .glass__front {
    mix-blend-mode: multiply;
    opacity: .5;
    filter: brightness(0.8) saturate(0);
    transform-origin: 50%;
    animation: glass-skew ease-in 60s both infinite alternate;
  }

  .glass__bg {
    transform-origin: 50%;
    filter: url(#glass_filter) blur(2px);
    animation: streaks ease 45s both infinite alternate;
  }

  @keyframes streaks {
    0% {
      opacity: .6;
      transform: scale(1);
    }
    50% {
      opacity: 1;
    }
    100% {
      transform: scale(1.5);
    }
  }

  @keyframes glass-skew {
    0% {
        transform: scale(1) skew(0);
        opacity: .7;
    }
    50% {
        transform: scale(1.1) skew(10deg);
        opacity: .6;
    }
    100% {
        transform: scale(1.2) skew(4deg);
        opacity: .5;
    }
  }

  @keyframes fade-grow-in {
    0% { transform: scale(.85); opacity:0; }
    10% {transform: scale(.96); opacity: 1; }
    100% { opacity: 1; }
  }
  @keyframes fade-grow-in-fast {
    0% { transform: scale(.85); opacity:0; }
    5% { opacity: 1; }
    100% { transform: scale(1); opacity: 1; }
  }
</style>
