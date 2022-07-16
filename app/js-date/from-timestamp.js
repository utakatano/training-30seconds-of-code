// https://www.30secondsofcode.org/js/s/from-timestamp

const fromTimestamp = timestamp => new Date(timestamp * 1000)

console.log(fromTimestamp(1602162242))