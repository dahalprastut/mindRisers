// 3. calculate sum of digits

function calcSum(number) {
  let sum = 0;
  const stringifyNum = String(number); // because .length property can be applied to string

  for (let i = 0; i < stringifyNum.length; i++) {
    sum = Number(stringifyNum[i]) + sum;
  }
  return sum;
}

console.log(calcSum(3));
