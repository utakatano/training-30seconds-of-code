// https://www.30secondsofcode.org/js/s/euclidean-distance

const euclideanDistance = (a, b) =>
  Math.hypot(...Object.keys(a).map((k) => b[k] - a[k]));

console.log(euclideanDistance([1, 1], [2, 3]));
console.log(euclideanDistance([1, 1, 1], [2, 3, 2]));
