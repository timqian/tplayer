# Learn stream by build a music player

## Usage:

1. `npm install -g tplayer`
2. `tplayer dirToYour.mp3`

## test:

1. `git clone thisProject`
2. `npm install`
3. `node index.js test/test.mp3`

## Environment

`node v4.4.4` (not working on `v6.x.x`, because of [a bug of node-lame](https://github.com/TooTallNate/node-lame/issues/62))

## refs:

* [stream handbook](https://github.com/substack/stream-handbook)
* [Write transform stream](http://codewinds.com/blog/2013-08-20-nodejs-transform-streams.html)
* [FFT audio](https://developer.mozilla.org/en-US/docs/Visualizing_Audio_Spectrum)
* [Spectral density](https://en.wikipedia.org/wiki/Spectral_density#Explanation)

## dependencies

[blessed-contrib](https://github.com/yaronn/blessed-contrib): console chart lib
[node-speaker](https://github.com/TooTallNate/node-speaker): play pcm stream
[node-lame](https://github.com/TooTallNate/node-lame): mp3 stream to pcm stream
