const keys = [...document.querySelectorAll('.key')];

window.addEventListener('keydown', e => {
  // Clap Sound
  if (e.keyCode === 65 || e.keyCode === 97) {
    const clapKey = document.querySelector('.clap');
    clapKey.classList.add('playing');

    const clap = new Audio('../sounds/clap.wav');
    clap.play();
  }

  // Hihat Sound
  if (e.keyCode === 83 || e.keyCode === 115) {
    const hihatKey = document.querySelector('.hihat');
    hihatKey.classList.add('playing');

    const hihat = new Audio('../sounds/hihat.wav');
    hihat.play();
  }

  // Kick Sound
  if (e.keyCode === 68 || e.keyCode === 100) {
    const kickKey = document.querySelector('.kick');
    kickKey.classList.add('playing');

    const kick = new Audio('../sounds/kick.wav');
    kick.play();
  }

  // Openhat Sound
  if (e.keyCode === 70 || e.keyCode === 102) {
    const openhatKey = document.querySelector('.openhat');
    openhatKey.classList.add('playing');

    const openhat = new Audio('../sounds/openhat.wav');
    openhat.play();
  }

  // Boom Sound
  if (e.keyCode === 71 || e.keyCode === 103) {
    const boomKey = document.querySelector('.boom');
    boomKey.classList.add('playing');

    const boom = new Audio('../sounds/boom.wav');
    boom.play();
  }

  // Ride Sound
  if (e.keyCode === 72 || e.keyCode === 104) {
    const rideKey = document.querySelector('.ride');
    rideKey.classList.add('playing');

    const ride = new Audio('../sounds/ride.wav');
    ride.play();
  }

  // Snare Sound
  if (e.keyCode === 74 || e.keyCode === 106) {
    const snareKey = document.querySelector('.snare');
    snareKey.classList.add('playing');

    const snare = new Audio('../sounds/snare.wav');
    snare.play();
  }

  // Tom Sound
  if (e.keyCode === 75 || e.keyCode === 107) {
    const tomKey = document.querySelector('.tom');
    tomKey.classList.add('playing');

    const tom = new Audio('../sounds/tom.wav');
    tom.play();
  }

  // Tink Sound
  if (e.keyCode === 76 || e.keyCode === 108) {
    const tinkKey = document.querySelector('.tink');
    tinkKey.classList.add('playing');

    const tink = new Audio('../sounds/tink.wav');
    tink.play();
  }
});

window.addEventListener('keyup', () => {
  keys.forEach(key => {
    if (key.classList.contains('playing')) {
      key.classList.remove('playing');
    }
  });
});
