// Write a function `canSum(targetSum, numbers)` that takes in a 
// targetSum and numbers as arguments
// The function should return a boolean indicating whether or not 
// it is possible to generate the targetSum using numbers from the array
// You may use an element of the array as many times as needed
// you may assume that all input numbers are > 0 

const canSum = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return true;
  if (targetSum < 0) return false;

  for (let num of numbers) {
    let remainder = targetSum - num;
    if (canSum(remainder, numbers, memo)) {
      memo[targetSum] = true;
      return true;
    }
  }
  memo[targetSum] = false;
  return false;
};

console.log(canSum(8, [2, 3, 5])); // true
console.log(canSum(7, [2, 3])); // true
console.log(canSum(7, [5, 3, 4, 7])); // true
console.log(canSum(6, [3, 3])); // true
console.log(canSum(7, [4, 2])); //false
console.log(canSum(8, [2, 3, 5])); // true
console.log(canSum(300, [7, 14])); //false
