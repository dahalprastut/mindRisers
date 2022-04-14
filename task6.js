// 6. non repeated items

function nonRepeat(arr) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!newArr.includes(arr[i])) {
      //includes solves the complexity of another loop
      newArr.push(arr[i]);
    }
  }

  return newArr;
}

console.log(nonRepeat([3, 2, 1, 2, 4]));
