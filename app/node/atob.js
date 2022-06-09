// https://www.30secondsofcode.org/js/s/atob

const atob = str => Buffer.from(str, 'base64').toString('binary')

console.log(atob('Zm9vYmFy'))