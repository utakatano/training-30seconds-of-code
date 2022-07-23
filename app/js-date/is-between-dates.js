// https://www.30secondsofcode.org/js/s/is-between-dates

/**
 * @param {Date} dateStart 
 * @param {Date} dateEnd 
 * @param {Date} date 
 * @returns {boolean}
 */
const isBetweenDates = (dateStart, dateEnd, date) =>
  date > dateStart && date < dateEnd

console.log(
  isBetweenDates(
    new Date(2010, 11, 20),
    new Date(2010, 11, 30),
    new Date(2010, 11, 19),
  )
)

console.log(
  isBetweenDates(
    new Date(2010, 11, 20),
    new Date(2010, 11, 30),
    new Date(2010, 11, 25)
  )
)