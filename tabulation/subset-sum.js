//Given a set of non-negative integers, and a value sum,
// determine if there is a subset of the given set with sum equal to given sum.

// Input: set[] = {3, 34, 4, 12, 5, 2}, sum = 9
// Output: True
// There is a subset (4, 5) with sum 9.

// Input: set[] = {3, 34, 4, 12, 5, 2}, sum = 30
// Output: False
// There is no subset that add up to 30.

const isSubSet = (targetSum, numbers) => {
  if (!numbers.includes(0)) numbers.unshift(0);
  numbers.sort((a, b) => a - b);
  const matrix = Array(targetSum + 1)
    .fill()
    .map(() => Array(numbers.length - 1).fill(false));

  for (let i = 0; i < numbers.length; i++) matrix[0][i] = true;

  for (let i = 1; i <= targetSum; i++) matrix[i][0] = false;

  for (let i = 1; i <= targetSum; i++) {
    for (let j = 1; j < numbers.length; j++) {
      if (numbers[j] > i) matrix[i][j] = matrix[i][j - 1];
      else matrix[i][j] = matrix[i][j - 1] || matrix[i - numbers[j]][j - 1];
    }
  }

  return matrix[targetSum][numbers.length - 1];
};

console.log(isSubSet(9, [3, 34, 4, 12, 5, 2])); // true
console.log(isSubSet(30, [3, 34, 4, 12, 5, 2])); // false
console.log(isSubSet(6, [3, 4, 5, 2])); // true
console.log(isSubSet(8, [2, 3, 5])); // true
console.log(isSubSet(5, [2, 3])); // true
console.log(isSubSet(7, [5, 3, 4, 7])); // true
console.log(isSubSet(6, [3, 2])); // false
console.log(isSubSet(7, [4, 2])); //false
console.log(isSubSet(14, [7, 3, 4])); // true
console.log(isSubSet(300, [7, 14])); //false
