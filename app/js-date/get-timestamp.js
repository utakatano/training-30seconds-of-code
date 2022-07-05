// https://www.30secondsofcode.org/js/s/get-timestamp

const getTimestamp = (date = new Date()) => Math.floor(date.getTime() / 1000)

console.log(getTimestamp())