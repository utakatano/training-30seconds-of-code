// https://www.30secondsofcode.org/js/s/is-duplex-stream

const isDuplexStream = val =>
  val !== null &&
  typeof val === 'object' &&
  typeof val.pipe === 'function' &&
  typeof val._read === 'function' &&
  typeof val._readableState === 'object' &&
  typeof val._write === 'function' &&
  typeof val._writableState === 'object'

const Stream = require('stream')
const duplex = new Stream.Duplex()

console.log(duplex)
console.log(isDuplexStream(duplex))