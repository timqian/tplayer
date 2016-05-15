'use strict'

const EventEmitter = require('events')

class MyEmitter extends EventEmitter { }

const myEmitter = new MyEmitter()

myEmitter.on('evet', () => {
  console.log('sub 1')
})

myEmitter.on('evet', () => {
  console.log('an event occurred!')
})

myEmitter.emit('evet')
