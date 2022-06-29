// https://www.30secondsofcode.org/js/s/is-iso-string

const isISOString = val => {
  const d = new Date(val)
  return !Number.isNaN(d.valueOf()) && d.toISOString() === val
}

console.log(isISOString('2020-10-12T10:10:10.000Z'))
console.log(isISOString('2020-10-12'))