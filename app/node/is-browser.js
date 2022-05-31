// https://www.30secondsofcode.org/js/s/is-browser

const isBrowser = () => ![typeof window, typeof document].includes('undefined')

console.log(isBrowser())