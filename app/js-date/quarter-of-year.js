// https://www.30secondsofcode.org/js/s/quarter-of-year

const quarterOfYear = (date = new Date()) => [
  Math.ceil((date.getMonth() + 1) / 3),
  date.getFullYear()
]

console.log(quarterOfYear(new Date('07/10/2018')))
console.log(quarterOfYear())