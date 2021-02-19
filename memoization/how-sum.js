// Write a function `howSum(targetSum, numbers)` that takes in a 
// targetSum and numbers as arguments
// The function should return an array containing any combination
// of elements that add up to exactly the targetSum. 
// if there is no combination that adds up to the targetSum, then return null
// if there are multiple combinations possible, you may return 
// any single one

const howSum = (targetSum, numbers, memo={}) => {
    if(targetSum in memo) return memo[targetSum];
    if (targetSum === 0) return [];
    if(targetSum < 0 ) return null;

    for(let num of numbers){
        const remainder = targetSum - num;
        const remainderResult = howSum(remainder, numbers, memo);
        if(remainderResult !== null) {
            memo[targetSum] = [...remainderResult, num];
            return memo[targetSum]
        }
    }

    memo[targetSum] = null;
    return null;
}


console.log(howSum(7, [2, 3])); // [3,2,2]
console.log(howSum(7, [5, 3, 4, 7])); // [4,3]
console.log(howSum(7, [4, 2])); // null
console.log(howSum(8, [2, 3, 5])); // [2,2,2,2]
console.log(howSum(300, [7, 14])); //null