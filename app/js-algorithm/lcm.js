// https://www.30secondsofcode.org/js/s/lcm

const lcm = (...arr) => {
  const gcd = (x, y) => (!y ? x : gcd(y, x % y))
  const _lcm = (x, y) => (x * y) / gcd(x, y)
  return [...arr].reduce((a, b) => _lcm(a, b))
}

console.log(lcm(12, 7))
console.log(lcm(...[1, 3, 4, 5]))