// 2. odd number from range

function oddNumberGetter(from, to) {
  const oddNum = [];
  for (let i = from; i <= to; i++) {
    if (i % 2 !== 0) {
      oddNum.push(i);
    }
  }
  return oddNum;
}

console.log(oddNumberGetter(2, 13));
