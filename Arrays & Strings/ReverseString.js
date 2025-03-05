const str = "clarity";

const inverseString = (string) => {
  const arr = [];

  for (let i = 0; i < string.length; i++) {
    arr.push(string[i]);
  }

  arr.reverse();

  return arr;
};

console.log(inverseString(str));
