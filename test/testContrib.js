var blessed = require('blessed')
var bar = require('blessed-contrib').bar
var screen = blessed.screen()

var spectrum = bar({
  label: 'Server Utilization (%)',
  barWidth: 4,
  barSpacing: 6,
  xOffset: 0,
  maxHeight: 9
})

screen.append(spectrum) // must append before setting data

spectrum.setData({
  titles: ['.', '.', '.', '.'],
  data: [5, 10, 8, 6]
})

screen.render()
