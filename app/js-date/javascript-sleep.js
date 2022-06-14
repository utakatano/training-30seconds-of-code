// https://www.30secondsofcode.org/articles/s/javascript-sleep

// https://www.30secondsofcode.org/articles/s/javascript-sleep#set-timeout
// const printNums = () => {
//   console.log(1)
//   setTimeout(() => console.log(2), 500)
//   console.log(3)
// }

// https://www.30secondsofcode.org/articles/s/javascript-sleep#synchronous-version
// const sleepSync = (ms) => {
//   const end = new Date().getTime() + ms
//   while (new Date().getTime() < end) { /* do nothing */ }
// }

// const printNums = () => {
//   console.log(1)
//   sleepSync(500)
//   console.log(2)
//   console.log(3)
// }

// https://www.30secondsofcode.org/articles/s/javascript-sleep#asynchronous-version
const sleep = (ms) =>
  new Promise(resolve => setTimeout(resolve, ms))

const printNums = async () => {
  console.log(1)
  await sleep(500)
  console.log(2)
  console.log(3)
}

printNums()