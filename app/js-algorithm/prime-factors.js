// https://www.30secondsofcode.org/js/s/prime-factors

const primeFactors = n => {
  let a = [],
      f = 2
  while (n > 1) {
    if (n % f === 0) {
      a.push(f)
      n /= f
    } else {
      f++
    }
  }
  return a
}

console.log(primeFactors(147))