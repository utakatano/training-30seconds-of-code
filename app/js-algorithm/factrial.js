// https://www.30secondsofcode.org/js/s/factorial

const factrial = n =>
  n < 0
    ? (() => {
        throw new TypeError('Negative numbers are not allowed!')
      })()
    : n <= 1
    ? 1
    : n * factrial(n - 1)

console.log(factrial(6))