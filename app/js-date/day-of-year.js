// https://www.30secondsofcode.org/js/s/day-of-year

const dayOfYear = date =>
  Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24)

console.log(dayOfYear(new Date()))