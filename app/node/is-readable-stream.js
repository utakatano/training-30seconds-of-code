// https://www.30secondsofcode.org/js/s/is-readable-stream

const isReadableStream = val =>
  val !== null &&
  typeof val === 'object' &&
  typeof val.pipe === 'function' &&
  typeof val._read === 'function' &&
  typeof val._readableState === 'object'

const fs = require('fs')

console.log(isReadableStream(fs.createReadStream('test.txt')))