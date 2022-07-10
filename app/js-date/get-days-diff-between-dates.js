// https://www.30secondsofcode.org/js/s/get-days-diff-between-dates

const getDaysDiffBetweenDates = (dateInitial, dateFinal) =>
  (dateFinal - dateInitial) / (1000 * 3600 * 24)

console.log(getDaysDiffBetweenDates(new Date('2017-12-13'), new Date('2017-12-22')))