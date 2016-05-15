'use strict'

const Transform = require('stream').Transform

class Upper extends Transform {

  _transform (chunk, enc, cb) {
    const upperChunk = chunk.toString().toUpperCase()
    this.push(upperChunk)
    cb(null, '\n')
  }
}

// try it out
const upper = new Upper()
upper.pipe(process.stdout) // output to stdout
upper.write('hello world') // input line 1
upper.write('another linehh') // input line 2

upper.end() // finish
