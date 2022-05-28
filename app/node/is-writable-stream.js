// https://www.30secondsofcode.org/js/s/is-writable-stream

const isWritableStream = val =>
  val !== null &&
  typeof val === 'object' &&
  typeof val.pipe === 'function' &&
  typeof val._write === 'function' &&
  typeof val._writableState === 'object'

const fs = require('fs')

console.log(isWritableStream(fs.createWriteStream('test.txt')))