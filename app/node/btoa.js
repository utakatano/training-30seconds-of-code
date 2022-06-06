// https://www.30secondsofcode.org/js/s/btoa

const btoa = str => Buffer.from(str, 'binary').toString('base64')

console.log(btoa('foobar'))