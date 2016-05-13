#!/usr/bin/env node

const fs = require('fs')
const lame = require('lame')
const Speaker = require('speaker')

fs.createReadStream(process.argv[2])
  .pipe(new lame.Decoder)
  .on('format', console.log)
  .pipe(new Speaker);
