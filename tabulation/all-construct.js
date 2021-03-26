// Write a function `allConstruct(target, wordBank)` that takes in a
// target and array of strings.
// The function should return a 2D array containing all the ways that
// the `target` can be constructed by concatenating elements of
// the `worldBank` array
// You may reuse elements of wordBank as many times as needed.

const allConstruct = (target, wordBank) => {
  const table = Array(target.length + 1)
    .fill()
    .map(() => []);

  table[0] = [[]];
  for (let i = 0; i <= target.length; i++) {
    if (table[i].length > 0) {
      for (let word of wordBank) {
        if (target.slice(i, i + word.length) === word) {
          const combination = table[i].map((subArray) => [...subArray, word]);
          table[i + word.length].push(...combination);
        }
      }
    }
  }

  return table[target.length];
};

console.log(allConstruct("purple", ["purp", "p", "ur", "le", "purpl"]));
[ [ 'purp', 'le' ], [ 'p', 'ur', 'p', 'le' ] ]

console.log(
  allConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd", "ef", "c"])
);
// [
//   ["ab", "cd", "ef"],
//   ["ab", "c", "def"],
//   ["abc", "def"],
//   ["abcd", "ef"],
// ];

console.log(
  allConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
);
// []


