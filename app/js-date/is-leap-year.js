// https://www.30secondsofcode.org/js/s/is-leap-year

/**
 * @param {number} year 
 * @returns {boolean}
 */
const isLeapYear = year => new Date(year, 1, 29).getMonth() === 1

console.log(isLeapYear(2019))
console.log(isLeapYear(2020))