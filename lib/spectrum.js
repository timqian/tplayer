'use strict'

const Transform = require('stream').Transform
const fft = require('simple-fft')
const blessed = require('blessed')
const bar = require('blessed-contrib').bar
const screen = blessed.screen()

const signalLength = 256
const perBar = 8  // data for a bar

// bar view setting
const barView = bar({
  label: 'Enjoy the song!',
  barWidth: 2,
  barSpacing: 1,
  xOffset: 0,
  maxHeight: 9
})

screen.append(barView) // must append before setting data

/**
 * Show the spectrum and forward chunk
 * 1. 从 pcm chunk 中取出一段，
 * 2. fft 得到频谱
 * 3. 合并，展示频谱
 */
class Spectrum extends Transform {
  _transform (chunk, encoding, cb) {
    const signal = chunk.slice(0, signalLength)
    // console.log(signal.length)

    const spectrum = fft(signal)
    spectrum.shift()
    // console.log(spectrum.length)

    const barData = amountAdd(perBar, spectrum)
    barData.shift()
    barData.pop()
    barData.forEach((item) => {
      return item / signalLength / perBar
    })
    // console.log(spectrum2.length)

    const titles = new Array(barData.length).fill('-')
    barView.setData({
      titles,
      data: barData
    })

    screen.render()

    cb(null, chunk)
  }
}

/**
 * amountAdd(2, [1, 0, 3, 5]) ==> [1, 8]
 */
function amountAdd (amount, arr) {
  let newArr = []
  for (let i = 0; i < arr.length; i += amount) {
    let tmp = 0
    for (let j = 0; j < amount; j++) {
      tmp += arr[i + j]
    }
    newArr.push(tmp)
  }

  return newArr
}

module.exports = Spectrum
