// https://www.30secondsofcode.org/js/s/vector-distance

const vectorDistance = (x, y) =>
  Math.sqrt(x.reduce((acc, val, i) => acc + Math.pow(val - y[i], 2), 0))

console.log(vectorDistance([10, 0, 5], [20, 0, 10]))