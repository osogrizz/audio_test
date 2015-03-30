function addListeners() {

var currentlyPlaying = null;

var stopSound = function () {
  if (currentlyPlaying) {
    currentlyPlaying.stop();
  }
};
var toggleSound = function (sound) {
  if (currentlyPlaying === sound) {
    currentlyPlaying.stop();
    currentlyPlaying = null;
  } else {
    stopSound();
    sound.play();
    currentlyPlaying = sound;
  }
};

$("#lowE" ).click(function() {
  toggleSound(E2);
});

$("#A" ).click(function() {
  toggleSound(A2);
});

$("#D" ).click(function() {
  toggleSound(D3);
});

$("#G" ).click(function() {
  toggleSound(G3);
});

$("#B" ).click(function() {
  toggleSound(B3);
});

$("#highE" ).click(function() {
  toggleSound(E4);
});


$("#stopPlay").click(stopSound);


}

var voice = new Wad({source: 'mic' }); // At this point, your browser will ask for permission to access your microphone.
var tuner = new Wad.Poly();
tuner.add(voice);

// voice.play(); // You must give your browser permission to access your microphone before calling play().

// tuner.updatePitch(); // The tuner is now calculating the pitch and note name of its input 60 times per second. These values are stored in tuner.pitch and tuner.noteName.

// var logPitch = function(){
//     console.log(tuner.pitch, tuner.noteName);
//     requestAnimationFrame(logPitch);
// };
// logPitch();
// // If you sing into your microphone, your pitch will be logged to the console in real time.

// tuner.stopUpdatingPitch(); // Stop calculating the pitch if you don't need to know it anymore.


// Creation of Notes for WADOscillator to be created on 'play();'


// attempt to create one function as a template for each new WAD that I need.
var createWads = function(frequency) {
  new Wad ({
    source: "triangle",
    pitch: frequency,
    env: {
      attack: 0,
      decay: 0,
      sustain: 1,
      hold: 120,
      release: 1
    }
  });
};

var E2 = createWads(82.41);
var A2 = createWads(110);
var D3 = createWads(146.83);
var G3 = createWads(196);

// var E2 = new Wad({
//   source: "triangle",
//   pitch: 82.41,
//   env: {
//     attack: 1,
//     decay: 1,
//     sustain: 1,
//     hold: 120,
//     release: 1
//   }
// });

var A2 = new Wad({
  source: "triangle",
  pitch: 110,
  env: {
    attack: 0,
    decay: 1,
    sustain: 1,
    hold: 120,
    release: 0.5
  }
});

var D3 = new Wad({
  source: "triangle",
  pitch: 146.83,
  env: {
    attack: 0,
    decay: 1,
    sustain: 1,
    hold: 120,
    release: 0.5
  }
});

var G3 = new Wad({
  source: "triangle",
  pitch: 196,
  env: {
    attack: 0,
    decay: 1,
    sustain: 1,
    hold: 120,
    release: 0.5
  }
});

var B3 = new Wad({
  source: "triangle",
  pitch: 246.94,
  env: {
    attack: 0,
    decay: 1,
    sustain: 1,
    hold: 120,
    release: 0.5
  }
});

var E4 = new Wad({
  source: "triangle",
  pitch: 329.63,
  env: {
    attack: 0,
    decay: 1,
    sustain: 1,
    hold: 120,
    release: 0.5
  }
});





window.onload = addListeners; 






