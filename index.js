#!/usr/bin/env node

const fs = require('fs')
const lame = require('lame')
const Speaker = require('speaker')

const decoder = new lame.Decoder()
const speaker = new Speaker()

fs.createReadStream(process.argv[2])
  .pipe(decoder)
  .on('format', console.log)
  .pipe(speaker)
