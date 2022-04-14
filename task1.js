// 1. Second Greatest Number

const givenArray = [3, 2, 1, , 8, 7, 5];

function greatestNumber(arr) {
  let highest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (highest < arr[i]) {
      highest = arr[i];
    }
  }
  return highest;
}

function removeHighest(arr, highest) {
  const getTheIndex = arr.indexOf(highest);
  arr.splice(getTheIndex, 1);
  return arr;
}

// const highestNum = greatestNumber(givenArray)
const newArr = removeHighest(
  givenArray,
  greatestNumber(givenArray)
); // can replace greatestNumber(givenArray) with  highestNum;
console.log(
  "second greatest number is",
  greatestNumber(newArr)
);
