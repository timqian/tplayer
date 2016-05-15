// var fft = require('fft-js').fft,
//     signal = [1,3,1,0];
//
// var phasors = fft(signal);
//
// console.log(phasors);

var fft = require('fft-js').fft,
    fftUtil = require('fft-js').util,
    signal = [123,0,0,0,111,0,0,0,120,0,0,0,100,0,0,0];

var phasors= fft(signal);

var frequencies = fftUtil.fftFreq(phasors, 4100), // Sample rate and coef is just used for length, and frequency step
    magnitudes = fftUtil.fftMag(phasors);

var both = frequencies.map(function (f, ix) {
    return {frequency: f, magnitude: magnitudes[ix]};
});

console.log(both);
