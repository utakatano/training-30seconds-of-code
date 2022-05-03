// https://www.30secondsofcode.org/js/s/count-substrings

const countSubstrings = (str, searchValue) => {
  let count = 0,
    i = 0;
  while (true) {
    const r = str.indexOf(searchValue, i);
    if (r !== -1) [count, i] = [count + 1, r + 1];
    else return count;
  }
};

console.log(countSubstrings("tiktok tok tok tik tok tik", "tik"));
console.log(countSubstrings("tutut tut tut", "tut"));
