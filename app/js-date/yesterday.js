// https://www.30secondsofcode.org/js/s/yesterday

const yesterday = () => {
  const d = new Date()
  d.setDate(d.getDate() - 1)
  return d.toISOString().split('T')[0]
}

console.log(yesterday())