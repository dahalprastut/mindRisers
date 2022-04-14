// 4. check prime or not

function primeChecker(num) {
  let count = 0;
  for (let i = 1; i < num; i++) {
    if (num % i === 0) {
      count = count + 1;
    }
  }

  if (count > 1) {
    return "not a prime";
  } else {
    return "prime";
  }
}

console.log(primeChecker(37));
