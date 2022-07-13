// https://www.30secondsofcode.org/js/s/get-seconds-diff-between-dates

const getSecondsDiffBetweenDates = (dateInitial, dateFinal) =>
  (dateFinal - dateInitial) / 1000

console.log(
  getSecondsDiffBetweenDates(
    new Date('2020-12-24 00:00:15'),
    new Date('2020-12-24 00:00:17')
  )
)