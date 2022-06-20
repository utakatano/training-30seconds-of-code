// https://www.30secondsofcode.org/js/s/is-date-valid

const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf())

console.log(isDateValid('December 17, 1995 03:24:00'))
console.log(isDateValid('1995-12-17T03:24:00'))
console.log(isDateValid('1995-12-17 T03:24:00'))
console.log(isDateValid('Duck'))
console.log(isDateValid(1995, 11, 17))
console.log(isDateValid(1995, 11, 17, 'Duck'))
console.log(isDateValid({}))