// https://www.30secondsofcode.org/js/s/is-prime

const isPrime = num => {
  const boundary = Math.floor(Math.sqrt(num))
  for (let i = 2; i <= boundary; i++) if (num % i === 0) return false
  return num >= 2
}

console.log(isPrime(11))