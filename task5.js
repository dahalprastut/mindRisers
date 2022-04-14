// 5. reverse of a number

function reversal(num) {
  const stringifyNum = String(num);
  let newNum = "";
  for (
    let i = stringifyNum.length - 1;
    i >= 0;
    i--
  ) {
    newNum = `${newNum + stringifyNum[i]}`;
  }
  return Number(newNum);
}

console.log(reversal(371));
