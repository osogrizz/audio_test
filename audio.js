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
    console.log(sound);
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







// attempt to create one function as a template for each new WAD that I need.
// var createSounds = function(frequency) {
//   new Wad ({
//     source: "triangle",
//     pitch: frequency,
//     env: {
//       attack: 0,
//       decay: 0,
//       sustain: 1,
//       hold: 120,
//       release: 0.2
//     }
//   });
// };


// var E2 = createSounds(82.41);
// var A2 = createSounds(110);
// var D3 = createSounds(146.83);
// var G3 = createSounds(196);
// var B3 = createSounds(246.94);
// var E4 = createSounds(329.63);



var E2 = new Wad({
  source: "triangle",
  pitch: 82.41,
  env: {
    attack: 0,
    decay: 0,
    sustain: 1,
    hold: 120,
    release: 0.2
  }
});

var A2 = new Wad({
  source: "triangle",
  pitch: 110,
  env: {
    attack: 0,
    decay: 0,
    sustain: 1,
    hold: 120,
    release: 0.2
  }
});

var D3 = new Wad({
  source: "triangle",
  pitch: 146.83,
  env: {
    attack: 0,
    decay: 0,
    sustain: 1,
    hold: 120,
    release: 0.2
  }
});

var G3 = new Wad({
  source: "triangle",
  pitch: 196,
  env: {
    attack: 0,
    decay: 0,
    sustain: 1,
    hold: 120,
    release: 0.2
  }
});

var B3 = new Wad({
  source: "triangle",
  pitch: 246.94,
  env: {
    attack: 0,
    decay: 0,
    sustain: 1,
    hold: 120,
    release: 0.2
  }
});

var E4 = new Wad({
  source: "triangle",
  pitch: 329.63,
  env: {
    attack: 0,
    decay: 0,
    sustain: 1,
    hold: 120,
    release: 0.2
  }
});

var sine = new Wad({source : 'sine'});
var mixerTrack = new Wad.Poly({
    recConfig : { // The Recorder configuration object. The only required property is 'workerPath'.
        workerPath : '/src/Recorderjs/recorderWorker.js' // The path to the Recorder.js web worker script.
    }
});
mixerTrack.add(sine);

mixerTrack.rec.record();             // Start recording output from this PolyWad.
sine.play({pitch : 'C3'});           // Make some noise!
mixerTrack.rec.stop();               // Take a break.
mixerTrack.rec.record();             // Append to the same recording buffer.
sine.play({pitch : 'G3'});
mixerTrack.rec.stop();
mixerTrack.rec.createWad();          // This method accepts the same arguments as the Wad constructor, except that the 'source' is implied, so it's fine to call this method with no arguments. 
mixerTrack.rec.recordings[0].play(); // The most recent recording is unshifted to the front of this array.
mixerTrack.rec.clear();  


}
window.onload = addListeners();


