// https://www.30secondsofcode.org/js/s/linear-search

const linearSearch = (arr, item) => {
  for (const i in arr) {
    if (arr[i] === item) return +i
  }
  return -1
}

console.log(linearSearch([2, 9, 9], 9))
console.log(linearSearch([2, 9, 9], 7))