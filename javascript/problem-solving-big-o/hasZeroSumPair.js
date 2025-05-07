// O(N²) — Quadratic time
// hasZeroSumPair.js
function hasZeroSumPair(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return true;
      }
    }
  }
  return false;
}

// Usage:
console.log(hasZeroSumPair([3, 1, -1, 4])); // true (1 + -1)
