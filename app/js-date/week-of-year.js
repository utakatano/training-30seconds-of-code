// https://www.30secondsofcode.org/js/s/week-of-year

const weekOfYear = date => {
  const startOfYear = new Date(date.getFullYear(), 0, 1)
  startOfYear.setDate(startOfYear.getDate() + (startOfYear.getDay() % 7))
  return Math.round((date - startOfYear) / (7 * 24 * 3600 * 1000))
}

console.log(weekOfYear(new Date('2021-06-18')))