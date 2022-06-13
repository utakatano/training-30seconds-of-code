// https://www.30secondsofcode.org/articles/s/javascript-sleep

const printNums = () => {
  console.log(1)
  setTimeout(() => console.log(2), 500)
  console.log(3)
}

printNums()