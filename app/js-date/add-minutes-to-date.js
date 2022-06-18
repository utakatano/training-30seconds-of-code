// https://www.30secondsofcode.org/js/s/add-minutes-to-date

const addMinutesToDate = (date, n) => {
  const d = new Date(date)
  d.setTime(d.getTime() + n * 60000)
  return d.toISOString().split('.')[0].replace('T', ' ')
}

console.log(addMinutesToDate('2020-10-19 12:00:00', 10))
console.log(addMinutesToDate('2020-10-19', -10))