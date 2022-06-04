// https://www.30secondsofcode.org/js/s/is-stream

const isStream = val =>
  val !== null && typeof val === 'object' && typeof val.pipe === 'function'

const fs = require('fs')

console.log(isStream(fs.createReadStream('test.txt')))