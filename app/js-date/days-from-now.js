// https://www.30secondsofcode.org/js/s/days-from-now

const daysFromNow = n => {
  const d = new Date()
  d.setDate(d.getDate() + Math.abs(n))
  return d.toISOString().split('T')[0]
}

console.log(daysFromNow(5))