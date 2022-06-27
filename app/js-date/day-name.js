// https://www.30secondsofcode.org/js/s/day-name

const dayName = (date, locale) =>
  date.toLocaleDateString(locale, { weekday: 'long' })

console.log(dayName(new Date()))
console.log(dayName(new Date('09/23/2020'), 'de-DE'))