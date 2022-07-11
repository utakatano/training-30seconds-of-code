// https://www.30secondsofcode.org/js/s/get-hours-diff-between-dates

const getHoursDiffBetweenDates = (dateInitial, dateFinal) =>
  (dateFinal - dateInitial) / (1000 * 3600)

console.log(
  getHoursDiffBetweenDates(
    new Date('2021-04-24 10:25:00'),
    new Date('2021-04-25 10:25:00')
  )
)