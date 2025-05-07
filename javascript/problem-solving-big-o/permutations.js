// O(N!) — Factorial time
// permutations.js
function perms(arr) {
  if (arr.length === 0) return [[]];
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const [first] = arr.splice(i, 1);
    for (const restPerm of perms(arr)) {
      result.push([first, ...restPerm]);
    }
    arr.splice(i, 0, first);
  }
  return result;
}

// Usage:
console.log(perms([1,2,3]));
/*
[
  [1,2,3],[1,3,2],
  [2,1,3],[2,3,1],
  [3,1,2],[3,2,1]
]
*/
