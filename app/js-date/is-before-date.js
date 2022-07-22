// https://www.30secondsofcode.org/js/s/is-before-date

/**
 * @param {Date} dateA 
 * @param {Date} dateB 
 * @returns {boolean}
 */
const isBeforeDate = (dateA, dateB) => dateA < dateB

console.log(
  isBeforeDate(
    new Date(2010, 10, 20),
    new Date(2010, 10, 21)
  )
)