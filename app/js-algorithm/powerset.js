// https://www.30secondsofcode.org/js/s/powerset

const powerset = arr =>
  arr.reduce((a, v) => a.concat(a.map(r => r.concat(v))), [[]])

console.log(powerset([1, 2]))