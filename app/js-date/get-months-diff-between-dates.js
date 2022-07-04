// https://www.30secondsofcode.org/js/s/get-months-diff-between-dates

const getMonthsDiffBetweenDates = (dateInitial, dateFinal) =>
  Math.max(
    (dateFinal.getFullYear() - dateInitial.getFullYear()) * 12 +
      dateFinal.getMonth() - dateInitial.getMonth(),
    0
  )

console.log(getMonthsDiffBetweenDates(new Date('2017-12-13'), new Date('2018-04-29')))