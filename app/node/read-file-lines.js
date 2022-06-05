// https://www.30secondsofcode.org/js/s/read-file-lines

const fs = require('fs')

const readFileLines = filename =>
  fs.readFileSync(filename)
    .toString('UTF8')
    .split('\n')

const arr = readFileLines('test.txt')
console.log(arr)