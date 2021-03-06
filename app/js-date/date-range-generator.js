// https://www.30secondsofcode.org/js/s/date-range-generator

const dateRangeGenerator = function* (start, end, step = 1) {
  let d = start
  while (d < end) {
    yield new Date(d)
    d.setDate(d.getDate() + step)
  }
}