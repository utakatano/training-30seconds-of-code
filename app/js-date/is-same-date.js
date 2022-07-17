// https://www.30secondsofcode.org/js/s/is-same-date

/**
 * @param {Date} dateA 
 * @param {Date} dateB 
 * @returns {boolean}
 */
const isSameDate = (dateA, dateB) =>
  dateA.toISOString() === dateB.toISOString()

console.log(
  isSameDate(new Date(2010, 10, 20), new Date(2010, 10, 20))
)