#!/usr/bin/env node
'use strict'

const fs = require('fs')
const lame = require('lame')
const Speaker = require('speaker')
const Spectrum = require('./lib/spectrum')

const readStream = fs.createReadStream(process.argv[2]) // read Stream
const decoder = new lame.Decoder() // transform Stream
const speaker = new Speaker() // write Stream

// data event of readStream
// readStream.on('data', (data) => {
//   console.log(data)
// })
// readStream.on('end', () => {
//   console.log('end')
// })

// get pcm format
// let format = {}
// readStream
//   .pipe(decoder)
//   .on('format', (obj) => {
//     format = obj
//   })
//   .pause()

// console.log(format)
const spectrum = new Spectrum(/*format*/)

readStream
  .pipe(decoder)
  .on('format', console.log)
  .pipe(spectrum)
  .pipe(speaker)
