/**
 * https://www.30secondsofcode.org/articles/s/code-anatomy-chaining-reduce-for-loop
 */

// For loops
const forLoop = () => {
  const files = ["foo.txt", ".bar", " ", "baz.foo"];
  let filePaths = [];

  for (let file of files) {
    const fileName = file.trim();
    if (fileName) {
      const filePath = `~/cool_app/${fileName}`;
      filePaths.push(filePath);
    }
  }
  console.log(filePaths);
};
forLoop();

// Array reduce
const arrayReduce = () => {
  const files = ["foo.txt", ".bar", " ", "baz.foo"];
  const filePaths = files.reduce((acc, file) => {
    const fileName = file.trim();
    if (fileName) {
      const filePath = `~/cool_app/${fileName}`;
      acc.push(filePath);
    }
    return acc;
  }, []);
  console.log(filePaths);
};
arrayReduce();

// Method chaining
const methodChaining = () => {
  const files = ["foo.txt", ".bar", " ", "baz.foo"];
  const filePaths = files
    .map((file) => file.trim())
    .filter(Boolean)
    .map((fileName) => `~/cool_app/${fileName}`);
  console.log(filePaths);
};
methodChaining();
