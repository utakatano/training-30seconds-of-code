// https://www.30secondsofcode.org/js/s/untildify

const untildify = str =>
  str.replace(/^~($|\/|\\)/, `${require('os').homedir()}$1`)

console.log(untildify('~/node'))