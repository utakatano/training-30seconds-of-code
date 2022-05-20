// https://www.30secondsofcode.org/js/s/hamming-distance

const hammingDistance = (num1, num2) =>
  ((num1 ^ num2).toString(2).match(/1/g) || '').length

console.log(hammingDistance(2, 3))