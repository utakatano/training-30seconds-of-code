// https://www.30secondsofcode.org/js/s/is-after-date

/**
 * @param {Date} dateA 
 * @param {Date} dateB 
 * @returns {boolean}
 */
const isAfterDate = (dateA, dateB) => dateA > dateB

console.log(isAfterDate(
  new Date(2010, 10, 21),
  new Date(2010, 10, 20)
))