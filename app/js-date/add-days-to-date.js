// https://www.30secondsofcode.org/js/s/add-days-to-date

const addDaysToDate = (date, n) => {
  const d = new Date(date)
  d.setDate(d.getDate() + n)
  return d.toISOString().split('T')[0]
}

console.log(addDaysToDate('2020-10-15', 10))
console.log(addDaysToDate('2020-10-15', -10))