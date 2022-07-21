import anime from "animejs";
import { readable } from "svelte/store";

const colorCycle = [
  '#4572ab', //blue
  '#45A3AB', //turquoise
  '#6c9564', //green
  "#A69B45", //yellow
  "#BA814E", //orange
  "#B46B59", //red
  "#AA708F", //magenta
  "#736FA2" //purple
];
const reverseColors = [colorCycle.at(0), colorCycle.at(-1), ...colorCycle];

let topColor = colorCycle[0];
let bottomColor = reverseColors[0];
const colors = { topColor, bottomColor };

const colorStore = readable({...colors}, set => {

  set({ topColor, bottomColor });

  const animation = anime({
    targets: colors,
    topColor: colorCycle,
    bottomColor: reverseColors,
    loop: true,
    easing: 'easeInQuad',
    direction: 'alternate',
    duration: 50000,
    update: () => {
      set({
        topColor: colors.topColor,
        bottomColor: colors.bottomColor,
      })
    }
  });

  return () => ({ ...colors });
});

export default colorStore;
