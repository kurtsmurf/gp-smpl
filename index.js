import * as Tone from 'https://cdn.skypack.dev/tone';

window.addEventListener('gamepadconnected', () => {
  const s = new Tone.Synth();
  s.toDestination()

  let previousPressed = false

  let loop = () => {
    const gamePads = navigator.getGamepads();
    for (const key in gamePads) {
      const buttons = gamePads[key]?.buttons;
      if (!buttons) continue ;
      const pressed = buttons.reduce((acc, cur) => acc || cur.pressed, false);
      if (pressed && !previousPressed) {
        s.triggerAttackRelease("c4", "4n")
      }
      previousPressed = pressed
    }

    requestAnimationFrame(loop)
  }
  loop();
})