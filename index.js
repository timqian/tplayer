#!/usr/bin/env node
'use strict'

const fs = require('fs')
const lame = require('lame')
const Speaker = require('speaker')
const Spectrum = require('./lib/spectrum')

const readStream = fs.createReadStream(process.argv[2], { highWaterMark: 1024 }) // read Stream
const decoder = new lame.Decoder() // transform Stream
const speaker = new Speaker() // write Stream

const spectrum = new Spectrum()

readStream
  .pipe(decoder)
  // .on('format', console.log)
  .pipe(spectrum)
  .pipe(speaker)

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
