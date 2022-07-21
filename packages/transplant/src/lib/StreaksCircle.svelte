<script>
  import colors from './colors.js';
  import NameCircle from './NameCircle.svelte';
  import StreakBg from './StreakBg.svelte';

  /** @type {String|null} */
  export let firstName;
  /** @type {String|null} */
  export let lastName;
  /** @type {String|Number|null} */
  export let year;

</script>

<!-- <svelte:options tag="streaks-circle" /> -->

<div class="root">
  <StreakBg topColor={$colors.topColor} bottomColor={$colors.bottomColor} class="streak-container">
    <NameCircle class="graphic--animation" lightColor={$colors.topColor} fillColor={$colors.bottomColor} firstName={firstName} lastName={lastName} year={year}/>
  </StreakBg>
</div>

<style>
  .root :global(.streak-container) {
    width: 100%;
    aspect-ratio: 9/16;
    overflow: hidden;
    margin: auto;
  }

  .root :global(.graphic--animation) {
    animation: fade-grow-in 25s 1 both normal ease-out;
    animation-delay: 2s;
    will-change: transform;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    filter: drop-shadow(0 2px 5px rgba(navy, .15));
  }
</style>
