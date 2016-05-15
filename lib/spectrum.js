'use strict'

const Transform = require('stream').Transform
const FFT = require('./fft')

/**
 * show the spectrum and forward chunk
 */
class Spectrum extends Transform {
  _transform (chunk, encoding, cb) {
    // TODO: show spectrum
    const channels = 2
    const bufferSize = chunk.length / channels
    const sampleRate = 44100
    const signal = new Float32Array(bufferSize)

    for (var i = 0, fbl = chunk.length / 2; i < fbl; i++ ) {
      // Assuming interlaced stereo channels,
      // need to split and merge into a stero-mix mono signal
      signal[i] = (chunk[2*i] + chunk[2*i+1]) / 2;
    }
    const fft = new FFT(bufferSize, sampleRate)
    fft.forward(signal)
    console.log(fft.spectrum)
    // console.log(signal)
    cb(null, chunk)
  }
}

module.exports = Spectrum

function audioAvailable(event) {
  var fb = event.frameBuffer,
      t  = event.time, /* unused, but it's there */
      signal = new Float32Array(fb.length / channels),
      magnitude;

  for (var i = 0, fbl = frameBufferLength / 2; i < fbl; i++ ) {
    // Assuming interlaced stereo channels,
    // need to split and merge into a stero-mix mono signal
    signal[i] = (fb[2*i] + fb[2*i+1]) / 2;
  }

  fft.forward(signal);

  // Clear the canvas before drawing spectrum
  ctx.clearRect(0,0, canvas.width, canvas.height);

  for (var i = 0; i < fft.spectrum.length; i++ ) {
    // multiply spectrum by a zoom value
    magnitude = fft.spectrum[i] * 4000;

    // Draw rectangle bars for each frequency bin
    ctx.fillRect(i * 4, canvas.height, 3, -magnitude);
  }
}
