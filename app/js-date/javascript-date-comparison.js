// https://www.30secondsofcode.org/articles/s/javascript-date-comparison

const a = new Date(2022, 01, 10)
const b = new Date(2022, 01, 10)

console.log(a === b)

console.log(a.getTime() === b.getTime())