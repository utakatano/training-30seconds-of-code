// https://www.30secondsofcode.org/js/s/get-colon-time-from-date

const getColonTimeFromDate = date => date.toTimeString().slice(0, 8)

console.log(getColonTimeFromDate(new Date()))