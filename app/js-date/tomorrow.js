// https://www.30secondsofcode.org/js/s/tomorrow

const tomorrow = () => {
  const d = new Date()
  d.setDate(d.getDate() + 1)
  return d.toISOString().split('T')[0]
}

console.log(tomorrow())