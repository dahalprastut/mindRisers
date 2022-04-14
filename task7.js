// 7.get common items from two arrays

function commonItems(arr1, arr2) {
  const commonArrayItems = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i])) {
      commonArrayItems.push(arr1[i]);
    }
  }

  return commonArrayItems;
}

console.log(
  commonItems([4, 2, 1, 7], [2, 7, 6, 4])
);
