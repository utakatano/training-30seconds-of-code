// https://www.30secondsofcode.org/js/s/is-weekend

const isWeekend = (d = new Date()) => d.getDay() % 6 === 0

console.log(isWeekend())