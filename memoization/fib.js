// write a function that takes in a number as arg.
// The function should return the n-th number of fibonacci sequence

const fib = (n, memo = {}) => {
  if (n in memo) return memo[n];
  if (n <= 2) return 1;
  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
};

console.log(fib(50)); // 12586269025
