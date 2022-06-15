// https://www.30secondsofcode.org/js/s/format-seconds

const formatSeconds = s => {
  const [hour, minute, second, sign] =
    s > 0
      ? [s / 3600, (s / 60) % 60, s % 60, '']
      : [-s / 3600, (-s / 60) % 60, -s % 60, '-']

  return (
    sign +
    [hour, minute, second]
      .map(v => `${Math.floor(v)}`.padStart(2, '0'))
      .join(':')
  )
}

console.log(formatSeconds(200))
console.log(formatSeconds(-200))
console.log(formatSeconds(99999))