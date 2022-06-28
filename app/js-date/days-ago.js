// https://www.30secondsofcode.org/js/s/days-ago

const daysAgo = n => {
  const d = new Date()
  d.setDate(d.getDate() - Math.abs(n))
  return d.toISOString().split('T')[0]
}

console.log(daysAgo(20))