// https://www.30secondsofcode.org/js/s/is-weekday

const isWeekday = (d = new Date()) => d.getDay() % 6 !== 0

console.log(isWeekday())