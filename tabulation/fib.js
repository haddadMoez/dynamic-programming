// write a function that takes in a number as arg.
// The function should return the n-th number of fibonacci sequence

const fib = (n) => {
  const arr = Array(n + 1).fill(0);
  arr[0] = 0;
  arr[1] = 1;

  for (let i = 2; i < arr.length; i++) arr[i] = arr[i - 2] + arr[i - 1];

  return arr[n];
};

console.log(fib(6)); // 8 
console.log(fib(7)); // 13
console.log(fib(8)); // 21
console.log(fib(50)); // 12586269025
