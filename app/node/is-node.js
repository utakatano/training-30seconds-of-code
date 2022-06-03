// https://www.30secondsofcode.org/js/s/is-node

const isNode = () =>
  typeof process !== 'undefined' &&
  !!process.versions &&
  !!process.versions.node

console.log(isNode())