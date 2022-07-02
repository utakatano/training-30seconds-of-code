// https://www.30secondsofcode.org/js/s/min-date

const minDate = (...dates) => new Date(Math.min(...dates))

const dates = [
  new Date(2017, 4, 13),
  new Date(2018, 2, 12),
  new Date(2016, 0, 10),
  new Date(2016, 0, 9),
]

console.log(minDate(...dates))