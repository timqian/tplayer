var fft = require('simple-fft');
var data = new Buffer([ 1,10,1,10,1,10,1,10 ])
var bins = fft(data);

console.log(bins)
