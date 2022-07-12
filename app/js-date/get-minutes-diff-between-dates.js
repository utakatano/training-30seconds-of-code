// https://www.30secondsofcode.org/js/s/get-minutes-diff-between-dates

const getMinutesDiffBetweenDates = (dateInitial, dateFinal) =>
  (dateFinal - dateInitial) / (1000 * 60)

console.log(
  getMinutesDiffBetweenDates(
    new Date('2021-04-24 01:00:15'),
    new Date('2021-04-24 02:00:15')
  )
)