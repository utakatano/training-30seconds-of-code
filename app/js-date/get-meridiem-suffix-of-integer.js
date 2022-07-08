// https://www.30secondsofcode.org/js/s/get-meridiem-suffix-of-integer

const getMeridiemSuffixOfInteger = num =>
  num === 0 || num === 24
    ? `12am`
    : num === 12
    ? `12pm`
    : num < 12
    ? `${num % 12}am`
    : `${num % 12}pm`

console.log(getMeridiemSuffixOfInteger(0))
console.log(getMeridiemSuffixOfInteger(11))
console.log(getMeridiemSuffixOfInteger(13))
console.log(getMeridiemSuffixOfInteger(25))