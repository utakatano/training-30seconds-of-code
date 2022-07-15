// https://www.30secondsofcode.org/js/s/days-in-month

const daysInMonth = (year, month) => new Date(year, month, 0).getDate()

console.log(daysInMonth(2020, 12))
console.log(daysInMonth(2024, 2))