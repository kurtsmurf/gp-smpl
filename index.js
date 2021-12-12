// @ts-check

const blorp = ([previous, button], i) => {
  if (!previous.pressed && button.pressed) {
    console.log(i, button)
  }
}

const blah = ([previous, gamepad]) => {

  if (previous.index !== gamepad.index) console.log("OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOONNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!11111")

  zip(
    previous.buttons,
    gamepad.buttons,
  ).forEach(blorp);
}

let previousGamepads = [];
const loop = () => {
  const currentGamepads = [...navigator.getGamepads()];

  previousGamepads &&
    zip(
      previousGamepads.filter(Boolean),
      currentGamepads.filter(Boolean),
    ).forEach(blah);

  previousGamepads = currentGamepads
  requestAnimationFrame(loop)
}

const zip = (a, b) => a.map((e, i) => [e, b[i]])

loop();
