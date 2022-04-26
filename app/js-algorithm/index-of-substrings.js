// https://www.30secondsofcode.org/js/s/index-of-substrings

const indexOfSubstrings = function* (str, searchValue) {
  let i = 0
  while (true) {
    const r = str.indexOf(searchValue, i)
    if (r !== -1) {
      yield r
      i = r + 1
    } else return
  }
}

console.log([...indexOfSubstrings('tiktok tok tok tik tok tik', 'tik')])
console.log([...indexOfSubstrings('tutut tut tut', 'tut')])
console.log([...indexOfSubstrings('hello', 'hi')])